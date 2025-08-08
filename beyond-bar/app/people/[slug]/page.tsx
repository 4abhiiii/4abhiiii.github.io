import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

const db = {
  'aarav-sharma': { name: 'Aarav Sharma', title: 'Partner — Litigation', bio: 'Aarav represents clients in complex civil and commercial disputes, with experience before the Delhi High Court and the Supreme Court of India.', image: 'https://picsum.photos/seed/aarav/800/800' },
  'isha-mehta': { name: 'Isha Mehta', title: 'Partner — Corporate', bio: 'Isha advises on M&A, investments, and complex commercial contracts. She works closely with founders and investors across growth stages.', image: 'https://picsum.photos/seed/isha/800/800' },
  'kabir-singh': { name: 'Kabir Singh', title: 'Counsel — Regulatory', bio: 'Kabir counsels on regulatory strategy, licensing, and enforcement defence across technology and financial services.', image: 'https://picsum.photos/seed/kabir/800/800' },
} as const

export function generateStaticParams() {
  return Object.keys(db).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: keyof typeof db } }): Promise<Metadata> {
  const p = db[params.slug]
  if (!p) return {}
  return { title: `${p.name}`, description: `${p.title} at BEYOND BAR` }
}

export default function PersonPage({ params }: { params: { slug: keyof typeof db } }) {
  const person = db[params.slug]
  if (!person) return notFound()
  return (
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="relative h-80 md:h-full">
          <Image src={person.image} alt={person.name} fill className="object-cover rounded-xl" />
        </div>
        <div className="md:col-span-2">
          <h1 className="text-3xl font-semibold">{person.name}</h1>
          <p className="mt-2 text-gray-600">{person.title}</p>
          <p className="mt-4 text-gray-700 max-w-3xl">{person.bio}</p>
          <a href="/contact" className="mt-6 inline-block rounded-md bg-brand-700 text-white px-5 py-3 font-semibold hover:bg-brand-800">Contact</a>
        </div>
      </div>
      <script type="application/ld+json" suppressHydrationWarning>{JSON.stringify({
        '@context': 'https://schema.org', '@type': 'Person', name: person.name, jobTitle: person.title, worksFor: { '@type': 'LegalService', name: 'BEYOND BAR' }
      })}</script>
    </div>
  )
}