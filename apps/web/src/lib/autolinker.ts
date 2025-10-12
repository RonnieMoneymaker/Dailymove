/**
 * Autolinker voor VoltMover - Automatische interne links in content
 * 
 * Deze utility voegt automatisch interne links toe aan content op basis van keywords
 * Volgt SEO best practices: max 1 link per paragraaf, 5-7 per artikel
 */

export interface LinkTarget {
  keywords: string[]
  url: string
  title: string
  priority: number // Hogere prioriteit = wordt eerder gelinkt
}

// Database van linkbare content
export const linkTargets: LinkTarget[] = [
  // Producten (hoge prioriteit)
  {
    keywords: ['xiaomi mi electric scooter 4 pro', 'xiaomi 4 pro', 'mi scooter 4 pro'],
    url: '/product/xiaomi-mi-electric-scooter-4-pro',
    title: 'Xiaomi Mi Electric Scooter 4 Pro',
    priority: 10
  },
  {
    keywords: ['segway ninebot max g30lp', 'segway max', 'ninebot max'],
    url: '/product/segway-ninebot-max-g30lp',
    title: 'Segway Ninebot MAX G30LP',
    priority: 10
  },
  {
    keywords: ['kaabo mantis 8 pro', 'kaabo mantis', 'mantis 8 pro'],
    url: '/product/kaabo-mantis-8-pro',
    title: 'Kaabo Mantis 8 Pro',
    priority: 10
  },
  {
    keywords: ['pure air pro', 'pure electric air'],
    url: '/product/pure-air-pro',
    title: 'Pure Air Pro',
    priority: 10
  },

  // Categorieën (hoge prioriteit)
  {
    keywords: ['e-steps', 'elektrische steps', 'e-scooters', 'elektrische scooters'],
    url: '/shop/e-steps',
    title: 'E-steps',
    priority: 9
  },
  {
    keywords: ['e-bikes', 'elektrische fietsen', 'e-bike', 'elektrische fiets'],
    url: '/shop/e-bikes',
    title: 'E-bikes',
    priority: 9
  },
  {
    keywords: ['accessoires', 'e-step accessoires', 'e-bike accessoires'],
    url: '/shop/accessoires',
    title: 'Accessoires',
    priority: 8
  },
  {
    keywords: ['onderdelen', 'reserveonderdelen', 'e-step onderdelen'],
    url: '/shop/onderdelen',
    title: 'Onderdelen',
    priority: 8
  },

  // Merken (gemiddelde prioriteit)
  {
    keywords: ['xiaomi', 'mi electric'],
    url: '/brands/xiaomi',
    title: 'Xiaomi',
    priority: 7
  },
  {
    keywords: ['segway', 'ninebot'],
    url: '/brands/segway',
    title: 'Segway',
    priority: 7
  },
  {
    keywords: ['kaabo'],
    url: '/brands/kaabo',
    title: 'Kaabo',
    priority: 7
  },
  {
    keywords: ['pure electric', 'pure'],
    url: '/brands/pure',
    title: 'Pure Electric',
    priority: 7
  },
  {
    keywords: ['vanmoof'],
    url: '/brands/vanmoof',
    title: 'VanMoof',
    priority: 7
  },
  {
    keywords: ['gazelle'],
    url: '/brands/gazelle',
    title: 'Gazelle',
    priority: 7
  },

  // Gidsen (gemiddelde prioriteit)
  {
    keywords: ['e-step kopen', 'e-step koopgids', 'welke e-step'],
    url: '/guides/e-step-kopen',
    title: 'E-step Kopen: Complete Gids',
    priority: 6
  },
  {
    keywords: ['e-step onderhoud', 'e-step verzorging'],
    url: '/guides/e-step-onderhoud',
    title: 'E-step Onderhoud Tips',
    priority: 6
  },
  {
    keywords: ['e-step veiligheid', 'veilig rijden e-step'],
    url: '/guides/e-step-veiligheid',
    title: 'Veilig Rijden met E-steps',
    priority: 6
  },
  {
    keywords: ['e-step batterij', 'batterij onderhoud'],
    url: '/guides/e-step-batterij',
    title: 'E-step Batterij Onderhoud',
    priority: 6
  },

  // Informatieve pagina's (lagere prioriteit)
  {
    keywords: ['contact', 'klantenservice', 'hulp nodig'],
    url: '/contact',
    title: 'Contact',
    priority: 5
  },
  {
    keywords: ['over ons', 'voltmover'],
    url: '/over-ons',
    title: 'Over VoltMover',
    priority: 5
  },
  {
    keywords: ['blog', 'nieuws', 'artikelen'],
    url: '/blog',
    title: 'Blog',
    priority: 5
  },

  // Locaties (lagere prioriteit)
  {
    keywords: ['amsterdam', 'e-step amsterdam'],
    url: '/locatie/nederland/amsterdam',
    title: 'E-steps in Amsterdam',
    priority: 4
  },
  {
    keywords: ['rotterdam', 'e-step rotterdam'],
    url: '/locatie/nederland/rotterdam',
    title: 'E-steps in Rotterdam',
    priority: 4
  },
  {
    keywords: ['den haag', 'e-step den haag'],
    url: '/locatie/nederland/den-haag',
    title: 'E-steps in Den Haag',
    priority: 4
  },
  {
    keywords: ['utrecht', 'e-step utrecht'],
    url: '/locatie/nederland/utrecht',
    title: 'E-steps in Utrecht',
    priority: 4
  },
]

