import React, { useState } from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import { BarChart3 } from 'lucide-react'

const activityData = [
  { date: 'Sep 26', logins: 220, orders: 130, profile: 60 },
  { date: 'Sep 27', logins: 260, orders: 150, profile: 70 },
  { date: 'Sep 28', logins: 300, orders: 170, profile: 80 },
  { date: 'Sep 29', logins: 250, orders: 140, profile: 65 },
  { date: 'Sep 30', logins: 230, orders: 120, profile: 55 },
  { date: 'Oct 1', logins: 310, orders: 180, profile: 85 },
  { date: 'Oct 2', logins: 340, orders: 200, profile: 95 },
]

const legend = [
  { label: 'Logins', value: '1,842', color: 'bg-purple-500' },
  { label: 'Orders', value: '892', color: 'bg-blue-400' },
  { label: 'Profile Updates', value: '436', color: 'bg-emerald-500' },
  { label: 'Other Actions', value: '225', color: 'bg-amber-400' },
]

function ChartTime() {
  const [range, setRange] = useState('7D')

  return (
    <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/20 dark:border-slate-700/50'>
      <div className='flex flex-wrap items-center justify-between gap-4 mb-6'>
        <div className='flex items-center space-x-3'>
          <div className='w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center'>
            <BarChart3 className='w-5 h-5 text-blue-400' />
          </div>
          <h3 className='text-lg font-bold text-slate-800 dark:text-white'>User Activity Overview</h3>
        </div>
        <div className='flex items-center bg-slate-100 dark:bg-slate-800 rounded-xl p-1'>
          {['24H', '7D', '30D', '3M'].map((label) => (
            <button
              key={label}
              onClick={() => setRange(label)}
              className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                range === label
                  ? 'bg-purple-600 text-white shadow'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className='flex flex-col lg:flex-row gap-6'>
        <div className='flex-1 h-72'>
          <ResponsiveContainer width='100%' height='100%'>
            <AreaChart data={activityData}>
              <defs>
                <linearGradient id='loginsFill' x1='0' y1='0' x2='0' y2='1'>
                  <stop offset='0%' stopColor='#a855f7' stopOpacity={0.5} />
                  <stop offset='100%' stopColor='#a855f7' stopOpacity={0} />
                </linearGradient>
                <linearGradient id='ordersFill' x1='0' y1='0' x2='0' y2='1'>
                  <stop offset='0%' stopColor='#3b82f6' stopOpacity={0.4} />
                  <stop offset='100%' stopColor='#3b82f6' stopOpacity={0} />
                </linearGradient>
                <linearGradient id='profileFill' x1='0' y1='0' x2='0' y2='1'>
                  <stop offset='0%' stopColor='#f59e0b' stopOpacity={0.4} />
                  <stop offset='100%' stopColor='#f59e0b' stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray='3 3' stroke='#334155' opacity={0.2} vertical={false} />
              <XAxis dataKey='date' stroke='#94a3b8' fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '12px', color: '#fff' }}
              />
              <Area type='monotone' dataKey='logins' stroke='#a855f7' strokeWidth={2} fill='url(#loginsFill)' dot={{ r: 3 }} />
              <Area type='monotone' dataKey='orders' stroke='#3b82f6' strokeWidth={2} fill='url(#ordersFill)' dot={{ r: 3 }} />
              <Area type='monotone' dataKey='profile' stroke='#f59e0b' strokeWidth={2} fill='url(#profileFill)' dot={{ r: 3 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className='lg:w-48 shrink-0 space-y-4'>
          {legend.map((item, i) => (
            <div key={i} className='flex items-center justify-between'>
              <div className='flex items-center space-x-2'>
                <div className={`w-2.5 h-2.5 rounded-full ${item.color}`}></div>
                <span className='text-sm text-slate-600 dark:text-slate-300'>{item.label}</span>
              </div>
              <span className='text-sm font-semibold text-slate-800 dark:text-white'>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChartTime