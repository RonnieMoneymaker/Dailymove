# 🚲 Fiets Webshop CMS

Een volledig functioneel Content Management System (CMS) voor een fietsen webshop, gebouwd met Node.js, Express en SQLite.

## ✨ Features

### 🔐 Authenticatie & Beveiliging
- Veilige login/logout functionaliteit
- Wachtwoord hashing met bcrypt
- Session management
- CSRF protection
- Helmet security headers

### 📊 Admin Dashboard
- Overzicht van statistieken
- Live bezoekers tracking
- Recente bestellingen
- Lage voorraad waarschuwingen
- Moderne, responsive interface

### 📦 Productbeheer
- Producten toevoegen/bewerken/verwijderen
- Categorieën management
- Prijzen en voorraad beheer
- SEO instellingen (meta tags, slugs)
- Bulk acties (activeren/deactiveren/verwijderen)
- Zoek- en filterfunctionaliteit
- Productafbeeldingen support

### 🛒 Bestellingenbeheer
- Overzicht van alle bestellingen
- Status wijzigen (pending, processing, shipped, delivered, cancelled)
- Orderdetails bekijken
- Klantinformatie
- Notities toevoegen

### 👥 Klantenbeheer
- Klanten toevoegen/bewerken
- Bestelgeschiedenis
- Adresbeheer (factuur/verzending)
- Klant zoeken en filteren

### 📄 Content Management
- Pagina's aanmaken en beheren
- SEO optimalisatie
- Template systeem
- Rich text content

### 📈 Analytics & Rapportage
- Bezoekers tracking
- Verkoop statistieken
- Top producten analytics
- Live dashboard updates
- Page view tracking

### 🌐 Webshop Frontend
- Moderne, responsive design
- Product catalogus met filters
- Categorieën overzicht
- Zoekfunctionaliteit
- Product detail pagina's
- Winkelwagen functionaliteit (basis)

## 🚀 Installatie

### Vereisten
- Node.js (v14 of hoger)
- npm of yarn

### Setup
1. Clone de repository:
```bash
git clone https://github.com/jouw-username/fiets-webshop-cms.git
cd fiets-webshop-cms
```

2. Installeer dependencies:
```bash
npm install
```

3. Start de server:
```bash
npm run dev
```

4. Open je browser en ga naar:
   - **Admin Panel**: http://localhost:3000/admin
   - **Webshop**: http://localhost:3000/shop

## 🔑 Default Login

- **Gebruikersnaam**: `admin`
- **Wachtwoord**: `admin123`

## 📁 Project Structuur

```
├── src/
│   ├── database/
│   │   └── init.js              # Database schema & initialisatie
│   ├── routes/
│   │   ├── admin/               # Admin route handlers
│   │   │   ├── products.js      # Productbeheer
│   │   │   ├── orders.js        # Bestellingenbeheer
│   │   │   ├── customers.js     # Klantenbeheer
│   │   │   ├── pages.js         # Content management
│   │   │   ├── settings.js      # Instellingen
│   │   │   └── analytics.js     # Analytics
│   │   ├── admin.js             # Admin dashboard
│   │   ├── auth.js              # Authenticatie
│   │   ├── api.js               # API endpoints
│   │   └── shop.js              # Webshop frontend
│   ├── views/
│   │   ├── admin/               # Admin templates
│   │   ├── auth/                # Login templates
│   │   └── shop/                # Webshop templates
│   └── server.js                # Main server file
├── public/
│   ├── css/
│   │   ├── admin.css            # Admin styling
│   │   └── shop.css             # Webshop styling
│   └── js/
│       ├── admin.js             # Admin JavaScript
│       └── shop.js              # Webshop JavaScript
├── package.json
└── README.md
```

## 🛠️ Technologie Stack

- **Backend**: Node.js, Express.js
- **Database**: SQLite met better-sqlite3
- **Template Engine**: EJS
- **Styling**: Bootstrap 5 + Custom CSS
- **Security**: Helmet, bcryptjs, express-session
- **Development**: nodemon voor hot reload

## 🎯 Gebruik

### Admin Panel
1. Log in met de default credentials
2. Navigeer door de verschillende secties:
   - **Dashboard**: Overzicht en statistieken
   - **Producten**: Beheer je productcatalogus
   - **Bestellingen**: Verwerk bestellingen
   - **Klanten**: Beheer klantgegevens
   - **Pagina's**: Content management
   - **Analytics**: Bekijk statistieken
   - **Instellingen**: Configureer je webshop

### Webshop
- Browse producten per categorie
- Gebruik de zoekfunctie
- Bekijk product details
- Voeg items toe aan winkelwagen

## 🔧 Configuratie

De applicatie gebruikt een SQLite database die automatisch wordt aangemaakt bij de eerste start. Default categorieën en instellingen worden automatisch toegevoegd.

### Environment Variables
Maak een `.env` bestand aan in de root directory:

```env
PORT=3000
NODE_ENV=development
SESSION_SECRET=your-super-secret-session-key-change-this-in-production
```

## 🤝 Bijdragen

1. Fork het project
2. Maak een feature branch (`git checkout -b feature/nieuwe-feature`)
3. Commit je changes (`git commit -am 'Voeg nieuwe feature toe'`)
4. Push naar de branch (`git push origin feature/nieuwe-feature`)
5. Open een Pull Request

## 📝 License

Dit project is gelicenseerd onder de MIT License.

## 🐛 Issues & Support

Als je problemen ondervindt of vragen hebt, open dan een issue op GitHub.

## 🚀 Deployment

Voor productie deployment:

1. Zet `NODE_ENV=production`
2. Gebruik een sterke `SESSION_SECRET`
3. Configureer een reverse proxy (nginx)
4. Overweeg een robuustere database (PostgreSQL/MySQL)
5. Implementeer SSL/TLS

---

**Gemaakt met ❤️ voor fietsliefhebbers**