export interface AutolinkOptions {
  maxLinksPerParagraph: number
  maxLinksPerArticle: number
  excludeUrls: string[] // URLs die niet gelinkt mogen worden (bijv. huidige pagina)
  caseSensitive: boolean
}

const defaultOptions: AutolinkOptions = {
  maxLinksPerParagraph: 1,
  maxLinksPerArticle: 7,
  excludeUrls: [],
  caseSensitive: false
}

/**
 * Voegt automatisch interne links toe aan HTML content
 */
export function autolinkContent(html: string, options: Partial<AutolinkOptions> = {}): string {
  const opts = { ...defaultOptions, ...options }
  
  // Sorteer link targets op prioriteit (hoogste eerst)
  const sortedTargets = [...linkTargets]
    .filter(target => !opts.excludeUrls.includes(target.url))
    .sort((a, b) => b.priority - a.priority)
  
  // Split HTML in paragrafen
  const paragraphs = html.split(/(<p[^>]*>.*?<\/p>)/gi)
  let totalLinksAdded = 0
  
  const processedParagraphs = paragraphs.map(paragraph => {
    if (totalLinksAdded >= opts.maxLinksPerArticle) {
      return paragraph
    }
    
    // Skip als dit geen paragraaf is
    if (!paragraph.match(/<p[^>]*>/i)) {
      return paragraph
    }
    
    // Skip als paragraaf al links bevat
    if (paragraph.includes('<a ')) {
      return paragraph
    }
    
    let linksInParagraph = 0
    let processedParagraph = paragraph
    
    // Probeer elk link target
    for (const target of sortedTargets) {
      if (linksInParagraph >= opts.maxLinksPerParagraph || totalLinksAdded >= opts.maxLinksPerArticle) {
        break
      }
      
      // Probeer elk keyword voor dit target
      for (const keyword of target.keywords) {
        if (linksInParagraph >= opts.maxLinksPerParagraph) {
          break
        }
        
        const flags = opts.caseSensitive ? 'g' : 'gi'
        const regex = new RegExp(`\\b${escapeRegex(keyword)}\\b`, flags)
        
        // Check of keyword voorkomt in deze paragraaf
        if (regex.test(processedParagraph)) {
          // Vervang alleen de eerste match om spam te voorkomen
          processedParagraph = processedParagraph.replace(regex, (match) => {
            return `<a href="${target.url}" title="${target.title}" class="text-primary hover:underline">${match}</a>`
          })
          
          linksInParagraph++
          totalLinksAdded++
          break // Ga naar volgende target
        }
      }
    }
    
    return processedParagraph
  })
  
  return processedParagraphs.join('')
}

