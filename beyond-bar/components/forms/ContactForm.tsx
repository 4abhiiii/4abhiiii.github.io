"use client"
import { useForm } from 'react-hook-form'

type FormValues = { name: string; email: string; phone?: string; subject: string; message: string }

export function ContactForm() {
  const { register, handleSubmit, formState: { isSubmitting, isSubmitSuccessful } } = useForm<FormValues>()
  const onSubmit = async (data: FormValues) => {
    await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="text-sm">Full name</label>
        <input className="mt-1 w-full rounded-md border p-2" {...register('name', { required: true })} />
      </div>
      <div>
        <label className="text-sm">Email</label>
        <input className="mt-1 w-full rounded-md border p-2" type="email" {...register('email', { required: true })} />
      </div>
      <div>
        <label className="text-sm">Phone (optional)</label>
        <input className="mt-1 w-full rounded-md border p-2" {...register('phone')} />
      </div>
      <div>
        <label className="text-sm">Subject</label>
        <input className="mt-1 w-full rounded-md border p-2" {...register('subject', { required: true })} />
      </div>
      <div className="md:col-span-2">
        <label className="text-sm">Message</label>
        <textarea className="mt-1 w-full rounded-md border p-2 h-40" {...register('message', { required: true })} />
      </div>
      <div className="md:col-span-2">
        <button disabled={isSubmitting} className="rounded-md bg-brand-700 text-white px-5 py-3 font-semibold hover:bg-brand-800 disabled:opacity-50">{isSubmitting ? 'Sending…' : 'Send message'}</button>
        {isSubmitSuccessful && <p className="text-sm text-green-700 mt-2">Thank you— we will be in touch.</p>}
      </div>
    </form>
  )
}