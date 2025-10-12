const express = require('express');
const router = express.Router();

// Dashboard
router.get('/', (req, res) => {
    const db = req.app.locals.db;
    
    try {
        // Get dashboard statistics
        const totalProducts = db.prepare('SELECT COUNT(*) as count FROM products').get().count;
        const totalOrders = db.prepare('SELECT COUNT(*) as count FROM orders').get().count;
        const totalCustomers = db.prepare('SELECT COUNT(*) as count FROM customers').get().count;
        const totalRevenue = db.prepare('SELECT COALESCE(SUM(total), 0) as revenue FROM orders').get().revenue;
        
        // Recent orders
        const recentOrders = db.prepare(`
            SELECT o.*, c.first_name, c.last_name 
            FROM orders o 
            LEFT JOIN customers c ON o.customer_id = c.id 
            ORDER BY o.created_at DESC 
            LIMIT 5
        `).all();
        
        // Low stock products
        const lowStockProducts = db.prepare(`
            SELECT * FROM products 
            WHERE manage_stock = 1 AND stock_quantity <= 5 AND active = 1
            ORDER BY stock_quantity ASC
            LIMIT 5
        `).all();
        
        // Recent analytics events
        const recentVisits = db.prepare(`
            SELECT COUNT(*) as visits 
            FROM analytics 
            WHERE event_type = 'page_view' 
            AND date(created_at) = date('now')
        `).get().visits;
        
        res.render('admin/dashboard', {
            title: 'Dashboard',
            user: { username: req.session.username },
            stats: {
                totalProducts,
                totalOrders,
                totalCustomers,
                totalRevenue: parseFloat(totalRevenue).toFixed(2),
                recentVisits
            },
            recentOrders,
            lowStockProducts
        });
    } catch (error) {
        console.error('Dashboard error:', error);
        res.status(500).render('error', {
            title: 'Dashboard Error',
            message: 'Er is een fout opgetreden bij het laden van het dashboard'
        });
    }
});

// Products routes
router.use('/products', require('./admin/products'));
router.use('/orders', require('./admin/orders'));
router.use('/customers', require('./admin/customers'));
router.use('/pages', require('./admin/pages'));
router.use('/settings', require('./admin/settings'));
router.use('/analytics', require('./admin/analytics'));

module.exports = router;
