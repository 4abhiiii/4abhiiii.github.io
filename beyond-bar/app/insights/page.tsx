import Link from 'next/link'

export const metadata = { title: 'Insights' }

const posts = [
  { slug: 'sebi-recent-update', title: 'SEBI recent update — implications for startups', date: '2025-07-01' },
  { slug: 'supreme-court-arbitration', title: 'Supreme Court on arbitrability — key takeaways', date: '2025-06-15' },
  { slug: 'rbi-fema-changes', title: 'RBI FEMA changes — what to know', date: '2025-05-20' },
]

export default function InsightsPage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-semibold">Insights</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((p) => (
          <Link key={p.slug} href={`/insights/${p.slug}`} className="rounded-xl border p-6 bg-white hover:shadow-lg">
            <p className="text-sm text-gray-500">{new Date(p.date).toLocaleDateString()}</p>
            <h2 className="mt-2 font-semibold">{p.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  )
}