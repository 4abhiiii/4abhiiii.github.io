import Link from 'next/link'

export const metadata = { title: 'Practice Areas' }

const practices = [
  { slug: 'litigation', title: 'Litigation & Disputes', desc: 'Civil, commercial, writs, white-collar defence; strategic case management end-to-end.' },
  { slug: 'corporate', title: 'Corporate & Commercial', desc: 'Contracts, M&A, entity structuring, investments, and general corporate advisory.' },
  { slug: 'regulatory', title: 'Regulatory & Compliance', desc: 'Regulatory strategy, licensing, enforcement defence, and compliance frameworks.' },
  { slug: 'arbitration', title: 'Arbitration', desc: 'Domestic and international arbitration; enforcement and challenge of awards.' },
]

export default function PracticesPage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-semibold">Practice Areas</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {practices.map((p) => (
          <Link key={p.slug} href={`/practices/${p.slug}`} className="rounded-xl border p-6 bg-white hover:shadow-lg">
            <h2 className="font-semibold">{p.title}</h2>
            <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
            <span className="mt-3 inline-block text-brand-700 text-sm">Learn more →</span>
          </Link>
        ))}
      </div>
    </div>
  )
}