const express = require('express');
const router = express.Router();

// Products list
router.get('/', (req, res) => {
    const db = req.app.locals.db;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const offset = (page - 1) * limit;
    const search = req.query.search || '';
    const category = req.query.category || '';
    const status = req.query.status || '';
    const filter = req.query.filter || '';

    try {
        let whereClause = 'WHERE 1=1';
        let params = [];

        if (search) {
            whereClause += ' AND (p.name LIKE ? OR p.sku LIKE ? OR p.description LIKE ?)';
            const searchParam = `%${search}%`;
            params.push(searchParam, searchParam, searchParam);
        }

        if (category) {
            whereClause += ' AND p.category_id = ?';
            params.push(category);
        }

        if (status) {
            whereClause += ' AND p.active = ?';
            params.push(status === 'active' ? 1 : 0);
        }

        if (filter === 'low_stock') {
            whereClause += ' AND p.manage_stock = 1 AND p.stock_quantity <= 5';
        } else if (filter === 'out_of_stock') {
            whereClause += ' AND p.manage_stock = 1 AND p.stock_quantity = 0';
        }

        const countQuery = `
            SELECT COUNT(*) as total 
            FROM products p 
            LEFT JOIN categories c ON p.category_id = c.id 
            ${whereClause}
        `;

        const productsQuery = `
            SELECT p.*, c.name as category_name,
                   (SELECT image_url FROM product_images WHERE product_id = p.id AND is_primary = 1 LIMIT 1) as primary_image
            FROM products p 
            LEFT JOIN categories c ON p.category_id = c.id 
            ${whereClause}
            ORDER BY p.created_at DESC
            LIMIT ? OFFSET ?
        `;

        const totalCount = db.prepare(countQuery).get(...params).total;
        const products = db.prepare(productsQuery).all(...params, limit, offset);

        // Get categories for filter
        const categories = db.prepare('SELECT * FROM categories WHERE active = 1 ORDER BY name').all();

        const totalPages = Math.ceil(totalCount / limit);

        res.render('admin/products/index', {
            title: 'Productbeheer',
            user: { username: req.session.username },
            products,
            categories,
            pagination: {
                currentPage: page,
                totalPages,
                totalCount,
                hasNext: page < totalPages,
                hasPrev: page > 1,
                nextPage: page + 1,
                prevPage: page - 1
            },
            filters: { search, category, status, filter }
        });
    } catch (error) {
        console.error('Products list error:', error);
        res.status(500).render('error', {
            title: 'Products Error',
            message: 'Er is een fout opgetreden bij het laden van de producten'
        });
    }
});

// New product form
router.get('/new', (req, res) => {
    const db = req.app.locals.db;
    
    try {
        const categories = db.prepare('SELECT * FROM categories WHERE active = 1 ORDER BY name').all();
        
        res.render('admin/products/form', {
            title: 'Nieuw Product',
            user: { username: req.session.username },
            product: null,
            categories,
            action: 'create'
        });
    } catch (error) {
        console.error('New product form error:', error);
        res.redirect('/admin/products?error=Er is een fout opgetreden');
    }
});

