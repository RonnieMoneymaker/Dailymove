export type MenuItem = {
  label: string
  href?: string
  key: string
  panel?: {
    categories?: Array<{ label: string; href: string; icon?: string }>
    brands?: Array<{ label: string; href: string }>
    useCases?: Array<{ label: string; href: string }>
    comparisons?: Array<{ label: string; href: string }>
    promoImage?: string
  }
}

export const mainMenu: MenuItem[] = [
  {
    key: 'esteps',
    label: 'E‑Steps',
    href: '/shop/e-steps',
    panel: {
      categories: [
        { label: 'Instap (tot €400)', href: '/shop/e-steps' },
        { label: 'Forenzen (licht/compact)', href: '/shop/e-steps' },
        { label: 'Performance (lange range)', href: '/shop/e-steps' },
        { label: 'Off‑road & power', href: '/shop/e-steps' },
      ],
      brands: [
        { label: 'Xiaomi', href: '/brands/xiaomi' },
        { label: 'Segway‑Ninebot', href: '/brands/segway' },
        { label: 'Kaabo', href: '/brands/kaabo' },
      ],
      useCases: [
        { label: 'Forenzen', href: '/shop/e-steps' },
        { label: 'Last‑mile', href: '/shop/e-steps' },
        { label: 'Recreatie', href: '/shop/e-steps' },
      ],
      comparisons: [
        { label: 'Ninebot F2 vs F2 Pro', href: '/compare/ninebot-f2-vs-f2-pro' },
      ],
      promoImage: '/images/categories/escooter2.jpg',
    },
  },
  { key: 'escooters', label: 'E‑Scooters', href: '/shop/e-scooters' },
  { key: 'ebikes', label: 'E‑Bikes', href: '/shop/e-bikes' },
  { key: 'accessoires', label: 'Accessoires', href: '/shop/accessoires' },
  { key: 'onderdelen', label: 'Onderdelen', href: '/shop/onderdelen' },
  { key: 'deals', label: 'Deals', href: '/landings/sale' },
  { key: 'blog', label: 'Blog', href: '/blog' },
]


