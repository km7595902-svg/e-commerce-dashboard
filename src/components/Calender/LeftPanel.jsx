import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react'

const miniDays = [
  [30, 31, 1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24, 25, 26],
  [27, 28, 29, 30, 1, 2, 3],
]

const myCalendars = [
  { label: 'Meetings', color: 'bg-purple-500', on: true },
  { label: 'Tasks', color: 'bg-blue-500', on: true },
  { label: 'Events', color: 'bg-emerald-500', on: true },
  { label: 'Holidays', color: 'bg-amber-500', on: true },
]

const upcomingEvents = [
  { dot: 'bg-purple-500', time: '10:00 AM', title: 'Team Meeting', meta: 'Today · 1h' },
  { dot: 'bg-blue-500', time: '12:30 PM', title: 'Project Review', meta: 'Today · 1h 30m' },
  { dot: 'bg-emerald-500', time: '03:00 PM', title: 'Order Meeting', meta: 'Today · 1h' },
  { dot: 'bg-amber-500', time: '05:30 PM', title: 'Client Discussion', meta: 'Today · 1h' },
]

function Toggle({ checked, onChange }) {
  return (
    <button
      onClick={onChange}
      className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors shrink-0 ${
        checked ? 'bg-blue-600' : 'bg-slate-300 dark:bg-slate-700'
      }`}
    >
      <span
        className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${
          checked ? 'translate-x-4.5' : 'translate-x-1'
        }`}
      />
    </button>
  )
}

function LeftPanel() {
  const [calendars, setCalendars] = useState(myCalendars)

  const toggleCalendar = (i) => {
    setCalendars((prev) => prev.map((c, idx) => (idx === i ? { ...c, on: !c.on } : c)))
  }

  return (
    <div className='space-y-6'>
      {/* Mini calendar */}
      <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-5 border border-slate-200/20 dark:border-slate-700/50'>
        <div className='flex items-center justify-between mb-4'>
          <h3 className='text-base font-bold text-slate-800 dark:text-white'>September 2026</h3>
          <div className='flex items-center space-x-1'>
            <button className='p-1 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'>
              <ChevronLeft className='w-4 h-4' />
            </button>
            <button className='p-1 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'>
              <ChevronRight className='w-4 h-4' />
            </button>
          </div>
        </div>

        <div className='grid grid-cols-7 gap-1 text-center mb-2'>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
            <span key={d} className='text-[10px] font-semibold text-slate-400 uppercase'>
              {d}
            </span>
          ))}
        </div>

        <div className='space-y-1'>
          {miniDays.map((week, wi) => (
            <div key={wi} className='grid grid-cols-7 gap-1'>
              {week.map((day, di) => {
                const isOtherMonth = (wi === 0 && day > 7) || (wi === 4 && day < 7)
                const isToday = wi === 4 && day === 30
                return (
                  <button
                    key={di}
                    className={`text-xs py-1.5 rounded-lg transition-colors ${
                      isToday
                        ? 'bg-blue-600 text-white font-semibold'
                        : isOtherMonth
                        ? 'text-slate-300 dark:text-slate-600'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {day}
                  </button>
                )
              })}
            </div>
          ))}
        </div>
      </div>

      {/* My Calendars */}
      <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-5 border border-slate-200/20 dark:border-slate-700/50'>
        <div className='flex items-center justify-between mb-4'>
          <h3 className='text-base font-bold text-slate-800 dark:text-white'>My Calendars</h3>
          <button className='p-1.5 rounded-lg bg-blue-600/10 text-blue-500 hover:bg-blue-600/20 transition-colors'>
            <Plus className='w-4 h-4' />
          </button>
        </div>

        <div className='space-y-3'>
          {calendars.map((cal, i) => (
            <div key={i} className='flex items-center justify-between'>
              <div className='flex items-center space-x-2'>
                <div className={`w-2.5 h-2.5 rounded-full ${cal.color}`}></div>
                <span className='text-sm text-slate-600 dark:text-slate-300'>{cal.label}</span>
              </div>
              <Toggle checked={cal.on} onChange={() => toggleCalendar(i)} />
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-5 border border-slate-200/20 dark:border-slate-700/50'>
        <div className='flex items-center justify-between mb-4 mr-3'>
          <h3 className='text-base font-bold text-slate-800 dark:text-white'>Upcoming Events</h3>
          <button className='text-blue-500 hover:text-blue-600 text-xs font-medium'>View all</button>
        </div>

        <div className='space-y-4'>
          {upcomingEvents.map((ev, i) => (
            <div key={i} className='flex items-start space-x-3'>
              <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${ev.dot}`}></div>
              <div className='min-w-0'>
                <p className='text-xs text-slate-400 mb-0.5'>{ev.time}</p>
                <p className='text-sm font-medium text-slate-800 dark:text-white truncate'>{ev.title}</p>
                <p className='text-xs text-slate-500 dark:text-slate-400'>{ev.meta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LeftPanel