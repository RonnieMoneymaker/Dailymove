interface GuidePageProps {
  params: { slug: string }
}

const guides: Record<string, { title: string; content: string }> = {
  'e-step-kopen': {
    title: 'E-step kopen: waar let je op?',
    content: 'Let op bereik, gewicht, garantie, bandentype en servicepunten. Kies een merk met goede onderdelenvoorziening.',
  },
  'onderhoud-e-step': {
    title: 'Onderhoud E-step',
    content: 'Controleer bandenspanning, remmen, scharnierpunten en laad de batterij volgens de richtlijnen.',
  },
}

export default function GuidePage({ params }: GuidePageProps) {
  const g = guides[params.slug] || { title: params.slug, content: 'Inhoud volgt binnenkort.' }
  return (
    <div className="container py-10 prose prose-gray">
      <h1>{g.title}</h1>
      <p>{g.content}</p>
    </div>
  )
}


