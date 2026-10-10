import React, { useState } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from 'recharts'
import { TrendingUp, PieChart as PieChartIcon, ArrowUpRight } from 'lucide-react'

const growthData = [
  { date: 'Sep 28', newCustomers: 60, returning: 40 },
  { date: 'Sep 29', newCustomers: 90, returning: 55 },
  { date: 'Sep 30', newCustomers: 130, returning: 80 },
  { date: 'Oct 1', newCustomers: 170, returning: 110 },
  { date: 'Oct 2', newCustomers: 230, returning: 150 },
  { date: 'Oct 3', newCustomers: 280, returning: 190 },
  { date: 'Oct 4', newCustomers: 350, returning: 240 },
]

const segments = [
  { name: 'VIP', value: 462, percent: 12, color: '#a855f7' },
  { name: 'Regular', value: 1842, percent: 48, color: '#3b82f6' },
  { name: 'New', value: 961, percent: 25, color: '#10b981' },
  { name: 'Inactive', value: 577, percent: 15, color: '#f59e0b' },
]

const recentCustomers = [
  { avatar: 'https://i.pravatar.cc/40?img=33', name: 'Arijit Mondal', email: 'arijit@example.com', time: '2 hours ago' },
  { avatar: 'https://i.pravatar.cc/40?img=47', name: 'Tania Roy', email: 'tania@example.com', time: '5 hours ago' },
  { avatar: 'https://i.pravatar.cc/40?img=52', name: 'Debashis Paul', email: 'debashis@example.com', time: '7 hours ago' },
  { avatar: 'https://i.pravatar.cc/40?img=44', name: 'Soma Karmakar', email: 'soma@example.com', time: '9 hours ago' },
]

function SidePanel() {
  const [range, setRange] = useState('7D')

  return (
    <div className='space-y-6'>
      {/* Customer Growth */}
      <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/20 dark:border-slate-700/50'>
        <div className='flex flex-wrap items-center justify-between gap-3 mb-4'>
          <div className='flex items-center space-x-2'>
            <TrendingUp className='w-4 h-4 text-purple-400' />
            <h3 className='text-base font-bold text-slate-800 dark:text-white'>Customer Growth</h3>
          </div>
          <div className='flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-1'>
            {['7D', '30D', '3M'].map((label) => (
              <button
                key={label}
                onClick={() => setRange(label)}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                  range === label ? 'bg-purple-600 text-white shadow' : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className='flex items-center space-x-4 mb-3'>
          <div className='flex items-center space-x-1.5'>
            <div className='w-2.5 h-2.5 rounded-full bg-purple-500'></div>
            <span className='text-xs text-slate-600 dark:text-slate-400'>New Customers</span>
          </div>
          <div className='flex items-center space-x-1.5'>
            <div className='w-2.5 h-2.5 rounded-full bg-blue-400'></div>
            <span className='text-xs text-slate-600 dark:text-slate-400'>Returning Customers</span>
          </div>
        </div>

        <div className='h-48'>
          <ResponsiveContainer width='100%' height='100%'>
            <LineChart data={growthData}>
              <CartesianGrid strokeDasharray='3 3' stroke='#334155' opacity={0.2} vertical={false} />
              <XAxis dataKey='date' stroke='#94a3b8' fontSize={10} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '12px', color: '#fff' }}
              />
              <Line type='monotone' dataKey='newCustomers' stroke='#a855f7' strokeWidth={2} dot={{ r: 3 }} />
              <Line type='monotone' dataKey='returning' stroke='#3b82f6' strokeWidth={2} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Customer Segments */}
      <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/20 dark:border-slate-700/50'>
        <div className='flex items-center justify-between mb-4'>
          <div className='flex items-center space-x-2'>
            <PieChartIcon className='w-4 h-4 text-purple-400' />
            <h3 className='text-base font-bold text-slate-800 dark:text-white'>Customer Segments</h3>
          </div>
          <button className='text-blue-500 hover:text-blue-600 text-xs font-medium flex items-center space-x-1'>
            <span>View All</span>
            <ArrowUpRight className='w-3.5 h-3.5' />
          </button>
        </div>

        <div className='relative h-40 flex items-center justify-center mb-4'>
          <ResponsiveContainer width='100%' height='100%'>
            <PieChart>
              <Pie data={segments} cx='50%' cy='50%' innerRadius={48} outerRadius={68} paddingAngle={3} dataKey='value'>
                {segments.map((entry, i) => (
                  <Cell key={i} fill={entry.color} stroke='none' />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className='absolute inset-0 flex flex-col items-center justify-center pointer-events-none'>
            <p className='text-lg font-bold text-slate-800 dark:text-white'>3,842</p>
            <p className='text-xs text-slate-500 dark:text-slate-400'>Total Customers</p>
          </div>
        </div>

        <div className='space-y-2.5'>
          {segments.map((item, i) => (
            <div key={i} className='flex items-center justify-between text-sm'>
              <div className='flex items-center space-x-2'>
                <div className='w-2.5 h-2.5 rounded-full' style={{ backgroundColor: item.color }}></div>
                <span className='text-slate-600 dark:text-slate-300'>{item.name}</span>
              </div>
              <div className='flex items-center space-x-3'>
                <span className='text-xs text-slate-400'>{item.percent}%</span>
                <span className='font-medium text-slate-800 dark:text-white w-10 text-right'>{item.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Customers */}
      <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/20 dark:border-slate-700/50'>
        <div className='flex items-center justify-between mb-4'>
          <h3 className='text-base font-bold text-slate-800 dark:text-white'>Recent Customers</h3>
          <button className='text-blue-500 hover:text-blue-600 text-xs font-medium flex items-center space-x-1'>
            <span>View All</span>
            <ArrowUpRight className='w-3.5 h-3.5' />
          </button>
        </div>

        <div className='space-y-4'>
          {recentCustomers.map((c, i) => (
            <div key={i} className='flex items-center space-x-3'>
              <img src={c.avatar} alt={c.name} className='w-9 h-9 rounded-full shrink-0' />
              <div className='flex-1 min-w-0'>
                <p className='text-sm font-medium text-slate-800 dark:text-white truncate'>{c.name}</p>
                <p className='text-xs text-slate-500 dark:text-slate-400 truncate'>{c.email}</p>
              </div>
              <div className='flex items-center space-x-1 shrink-0'>
                <span className='text-xs text-slate-400 whitespace-nowrap'>{c.time}</span>
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