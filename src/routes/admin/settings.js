const express = require('express');
const router = express.Router();

// Settings page
router.get('/', (req, res) => {
    const db = req.app.locals.db;

    try {
        const settings = db.prepare('SELECT * FROM settings ORDER BY group_name, key').all();
        
        // Group settings by group_name
        const groupedSettings = settings.reduce((groups, setting) => {
            const group = setting.group_name || 'general';
            if (!groups[group]) {
                groups[group] = [];
            }
            groups[group].push(setting);
            return groups;
        }, {});

        res.render('admin/settings/index', {
            title: 'Instellingen',
            user: { username: req.session.username },
            groupedSettings,
            success: req.query.success,
            error: req.query.error
        });
    } catch (error) {
        console.error('Settings page error:', error);
        res.status(500).render('error', {
            title: 'Settings Error',
            message: 'Er is een fout opgetreden bij het laden van de instellingen'
        });
    }
});

// Update settings
router.post('/', (req, res) => {
    const db = req.app.locals.db;
    const settings = req.body;

    try {
        const updateSetting = db.prepare(`
            UPDATE settings 
            SET value = ?, updated_at = CURRENT_TIMESTAMP 
            WHERE key = ?
        `);

        const insertSetting = db.prepare(`
            INSERT INTO settings (key, value, type, group_name, created_at, updated_at)
            VALUES (?, ?, 'text', 'general', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
        `);

        for (const [key, value] of Object.entries(settings)) {
            const existingSetting = db.prepare('SELECT id FROM settings WHERE key = ?').get(key);
            
            if (existingSetting) {
                updateSetting.run(value, key);
            } else {
                insertSetting.run(key, value);
            }
        }

        res.redirect('/admin/settings?success=Instellingen succesvol opgeslagen');
    } catch (error) {
        console.error('Update settings error:', error);
        res.redirect('/admin/settings?error=Er is een fout opgetreden bij het opslaan van de instellingen');
    }
});

module.exports = router;