/**
 * Voegt automatisch interne links toe aan Markdown content
 */
export function autolinkMarkdown(markdown: string, options: Partial<AutolinkOptions> = {}): string {
  const opts = { ...defaultOptions, ...options }
  
  // Sorteer link targets op prioriteit
  const sortedTargets = [...linkTargets]
    .filter(target => !opts.excludeUrls.includes(target.url))
    .sort((a, b) => b.priority - a.priority)
  
  // Split in paragrafen (gescheiden door dubbele newlines)
  const paragraphs = markdown.split(/\n\s*\n/)
  let totalLinksAdded = 0
  
  const processedParagraphs = paragraphs.map(paragraph => {
    if (totalLinksAdded >= opts.maxLinksPerArticle) {
      return paragraph
    }
    
    // Skip headers, code blocks, en bestaande links
    if (paragraph.match(/^#|```|^\s*\[.*\]\(.*\)/m)) {
      return paragraph
    }
    
    // Skip als paragraaf al links bevat
    if (paragraph.includes('](')) {
      return paragraph
    }
    
    let linksInParagraph = 0
    let processedParagraph = paragraph
    
    // Probeer elk link target
    for (const target of sortedTargets) {
      if (linksInParagraph >= opts.maxLinksPerParagraph || totalLinksAdded >= opts.maxLinksPerArticle) {
        break
      }
      
      // Probeer elk keyword
      for (const keyword of target.keywords) {
        if (linksInParagraph >= opts.maxLinksPerParagraph) {
          break
        }
        
        const flags = opts.caseSensitive ? 'g' : 'gi'
        const regex = new RegExp(`\\b${escapeRegex(keyword)}\\b`, flags)
        
        if (regex.test(processedParagraph)) {
          // Vervang eerste match met Markdown link
          processedParagraph = processedParagraph.replace(regex, (match) => {
            return `[${match}](${target.url} "${target.title}")`
          })
          
          linksInParagraph++
          totalLinksAdded++
          break
        }
      }
    }
    
    return processedParagraph
  })
  
  return processedParagraphs.join('\n\n')
}

/**
 * Escape special regex characters
 */
function escapeRegex(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/**
 * Suggereer gerelateerde links voor een pagina
 */
export function suggestRelatedLinks(content: string, currentUrl: string, limit: number = 5): LinkTarget[] {
  const contentLower = content.toLowerCase()
  const suggestions: Array<LinkTarget & { score: number }> = []
  
  for (const target of linkTargets) {
    if (target.url === currentUrl) continue
    
    let score = 0
    
    // Score op basis van keyword matches
    for (const keyword of target.keywords) {
      const keywordLower = keyword.toLowerCase()
      const matches = (contentLower.match(new RegExp(keywordLower, 'g')) || []).length
      score += matches * target.priority
    }
    
    if (score > 0) {
      suggestions.push({ ...target, score })
    }
  }
  
  return suggestions
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
}

/**
 * Analyseer link opportunities in content
 */
export function analyzeLinkOpportunities(content: string, currentUrl: string) {
  const contentLower = content.toLowerCase()
  const opportunities: Array<{
    keyword: string
    target: LinkTarget
    frequency: number
    priority: number
  }> = []
  
  for (const target of linkTargets) {
    if (target.url === currentUrl) continue
    
    for (const keyword of target.keywords) {
      const keywordLower = keyword.toLowerCase()
      const matches = (contentLower.match(new RegExp(`\\b${escapeRegex(keywordLower)}\\b`, 'g')) || []).length
      
      if (matches > 0) {
        opportunities.push({
          keyword,
          target,
          frequency: matches,
          priority: target.priority
        })
      }
    }
  }
  
  return opportunities
    .sort((a, b) => (b.frequency * b.priority) - (a.frequency * a.priority))
}

export default {
  autolinkContent,
  autolinkMarkdown,
  suggestRelatedLinks,
  analyzeLinkOpportunities,
  linkTargets
}
