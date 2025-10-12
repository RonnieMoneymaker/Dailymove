'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react'

type Item = { label: string; href: string; type: 'product'|'brand'|'category' }

export function SearchAutocomplete({ items = [] as Item[] }: { items?: Item[] }) {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const listRef = useRef<HTMLUListElement>(null)

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return [] as Item[]
    return items.filter(i => i.label.toLowerCase().includes(q)).slice(0, 8)
  }, [items, query])

  useEffect(() => {
    setOpen(results.length > 0)
    setActive(0)
  }, [results.length])

  return (
    <div className="relative w-80" role="combobox" aria-expanded={open} aria-owns="search-list">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          className="w-full pl-9 pr-3 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand"
          type="search"
          placeholder="Zoek producten, merken, categorieën..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setOpen(results.length > 0)}
          onKeyDown={(e) => {
            if (!open) return
            if (e.key === 'ArrowDown') { e.preventDefault(); setActive(a => Math.min(a + 1, results.length - 1)) }
            if (e.key === 'ArrowUp') { e.preventDefault(); setActive(a => Math.max(a - 1, 0)) }
            if (e.key === 'Enter' && results[active]) { window.location.href = results[active].href }
            if (e.key === 'Escape') setOpen(false)
          }}
          aria-controls="search-list"
          aria-activedescendant={open ? `search-item-${active}` : undefined}
        />
      </div>
      {open && (
        <ul
          id="search-list"
          ref={listRef}
          role="listbox"
          className="absolute z-50 left-0 right-0 mt-1 rounded-xl border bg-white shadow-xl overflow-hidden"
        >
          {results.map((r, i) => (
            <li key={r.href} id={`search-item-${i}`} role="option" aria-selected={i===active}>
              <Link
                href={r.href}
                className={`flex items-center justify-between px-3 py-2 text-sm ${i===active ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-50`}
                onMouseEnter={() => setActive(i)}
              >
                <span className="truncate">{r.label}</span>
                <span className="text-xs text-muted-foreground">{r.type}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}


