const bcrypt = require('bcryptjs');

module.exports = function initDatabase(db) {
    // Enable foreign keys
    db.pragma('foreign_keys = ON');

    // Users table
    db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            role TEXT DEFAULT 'admin',
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

    // Categories table
    db.exec(`
        CREATE TABLE IF NOT EXISTS categories (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            slug TEXT UNIQUE NOT NULL,
            description TEXT,
            parent_id INTEGER,
            sort_order INTEGER DEFAULT 0,
            active BOOLEAN DEFAULT 1,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (parent_id) REFERENCES categories(id)
        )
    `);

    // Products table
    db.exec(`
        CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            slug TEXT UNIQUE NOT NULL,
            description TEXT,
            short_description TEXT,
            sku TEXT UNIQUE NOT NULL,
            price DECIMAL(10,2) NOT NULL,
            sale_price DECIMAL(10,2),
            stock_quantity INTEGER DEFAULT 0,
            manage_stock BOOLEAN DEFAULT 1,
            stock_status TEXT DEFAULT 'instock',
            category_id INTEGER,
            brand TEXT,
            model TEXT,
            weight DECIMAL(8,2),
            dimensions TEXT,
            featured BOOLEAN DEFAULT 0,
            active BOOLEAN DEFAULT 1,
            meta_title TEXT,
            meta_description TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (category_id) REFERENCES categories(id)
        )
    `);

    // Product images table
    db.exec(`
        CREATE TABLE IF NOT EXISTS product_images (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            product_id INTEGER NOT NULL,
            image_url TEXT NOT NULL,
            alt_text TEXT,
            sort_order INTEGER DEFAULT 0,
            is_primary BOOLEAN DEFAULT 0,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
        )
    `);

    // Customers table
    db.exec(`
        CREATE TABLE IF NOT EXISTS customers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            first_name TEXT NOT NULL,
            last_name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            phone TEXT,
            date_of_birth DATE,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

    // Customer addresses table
    db.exec(`
        CREATE TABLE IF NOT EXISTS customer_addresses (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            customer_id INTEGER NOT NULL,
            type TEXT NOT NULL, -- 'billing' or 'shipping'
            first_name TEXT NOT NULL,
            last_name TEXT NOT NULL,
            company TEXT,
            address_1 TEXT NOT NULL,
            address_2 TEXT,
            city TEXT NOT NULL,
            state TEXT,
            postcode TEXT NOT NULL,
            country TEXT NOT NULL DEFAULT 'NL',
            is_default BOOLEAN DEFAULT 0,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE
        )
    `);

    // Orders table
    db.exec(`
        CREATE TABLE IF NOT EXISTS orders (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            order_number TEXT UNIQUE NOT NULL,
            customer_id INTEGER,
            status TEXT DEFAULT 'pending',
            total DECIMAL(10,2) NOT NULL,
            subtotal DECIMAL(10,2) NOT NULL,
            tax_total DECIMAL(10,2) DEFAULT 0,
            shipping_total DECIMAL(10,2) DEFAULT 0,
            discount_total DECIMAL(10,2) DEFAULT 0,
            payment_method TEXT,
            payment_status TEXT DEFAULT 'pending',
            billing_address TEXT,
            shipping_address TEXT,
            notes TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (customer_id) REFERENCES customers(id)
        )
    `);

    // Order items table
    db.exec(`
        CREATE TABLE IF NOT EXISTS order_items (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            order_id INTEGER NOT NULL,
            product_id INTEGER NOT NULL,
            product_name TEXT NOT NULL,
            product_sku TEXT NOT NULL,
            quantity INTEGER NOT NULL,
            price DECIMAL(10,2) NOT NULL,
            total DECIMAL(10,2) NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
            FOREIGN KEY (product_id) REFERENCES products(id)
        )
    `);

    // Pages table for content management
    db.exec(`
        CREATE TABLE IF NOT EXISTS pages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            slug TEXT UNIQUE NOT NULL,
            content TEXT,
            excerpt TEXT,
            status TEXT DEFAULT 'published',
            template TEXT DEFAULT 'default',
            meta_title TEXT,
            meta_description TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

    // Settings table
    db.exec(`
        CREATE TABLE IF NOT EXISTS settings (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            key TEXT UNIQUE NOT NULL,
            value TEXT,
            type TEXT DEFAULT 'text',
            group_name TEXT DEFAULT 'general',
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

    // Analytics table
    db.exec(`
        CREATE TABLE IF NOT EXISTS analytics (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            event_type TEXT NOT NULL,
            event_data TEXT,
            ip_address TEXT,
            user_agent TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

    // Create default admin user if not exists
    const userExists = db.prepare('SELECT id FROM users WHERE username = ?').get('admin');
    if (!userExists) {
        const hashedPassword = bcrypt.hashSync('admin123', 10);
        db.prepare(`
            INSERT INTO users (username, email, password, role)
            VALUES (?, ?, ?, ?)
        `).run('admin', 'admin@example.com', hashedPassword, 'admin');
        
        console.log('✅ Default admin user created (admin/admin123)');
    }

    // Insert default categories
    const categoryExists = db.prepare('SELECT id FROM categories WHERE slug = ?').get('fietsen');
    if (!categoryExists) {
        const insertCategory = db.prepare(`
            INSERT INTO categories (name, slug, description, sort_order)
            VALUES (?, ?, ?, ?)
        `);
        
        insertCategory.run('Fietsen', 'fietsen', 'Alle soorten fietsen', 1);
        insertCategory.run('Elektrische Fietsen', 'elektrische-fietsen', 'E-bikes en elektrische fietsen', 2);
        insertCategory.run('Mountainbikes', 'mountainbikes', 'Off-road mountainbikes', 3);
        insertCategory.run('Racefietsen', 'racefietsen', 'Snelle racefietsen', 4);
        insertCategory.run('Stadsfietsen', 'stadsfietsen', 'Comfortabele stadsfietsen', 5);
        insertCategory.run('Onderdelen', 'onderdelen', 'Fietsonderdelen en accessoires', 6);
        
        console.log('✅ Default categories created');
    }

    // Insert default settings
    const settingExists = db.prepare('SELECT id FROM settings WHERE key = ?').get('site_name');
    if (!settingExists) {
        const insertSetting = db.prepare(`
            INSERT INTO settings (key, value, type, group_name)
            VALUES (?, ?, ?, ?)
        `);
        
        insertSetting.run('site_name', 'Fiets Webshop', 'text', 'general');
        insertSetting.run('site_description', 'De beste fietsen voor elke gelegenheid', 'textarea', 'general');
        insertSetting.run('currency', 'EUR', 'text', 'shop');
        insertSetting.run('tax_rate', '21', 'number', 'shop');
        insertSetting.run('shipping_cost', '5.95', 'number', 'shop');
        insertSetting.run('free_shipping_threshold', '50', 'number', 'shop');
        
        console.log('✅ Default settings created');
    }

    console.log('✅ Database initialized successfully');
};
