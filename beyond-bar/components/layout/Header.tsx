"use client"
import Link from 'next/link'
import { useState } from 'react'

const nav = [
  { href: '/practices', label: 'Practice' },
  { href: '/people', label: 'People' },
  { href: '/insights', label: 'Insights' },
  { href: '/careers', label: 'Careers' },
  { href: '/about', label: 'About' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="font-bold tracking-wide">BEYOND BAR</Link>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm hover:text-brand-700">{n.label}</Link>
          ))}
          <Link href="/contact" className="rounded-md bg-brand-700 text-white px-4 py-2 text-sm font-semibold hover:bg-brand-800">Contact</Link>
        </nav>
        <button aria-label="Open menu" className="md:hidden" onClick={()=>setOpen((v)=>!v)}>
          <div className="i-ph-list"></div>
          <span className="text-sm">Menu</span>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container py-3 grid gap-2">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="py-2" onClick={()=>setOpen(false)}>{n.label}</Link>
            ))}
            <Link href="/contact" className="rounded-md bg-brand-700 text-white px-4 py-2 text-sm font-semibold w-max" onClick={()=>setOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  )
}