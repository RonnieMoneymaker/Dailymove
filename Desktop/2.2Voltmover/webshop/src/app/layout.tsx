import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emovement Webshop",
  description: "Elektrische mobiliteit – e-bikes, e-steps en onderdelen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}> 
        <div className="min-h-dvh grid grid-rows-[auto_1fr_auto]">
          <header className="border-b border-[--color-border] bg-white/70 dark:bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container-edge py-4 flex items-center justify-between gap-4">
              <a href="/" className="flex items-center gap-2 font-bold text-xl">
                <span className="inline-block h-3 w-3 rounded-full bg-brand" />
                Emovement
              </a>
              <nav className="hidden md:flex items-center gap-6 text-sm">
                <a className="hover:text-brand" href="/producten">Producten</a>
                <a className="hover:text-brand" href="/over">Over ons</a>
                <a className="hover:text-brand" href="/contact">Contact</a>
              </nav>
              <a href="/winkelwagen" className="relative btn-primary px-4 py-2">
                Winkelwagen
              </a>
            </div>
          </header>
          <main className="container-edge py-8">
            {children}
          </main>
          <footer className="border-t border-[--color-border] bg-muted/40">
            <div className="container-edge py-8 text-sm text-slate-600 dark:text-slate-400">
              <p>© {new Date().getFullYear()} Emovement. Alle rechten voorbehouden.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
