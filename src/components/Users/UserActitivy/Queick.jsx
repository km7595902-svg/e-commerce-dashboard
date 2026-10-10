import React, { useState } from 'react'
import {
  Filter,
  ChevronRight,
  ListFilter,
  LogIn,
  ShoppingCart,
  UserCog,
  ShieldAlert,
} from 'lucide-react'

const quickFilters = [
  { label: 'All Activities', value: '8,456', icon: ListFilter, active: true },
  { label: 'Logins', value: '1,842', icon: LogIn, active: false },
  { label: 'Orders', value: '892', icon: ShoppingCart, active: false },
  { label: 'Profile Updates', value: '436', icon: UserCog, active: false },
  { label: 'Security Events', value: '24', icon: ShieldAlert, active: false },
]

function Queick() {
  const [activeFilter, setActiveFilter] = useState('All Activities')

  return (
    <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/20 dark:border-slate-700/50'>
      <div className='flex items-center space-x-3 mb-5'>
        <div className='w-10 h-10 rounded-xl bg-purple-600/20 flex items-center justify-center'>
          <Filter className='w-5 h-5 text-purple-400' />
        </div>
        <h3 className='text-lg font-bold text-slate-800 dark:text-white'>Quick Filters</h3>
      </div>

      <div className='space-y-2'>
        {quickFilters.map((filter, i) => (
          <button
            key={i}
            onClick={() => setActiveFilter(filter.label)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
              activeFilter === filter.label
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50'
            }`}
          >
            <span className='flex items-center space-x-2'>
              <filter.icon className='w-4 h-4' />
              <span>{filter.label}</span>
            </span>
            <span className='flex items-center space-x-1'>
              <span className={activeFilter === filter.label ? 'text-white' : 'text-slate-400'}>
                {filter.value}
              </span>
              <ChevronRight className='w-4 h-4' />
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Queick