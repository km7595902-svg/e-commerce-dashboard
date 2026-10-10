import React from 'react'
import { Box, Star, Home, Sparkles, Package, Grid3x3, ArrowUpRight } from 'lucide-react'

const categories = [
  { icon: Box, bg: 'bg-blue-500/15 text-blue-400', name: 'Electronics', count: 68, percent: 27.4, bar: 'bg-blue-500' },
  { icon: Star, bg: 'bg-purple-500/15 text-purple-400', name: 'Fashion', count: 52, percent: 21.0, bar: 'bg-purple-500' },
  { icon: Home, bg: 'bg-emerald-500/15 text-emerald-400', name: 'Home & Living', count: 40, percent: 16.1, bar: 'bg-emerald-500' },
  { icon: Sparkles, bg: 'bg-pink-500/15 text-pink-400', name: 'Beauty', count: 28, percent: 11.3, bar: 'bg-pink-500' },
  { icon: Package, bg: 'bg-amber-500/15 text-amber-400', name: 'Accessories', count: 24, percent: 9.7, bar: 'bg-amber-500' },
  { icon: Grid3x3, bg: 'bg-cyan-500/15 text-cyan-400', name: 'Others', count: 36, percent: 14.5, bar: 'bg-cyan-500' },
]

const recentProducts = [
  { image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=100', name: 'Samsung Galaxy Buds', price: '$129.00', time: '2 hours ago' },
  { image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100', name: 'Wooden Chair', price: '$89.00', time: '4 hours ago' },
  { image: 'https://images.unsplash.com/photo-1598440947619-2c35cc9019b3?w=100', name: 'Face Serum', price: '$24.00', time: '6 hours ago' },
  { image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100', name: 'Running Shoes', price: '$79.00', time: '8 hours ago' },
]

function SidePanel() {
  return (
    <div className='space-y-6'>
      <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/20 dark:border-slate-700/50'>
        <div className='flex items-center justify-between mb-5'>
          <h3 className='text-lg font-bold text-slate-800 dark:text-white'>Product Categories</h3>
          <button className='text-blue-500 hover:text-blue-600 text-sm font-medium flex items-center space-x-1'>
            <span>View All</span>
            <ArrowUpRight className='w-4 h-4' />
          </button>
        </div>

        <div className='space-y-4'>
          {categories.map((cat, i) => (
            <div key={i}>
              <div className='flex items-center justify-between mb-1.5'>
                <div className='flex items-center space-x-2'>
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${cat.bg}`}>
                    <cat.icon className='w-3.5 h-3.5' />
                  </div>
                  <span className='text-sm text-slate-700 dark:text-slate-300'>{cat.name}</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <span className='text-sm font-semibold text-slate-800 dark:text-white'>{cat.count}</span>
                  <span className='text-xs text-slate-400'>{cat.percent}%</span>
                </div>
              </div>
              <div className='h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden ml-9'>
                <div className={`h-full rounded-full ${cat.bar}`} style={{ width: `${cat.percent}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/20 dark:border-slate-700/50'>
        <div className='flex items-center justify-between mb-5'>
          <h3 className='text-lg font-bold text-slate-800 dark:text-white'>Recent Products</h3>
          <button className='text-blue-500 hover:text-blue-600 text-sm font-medium flex items-center space-x-1'>
            <span>View All</span>
            <ArrowUpRight className='w-4 h-4' />
          </button>
        </div>

        <div className='space-y-4'>
          {recentProducts.map((p, i) => (
            <div key={i} className='flex items-center space-x-3'>
              <img src={p.image} alt={p.name} className='w-10 h-10 rounded-lg object-cover shrink-0' />
              <div className='flex-1 min-w-0'>
                <p className='text-sm font-medium text-slate-800 dark:text-white truncate'>{p.name}</p>
                <p className='text-xs text-slate-500 dark:text-slate-400'>{p.price}</p>
              </div>
              <div className='flex items-center space-x-1 shrink-0'>
                <span className='text-xs text-slate-400 whitespace-nowrap'>{p.time}</span>
                <span className='w-1.5 h-1.5 rounded-full bg-emerald-400'></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SidePanel