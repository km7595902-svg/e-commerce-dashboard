import React, { useState } from 'react'
import { Bell, Mail, Smartphone, ShoppingCart, Megaphone } from 'lucide-react'

function Toggle({ checked, onChange }) {
  return (
    <button
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors shrink-0 ${
        checked ? 'bg-blue-600' : 'bg-slate-300 dark:bg-slate-700'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          checked ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  )
}

const initial = [
  { icon: Mail, title: 'Email Notifications', desc: 'Receive updates via email', on: true },
  { icon: Bell, title: 'Push Notifications', desc: 'Browser and app notifications', on: true },
  { icon: ShoppingCart, title: 'Order Alerts', desc: 'New orders, refunds and updates', on: true },
  { icon: Megaphone, title: 'Marketing Emails', desc: 'Product updates and offers', on: false },
]

function Notifications() {
  const [items, setItems] = useState(initial)

  const toggle = (i) => {
    setItems((prev) => prev.map((it, idx) => (idx === i ? { ...it, on: !it.on } : it)))
  }

  return (
    <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/20 dark:border-slate-700/50'>
      <div className='flex items-center space-x-3 mb-5'>
        <div className='w-10 h-10 rounded-xl bg-amber-600/20 flex items-center justify-center'>
          <Bell className='w-5 h-5 text-amber-400' />
        </div>
        <div>
          <h3 className='text-base font-bold text-slate-800 dark:text-white'>Notifications</h3>
          <p className='text-xs text-slate-500 dark:text-slate-400'>Choose what you want to be notified about.</p>
        </div>
      </div>

      <div className='space-y-4'>
        {items.map((item, i) => (
          <div key={i} className='flex items-center justify-between'>
            <div className='flex items-center space-x-3'>
              <div className='w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0'>
                <item.icon className='w-4 h-4 text-slate-500 dark:text-slate-400' />
              </div>
              <div>
                <p className='text-sm font-medium text-slate-800 dark:text-white'>{item.title}</p>
                <p className='text-xs text-slate-500 dark:text-slate-400'>{item.desc}</p>
              </div>
            </div>
            <Toggle checked={item.on} onChange={() => toggle(i)} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Notifications