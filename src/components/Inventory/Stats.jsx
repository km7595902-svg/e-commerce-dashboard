
import React from 'react'
import {  Box, PackageCheck, AlertTriangle, XCircle  } from 'lucide-react'

const stats = [
  { title: 'Total Stock',
    value: '12,480',
    change: '+8.4%',
    trend: 'up', icon: Box,
    bg: 'bg-blue-600',
    color: '#0000FF',
    data: [20, 28, 22, 34, 30, 42, 38, 52, 48, 60],

 },
  { title: 'Healthy Stock',
     value: '9,820',
     change: '+78.8%', 
     trend: 'up', 
     icon: PackageCheck, 
     bg: 'bg-emerald-500',
     color: '#00FF00',
    data: [20, 28, 22, 34, 30, 42, 38, 52, 48, 60],

 },
  { title: 'Low Stock',
     value: '1,920',
     change: '+15.8%', 
     trend: 'up',
     icon: AlertTriangle,
     bg: 'bg-amber-500',
     color: '#FFFF00',
     data: [20, 28, 22, 34, 30, 42, 38, 52, 48, 60],
 },
  { title: 'Cancelled',
    value: '100',
    change: '+5.9%',
    trend: 'up', 
    icon: XCircle, 
    bg: 'bg-red-600',
    color: '#FF0000',
    data: [20, 28, 22, 34, 30, 42, 38, 52, 48, 60],
 },
]



function Sparkline({ data, color, id }) {
  const w = 100
  const h = 50
  const pad = 4
  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = max - min || 1
  const step = (w - pad * 2) / (data.length - 1)

  const points = data.map((v, i) => {
    const x = pad + i * step
    const y = h - pad - ((v - min) / range) * (h - pad * 2)
    return [x, y]
  })

  const line = points.map((p) => p.join(',')).join(' ')
  const area = `${pad},${h} ${line} ${w - pad},${h}`
  const gradId = `grad-${id}`


    return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className='w-24 h-12'
      preserveAspectRatio='none'
    >
      <defs>
        <linearGradient id={gradId} x1='0' y1='0' x2='0' y2='1'>
          <stop offset='0%' stopColor={color} stopOpacity='0.35' />
          <stop offset='100%' stopColor={color} stopOpacity='0' />
        </linearGradient>
      </defs>
      <polygon points={area} fill={`url(#${gradId})`} />
      <polyline
        points={line}
        fill='none'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        vectorEffect='non-scaling-stroke'
      />
    </svg>
  )
}

function Stats() {
  return (
     
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
      {stats.map((stat, i) => (
        <div
          key={i}
          className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-5 border border-slate-200/20 dark:border-slate-700/50'
        >
          <div className='flex items-center space-x-3 mb-4'>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.bg}`}>
              <stat.icon className='w-5 h-5 text-white' />
            </div>
            <p className='text-sm font-medium text-slate-500 dark:text-slate-400'>{stat.title}</p>
          </div>

          <div className='flex items-end justify-between'>
            <div>
              <p className='text-2xl font-bold text-slate-800 dark:text-white mb-2'>{stat.value}</p>
              <div className='flex items-center space-x-1'>
                <span className={`text-sm font-semibold ${stat.trend === 'up' ? 'text-emerald-500' : 'text-red-500'}`}>
                  {stat.trend === 'up' ? '↑' : '↓'} {stat.change}
                </span>
                <span className='text-xs text-slate-500 dark:text-slate-400'>vs last month</span>
              </div>
            </div>

            <Sparkline data={stat.data} color={stat.color} id={i} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Stats