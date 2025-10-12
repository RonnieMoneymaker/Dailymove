const express = require('express');
const router = express.Router();

// Shop homepage
router.get('/', (req, res) => {
    const db = req.app.locals.db;

    try {
        // Get featured products
        const featuredProducts = db.prepare(`
            SELECT p.*, c.name as category_name,
                   (SELECT image_url FROM product_images WHERE product_id = p.id AND is_primary = 1 LIMIT 1) as primary_image
            FROM products p
            LEFT JOIN categories c ON p.category_id = c.id
            WHERE p.active = 1 AND p.featured = 1
            ORDER BY p.created_at DESC
            LIMIT 8
        `).all();

        // Get latest products
        const latestProducts = db.prepare(`
            SELECT p.*, c.name as category_name,
                   (SELECT image_url FROM product_images WHERE product_id = p.id AND is_primary = 1 LIMIT 1) as primary_image
            FROM products p
            LEFT JOIN categories c ON p.category_id = c.id
            WHERE p.active = 1
            ORDER BY p.created_at DESC
            LIMIT 8
        `).all();

        // Get categories
        const categories = db.prepare(`
            SELECT c.*, COUNT(p.id) as product_count
            FROM categories c
            LEFT JOIN products p ON c.id = p.category_id AND p.active = 1
            WHERE c.active = 1
            GROUP BY c.id
            ORDER BY c.sort_order, c.name
        `).all();

        // Get site settings
        const settings = db.prepare('SELECT key, value FROM settings').all();
        const siteSettings = settings.reduce((acc, setting) => {
            acc[setting.key] = setting.value;
            return acc;
        }, {});

        // Track page view
        trackAnalytics(req, 'page_view', { page: '/', title: 'Homepage' });

        res.render('shop/index', {
            title: siteSettings.site_name || 'Fiets Webshop',
            siteSettings,
            featuredProducts,
            latestProducts,
            categories
        });
    } catch (error) {
        console.error('Shop homepage error:', error);
        res.status(500).render('error', {
            title: 'Shop Error',
            message: 'Er is een fout opgetreden bij het laden van de webshop'
        });
    }
});

