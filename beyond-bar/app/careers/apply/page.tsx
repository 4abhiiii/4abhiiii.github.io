"use client"
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const Schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  role: z.string().min(2),
  message: z.string().min(10),
})

type FormValues = z.infer<typeof Schema>

export default function ApplyPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<FormValues>({ resolver: zodResolver(Schema) })

  const onSubmit = async (data: FormValues) => {
    await fetch('/api/apply', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
  }

  return (
    <div className="container py-16">
      <h1 className="text-3xl font-semibold">Apply</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="text-sm">Full name</label>
          <input className="mt-1 w-full rounded-md border p-2" {...register('name')} />
          {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="text-sm">Email</label>
          <input className="mt-1 w-full rounded-md border p-2" type="email" {...register('email')} />
          {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="text-sm">Phone</label>
          <input className="mt-1 w-full rounded-md border p-2" {...register('phone')} />
          {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>}
        </div>
        <div>
          <label className="text-sm">Role</label>
          <input className="mt-1 w-full rounded-md border p-2" {...register('role')} />
          {errors.role && <p className="text-sm text-red-600 mt-1">{errors.role.message}</p>}
        </div>
        <div className="md:col-span-2">
          <label className="text-sm">Message</label>
          <textarea className="mt-1 w-full rounded-md border p-2 h-32" {...register('message')} />
          {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>}
        </div>
        <div className="md:col-span-2">
          <button disabled={isSubmitting} className="rounded-md bg-brand-700 text-white px-5 py-3 font-semibold hover:bg-brand-800 disabled:opacity-50">{isSubmitting ? 'Submitting…' : 'Submit application'}</button>
          {isSubmitSuccessful && <p className="text-sm text-green-700 mt-2">Thank you— we will be in touch.</p>}
        </div>
      </form>
    </div>
  )
}