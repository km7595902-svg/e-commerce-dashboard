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
import { CheckCircle, Clock, XCircle, Loader2, ArrowRight } from 'lucide-react'

const performanceData = [
  { date: 'Sep 28', orders: 600, revenue: 400 },
  { date: 'Sep 29', orders: 750, revenue: 500 },
  { date: 'Sep 30', orders: 900, revenue: 600 },
  { date: 'Oct 1', orders: 1050, revenue: 700 },
  { date: 'Oct 2', orders: 1200, revenue: 850 },
  { date: 'Oct 3', orders: 1350, revenue: 950 },
  { date: 'Oct 4', orders: 1500, revenue: 1100 },
]

const orderStatus = [
  { name: 'Completed', value: 1062, percent: 85.1, color: '#10b981' },
  { name: 'Processing', value: 103, percent: 8.3, color: '#3b82f6' },
  { name: 'Pending', value: 86, percent: 6.9, color: '#f59e0b' },
  { name: 'Cancelled', value: 100, percent: 8.0, color: '#ef4444' },
]

const recentActivity = [
  { icon: CheckCircle, bg: 'bg-emerald-500/15 text-emerald-400', title: 'Order #ORD-1024 completed', desc: 'Rahul Sharma', time: '2 minutes ago' },
  { icon: Clock, bg: 'bg-amber-500/15 text-amber-400', title: 'Order #ORD-1023 pending', desc: 'Sneha Das', time: '8 minutes ago' },
  { icon: Loader2, bg: 'bg-blue-500/15 text-blue-400', title: 'Order #ORD-1022 processing', desc: 'Amit Kumar', time: '15 minutes ago' },
  { icon: XCircle, bg: 'bg-red-500/15 text-red-400', title: 'Order #ORD-1021 cancelled', desc: 'Priya Roy', time: '32 minutes ago' },
]

function SidePanel() {
  const [range, setRange] = useState('7D')

  return (
    <div className='space-y-6'>
      {/* Order Performance */}
      <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/20 dark:border-slate-700/50'>
        <div className='flex flex-wrap items-center justify-between gap-3 mb-4'>
          <h3 className='text-base font-bold text-slate-800 dark:text-white'>Order Performance</h3>
          <div className='flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-1'>
            {['24H', '7D', '30D', '3M'].map((label) => (
              <button
                key={label}
                onClick={() => setRange(label)}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                  range === label
                    ? 'bg-purple-600 text-white shadow'
                    : 'text-slate-500 dark:text-slate-400'
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
            <span className='text-xs text-slate-600 dark:text-slate-400'>Orders</span>
          </div>
          <div className='flex items-center space-x-1.5'>
            <div className='w-2.5 h-2.5 rounded-full bg-blue-400'></div>
            <span className='text-xs text-slate-600 dark:text-slate-400'>Revenue</span>
          </div>
        </div>

        <div className='h-48'>
          <ResponsiveContainer width='100%' height='100%'>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray='3 3' stroke='#334155' opacity={0.2} vertical={false} />
              <XAxis dataKey='date' stroke='#94a3b8' fontSize={10} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '12px', color: '#fff' }}
              />
              <Line type='monotone' dataKey='orders' stroke='#a855f7' strokeWidth={2} dot={{ r: 3 }} />
              <Line type='monotone' dataKey='revenue' stroke='#3b82f6' strokeWidth={2} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Order Status */}
      <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/20 dark:border-slate-700/50'>
        <h3 className='text-base font-bold text-slate-800 dark:text-white mb-4'>Order Status</h3>

        <div className='relative h-40 flex items-center justify-center mb-4'>
          <ResponsiveContainer width='100%' height='100%'>
            <PieChart>
              <Pie
                data={orderStatus}
                cx='50%'
                cy='50%'
                innerRadius={48}
                outerRadius={68}
                paddingAngle={3}
                dataKey='value'
              >
                {orderStatus.map((entry, i) => (
                  <Cell key={i} fill={entry.color} stroke='none' />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className='absolute inset-0 flex flex-col items-center justify-center pointer-events-none'>
            <p className='text-lg font-bold text-slate-800 dark:text-white'>1,248</p>
            <p className='text-xs text-slate-500 dark:text-slate-400'>Total Orders</p>
          </div>
        </div>

        <div className='space-y-2.5'>
          {orderStatus.map((item, i) => (
            <div key={i} className='flex items-center justify-between text-sm'>
              <div className='flex items-center space-x-2'>
                <div className='w-2.5 h-2.5 rounded-full' style={{ backgroundColor: item.color }}></div>
                <span className='text-slate-600 dark:text-slate-300'>{item.name}</span>
              </div>
              <div className='flex items-center space-x-3'>
                <span className='font-medium text-slate-800 dark:text-white'>{item.value}</span>
                <span className='text-xs text-slate-400 w-10 text-right'>{item.percent}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Orders Activity */}
      <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/20 dark:border-slate-700/50'>
        <div className='flex items-center justify-between mb-4'>
          <h3 className='text-base font-bold text-slate-800 dark:text-white'>Recent Orders Activity</h3>
          <button className='text-blue-500 hover:text-blue-600 text-xs font-medium flex items-center space-x-1'>
            <span>View All</span>
            <ArrowRight className='w-3.5 h-3.5' />
          </button>
        </div>

        <div className='space-y-4'>
          {recentActivity.map((item, i) => (
            <div key={i} className='flex items-start space-x-3'>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${item.bg}`}>
                <item.icon className='w-4 h-4' />
              </div>
              <div className='flex-1 min-w-0'>
                <p className='text-sm font-medium text-slate-800 dark:text-white'>{item.title}</p>
                <p className='text-xs text-slate-500 dark:text-slate-400'>
                  {item.desc} • {item.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SidePanel