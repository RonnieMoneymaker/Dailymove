import { Metadata } from 'next'

interface Params { a: string; b: string }

export function generateMetadata({ params }: { params: Params }): Metadata {
  const title = `${slugToName(params.a)} vs ${slugToName(params.b)} – Vergelijking`
  const description = `Vergelijk specs, voor- en nadelen van ${slugToName(params.a)} en ${slugToName(params.b)}.`
  return { title, description }
}

export default function ComparePage({ params }: { params: Params }) {
  const left = slugToName(params.a)
  const right = slugToName(params.b)
  const specs = [
    { key: 'Bereik', left: '40 km', right: '45 km' },
    { key: 'Snelheid', left: '25 km/h', right: '30 km/h' },
    { key: 'Gewicht', left: '14 kg', right: '16 kg' },
  ]
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">{left} vs {right}</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <table className="w-full border rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-3">Specificatie</th>
                <th className="text-left p-3">{left}</th>
                <th className="text-left p-3">{right}</th>
              </tr>
            </thead>
            <tbody>
              {specs.map(s => (
                <tr key={s.key} className="border-t">
                  <td className="p-3 font-medium">{s.key}</td>
                  <td className="p-3">{s.left}</td>
                  <td className="p-3">{s.right}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <aside className="space-y-3">
          <a href="#" className="inline-flex items-center justify-center w-full bg-primary text-white rounded-lg px-4 py-3 font-semibold">Koopadvies: {left}</a>
          <a href="#" className="inline-flex items-center justify-center w-full border-2 border-primary text-ink rounded-lg px-4 py-3 font-semibold">Koopadvies: {right}</a>
        </aside>
      </div>
    </div>
  )
}

function slugToName(slug: string) {
  return slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')
}


