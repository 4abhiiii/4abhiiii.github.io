"use client"
import { ReactNode, useEffect, useState } from 'react'

export function DisclaimerGate({ children }: { children: ReactNode }) {
  const [accepted, setAccepted] = useState(false)

  useEffect(() => {
    const v = typeof window !== 'undefined' && window.localStorage.getItem('bb_disclaimer_accepted')
    setAccepted(Boolean(v))
  }, [])

  if (accepted) return <>{children}</>

  return (
    <div>
      <div className="fixed inset-0 z-50 bg-black/50" />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
        <div className="max-w-2xl w-full rounded-xl bg-white p-6 shadow-xl">
          <h2 className="text-xl font-semibold">Disclaimer</h2>
          <p className="mt-4 text-sm text-gray-700">
            As per the applicable rules of the Bar Council of India, BEYOND BAR is not permitted to solicit work or advertise. By clicking “I Agree”, you acknowledge that you are seeking information of your own accord; no solicitation, invitation or inducement has been made by BEYOND BAR or its members. The information provided on this website is for general information and does not constitute legal advice.
          </p>
          <div className="mt-6 flex justify-end gap-3">
            <button className="px-4 py-2 rounded-md border" onClick={()=>window.location.href='https://google.com'}>Leave</button>
            <button className="px-4 py-2 rounded-md bg-brand-700 text-white" onClick={()=>{ localStorage.setItem('bb_disclaimer_accepted','1'); setAccepted(true) }}>I Agree</button>
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}