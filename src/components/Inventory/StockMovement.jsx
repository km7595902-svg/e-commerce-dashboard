import React from 'react'
import { BarChart, Bar, XAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import { Activity } from 'lucide-react'

const data = [
  { date: 'Sep 20', in: 650, out: 420, damaged: 180, returned: 120 },
  { date: 'Sep 23', in: 780, out: 350, damaged: 220, returned: 90 },
  { date: 'Sep 26', in: 600, out: 500, damaged: 160, returned: 140 },
  { date: 'Sep 26', in: 700, out: 400, damaged: 200, returned: 100 },
  { date: 'Sep 29', in: 900, out: 300, damaged: 250, returned: 80 },
  { date: 'Oct 2', in: 820, out: 380, damaged: 190, returned: 110 },
  { date: 'Oct 5', in: 950, out: 150, damaged: 50, returned: 60 },
  { date: 'Oct 8', in: 880, out: 520, damaged: 230, returned: 150 },
]

function StockMovement() {
  return (
    <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/20 dark:border-slate-700/50'>
      <div className='flex flex-wrap items-center justify-between gap-3 mb-6'>
        <div className='flex items-center space-x-2'>
          <Activity className='w-4 h-4 text-blue-400' />
          <h3 className='text-base font-bold text-slate-800 dark:text-white'>Stock Movement</h3>
        </div>
        <div className='flex items-center flex-wrap gap-3'>
          <div className='flex items-center space-x-1.5'>
            <div className='w-2.5 h-2.5 rounded-full bg-emerald-400'></div>
            <span className='text-xs text-slate-600 dark:text-slate-400'>Stock In</span>
          </div>
          <div className='flex items-center space-x-1.5'>
            <div className='w-2.5 h-2.5 rounded-full bg-pink-500'></div>
            <span className='text-xs text-slate-600 dark:text-slate-400'>Stock Out</span>
          </div>
          <div className='flex items-center space-x-1.5'>
            <div className='w-2.5 h-2.5 rounded-full bg-amber-400'></div>
            <span className='text-xs text-slate-600 dark:text-slate-400'>Damaged</span>
          </div>
          <div className='flex items-center space-x-1.5'>
            <div className='w-2.5 h-2.5 rounded-full bg-purple-500'></div>
            <span className='text-xs text-slate-600 dark:text-slate-400'>Returned</span>
          </div>
        </div>
      </div>

      <div className='h-80'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray='3 3' stroke='#334155' opacity={0.2} vertical={false} />
            <XAxis dataKey='date' stroke='#94a3b8' fontSize={11} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '12px', color: '#fff' }}
            />
            <Bar dataKey='in' fill='#34d399' radius={[4, 4, 0, 0]} />
            <Bar dataKey='out' fill='#ec4899' radius={[4, 4, 0, 0]} />
            <Bar dataKey='damaged' fill='#fbbf24' radius={[4, 4, 0, 0]} />
            <Bar dataKey='returned' fill='#a855f7' radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default StockMovement