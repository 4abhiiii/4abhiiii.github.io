export const metadata = { title: 'Careers' }

export default function CareersPage() {
  const openings = [
    { role: 'Litigation Associate (1–3 PQE)', location: 'Delhi', type: 'Full-time' },
    { role: 'Corporate Associate (2–4 PQE)', location: 'Delhi', type: 'Full-time' },
  ]
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-semibold">Careers at BEYOND BAR</h1>
      <p className="mt-4 max-w-3xl text-gray-700">We hire driven lawyers who value clarity, preparation, and client service. If there are no suitable openings, write to us anyway.</p>
      <div className="mt-8 grid gap-4">
        {openings.map((o) => (
          <div key={o.role} className="rounded-xl border p-6 bg-white flex items-center justify-between">
            <div>
              <p className="font-semibold">{o.role}</p>
              <p className="text-sm text-gray-600">{o.location} • {o.type}</p>
            </div>
            <a href="/careers/apply" className="rounded-md bg-brand-700 text-white px-4 py-2 text-sm font-semibold hover:bg-brand-800">Apply</a>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <a href="/careers/apply" className="rounded-md border px-4 py-2 text-sm">Send your CV</a>
      </div>
    </div>
  )
}