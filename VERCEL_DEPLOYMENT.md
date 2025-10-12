# 🚀 Vercel Deployment Guide - Ronnie Website

## ✅ Quick Deploy (3 stappen)

### Stap 1: Vercel Account
1. Ga naar [vercel.com](https://vercel.com)
2. Maak gratis account aan met GitHub
3. Klik op "Add New Project"

### Stap 2: Repository Koppelen
```bash
# In de project folder:
git init
git add .
git commit -m "Initial commit - Ronnie Website"

# GitHub repo maken en pushen:
# (Maak eerst een repo aan op github.com/new)
git remote add origin https://github.com/JOUW-USERNAME/ronnie-website.git
git branch -M main
git push -u origin main
```

### Stap 3: Deployen op Vercel
1. Klik op "Import Project" in Vercel
2. Selecteer je GitHub repo
3. **Framework Preset:** Next.js
4. **Root Directory:** `apps/web`
5. **Build Command:** `cd ../.. && pnpm install && cd apps/web && pnpm build`
6. **Output Directory:** `.next`
7. Klik "Deploy"

---

## 🔧 Belangrijke Settings

### Environment Variables in Vercel
Voeg deze toe in Vercel Dashboard → Settings → Environment Variables:

```
NEXT_PUBLIC_SITE_URL = https://ronniewebsite.com
NEXT_PUBLIC_SITE_NAME = Ronnie Website
NEXT_PUBLIC_PHONE = +31612345678
NEXT_PUBLIC_EMAIL = support@ronniewebsite.com
NEXT_PUBLIC_WHATSAPP = 31612345678
```

### Domain Instellen
1. Ga naar Project Settings → Domains
2. Voeg je custom domain toe (bijv. `ronniewebsite.com`)
3. Volg de DNS instructies van Vercel
4. Wacht 5-10 minuten voor SSL certificaat

---

## 📦 Build Check (optioneel - lokaal testen)

Test of de build werkt voordat je deployed:

```bash
cd "C:\Users\ronni\Desktop\Ronnie webshop de laatste"
pnpm install
cd apps/web
pnpm build
pnpm start
```

Als dit werkt zonder errors, dan werkt Vercel deployment ook! ✅

---

## 🌍 Performance Optimalisatie

De website is al geoptimaliseerd met:
- ✅ Next.js 14 Image Optimization
- ✅ Code Splitting & Lazy Loading
- ✅ Preconnect voor snellere laadtijden
- ✅ Compressed assets
- ✅ SEO Schema Markup
- ✅ OpenGraph images

**Verwachte Lighthouse Score:** 95-100! 🎯

---

## 🚨 Belangrijke Notes

1. **Video File:** Het `Stoere_Offroad_Step_Stunt_Video.mp4` bestand is 7.8MB
   - Overweeg om dit te hosten op YouTube/Vimeo voor snellere laadtijden
   - Of gebruik Vercel Blob Storage (gratis tier: 10GB)

2. **Images:** Zijn al geoptimaliseerd, maar voor productie:
   - Gebruik WebP formaat voor kleinere bestanden
   - Lazy loading is al geïmplementeerd

3. **Database:** Als je later een database nodig hebt:
   - Gebruik Vercel Postgres (gratis tier beschikbaar)
   - Of Supabase (gratis alternative)

---

## 🎉 Na Deployment

Je website is live op:
- **Vercel URL:** `ronnie-website.vercel.app` (automatisch)
- **Custom Domain:** `ronniewebsite.com` (als je dit instelt)

**Deployment tijd:** ~2-3 minuten
**Automatische updates:** Elke git push = automatische deploy! 🔄

---

## 🔥 Extra Vercel Features

1. **Analytics:** Gratis built-in analytics (geen Google Analytics nodig!)
2. **Web Vitals:** Real-time performance monitoring
3. **Preview Deployments:** Elke branch krijgt eigen preview URL
4. **Instant Rollback:** Terug naar vorige versie in 1 click

---

## 📞 Support

Bij vragen of problemen:
- Vercel Discord: [vercel.com/discord](https://vercel.com/discord)
- Docs: [vercel.com/docs](https://vercel.com/docs)

**Geschatte deployment tijd: 5-10 minuten** ⏱️

Succes met je wereldwijde webshop! 🌍🚀

