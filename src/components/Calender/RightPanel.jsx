import React from 'react'
import { Video, MapPin, CalendarDays, CheckSquare, Users, ArrowRight } from 'lucide-react'

const events = [
  { date: '30', month: 'Sep', time: '10:00 AM – 11:00 AM', title: 'Team Meeting', meta: 'Online (Google Meet)', icon: Video, bar: 'bg-purple-500' },
  { date: '30', month: 'Sep', time: '12:30 PM – 02:00 PM', title: 'Project Review', meta: 'Office Room 2', icon: MapPin, bar: 'bg-blue-500' },
  { date: '30', month: 'Sep', time: '03:00 PM – 04:00 PM', title: 'Order Meeting', meta: 'Zoom Meeting', icon: Video, bar: 'bg-emerald-500' },
  { date: '30', month: 'Sep', time: '05:30 PM – 06:30 PM', title: 'Client Discussion', meta: 'Online (Google Meet)', icon: Video, bar: 'bg-amber-500' },
]

const quickStats = [
  { label: 'Total Events', value: '24', icon: CalendarDays, bg: 'bg-indigo-600' },
  { label: "Today's Events", value: '8', icon: CheckSquare, bg: 'bg-blue-600' },
  { label: 'This Month', value: '12', icon: CalendarDays, bg: 'bg-emerald-600' },
  { label: 'Upcoming Meetings', value: '4', icon: Users, bg: 'bg-amber-600' },
]

function RightPanel() {
  return (
    <div className='space-y-6'>
      <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/20 dark:border-slate-700/50'>
        <div className='flex items-center justify-between mb-5'>
          <h3 className='text-lg font-bold text-slate-800 dark:text-white'>Upcoming Events</h3>
          <button className='text-blue-500 hover:text-blue-600 text-sm font-medium flex items-center space-x-1'>
            <span>View all</span>
            <ArrowRight className='w-4 h-4' />
          </button>
        </div>

        <div className='space-y-3'>
          {events.map((ev, i) => (
            <div key={i} className='relative flex items-start space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40'>
              <span className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-xl ${ev.bar}`}></span>
              <div className='text-center shrink-0 w-10'>
                <p className='text-lg font-bold text-slate-800 dark:text-white leading-none'>{ev.date}</p>
                <p className='text-[10px] text-slate-400 uppercase'>{ev.month}</p>
              </div>
              <div className='min-w-0 flex-1'>
                <p className='text-xs text-slate-400 mb-0.5'>{ev.time}</p>
                <p className='text-sm font-semibold text-slate-800 dark:text-white truncate'>{ev.title}</p>
                <div className='flex items-center space-x-1 text-xs text-slate-500 dark:text-slate-400'>
                  <ev.icon className='w-3 h-3' />
                  <span>{ev.meta}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/20 dark:border-slate-700/50'>
        <h3 className='text-lg font-bold text-slate-800 dark:text-white mb-4'>Quick Stats</h3>
        <div className='grid grid-cols-2 gap-3'>
          {quickStats.map((s, i) => (
            <div key={i} className='p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40'>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 ${s.bg}`}>
                <s.icon className='w-4 h-4 text-white' />
              </div>
              <p className='text-lg font-bold text-slate-800 dark:text-white'>{s.value}</p>
              <p className='text-xs text-slate-500 dark:text-slate-400'>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RightPanel