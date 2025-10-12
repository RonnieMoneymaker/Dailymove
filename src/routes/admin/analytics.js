const express = require('express');
const router = express.Router();

// Analytics dashboard
router.get('/', (req, res) => {
    const db = req.app.locals.db;
    const period = req.query.period || '7days';

    try {
        let dateFilter = '';
        switch (period) {
            case '24h':
                dateFilter = "AND date(created_at) >= date('now', '-1 day')";
                break;
            case '7days':
                dateFilter = "AND date(created_at) >= date('now', '-7 days')";
                break;
            case '30days':
                dateFilter = "AND date(created_at) >= date('now', '-30 days')";
                break;
            case '90days':
                dateFilter = "AND date(created_at) >= date('now', '-90 days')";
                break;
            default:
                dateFilter = "AND date(created_at) >= date('now', '-7 days')";
        }

        // Page views
        const pageViews = db.prepare(`
            SELECT COUNT(*) as views
            FROM analytics 
            WHERE event_type = 'page_view' ${dateFilter}
        `).get().views;

        // Unique visitors (approximate based on IP)
        const uniqueVisitors = db.prepare(`
            SELECT COUNT(DISTINCT ip_address) as visitors
            FROM analytics 
            WHERE event_type = 'page_view' ${dateFilter}
        `).get().visitors;

        // Top pages
        const topPages = db.prepare(`
            SELECT 
                json_extract(event_data, '$.page') as page,
                COUNT(*) as views
            FROM analytics 
            WHERE event_type = 'page_view' ${dateFilter}
            GROUP BY json_extract(event_data, '$.page')
            ORDER BY views DESC
            LIMIT 10
        `).all();

        // Daily views for chart
        const dailyViews = db.prepare(`
            SELECT 
                date(created_at) as date,
                COUNT(*) as views
            FROM analytics 
            WHERE event_type = 'page_view' ${dateFilter}
            GROUP BY date(created_at)
            ORDER BY date(created_at)
        `).all();

        // Order analytics
        const orderStats = db.prepare(`
            SELECT 
                COUNT(*) as total_orders,
                COALESCE(SUM(total), 0) as total_revenue,
                COALESCE(AVG(total), 0) as avg_order_value
            FROM orders 
            WHERE 1=1 ${dateFilter.replace('analytics', 'orders')}
        `).get();

        // Top selling products
        const topProducts = db.prepare(`
            SELECT 
                p.name,
                SUM(oi.quantity) as total_sold,
                SUM(oi.total) as total_revenue
            FROM order_items oi
            JOIN products p ON oi.product_id = p.id
            JOIN orders o ON oi.order_id = o.id
            WHERE 1=1 ${dateFilter.replace('analytics', 'o')}
            GROUP BY p.id, p.name
            ORDER BY total_sold DESC
            LIMIT 10
        `).all();

        res.render('admin/analytics/index', {
            title: 'Analytics',
            user: { username: req.session.username },
            period,
            stats: {
                pageViews,
                uniqueVisitors,
                totalOrders: orderStats.total_orders,
                totalRevenue: parseFloat(orderStats.total_revenue).toFixed(2),
                avgOrderValue: parseFloat(orderStats.avg_order_value).toFixed(2)
            },
            topPages,
            dailyViews,
            topProducts
        });
    } catch (error) {
        console.error('Analytics error:', error);
        res.status(500).render('error', {
            title: 'Analytics Error',
            message: 'Er is een fout opgetreden bij het laden van de analytics'
        });
    }
});

module.exports = router;
