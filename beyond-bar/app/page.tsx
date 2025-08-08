import Link from 'next/link'
import Image from 'next/image'
import { Briefcase, Gavel, Scale, ShieldCheck } from 'lucide-react'

export default function HomePage() {
  return (
    <div>
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-brand-900 to-brand-700 text-white">
        <div className="container py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">BEYOND BAR</h1>
            <p className="mt-6 text-lg leading-8 text-brand-100">Delhi-based full-service law firm. Litigation, corporate advisory, and regulatory counsel trusted by high-growth companies, institutions, and individuals.</p>
            <div className="mt-8 flex gap-4">
              <Link className="rounded-md bg-white px-5 py-3 text-brand-800 font-semibold hover:bg-brand-50" href="/contact">Schedule a consultation</Link>
              <Link className="rounded-md ring-1 ring-white/40 px-5 py-3 hover:bg-white/10" href="/people">Meet our lawyers</Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 opacity-10">
          <Image src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1600&auto=format&fit=crop" alt="Courtroom" fill className="object-cover" />
        </div>
      </section>

      <section className="container py-16">
        <h2 className="text-2xl font-semibold">Practice Areas</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Litigation & Disputes', icon: Gavel, href: '/practices/litigation' },
            { title: 'Corporate & Commercial', icon: Briefcase, href: '/practices/corporate' },
            { title: 'Regulatory & Compliance', icon: ShieldCheck, href: '/practices/regulatory' },
            { title: 'Arbitration', icon: Scale, href: '/practices/arbitration' },
          ].map((p) => (
            <Link key={p.title} href={p.href} className="group rounded-xl border p-6 hover:shadow-lg transition bg-white">
              <p.icon className="h-6 w-6 text-brand-700" />
              <h3 className="mt-4 text-lg font-semibold group-hover:text-brand-700">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600">Explore how we navigate complex matters with precision and business-first clarity.</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="container py-16">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Insights</h2>
            <Link href="/insights" className="text-brand-700 hover:underline">View all</Link>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <Link key={i} href={`/insights/article-${i}`} className="rounded-xl border bg-white overflow-hidden hover:shadow-lg">
                <div className="relative h-48">
                  <Image src={`https://picsum.photos/seed/law${i}/800/400`} alt="Article" fill className="object-cover" />
                </div>
                <div className="p-5">
                  <p className="text-sm text-gray-500">Update</p>
                  <h3 className="mt-2 font-semibold">Regulatory update {i}: What it means</h3>
                  <p className="mt-2 text-sm text-gray-600">A concise explanation of recent legal developments and practical implications.</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container py-16">
          <div className="rounded-2xl bg-brand-50 p-8 md:p-12 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-brand-800">Work with BEYOND BAR</h2>
              <p className="mt-3 text-brand-800/80">Send us a brief of your matter and we will be in touch within one business day.</p>
            </div>
            <Link href="/contact" className="rounded-md bg-brand-700 text-white px-6 py-3 font-semibold hover:bg-brand-800">Contact us</Link>
          </div>
        </div>
      </section>
    </div>
  )
}