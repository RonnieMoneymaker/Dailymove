'use client'

import Link from 'next/link'
import { Facebook, Instagram, Twitter, Zap, Heart } from 'lucide-react'

export function Footer() {
  const links = [
    { name: 'E-steps', href: '/shop/e-steps' },
    { name: 'E-bikes', href: '/shop/e-bikes' },
    { name: 'Accessoires', href: '/shop/accessoires' },
    { name: 'Contact', href: '/contact' },
    { name: 'Over ons', href: '/over-ons' },
    { name: 'Blog', href: '/blog' }
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ]

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              DailyMove
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {links.map((link, index) => (
              <Link 
                key={index} 
                href={link.href} 
                className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <Link 
                key={index}
                href={social.href} 
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" />
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-500">
              © 2024 DailyMove. Alle rechten voorbehouden.
            </p>
            <p className="text-xs text-gray-400 flex items-center justify-center space-x-1">
              <span>Gemaakt met</span>
              <Heart className="h-3 w-3 text-red-500 fill-current" />
              <span>in Amsterdam</span>
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex space-x-4 text-xs text-gray-400">
            <Link href="/privacy" className="hover:text-gray-600 transition-colors">Privacy</Link>
            <Link href="/voorwaarden" className="hover:text-gray-600 transition-colors">Voorwaarden</Link>
            <Link href="/cookies" className="hover:text-gray-600 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

