import { ContactForm } from '@/components/forms/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Contact' }

export default function ContactPage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-semibold">Contact us</h1>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <ContactForm />
        </div>
        <div>
          <div className="rounded-xl border p-6 bg-white">
            <p className="font-semibold">Office</p>
            <p className="mt-2 text-sm text-gray-700">Connaught Place, New Delhi, 110001</p>
            <p className="mt-2 text-sm text-gray-700">+91 11 4000 0000</p>
            <p className="mt-2 text-sm text-gray-700">contact@beyondbar.in</p>
          </div>
        </div>
      </div>
    </div>
  )
}