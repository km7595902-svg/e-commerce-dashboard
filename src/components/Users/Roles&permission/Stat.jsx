
import React from 'react'
import { Users, User, ShieldCheck, CheckCircle2 } from 'lucide-react'

const CARD =
  'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/20 dark:border-slate-700/50'

export const STATS = [
  { title: 'Total Roles', value: '5', change: '+20%', icon: Users, bg: 'bg-indigo-600', color: '#a855f7', data: [30, 34, 28, 40, 36, 46, 42, 56, 52, 62] },
  { title: 'Total Users', value: '3,842', change: '+15.7%', icon: User, bg: 'bg-blue-600', color: '#3b82f6', data: [30, 24, 34, 28, 40, 36, 46, 42, 54, 58] },
  { title: 'Permissions', value: '24', change: '+9.1%', icon: ShieldCheck, bg: 'bg-purple-600', color: '#d946ef', data: [18, 26, 20, 32, 28, 38, 34, 46, 44, 56] },
  { title: 'Active Roles', value: '4', change: '+33.3%', icon: CheckCircle2, bg: 'bg-emerald-500', color: '#10b981', data: [16, 24, 20, 30, 26, 36, 32, 44, 40, 54] },
]

function IconBox({ icon: Icon, className, iconClass }) {
  return (
    <div className={`flex items-center justify-center shrink-0 ${className}`}>
      <Icon className={iconClass} />
    </div>
  )
}

function Sparkline({ data, color, id }) {
  const width = 80
  const height = 32
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1

  const points = data
    .map((val, i) => {
      const x = (i / (data.length - 1)) * width
      const y = height - ((val - min) / range) * height
      return `${x},${y}`
    })
    .join(' ')

  return (
    <svg width={width} height={height} className='shrink-0'>
      <polyline
        fill='none'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        points={points}
      />
    </svg>
  )
}

function Stat({ stat, index }) {
  return (
    <div className={`${CARD} p-5 flex items-center gap-4`}>
      <IconBox
        icon={stat.icon}
        className={`w-12 h-12 rounded-xl ${stat.bg}`}
        iconClass='w-6 h-6 text-white'
      />
      <div className='flex-1 min-w-0'>
        <p className='text-sm text-slate-500 dark:text-slate-400'>{stat.title}</p>
        <p className='text-2xl font-bold text-slate-800 dark:text-white'>{stat.value}</p>
        <p className='text-xs'>
          <span className='text-emerald-500 dark:text-emerald-400 font-semibold'>↑ {stat.change}</span>{' '}
          <span className='text-slate-500 dark:text-slate-400'>vs. last month</span>
        </p>
      </div>
      <Sparkline data={stat.data} color={stat.color} id={index} />
    </div>
  )
}

export default Stat