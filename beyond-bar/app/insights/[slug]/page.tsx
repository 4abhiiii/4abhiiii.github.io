import { notFound } from 'next/navigation'

const db = {
  'sebi-recent-update': {
    title: 'SEBI recent update — implications for startups',
    date: '2025-07-01',
    body: 'SEBI has issued updates impacting startups and investors. This note summarises key changes and practical steps.'
  },
  'supreme-court-arbitration': {
    title: 'Supreme Court on arbitrability — key takeaways',
    date: '2025-06-15',
    body: 'The Supreme Court clarified aspects of arbitrability. We analyse the decision and its impact on dispute strategy.'
  },
  'rbi-fema-changes': {
    title: 'RBI FEMA changes — what to know',
    date: '2025-05-20',
    body: 'Recent FEMA changes affect cross-border flows. This update explains key amendments and compliance requirements.'
  }
} as const

export function generateStaticParams() {
  return Object.keys(db).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: keyof typeof db } }) {
  const a = db[params.slug]
  if (!a) return {}
  return { title: a.title, description: a.body.slice(0, 120) }
}

export default function ArticlePage({ params }: { params: { slug: keyof typeof db } }) {
  const a = db[params.slug]
  if (!a) return notFound()
  return (
    <div className="container py-16">
      <p className="text-sm text-gray-500">{new Date(a.date).toLocaleDateString()}</p>
      <h1 className="mt-2 text-3xl font-semibold">{a.title}</h1>
      <div className="prose prose-gray mt-6 max-w-none">
        <p>{a.body}</p>
      </div>
      <script type="application/ld+json" suppressHydrationWarning>{JSON.stringify({
        '@context': 'https://schema.org', '@type': 'Article', headline: a.title, datePublished: a.date, author: { '@type': 'Organization', name: 'BEYOND BAR' }
      })}</script>
    </div>
  )
}