// Product catalog
router.get('/products', (req, res) => {
    const db = req.app.locals.db;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;
    const offset = (page - 1) * limit;
    const search = req.query.search || '';
    const category = req.query.category || '';
    const sort = req.query.sort || 'newest';

    try {
        let whereClause = 'WHERE p.active = 1';
        let params = [];
        let orderClause = 'ORDER BY p.created_at DESC';

        if (search) {
            whereClause += ' AND (p.name LIKE ? OR p.description LIKE ? OR p.short_description LIKE ?)';
            const searchParam = `%${search}%`;
            params.push(searchParam, searchParam, searchParam);
        }

        if (category) {
            whereClause += ' AND p.category_id = ?';
            params.push(category);
        }

        // Sort options
        switch (sort) {
            case 'price_low':
                orderClause = 'ORDER BY COALESCE(p.sale_price, p.price) ASC';
                break;
            case 'price_high':
                orderClause = 'ORDER BY COALESCE(p.sale_price, p.price) DESC';
                break;
            case 'name':
                orderClause = 'ORDER BY p.name ASC';
                break;
            case 'newest':
            default:
                orderClause = 'ORDER BY p.created_at DESC';
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
            ${orderClause}
            LIMIT ? OFFSET ?
        `;

        const totalCount = db.prepare(countQuery).get(...params).total;
        const products = db.prepare(productsQuery).all(...params, limit, offset);

        // Get categories for filter
        const categories = db.prepare(`
            SELECT c.*, COUNT(p.id) as product_count
            FROM categories c
            LEFT JOIN products p ON c.id = p.category_id AND p.active = 1
            WHERE c.active = 1
            GROUP BY c.id
            ORDER BY c.sort_order, c.name
        `).all();

        const totalPages = Math.ceil(totalCount / limit);

        // Get site settings
        const settings = db.prepare('SELECT key, value FROM settings').all();
        const siteSettings = settings.reduce((acc, setting) => {
            acc[setting.key] = setting.value;
            return acc;
        }, {});

        // Track page view
        trackAnalytics(req, 'page_view', { page: '/products', title: 'Producten' });

        res.render('shop/products', {
            title: 'Producten - ' + (siteSettings.site_name || 'Fiets Webshop'),
            siteSettings,
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
            filters: { search, category, sort }
        });
    } catch (error) {
        console.error('Product catalog error:', error);
        res.status(500).render('error', {
            title: 'Catalog Error',
            message: 'Er is een fout opgetreden bij het laden van de producten'
        });
    }
});

// Single product page
router.get('/product/:slug', (req, res) => {
    const db = req.app.locals.db;
    const slug = req.params.slug;

    try {
        const product = db.prepare(`
            SELECT p.*, c.name as category_name, c.slug as category_slug
            FROM products p
            LEFT JOIN categories c ON p.category_id = c.id
            WHERE p.slug = ? AND p.active = 1
        `).get(slug);

        if (!product) {
            return res.status(404).render('error', {
                title: 'Product niet gevonden',
                message: 'Het product dat je zoekt bestaat niet of is niet meer beschikbaar'
            });
        }

        // Get product images
        const images = db.prepare(`
            SELECT * FROM product_images 
            WHERE product_id = ? 
            ORDER BY sort_order, id
        `).all(product.id);

        // Get related products (same category)
        const relatedProducts = db.prepare(`
            SELECT p.*, 
                   (SELECT image_url FROM product_images WHERE product_id = p.id AND is_primary = 1 LIMIT 1) as primary_image
            FROM products p
            WHERE p.category_id = ? AND p.id != ? AND p.active = 1
            ORDER BY RANDOM()
            LIMIT 4
        `).all(product.category_id, product.id);

        // Get site settings
        const settings = db.prepare('SELECT key, value FROM settings').all();
        const siteSettings = settings.reduce((acc, setting) => {
            acc[setting.key] = setting.value;
            return acc;
        }, {});

        // Track page view
        trackAnalytics(req, 'page_view', { 
            page: `/product/${slug}`, 
            title: product.name,
            product_id: product.id
        });

        res.render('shop/product', {
            title: product.name + ' - ' + (siteSettings.site_name || 'Fiets Webshop'),
            siteSettings,
            product,
            images,
            relatedProducts
        });
    } catch (error) {
        console.error('Single product error:', error);
        res.status(500).render('error', {
            title: 'Product Error',
            message: 'Er is een fout opgetreden bij het laden van het product'
        });
    }
});

// Category page
router.get('/category/:slug', (req, res) => {
    const db = req.app.locals.db;
    const slug = req.params.slug;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;
    const offset = (page - 1) * limit;
    const sort = req.query.sort || 'newest';

    try {
        const category = db.prepare('SELECT * FROM categories WHERE slug = ? AND active = 1').get(slug);

        if (!category) {
            return res.status(404).render('error', {
                title: 'Categorie niet gevonden',
                message: 'De categorie die je zoekt bestaat niet'
            });
        }

        let orderClause = 'ORDER BY p.created_at DESC';

        // Sort options
        switch (sort) {
            case 'price_low':
                orderClause = 'ORDER BY COALESCE(p.sale_price, p.price) ASC';
                break;
            case 'price_high':
                orderClause = 'ORDER BY COALESCE(p.sale_price, p.price) DESC';
                break;
            case 'name':
                orderClause = 'ORDER BY p.name ASC';
                break;
            case 'newest':
            default:
                orderClause = 'ORDER BY p.created_at DESC';
        }

        const totalCount = db.prepare(`
            SELECT COUNT(*) as total 
            FROM products p 
            WHERE p.category_id = ? AND p.active = 1
        `).get(category.id).total;

        const products = db.prepare(`
            SELECT p.*,
                   (SELECT image_url FROM product_images WHERE product_id = p.id AND is_primary = 1 LIMIT 1) as primary_image
            FROM products p 
            WHERE p.category_id = ? AND p.active = 1
            ${orderClause}
            LIMIT ? OFFSET ?
        `).all(category.id, limit, offset);

        const totalPages = Math.ceil(totalCount / limit);

        // Get site settings
        const settings = db.prepare('SELECT key, value FROM settings').all();
        const siteSettings = settings.reduce((acc, setting) => {
            acc[setting.key] = setting.value;
            return acc;
        }, {});

        // Track page view
        trackAnalytics(req, 'page_view', { 
            page: `/category/${slug}`, 
            title: category.name,
            category_id: category.id
        });

        res.render('shop/category', {
            title: category.name + ' - ' + (siteSettings.site_name || 'Fiets Webshop'),
            siteSettings,
            category,
            products,
            pagination: {
                currentPage: page,
                totalPages,
                totalCount,
                hasNext: page < totalPages,
                hasPrev: page > 1,
                nextPage: page + 1,
                prevPage: page - 1
            },
            filters: { sort }
        });
    } catch (error) {
        console.error('Category page error:', error);
        res.status(500).render('error', {
            title: 'Category Error',
            message: 'Er is een fout opgetreden bij het laden van de categorie'
        });
    }
});

// Helper function to track analytics
function trackAnalytics(req, eventType, eventData) {
    const db = req.app.locals.db;
    const ip_address = req.ip || req.connection.remoteAddress;
    const user_agent = req.get('User-Agent');

    try {
        db.prepare(`
            INSERT INTO analytics (event_type, event_data, ip_address, user_agent, created_at)
            VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP)
        `).run(eventType, JSON.stringify(eventData), ip_address, user_agent);
    } catch (error) {
        console.error('Analytics tracking error:', error);
        // Don't throw error, just log it
    }
}

module.exports = router;
