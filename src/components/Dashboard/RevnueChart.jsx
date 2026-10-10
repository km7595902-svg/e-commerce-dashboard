import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'

function RevenueChart() {
  const data = [
    { month: 'Jan', revenue: 40000, expenses: 24000 },
    { month: 'Feb', revenue: 80000, expenses: 60000 },
    { month: 'Mar', revenue: 60000, expenses: 20000 },
    { month: 'Apr', revenue: 20000, expenses: 12000 },
    { month: 'May', revenue: 66000, expenses: 34000 },
    { month: 'Jun', revenue: 70000, expenses: 45000 },
    { month: 'Jul', revenue: 65000, expenses: 15000 },
    { month: 'Aug', revenue: 89000, expenses: 33000 },
    { month: 'Sep', revenue: 22000, expenses: 9000 },
    { month: 'Oct', revenue: 55000, expenses: 40000 },
    { month: 'Nov', revenue: 90000, expenses: 70000 },
    { month: 'Dec', revenue: 75000, expenses: 50000 },
  ]

  return (
    <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/60 dark:border-slate-700/50 shadow-sm p-6'>
      <div className='flex items-center justify-between mb-6'>
        <div>
          <h3 className='text-xl font-bold text-slate-900 dark:text-slate-200'>Revenue Chart</h3>
          <p className='text-sm text-slate-600 dark:text-slate-400'>Monthly revenue vs expenses</p>
        </div>
        <div className='flex items-center space-x-4'>
          <div className='flex items-center space-x-2'>
            <div className='w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full'></div>
            <span className='text-sm text-slate-600 dark:text-slate-400'>Revenue</span>
          </div>
          <div className='flex items-center space-x-2'>
            <div className='w-3 h-3 bg-gradient-to-r from-slate-400 to-slate-700 rounded-full'></div>
            <span className='text-sm text-slate-600 dark:text-slate-400'>Expenses</span>
          </div>
        </div>
      </div>

      <div className='h-60'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray='3 3' stroke='#e2e8f0' opacity={0.3} />
            <XAxis
              dataKey='month'
              stroke='#94a3b8'
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke='#94a3b8'
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1e293b',
                border: 'none',
                borderRadius: '12px',
                color: '#fff',
              }}
              formatter={(value) => [`$${value.toLocaleString()}`, undefined]}
            />
            <Bar dataKey='revenue' fill='url(#revenueGradient)' radius={[8, 8, 0, 0]} />
            <Bar dataKey='expenses' fill='url(#expensesGradient)' radius={[8, 8, 0, 0]} />
            <defs>
              <linearGradient id='revenueGradient' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='0%' stopColor='#3b82f6' />
                <stop offset='100%' stopColor='#a855f7' />
              </linearGradient>
              <linearGradient id='expensesGradient' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='0%' stopColor='#94a3b8' />
                <stop offset='100%' stopColor='#334155' />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default RevenueChart