// Create product
router.post('/', async (req, res) => {
    const db = req.app.locals.db;
    const {
        name, slug, description, short_description, sku, price, sale_price,
        stock_quantity, manage_stock, stock_status, category_id, brand, model,
        weight, dimensions, featured, active, meta_title, meta_description
    } = req.body;

    try {
        // Generate slug if not provided
        const productSlug = slug || name.toLowerCase()
            .replace(/[^\w ]+/g, '')
            .replace(/ +/g, '-');

        // Check if SKU already exists
        const existingSku = db.prepare('SELECT id FROM products WHERE sku = ?').get(sku);
        if (existingSku) {
            return res.redirect('/admin/products/new?error=SKU bestaat al');
        }

        // Check if slug already exists
        const existingSlug = db.prepare('SELECT id FROM products WHERE slug = ?').get(productSlug);
        if (existingSlug) {
            return res.redirect('/admin/products/new?error=URL slug bestaat al');
        }

        const insertProduct = db.prepare(`
            INSERT INTO products (
                name, slug, description, short_description, sku, price, sale_price,
                stock_quantity, manage_stock, stock_status, category_id, brand, model,
                weight, dimensions, featured, active, meta_title, meta_description,
                created_at, updated_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
        `);

        const result = insertProduct.run(
            name, productSlug, description, short_description, sku,
            parseFloat(price), sale_price ? parseFloat(sale_price) : null,
            parseInt(stock_quantity) || 0, manage_stock ? 1 : 0, stock_status,
            category_id || null, brand, model, weight ? parseFloat(weight) : null,
            dimensions, featured ? 1 : 0, active ? 1 : 0, meta_title, meta_description
        );

        res.redirect(`/admin/products/${result.lastInsertRowid}?success=Product succesvol aangemaakt`);
    } catch (error) {
        console.error('Create product error:', error);
        res.redirect('/admin/products/new?error=Er is een fout opgetreden bij het aanmaken van het product');
    }
});

// View/Edit product
router.get('/:id', (req, res) => {
    const db = req.app.locals.db;
    const productId = req.params.id;

    try {
        const product = db.prepare(`
            SELECT p.*, c.name as category_name
            FROM products p 
            LEFT JOIN categories c ON p.category_id = c.id 
            WHERE p.id = ?
        `).get(productId);

        if (!product) {
            return res.redirect('/admin/products?error=Product niet gevonden');
        }

        const categories = db.prepare('SELECT * FROM categories WHERE active = 1 ORDER BY name').all();
        const images = db.prepare('SELECT * FROM product_images WHERE product_id = ? ORDER BY sort_order, id').all(productId);

        res.render('admin/products/form', {
            title: `Product: ${product.name}`,
            user: { username: req.session.username },
            product,
            categories,
            images,
            action: 'edit',
            success: req.query.success,
            error: req.query.error
        });
    } catch (error) {
        console.error('View product error:', error);
        res.redirect('/admin/products?error=Er is een fout opgetreden');
    }
});

// Update product
router.put('/:id', async (req, res) => {
    const db = req.app.locals.db;
    const productId = req.params.id;
    const {
        name, slug, description, short_description, sku, price, sale_price,
        stock_quantity, manage_stock, stock_status, category_id, brand, model,
        weight, dimensions, featured, active, meta_title, meta_description
    } = req.body;

    try {
        const existingProduct = db.prepare('SELECT * FROM products WHERE id = ?').get(productId);
        if (!existingProduct) {
            return res.redirect('/admin/products?error=Product niet gevonden');
        }

        // Generate slug if not provided
        const productSlug = slug || name.toLowerCase()
            .replace(/[^\w ]+/g, '')
            .replace(/ +/g, '-');

        // Check if SKU already exists (excluding current product)
        const existingSku = db.prepare('SELECT id FROM products WHERE sku = ? AND id != ?').get(sku, productId);
        if (existingSku) {
            return res.redirect(`/admin/products/${productId}?error=SKU bestaat al`);
        }

        // Check if slug already exists (excluding current product)
        const existingSlug = db.prepare('SELECT id FROM products WHERE slug = ? AND id != ?').get(productSlug, productId);
        if (existingSlug) {
            return res.redirect(`/admin/products/${productId}?error=URL slug bestaat al`);
        }

        const updateProduct = db.prepare(`
            UPDATE products SET
                name = ?, slug = ?, description = ?, short_description = ?, sku = ?,
                price = ?, sale_price = ?, stock_quantity = ?, manage_stock = ?,
                stock_status = ?, category_id = ?, brand = ?, model = ?, weight = ?,
                dimensions = ?, featured = ?, active = ?, meta_title = ?, meta_description = ?,
                updated_at = CURRENT_TIMESTAMP
            WHERE id = ?
        `);

        updateProduct.run(
            name, productSlug, description, short_description, sku,
            parseFloat(price), sale_price ? parseFloat(sale_price) : null,
            parseInt(stock_quantity) || 0, manage_stock ? 1 : 0, stock_status,
            category_id || null, brand, model, weight ? parseFloat(weight) : null,
            dimensions, featured ? 1 : 0, active ? 1 : 0, meta_title, meta_description,
            productId
        );

        res.redirect(`/admin/products/${productId}?success=Product succesvol bijgewerkt`);
    } catch (error) {
        console.error('Update product error:', error);
        res.redirect(`/admin/products/${productId}?error=Er is een fout opgetreden bij het bijwerken van het product`);
    }
});

