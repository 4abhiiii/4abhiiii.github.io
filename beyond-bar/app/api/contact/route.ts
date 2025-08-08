import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.json()
  // In production, send to CRM or email (e.g., SES/SendGrid). For now, log.
  console.log('Contact submission', data)
  return NextResponse.json({ ok: true })
}