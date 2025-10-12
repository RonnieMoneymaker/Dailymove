# Dailymove Backup - Schone Productie Versie

**Backup gemaakt op:** 8 oktober 2025, 13:13
**Status:** Productie-klaar, opgeschoond

## 📦 Wat is dit?

Dit is een schone, productie-klare backup van de Dailymove webshop met alleen de gekozen 2e varianten. Alle andere varianten en selectors zijn verwijderd voor een cleaner codebase.

## ✅ Gekozen Componenten

### Header
- **Bestand:** `apps/web/src/components/header.tsx`
- **Type:** Current/Original header design
- **Features:** Clean en professioneel

### Footer  
- **Bestand:** `apps/web/src/components/footer-2-basic.tsx`
- **Ook:** `apps/web/src/components/footer-final.tsx`
- **Type:** Basic footer
- **Features:** Simpel en clean met 4 kolommen

### Announcement Bar
- **Bestand:** `apps/web/src/components/announcement-2-minimal.tsx`  
- **Ook:** `apps/web/src/components/announcement-bar-final.tsx`
- **Type:** Minimal announcement
- **Features:** Gradient achtergrond met USP's

### Homepage
- **Componenten gebruikt:**
  - `CinematicHero` - Hero sectie
  - `SimpleFeatured` - Featured producten
  - `SimpleCategories` - Categorieën
  - `NewsletterSignup` - Nieuwsbrief

## 🗑️ Wat is verwijderd?

- ❌ Alle header varianten (1, 3-12)
- ❌ Alle footer varianten (1, 3-14)
- ❌ Alle announcement varianten (1, 3-13)
- ❌ Alle homepage varianten (1, 3-13)
- ❌ Alle selector componenten
- ❌ node_modules (kan opnieuw geïnstalleerd worden)
- ❌ .next build folders

## 🚀 Hoe te gebruiken

### 1. Installeer dependencies
```bash
cd apps/web
npm install
```

### 2. Start development server
```bash
npx next dev --port 2002
```

### 3. Open in browser
```
http://localhost:2002
```

## 📁 Structuur

```
apps/web/src/
├── app/
│   ├── page.tsx                 # Hoofdpagina met gekozen componenten
│   ├── layout.tsx               # Root layout met CSS
│   └── globals.css              # Tailwind CSS
│
├── components/
│   ├── header.tsx              # ✅ Gekozen header (2e variant)
│   ├── footer-2-basic.tsx      # ✅ Gekozen footer (2e variant)
│   ├── footer-final.tsx        # Kopie voor herkenning
│   ├── announcement-2-minimal.tsx  # ✅ Gekozen announcement (2e variant)
│   ├── announcement-bar-final.tsx  # Kopie voor herkenning
│   │
│   ├── home/                   # Homepage componenten
│   │   ├── cinematic-hero.tsx
│   │   ├── simple-featured.tsx
│   │   ├── simple-categories.tsx
│   │   └── newsletter-signup.tsx
│   │
│   ├── cart/                   # Winkelwagen functionaliteit
│   ├── ui/                     # UI componenten
│   └── layout/                 # Layout componenten
│
├── lib/
│   └── utils.ts                # Utility functies (formatPrice, etc)
│
└── config/
    ├── brand.ts                # Brand configuratie
    ├── menus.ts                # Menu structuur
    └── site.ts                 # Site configuratie
```

## 🎨 Features

- ✅ Volledig responsive design
- ✅ Tailwind CSS styling
- ✅ Winkelwagen functionaliteit
- ✅ CartProvider voor state management
- ✅ Next.js 14 App Router
- ✅ TypeScript
- ✅ Product pagina's
- ✅ Checkout flow
- ✅ SEO geoptimaliseerd

## 🔧 Configuratie

De website gebruikt:
- **Port:** 2002
- **Framework:** Next.js 14.0.0
- **Styling:** Tailwind CSS
- **State:** React Context (CartProvider)

## 📝 Notities

- Deze backup bevat GEEN node_modules - installeer eerst dependencies
- De originele werkende versie staat nog in de andere map
- Dit is een schone productie-klare versie zonder experimentele varianten
- Alle selectors zijn verwijderd voor betere performance

## 💾 Backup Info

**Origineel pad:** `C:\Users\ronni\Desktop\CWebshop Dailymove final echt laatse poging word dit anders verwijderen\dailymove-4927c6d430826d42565a93b28b344232d8f385f5`

**Backup pad:** `C:\Users\ronni\Desktop\BACKUP_Dailymove_CLEAN_20251008_131302`

---

**Status:** ✅ Productie-klaar
**Laatste update:** 8 oktober 2025, 13:15