// Delete product
router.delete('/:id', (req, res) => {
    const db = req.app.locals.db;
    const productId = req.params.id;

    try {
        const product = db.prepare('SELECT * FROM products WHERE id = ?').get(productId);
        if (!product) {
            return res.status(404).json({ error: 'Product niet gevonden' });
        }

        // Check if product is used in any orders
        const orderItems = db.prepare('SELECT COUNT(*) as count FROM order_items WHERE product_id = ?').get(productId);
        if (orderItems.count > 0) {
            return res.status(400).json({ 
                error: 'Product kan niet worden verwijderd omdat het gebruikt wordt in bestellingen' 
            });
        }

        // Delete product images first
        db.prepare('DELETE FROM product_images WHERE product_id = ?').run(productId);
        
        // Delete product
        db.prepare('DELETE FROM products WHERE id = ?').run(productId);

        res.json({ success: 'Product succesvol verwijderd' });
    } catch (error) {
        console.error('Delete product error:', error);
        res.status(500).json({ error: 'Er is een fout opgetreden bij het verwijderen van het product' });
    }
});

// Bulk actions
router.post('/bulk-action', (req, res) => {
    const db = req.app.locals.db;
    const { action, productIds } = req.body;

    if (!productIds || !Array.isArray(productIds) || productIds.length === 0) {
        return res.status(400).json({ error: 'Geen producten geselecteerd' });
    }

    try {
        const placeholders = productIds.map(() => '?').join(',');
        
        switch (action) {
            case 'activate':
                db.prepare(`UPDATE products SET active = 1, updated_at = CURRENT_TIMESTAMP WHERE id IN (${placeholders})`)
                  .run(...productIds);
                res.json({ success: `${productIds.length} producten geactiveerd` });
                break;
                
            case 'deactivate':
                db.prepare(`UPDATE products SET active = 0, updated_at = CURRENT_TIMESTAMP WHERE id IN (${placeholders})`)
                  .run(...productIds);
                res.json({ success: `${productIds.length} producten gedeactiveerd` });
                break;
                
            case 'delete':
                // Check if any products are used in orders
                const orderItemsCount = db.prepare(`
                    SELECT COUNT(*) as count 
                    FROM order_items 
                    WHERE product_id IN (${placeholders})
                `).get(...productIds);
                
                if (orderItemsCount.count > 0) {
                    return res.status(400).json({ 
                        error: 'Sommige producten kunnen niet worden verwijderd omdat ze gebruikt worden in bestellingen' 
                    });
                }
                
                // Delete images first
                db.prepare(`DELETE FROM product_images WHERE product_id IN (${placeholders})`)
                  .run(...productIds);
                
                // Delete products
                db.prepare(`DELETE FROM products WHERE id IN (${placeholders})`)
                  .run(...productIds);
                
                res.json({ success: `${productIds.length} producten verwijderd` });
                break;
                
            default:
                res.status(400).json({ error: 'Onbekende actie' });
        }
    } catch (error) {
        console.error('Bulk action error:', error);
        res.status(500).json({ error: 'Er is een fout opgetreden bij de bulk actie' });
    }
});

module.exports = router;
