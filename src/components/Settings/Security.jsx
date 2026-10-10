import React from 'react'
import { ShieldCheck, Lock, ShieldHalf, Monitor, ChevronRight } from 'lucide-react'

const items = [
  { icon: Lock, title: 'Change Password', desc: 'Update your password regularly' },
  { icon: ShieldHalf, title: 'Two-Factor Authentication (2FA)', desc: 'Add an extra layer of security', badge: 'Enabled' },
  { icon: Monitor, title: 'Active Sessions', desc: 'Manage your logged in devices' },
]

function Security() {
  return (
    <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/20 dark:border-slate-700/50'>
      <div className='flex items-center space-x-3 mb-5'>
        <div className='w-10 h-10 rounded-xl bg-emerald-600/20 flex items-center justify-center'>
          <ShieldCheck className='w-5 h-5 text-emerald-400' />
        </div>
        <div>
          <h3 className='text-base font-bold text-slate-800 dark:text-white'>Security</h3>
          <p className='text-xs text-slate-500 dark:text-slate-400'>Keep your account safe and secure.</p>
        </div>
      </div>

      <div className='space-y-2'>
        {items.map((item, i) => (
          <button
            key={i}
            className='w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors'
          >
            <div className='flex items-center space-x-3'>
              <div className='w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0'>
                <item.icon className='w-4 h-4 text-slate-500 dark:text-slate-400' />
              </div>
              <div className='text-left'>
                <p className='text-sm font-medium text-slate-800 dark:text-white'>{item.title}</p>
                <p className='text-xs text-slate-500 dark:text-slate-400'>{item.desc}</p>
              </div>
            </div>
            <div className='flex items-center space-x-2'>
              {item.badge && (
                <span className='px-2.5 py-1 text-xs font-medium rounded-full bg-emerald-500/15 text-emerald-400'>
                  {item.badge}
                </span>
              )}
              <ChevronRight className='w-4 h-4 text-slate-400' />
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Security