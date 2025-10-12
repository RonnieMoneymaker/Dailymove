const express = require('express');
const session = require('express-session');
const SQLiteStore = require('connect-sqlite3')(session);
const bcrypt = require('bcryptjs');
const path = require('path');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const methodOverride = require('method-override');
const Database = require('better-sqlite3');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Database setup
const db = new Database('cms.db');
require('./database/init')(db);

// Middleware
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'", "https://cdn.jsdelivr.net"],
            scriptSrc: ["'self'", "https://cdn.jsdelivr.net"],
            imgSrc: ["'self'", "data:", "https:"],
            fontSrc: ["'self'", "https://cdn.jsdelivr.net"]
        }
    }
}));
app.use(compression());
app.use(morgan('combined'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static('public'));

// Session configuration
app.use(session({
    store: new SQLiteStore({
        db: 'sessions.db',
        concurrentDB: true
    }),
    secret: process.env.SESSION_SECRET || 'your-secret-key-change-this',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, // Set to true in production with HTTPS
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
}));

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Make database available to routes
app.locals.db = db;

// Authentication middleware
const requireAuth = (req, res, next) => {
    if (!req.session.userId) {
        return res.redirect('/login');
    }
    next();
};

// Routes
app.use('/', require('./routes/auth'));
app.use('/admin', requireAuth, require('./routes/admin'));
app.use('/api', requireAuth, require('./routes/api'));

// Public routes for the webshop
app.use('/shop', require('./routes/shop'));

// Default redirect
app.get('/', (req, res) => {
    if (req.session.userId) {
        res.redirect('/admin');
    } else {
        res.redirect('/login');
    }
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('error', { 
        title: 'Server Error',
        message: 'Er is een fout opgetreden'
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).render('error', {
        title: '404 - Pagina niet gevonden',
        message: 'De pagina die je zoekt bestaat niet'
    });
});

app.listen(PORT, () => {
    console.log(`🚀 CMS server draait op http://localhost:${PORT}`);
    console.log('📊 Admin panel: http://localhost:${PORT}/admin');
    console.log('🛒 Webshop: http://localhost:${PORT}/shop');
});

module.exports = app;
