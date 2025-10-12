import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  name: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="container py-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index === 0 && (
              <Home className="h-4 w-4 mr-1" />
            )}
            {index === items.length - 1 ? (
              <span className="font-medium text-foreground">{item.name}</span>
            ) : (
              <>
                <Link 
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
                <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
