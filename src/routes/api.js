const express = require('express');
const router = express.Router();

// Live stats endpoint
router.get('/stats/live', (req, res) => {
    const db = req.app.locals.db;
    
    try {
        // Get live statistics
        const totalProducts = db.prepare('SELECT COUNT(*) as count FROM products WHERE active = 1').get().count;
        const totalOrders = db.prepare('SELECT COUNT(*) as count FROM orders').get().count;
        const totalCustomers = db.prepare('SELECT COUNT(*) as count FROM customers').get().count;
        const pendingOrders = db.prepare('SELECT COUNT(*) as count FROM orders').get().count;
        
        // Simulate live visitors (in real app, this would come from analytics service)
        const liveVisitors = Math.floor(Math.random() * 10) + 1;
        
        // Get recent notifications
        const notifications = [];
        
        // Check for low stock products
        const lowStockProducts = db.prepare(`
            SELECT COUNT(*) as count 
            FROM products 
            WHERE manage_stock = 1 AND stock_quantity <= 5 AND active = 1
        `).get().count;
        
        if (lowStockProducts > 0) {
            notifications.push({
                icon: 'exclamation-triangle',
                type: 'warning',
                title: 'Lage voorraad',
                message: `${lowStockProducts} product(en) hebben lage voorraad`,
                created_at: new Date().toISOString()
            });
        }
        
        // Check for new orders today
        const todayOrders = db.prepare(`
            SELECT COUNT(*) as count 
            FROM orders 
            WHERE date(created_at) = date('now')
        `).get().count;
        
        if (todayOrders > 0) {
            notifications.push({
                icon: 'cart-check',
                type: 'success',
                title: 'Nieuwe bestellingen',
                message: `${todayOrders} nieuwe bestelling(en) vandaag`,
                created_at: new Date().toISOString()
            });
        }
        
        res.json({
            totalProducts,
            totalOrders,
            totalCustomers,
            pendingOrders,
            liveVisitors,
            notifications
        });
    } catch (error) {
        console.error('Live stats error:', error);
        res.status(500).json({ error: 'Er is een fout opgetreden bij het ophalen van statistieken' });
    }
});

// Product search endpoint
router.get('/products/search', (req, res) => {
    const db = req.app.locals.db;
    const query = req.query.q || '';
    const limit = parseInt(req.query.limit) || 10;
    
    try {
        if (!query) {
            return res.json([]);
        }
        
        const products = db.prepare(`
            SELECT id, name, sku, price, stock_quantity
            FROM products 
            WHERE (name LIKE ? OR sku LIKE ?) AND active = 1
            ORDER BY name
            LIMIT ?
        `).all(`%${query}%`, `%${query}%`, limit);
        
        res.json(products);
    } catch (error) {
        console.error('Product search error:', error);
        res.status(500).json({ error: 'Er is een fout opgetreden bij het zoeken' });
    }
});

// Customer search endpoint
router.get('/customers/search', (req, res) => {
    const db = req.app.locals.db;
    const query = req.query.q || '';
    const limit = parseInt(req.query.limit) || 10;
    
    try {
        if (!query) {
            return res.json([]);
        }
        
        const customers = db.prepare(`
            SELECT id, first_name, last_name, email
            FROM customers 
            WHERE (first_name LIKE ? OR last_name LIKE ? OR email LIKE ?)
            ORDER BY first_name, last_name
            LIMIT ?
        `).all(`%${query}%`, `%${query}%`, `%${query}%`, limit);
        
        res.json(customers);
    } catch (error) {
        console.error('Customer search error:', error);
        res.status(500).json({ error: 'Er is een fout opgetreden bij het zoeken' });
    }
});

// Analytics tracking endpoint
router.post('/analytics/track', (req, res) => {
    const db = req.app.locals.db;
    const { event_type, event_data } = req.body;
    const ip_address = req.ip || req.connection.remoteAddress;
    const user_agent = req.get('User-Agent');
    
    try {
        db.prepare(`
            INSERT INTO analytics (event_type, event_data, ip_address, user_agent, created_at)
            VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP)
        `).run(event_type, JSON.stringify(event_data), ip_address, user_agent);
        
        res.json({ success: true });
    } catch (error) {
        console.error('Analytics tracking error:', error);
        res.status(500).json({ error: 'Er is een fout opgetreden bij het tracken' });
    }
});

module.exports = router;
