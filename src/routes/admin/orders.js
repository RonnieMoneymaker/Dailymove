const express = require('express');
const router = express.Router();

// Orders list
router.get('/', (req, res) => {
    const db = req.app.locals.db;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const offset = (page - 1) * limit;
    const search = req.query.search || '';
    const status = req.query.status || '';

    try {
        let whereClause = 'WHERE 1=1';
        let params = [];

        if (search) {
            whereClause += ' AND (o.order_number LIKE ? OR c.first_name LIKE ? OR c.last_name LIKE ? OR c.email LIKE ?)';
            const searchParam = `%${search}%`;
            params.push(searchParam, searchParam, searchParam, searchParam);
        }

        if (status) {
            whereClause += ' AND o.status = ?';
            params.push(status);
        }

        const countQuery = `
            SELECT COUNT(*) as total 
            FROM orders o 
            LEFT JOIN customers c ON o.customer_id = c.id 
            ${whereClause}
        `;

        const ordersQuery = `
            SELECT o.*, c.first_name, c.last_name, c.email,
                   (SELECT COUNT(*) FROM order_items WHERE order_id = o.id) as item_count
            FROM orders o 
            LEFT JOIN customers c ON o.customer_id = c.id 
            ${whereClause}
            ORDER BY o.created_at DESC
            LIMIT ? OFFSET ?
        `;

        const totalCount = db.prepare(countQuery).get(...params).total;
        const orders = db.prepare(ordersQuery).all(...params, limit, offset);

        const totalPages = Math.ceil(totalCount / limit);

        res.render('admin/orders/index', {
            title: 'Bestellingbeheer',
            user: { username: req.session.username },
            orders,
            pagination: {
                currentPage: page,
                totalPages,
                totalCount,
                hasNext: page < totalPages,
                hasPrev: page > 1,
                nextPage: page + 1,
                prevPage: page - 1
            },
            filters: { search, status }
        });
    } catch (error) {
        console.error('Orders list error:', error);
        res.status(500).render('error', {
            title: 'Orders Error',
            message: 'Er is een fout opgetreden bij het laden van de bestellingen'
        });
    }
});

// View order details
router.get('/:id', (req, res) => {
    const db = req.app.locals.db;
    const orderId = req.params.id;

    try {
        const order = db.prepare(`
            SELECT o.*, c.first_name, c.last_name, c.email, c.phone
            FROM orders o 
            LEFT JOIN customers c ON o.customer_id = c.id 
            WHERE o.id = ?
        `).get(orderId);

        if (!order) {
            return res.redirect('/admin/orders?error=Bestelling niet gevonden');
        }

        const orderItems = db.prepare(`
            SELECT oi.*, p.name as product_name, p.slug as product_slug
            FROM order_items oi
            LEFT JOIN products p ON oi.product_id = p.id
            WHERE oi.order_id = ?
            ORDER BY oi.id
        `).all(orderId);

        res.render('admin/orders/detail', {
            title: `Bestelling #${order.order_number}`,
            user: { username: req.session.username },
            order,
            orderItems,
            success: req.query.success,
            error: req.query.error
        });
    } catch (error) {
        console.error('View order error:', error);
        res.redirect('/admin/orders?error=Er is een fout opgetreden');
    }
});

// Update order status
router.put('/:id/status', (req, res) => {
    const db = req.app.locals.db;
    const orderId = req.params.id;
    const { status } = req.body;

    const validStatuses = ['pending', 'processing', 'shipped', 'delivered', 'cancelled'];
    
    if (!validStatuses.includes(status)) {
        return res.status(400).json({ error: 'Ongeldige status' });
    }

    try {
        const order = db.prepare('SELECT * FROM orders WHERE id = ?').get(orderId);
        if (!order) {
            return res.status(404).json({ error: 'Bestelling niet gevonden' });
        }

        db.prepare('UPDATE orders SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?')
          .run(status, orderId);

        res.json({ success: 'Status succesvol bijgewerkt' });
    } catch (error) {
        console.error('Update order status error:', error);
        res.status(500).json({ error: 'Er is een fout opgetreden bij het bijwerken van de status' });
    }
});

// Add order notes
router.post('/:id/notes', (req, res) => {
    const db = req.app.locals.db;
    const orderId = req.params.id;
    const { notes } = req.body;

    try {
        const order = db.prepare('SELECT * FROM orders WHERE id = ?').get(orderId);
        if (!order) {
            return res.status(404).json({ error: 'Bestelling niet gevonden' });
        }

        db.prepare('UPDATE orders SET notes = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?')
          .run(notes, orderId);

        res.json({ success: 'Notities succesvol opgeslagen' });
    } catch (error) {
        console.error('Add order notes error:', error);
        res.status(500).json({ error: 'Er is een fout opgetreden bij het opslaan van de notities' });
    }
});

module.exports = router;
