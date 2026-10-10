import React from 'react'
import {
  User,
  Lock,
  Bell,
  Palette,
  Globe,
  Plug,
  CreditCard,
  ShieldAlert,
  AlertTriangle,
} from 'lucide-react'

const navItems = [
  { id: 'profile', icon: User, title: 'Profile', desc: 'Manage your personal info' },
  { id: 'security', icon: Lock, title: 'Account & Security', desc: 'Password, 2FA and more' },
  { id: 'notifications', icon: Bell, title: 'Notifications', desc: 'Email, push and alerts' },
  { id: 'appearance', icon: Palette, title: 'Appearance', desc: 'Theme, sidebar and layout' },
  { id: 'language', icon: Globe, title: 'Language & Region', desc: 'Language, timezone and more' },
  { id: 'integrations', icon: Plug, title: 'Integrations', desc: 'Connect your favorite tools' },
  { id: 'billing', icon: CreditCard, title: 'Billing & Subscription', desc: 'Plans, invoices and payment' },
  { id: 'privacy', icon: ShieldAlert, title: 'Privacy', desc: 'Data and privacy settings' },
]

function SettingsNav({ active, onSelect }) {
  return (
    <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/20 dark:border-slate-700/50 overflow-hidden'>
      <div className='p-2 space-y-1'>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={`w-full flex items-center space-x-3 p-3 rounded-xl text-left transition-colors ${
              active === item.id
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50'
            }`}
          >
            <item.icon className='w-5 h-5 shrink-0' />
            <div className='min-w-0'>
              <p className='text-sm font-semibold truncate'>{item.title}</p>
              <p className={`text-xs truncate ${active === item.id ? 'text-blue-100' : 'text-slate-400'}`}>{item.desc}</p>
            </div>
          </button>
        ))}

        <div className='pt-1 mt-1 border-t border-slate-200/50 dark:border-slate-700/50'>
          <button className='w-full flex items-center space-x-3 p-3 rounded-xl text-left text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors'>
            <AlertTriangle className='w-5 h-5 shrink-0' />
            <div className='min-w-0'>
              <p className='text-sm font-semibold'>Danger Zone</p>
              <p className='text-xs text-red-400'>Delete account, reset data</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SettingsNav