import { notFound } from 'next/navigation'

const practices = {
  litigation: {
    title: 'Litigation & Disputes',
    intro: 'We represent clients across civil, commercial, writ, and white-collar matters at trial and appellate forums including the Delhi High Court and the Supreme Court of India.',
    services: [
      'Civil and commercial suits',
      'Writ petitions and public law',
      'White-collar defence',
      'Injunctions and interim reliefs',
      'Appellate advocacy'
    ]
  },
  corporate: {
    title: 'Corporate & Commercial',
    intro: 'We advise on contracts, M&A, investments, governance, and complex commercial arrangements with a pragmatic, business-first approach.',
    services: [
      'Contract drafting and negotiation',
      'M&A and due diligence',
      'Entity structuring and governance',
      'Venture capital and investments',
      'Employment and ESOPs'
    ]
  },
  regulatory: {
    title: 'Regulatory & Compliance',
    intro: 'We help clients navigate Indian regulatory frameworks, licensing, investigations, and enforcement actions.',
    services: [
      'Regulatory strategy and licensing',
      'Policy engagement and submissions',
      'Investigations and enforcement defence',
      'Internal compliance frameworks',
      'DPIIT, RBI, SEBI, sectoral authorities'
    ]
  },
  arbitration: {
    title: 'Arbitration',
    intro: 'Domestic and international arbitration including emergency reliefs, enforcement, and challenges to awards.',
    services: [
      'Domestic and international arbitration',
      'Emergency reliefs',
      'Section 9, 11, 34, 37 proceedings',
      'Enforcement of awards'
    ]
  }
} as const

export function generateStaticParams() {
  return Object.keys(practices).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: keyof typeof practices } }) {
  const p = practices[params.slug]
  if (!p) return {}
  return { title: p.title, description: p.intro }
}

export default function PracticePage({ params }: { params: { slug: keyof typeof practices } }) {
  const p = practices[params.slug]
  if (!p) return notFound()
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-semibold">{p.title}</h1>
      <p className="mt-4 max-w-3xl text-gray-700">{p.intro}</p>
      <h2 className="mt-8 text-xl font-semibold">How we help</h2>
      <ul className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3 list-disc pl-5">
        {p.services.map((s) => (
          <li key={s} className="text-gray-700">{s}</li>
        ))}
      </ul>
    </div>
  )
}