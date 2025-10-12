import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface InternalLinkBlockProps {
  title: string
  links: Array<{
    href: string
    text: string
  }>
}

export function InternalLinkBlock({ title, links }: InternalLinkBlockProps) {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">{title}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="group flex items-center justify-between p-4 rounded-lg border bg-background hover:bg-muted/50 transition-colors"
              >
                <span className="font-medium">{link.text}</span>
                <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
