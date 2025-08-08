export const metadata = { title: 'About' }

export default function AboutPage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-semibold">About BEYOND BAR</h1>
      <p className="mt-4 max-w-3xl text-gray-700">BEYOND BAR is a Delhi-based full-service law firm. We combine courtroom experience with commercial acumen to deliver precise, pragmatic advice across contentious and non-contentious matters.</p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Client-Centered', desc: 'Clear, actionable guidance aligned to your business objectives.' },
          { title: 'Outcome-Focused', desc: 'Relentless preparation and strategic execution.' },
          { title: 'Trusted Counsel', desc: 'Long-term partnerships with founders, institutions, and individuals.' },
        ].map((i) => (
          <div key={i.title} className="rounded-xl border p-6 bg-white">
            <h3 className="font-semibold">{i.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{i.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}