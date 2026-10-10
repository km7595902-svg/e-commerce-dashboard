import React from 'react'
import { Bell, ArrowUpRight } from 'lucide-react'

const alerts = [
  { image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100', name: 'Nike Air Max 270', sku: 'NK-204', left: '8 left', color: 'bg-red-500/15 text-red-400' },
  { image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=100', name: 'iPhone 15 Pro Case', sku: 'IP15-002', left: '5 left', color: 'bg-amber-500/15 text-amber-400' },
  { image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100', name: 'Smart Watch Pro', sku: 'SW-103', left: '3 left', color: 'bg-amber-500/15 text-amber-400' },
  { image: 'https://images.unsplash.com/photo-1598440947619-2c35cc9019b3?w=100', name: 'Beauty Cream', sku: 'BC-076', left: '7 left', color: 'bg-amber-500/15 text-amber-400' },
]

function LowStockAlert() {
  return (
    <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/20 dark:border-slate-700/50'>
      <div className='flex items-center justify-between mb-5'>
        <div className='flex items-center space-x-2'>
          <Bell className='w-4 h-4 text-red-400' />
          <h3 className='text-base font-bold text-slate-800 dark:text-white'>Low Stock Alert</h3>
        </div>
        <button className='text-blue-500 hover:text-blue-600 text-xs font-medium flex items-center space-x-1'>
          <span>View All</span>
          <ArrowUpRight className='w-3.5 h-3.5' />
        </button>
      </div>

      <div className='space-y-4'>
        {alerts.map((item, i) => (
          <div key={i} className='flex items-center space-x-3'>
            <img src={item.image} alt={item.name} className='w-15 h-17 rounded-xl object-cover shrink-0' />
            <div className='flex-1 min-w-0'>
              <p className='text-sm font-medium text-slate-800 dark:text-white truncate'>{item.name}</p>
              <p className='text-xs text-slate-500 dark:text-slate-400'>SKU: {item.sku}</p>
            </div>
            <span className={`px-2.5 py-1 text-xs font-semibold rounded-full whitespace-nowrap shrink-0 ${item.color}`}>
              {item.left}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LowStockAlert