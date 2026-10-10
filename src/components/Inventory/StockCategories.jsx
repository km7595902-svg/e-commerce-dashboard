import React from 'react'
import { Laptop, Shirt, Sparkles, Home, ShoppingBag, ChevronRight, ArrowUpRight } from 'lucide-react'

const categories = [
  { icon: Laptop, bg: 'bg-blue-500/15 text-blue-400', name: 'Electronics', items: '3,482 items', percent: 82, bar: 'bg-blue-500' },
  { icon: Shirt, bg: 'bg-pink-500/15 text-pink-400', name: 'Fashion', items: '2,960 items', percent: 74, bar: 'bg-pink-500' },
  { icon: Sparkles, bg: 'bg-emerald-500/15 text-emerald-400', name: 'Beauty', items: '1,248 items', percent: 68, bar: 'bg-emerald-500' },
  { icon: Home, bg: 'bg-amber-500/15 text-amber-400', name: 'Home & Living', items: '1,032 items', percent: 54, bar: 'bg-amber-500' },
  { icon: ShoppingBag, bg: 'bg-purple-500/15 text-purple-400', name: 'Accessories', items: '758 items', percent: 46, bar: 'bg-purple-500' },
]

function StockCategories() {
  return (
    <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/20 dark:border-slate-700/50'>
      <div className='flex items-center justify-between mb-5'>
        <div className='flex items-center space-x-2'>
          <Laptop className='w-4 h-4 text-blue-400' />
          <h3 className='text-base font-bold text-slate-800 dark:text-white'>Stock Categories</h3>
        </div>
        <button className='text-blue-500 hover:text-blue-600 text-xs font-medium flex items-center space-x-1'>
          <span>View All</span>
          <ArrowUpRight className='w-3.5 h-3.5' />
        </button>
      </div>

      <div className='space-y-4'>
        {categories.map((cat, i) => (
          <button key={i} className='w-full flex items-center space-x-3 group'>
            <div className={`w-9 h-13 rounded-xl flex items-center justify-center shrink-0 ${cat.bg}`}>
              <cat.icon className='w-4 h-4' />
            </div>
            <div className='flex-1 min-w-0 text-left'>
              <p className='text-sm font-medium text-slate-800 dark:text-white'>{cat.name}</p>
              <p className='text-xs text-slate-500 dark:text-slate-400 mb-1.5'>{cat.items}</p>
              <div className='h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden'>
                <div className={`h-full rounded-full ${cat.bar}`} style={{ width: `${cat.percent}%` }}></div>
              </div>
            </div>
            <span className='text-sm font-semibold text-slate-600 dark:text-slate-300 shrink-0'>{cat.percent}%</span>
            <ChevronRight className='w-4 h-4 text-slate-400 shrink-0 group-hover:translate-x-0.5 transition-transform' />
          </button>
        ))}
      </div>
    </div>
  )
}

export default StockCategories