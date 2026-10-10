import React from 'react'
import { ShieldCheck } from 'lucide-react'

function Banner() {
  return (
    <div className='relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 p-6 flex items-center justify-between'>
      <div>
        <h3 className='text-white font-bold text-lg'>Keep your account secure</h3>
        <p className='text-indigo-100 text-sm'>Update your settings to get the best experience.</p>
      </div>
      <div className='w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center shrink-0'>
        <ShieldCheck className='w-6 h-6 text-white' />
      </div>
    </div>
  )
}

export default Banner