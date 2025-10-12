const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

// Login page
router.get('/login', (req, res) => {
    if (req.session.userId) {
        return res.redirect('/admin');
    }
    
    res.render('auth/login', {
        title: 'Inloggen',
        error: req.query.error,
        success: req.query.success
    });
});

// Login POST
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    
    if (!username || !password) {
        return res.redirect('/login?error=Vul alle velden in');
    }
    
    try {
        const db = req.app.locals.db;
        const user = db.prepare('SELECT * FROM users WHERE username = ? OR email = ?').get(username, username);
        
        if (!user) {
            return res.redirect('/login?error=Ongeldige inloggegevens');
        }
        
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.redirect('/login?error=Ongeldige inloggegevens');
        }
        
        req.session.userId = user.id;
        req.session.username = user.username;
        req.session.role = user.role;
        
        res.redirect('/admin');
    } catch (error) {
        console.error('Login error:', error);
        res.redirect('/login?error=Er is een fout opgetreden');
    }
});

// Logout
router.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Logout error:', err);
        }
        res.redirect('/login?success=Je bent uitgelogd');
    });
});

// Change password page
router.get('/change-password', (req, res) => {
    if (!req.session.userId) {
        return res.redirect('/login');
    }
    
    res.render('auth/change-password', {
        title: 'Wachtwoord wijzigen',
        error: req.query.error,
        success: req.query.success,
        user: { username: req.session.username }
    });
});

// Change password POST
router.post('/change-password', async (req, res) => {
    if (!req.session.userId) {
        return res.redirect('/login');
    }
    
    const { currentPassword, newPassword, confirmPassword } = req.body;
    
    if (!currentPassword || !newPassword || !confirmPassword) {
        return res.redirect('/change-password?error=Vul alle velden in');
    }
    
    if (newPassword !== confirmPassword) {
        return res.redirect('/change-password?error=Nieuwe wachtwoorden komen niet overeen');
    }
    
    if (newPassword.length < 6) {
        return res.redirect('/change-password?error=Nieuw wachtwoord moet minimaal 6 karakters lang zijn');
    }
    
    try {
        const db = req.app.locals.db;
        const user = db.prepare('SELECT * FROM users WHERE id = ?').get(req.session.userId);
        
        const isValidPassword = await bcrypt.compare(currentPassword, user.password);
        if (!isValidPassword) {
            return res.redirect('/change-password?error=Huidig wachtwoord is onjuist');
        }
        
        const hashedNewPassword = await bcrypt.hash(newPassword, 10);
        db.prepare('UPDATE users SET password = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?')
          .run(hashedNewPassword, req.session.userId);
        
        res.redirect('/change-password?success=Wachtwoord succesvol gewijzigd');
    } catch (error) {
        console.error('Change password error:', error);
        res.redirect('/change-password?error=Er is een fout opgetreden');
    }
});

module.exports = router;
