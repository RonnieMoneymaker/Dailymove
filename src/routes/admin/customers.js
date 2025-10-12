const express = require('express');
const router = express.Router();

// Customers list
router.get('/', (req, res) => {
    const db = req.app.locals.db;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const offset = (page - 1) * limit;
    const search = req.query.search || '';

    try {
        let whereClause = 'WHERE 1=1';
        let params = [];

        if (search) {
            whereClause += ' AND (c.first_name LIKE ? OR c.last_name LIKE ? OR c.email LIKE ?)';
            const searchParam = `%${search}%`;
            params.push(searchParam, searchParam, searchParam);
        }

        const countQuery = `SELECT COUNT(*) as total FROM customers c ${whereClause}`;

        const customersQuery = `
            SELECT c.*,
                   COUNT(o.id) as order_count,
                   COALESCE(SUM(o.total), 0) as total_spent,
                   MAX(o.created_at) as last_order_date
            FROM customers c
            LEFT JOIN orders o ON c.id = o.customer_id
            ${whereClause}
            GROUP BY c.id
            ORDER BY c.created_at DESC
            LIMIT ? OFFSET ?
        `;

        const totalCount = db.prepare(countQuery).get(...params).total;
        const customers = db.prepare(customersQuery).all(...params, limit, offset);

        const totalPages = Math.ceil(totalCount / limit);

        res.render('admin/customers/index', {
            title: 'Klantenbeheer',
            user: { username: req.session.username },
            customers,
            pagination: {
                currentPage: page,
                totalPages,
                totalCount,
                hasNext: page < totalPages,
                hasPrev: page > 1,
                nextPage: page + 1,
                prevPage: page - 1
            },
            filters: { search }
        });
    } catch (error) {
        console.error('Customers list error:', error);
        res.status(500).render('error', {
            title: 'Customers Error',
            message: 'Er is een fout opgetreden bij het laden van de klanten'
        });
    }
});

// New customer form
router.get('/new', (req, res) => {
    res.render('admin/customers/form', {
        title: 'Nieuwe Klant',
        user: { username: req.session.username },
        customer: null,
        action: 'create'
    });
});

// Create customer
router.post('/', (req, res) => {
    const db = req.app.locals.db;
    const { first_name, last_name, email, phone, date_of_birth } = req.body;

    try {
        // Check if email already exists
        const existingCustomer = db.prepare('SELECT id FROM customers WHERE email = ?').get(email);
        if (existingCustomer) {
            return res.redirect('/admin/customers/new?error=Email adres bestaat al');
        }

        const insertCustomer = db.prepare(`
            INSERT INTO customers (first_name, last_name, email, phone, date_of_birth, created_at, updated_at)
            VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
        `);

        const result = insertCustomer.run(first_name, last_name, email, phone, date_of_birth || null);

        res.redirect(`/admin/customers/${result.lastInsertRowid}?success=Klant succesvol aangemaakt`);
    } catch (error) {
        console.error('Create customer error:', error);
        res.redirect('/admin/customers/new?error=Er is een fout opgetreden bij het aanmaken van de klant');
    }
});

// View/Edit customer
router.get('/:id', (req, res) => {
    const db = req.app.locals.db;
    const customerId = req.params.id;

    try {
        const customer = db.prepare('SELECT * FROM customers WHERE id = ?').get(customerId);

        if (!customer) {
            return res.redirect('/admin/customers?error=Klant niet gevonden');
        }

        // Get customer orders
        const orders = db.prepare(`
            SELECT * FROM orders 
            WHERE customer_id = ? 
            ORDER BY created_at DESC 
            LIMIT 10
        `).all(customerId);

        // Get customer addresses
        const addresses = db.prepare(`
            SELECT * FROM customer_addresses 
            WHERE customer_id = ? 
            ORDER BY is_default DESC, created_at DESC
        `).all(customerId);

        res.render('admin/customers/form', {
            title: `Klant: ${customer.first_name} ${customer.last_name}`,
            user: { username: req.session.username },
            customer,
            orders,
            addresses,
            action: 'edit',
            success: req.query.success,
            error: req.query.error
        });
    } catch (error) {
        console.error('View customer error:', error);
        res.redirect('/admin/customers?error=Er is een fout opgetreden');
    }
});

// Update customer
router.put('/:id', (req, res) => {
    const db = req.app.locals.db;
    const customerId = req.params.id;
    const { first_name, last_name, email, phone, date_of_birth } = req.body;

    try {
        const existingCustomer = db.prepare('SELECT * FROM customers WHERE id = ?').get(customerId);
        if (!existingCustomer) {
            return res.redirect('/admin/customers?error=Klant niet gevonden');
        }

        // Check if email already exists (excluding current customer)
        const emailExists = db.prepare('SELECT id FROM customers WHERE email = ? AND id != ?').get(email, customerId);
        if (emailExists) {
            return res.redirect(`/admin/customers/${customerId}?error=Email adres bestaat al`);
        }

        const updateCustomer = db.prepare(`
            UPDATE customers SET
                first_name = ?, last_name = ?, email = ?, phone = ?, date_of_birth = ?,
                updated_at = CURRENT_TIMESTAMP
            WHERE id = ?
        `);

        updateCustomer.run(first_name, last_name, email, phone, date_of_birth || null, customerId);

        res.redirect(`/admin/customers/${customerId}?success=Klant succesvol bijgewerkt`);
    } catch (error) {
        console.error('Update customer error:', error);
        res.redirect(`/admin/customers/${customerId}?error=Er is een fout opgetreden bij het bijwerken van de klant`);
    }
});

// Delete customer
router.delete('/:id', (req, res) => {
    const db = req.app.locals.db;
    const customerId = req.params.id;

    try {
        const customer = db.prepare('SELECT * FROM customers WHERE id = ?').get(customerId);
        if (!customer) {
            return res.status(404).json({ error: 'Klant niet gevonden' });
        }

        // Check if customer has orders
        const orders = db.prepare('SELECT COUNT(*) as count FROM orders WHERE customer_id = ?').get(customerId);
        if (orders.count > 0) {
            return res.status(400).json({ 
                error: 'Klant kan niet worden verwijderd omdat er bestellingen aan gekoppeld zijn' 
            });
        }

        // Delete customer addresses first
        db.prepare('DELETE FROM customer_addresses WHERE customer_id = ?').run(customerId);
        
        // Delete customer
        db.prepare('DELETE FROM customers WHERE id = ?').run(customerId);

        res.json({ success: 'Klant succesvol verwijderd' });
    } catch (error) {
        console.error('Delete customer error:', error);
        res.status(500).json({ error: 'Er is een fout opgetreden bij het verwijderen van de klant' });
    }
});

module.exports = router;
