const express = require('express');
const router = express.Router();

// Pages list
router.get('/', (req, res) => {
    const db = req.app.locals.db;

    try {
        const pages = db.prepare(`
            SELECT * FROM pages 
            ORDER BY created_at DESC
        `).all();

        res.render('admin/pages/index', {
            title: 'Paginabeheer',
            user: { username: req.session.username },
            pages
        });
    } catch (error) {
        console.error('Pages list error:', error);
        res.status(500).render('error', {
            title: 'Pages Error',
            message: 'Er is een fout opgetreden bij het laden van de pagina\'s'
        });
    }
});

// New page form
router.get('/new', (req, res) => {
    res.render('admin/pages/form', {
        title: 'Nieuwe Pagina',
        user: { username: req.session.username },
        page: null,
        action: 'create'
    });
});

// Create page
router.post('/', (req, res) => {
    const db = req.app.locals.db;
    const { title, slug, content, excerpt, status, template, meta_title, meta_description } = req.body;

    try {
        // Generate slug if not provided
        const pageSlug = slug || title.toLowerCase()
            .replace(/[^\w ]+/g, '')
            .replace(/ +/g, '-');

        // Check if slug already exists
        const existingSlug = db.prepare('SELECT id FROM pages WHERE slug = ?').get(pageSlug);
        if (existingSlug) {
            return res.redirect('/admin/pages/new?error=URL slug bestaat al');
        }

        const insertPage = db.prepare(`
            INSERT INTO pages (title, slug, content, excerpt, status, template, meta_title, meta_description, created_at, updated_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
        `);

        const result = insertPage.run(title, pageSlug, content, excerpt, status, template, meta_title, meta_description);

        res.redirect(`/admin/pages/${result.lastInsertRowid}?success=Pagina succesvol aangemaakt`);
    } catch (error) {
        console.error('Create page error:', error);
        res.redirect('/admin/pages/new?error=Er is een fout opgetreden bij het aanmaken van de pagina');
    }
});

// View/Edit page
router.get('/:id', (req, res) => {
    const db = req.app.locals.db;
    const pageId = req.params.id;

    try {
        const page = db.prepare('SELECT * FROM pages WHERE id = ?').get(pageId);

        if (!page) {
            return res.redirect('/admin/pages?error=Pagina niet gevonden');
        }

        res.render('admin/pages/form', {
            title: `Pagina: ${page.title}`,
            user: { username: req.session.username },
            page,
            action: 'edit',
            success: req.query.success,
            error: req.query.error
        });
    } catch (error) {
        console.error('View page error:', error);
        res.redirect('/admin/pages?error=Er is een fout opgetreden');
    }
});

// Update page
router.put('/:id', (req, res) => {
    const db = req.app.locals.db;
    const pageId = req.params.id;
    const { title, slug, content, excerpt, status, template, meta_title, meta_description } = req.body;

    try {
        const existingPage = db.prepare('SELECT * FROM pages WHERE id = ?').get(pageId);
        if (!existingPage) {
            return res.redirect('/admin/pages?error=Pagina niet gevonden');
        }

        // Generate slug if not provided
        const pageSlug = slug || title.toLowerCase()
            .replace(/[^\w ]+/g, '')
            .replace(/ +/g, '-');

        // Check if slug already exists (excluding current page)
        const existingSlug = db.prepare('SELECT id FROM pages WHERE slug = ? AND id != ?').get(pageSlug, pageId);
        if (existingSlug) {
            return res.redirect(`/admin/pages/${pageId}?error=URL slug bestaat al`);
        }

        const updatePage = db.prepare(`
            UPDATE pages SET
                title = ?, slug = ?, content = ?, excerpt = ?, status = ?, template = ?,
                meta_title = ?, meta_description = ?, updated_at = CURRENT_TIMESTAMP
            WHERE id = ?
        `);

        updatePage.run(title, pageSlug, content, excerpt, status, template, meta_title, meta_description, pageId);

        res.redirect(`/admin/pages/${pageId}?success=Pagina succesvol bijgewerkt`);
    } catch (error) {
        console.error('Update page error:', error);
        res.redirect(`/admin/pages/${pageId}?error=Er is een fout opgetreden bij het bijwerken van de pagina`);
    }
});

// Delete page
router.delete('/:id', (req, res) => {
    const db = req.app.locals.db;
    const pageId = req.params.id;

    try {
        const page = db.prepare('SELECT * FROM pages WHERE id = ?').get(pageId);
        if (!page) {
            return res.status(404).json({ error: 'Pagina niet gevonden' });
        }

        db.prepare('DELETE FROM pages WHERE id = ?').run(pageId);

        res.json({ success: 'Pagina succesvol verwijderd' });
    } catch (error) {
        console.error('Delete page error:', error);
        res.status(500).json({ error: 'Er is een fout opgetreden bij het verwijderen van de pagina' });
    }
});

module.exports = router;
