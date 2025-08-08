import Image from 'next/image'

export const metadata = { title: 'People' }

const people = [
  { slug: 'aarav-sharma', name: 'Aarav Sharma', title: 'Partner — Litigation', image: 'https://picsum.photos/seed/aarav/400/400' },
  { slug: 'isha-mehta', name: 'Isha Mehta', title: 'Partner — Corporate', image: 'https://picsum.photos/seed/isha/400/400' },
  { slug: 'kabir-singh', name: 'Kabir Singh', title: 'Counsel — Regulatory', image: 'https://picsum.photos/seed/kabir/400/400' },
]

export default function PeoplePage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-semibold">Our People</h1>
      <p className="mt-4 max-w-3xl text-gray-700">A collaborative team of advocates and corporate counsel with experience across courts and sectors.</p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {people.map((p) => (
          <a key={p.slug} href={`/people/${p.slug}`} className="rounded-xl border bg-white overflow-hidden hover:shadow-lg">
            <div className="relative h-64">
              <Image src={p.image} alt={p.name} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-sm text-gray-600">{p.title}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}