import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <p className="font-bold">BEYOND BAR</p>
          <p className="mt-2 text-sm text-gray-600">Delhi-based full-service law firm.</p>
          <p className="mt-4 text-sm text-gray-600">© {new Date().getFullYear()} BEYOND BAR. All rights reserved.</p>
        </div>
        <div>
          <p className="font-semibold">Practice</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/practices/litigation" className="hover:text-brand-700">Litigation & Disputes</Link></li>
            <li><Link href="/practices/corporate" className="hover:text-brand-700">Corporate & Commercial</Link></li>
            <li><Link href="/practices/regulatory" className="hover:text-brand-700">Regulatory & Compliance</Link></li>
            <li><Link href="/practices/arbitration" className="hover:text-brand-700">Arbitration</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Firm</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/people" className="hover:text-brand-700">People</Link></li>
            <li><Link href="/insights" className="hover:text-brand-700">Insights</Link></li>
            <li><Link href="/careers" className="hover:text-brand-700">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-brand-700">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Contact</p>
          <address className="mt-3 not-italic text-sm text-gray-700">
            BEYOND BAR<br />
            Connaught Place, New Delhi<br />
            India 110001<br />
            +91 11 4000 0000<br />
            contact@beyondbar.in
          </address>
        </div>
      </div>
    </footer>
  )
}