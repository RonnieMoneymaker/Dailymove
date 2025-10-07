import Breadcrumbs from "@/components/Breadcrumbs";
import { Metadata } from "next";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const priceBase = 699;
  const price = priceBase + Number(id) * 50;
  const title = `E-step Model ${id}`;
  
  return {
    title,
    description: `Wendbare en krachtige e-step voor woon-werk en vrije tijd. Lichtgewicht frame, lange accuduur en veilige schijfremmen. Nu voor €${price},-`,
    openGraph: {
      title: `${title} | Emovement`,
      description: `Wendbare en krachtige e-step voor woon-werk en vrije tijd. Nu voor €${price},-`,
      images: [
        {
          url: "https://images.unsplash.com/photo-1598128558393-70ff21433be0?w=1200&h=630&fit=crop",
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const priceBase = 699;
  const price = priceBase + Number(id) * 50;
  const title = `E-step Model ${id}`;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": title,
    "description": "Wendbare en krachtige e-step voor woon-werk en vrije tijd. Lichtgewicht frame, lange accuduur en veilige schijfremmen.",
    "image": "https://images.unsplash.com/photo-1598128558393-70ff21433be0?w=800&h=800&fit=crop",
    "brand": {
      "@type": "Brand",
      "name": "Emovement"
    },
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "url": `https://emovement.nl/producten/${id}`,
      "priceValidUntil": new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "128"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <Breadcrumbs 
        items={[
          { label: "Producten", href: "/producten" },
          { label: title }
        ]} 
      />
      <div className="grid gap-10 lg:grid-cols-2">
      <div className="space-y-4">
        <div className="card p-4">
          <div className="aspect-[4/3] w-full rounded-md bg-muted" />
        </div>
        <div className="grid grid-cols-4 gap-3">
          {[1,2,3,4].map((t) => (
            <div key={t} className="aspect-square rounded-md bg-muted" />
          ))}
        </div>
      </div>
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">{title}</h1>
          <div className="flex items-center gap-2 text-amber-500" aria-label="Beoordeling">
            <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-amber-300">★</span>
            <span className="text-sm text-slate-500">(128)</span>
          </div>
        </div>
        <div className="text-3xl font-semibold">€ {price},-</div>
        <p className="text-slate-600 dark:text-slate-300">
          Wendbare en krachtige e-step voor woon-werk en vrije tijd. Lichtgewicht frame,
          lange accuduur en veilige schijfremmen.
        </p>
        <form action="/winkelwagen" method="get" className="space-y-4 max-w-sm">
          <label className="block text-sm">
            Kleur
            <select name="color" className="mt-1 w-full rounded-md border border-[--color-border] bg-white px-3 py-2">
              <option>Zwart</option>
              <option>Wit</option>
              <option>Blauw</option>
            </select>
          </label>
          <label className="block text-sm">
            Aantal
            <input type="number" name="qty" defaultValue={1} min={1} className="mt-1 w-24 rounded-md border border-[--color-border] bg-white px-3 py-2" />
          </label>
          <input type="hidden" name="id" value={id} />
          <div className="flex gap-3">
            <button className="btn-primary" type="submit">Toevoegen aan winkelwagen</button>
            <a href="/afrekenen" className="inline-flex items-center justify-center rounded-md border border-[--color-border] px-5 py-2.5 font-medium hover:bg-muted">Direct afrekenen</a>
          </div>
        </form>
        <div className="grid grid-cols-2 gap-4 text-sm text-slate-600 dark:text-slate-300">
          <div className="rounded-lg border border-[--color-border] p-3">Gratis verzending</div>
          <div className="rounded-lg border border-[--color-border] p-3">2 jaar garantie</div>
        </div>
      </div>
    </div>
  );
}


