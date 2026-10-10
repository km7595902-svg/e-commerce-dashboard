import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Video, MapPin, X, Pencil, Trash2 } from 'lucide-react'

const weeks = [
  [
    { day: 30, other: true }, { day: 31, other: true },
    { day: 1, events: [{ label: 'Design Meeting', time: '10:00 AM', color: 'bg-purple-500' }] },
    { day: 2, events: [{ label: 'Code Review', time: '02:00 PM', color: 'bg-blue-500' }] },
    { day: 3, events: [{ label: 'Team Standup', time: '11:00 AM', color: 'bg-emerald-500' }] },
    { day: 4, events: [{ label: 'Client Call', time: '03:00 PM', color: 'bg-amber-500' }] },
    { day: 5, events: [] },
  ],
  [
    { day: 6, events: [] },
    { day: 7, events: [{ label: 'Task Planning', time: '11:00 AM', color: 'bg-blue-500' }] },
    { day: 8, events: [] },
    { day: 9, events: [{ label: 'Project Meeting', time: '02:30 PM', color: 'bg-purple-500' }] },
    { day: 10, events: [{ label: 'Workout', time: '06:00 PM', color: 'bg-emerald-500' }] },
    { day: 11, events: [] },
    { day: 12, events: [{ label: 'Family Time', time: '08:00 PM', color: 'bg-amber-500' }] },
  ],
  [
    { day: 13, events: [{ label: 'College Class', time: '10:00 AM', color: 'bg-blue-500' }] },
    { day: 14, events: [] },
    { day: 15, events: [{ label: 'UI Design', time: '01:00 PM', color: 'bg-purple-500' }] },
    { day: 16, events: [] },
    { day: 17, events: [{ label: 'Dev Meeting', time: '11:00 AM', color: 'bg-purple-500' }] },
    { day: 18, events: [{ label: 'Shopping', time: '05:00 PM', color: 'bg-amber-500' }] },
    { day: 19, events: [] },
  ],
  [
    { day: 20, events: [{ label: 'Holiday', time: 'All Day', color: 'bg-amber-500' }] },
    { day: 21, events: [] },
    { day: 22, events: [{ label: 'Code Review', time: '02:00 PM', color: 'bg-blue-500' }] },
    { day: 23, events: [] },
    { day: 24, events: [{ label: 'Client Call', time: '04:00 PM', color: 'bg-emerald-500' }] },
    { day: 25, events: [{ label: 'Team Lunch', time: '01:00 PM', color: 'bg-purple-500' }] },
    { day: 26, events: [] },
  ],
  [
    { day: 27, events: [] },
    { day: 28, events: [{ label: 'Study', time: '10:00 AM', color: 'bg-blue-500' }] },
    { day: 29, events: [{ label: 'Project Review', time: '03:00 PM', color: 'bg-emerald-500' }] },
    { day: 30, today: true, events: [{ label: 'Order Meeting', time: '03:00 PM', color: 'bg-blue-500' }] },
    { day: 1, other: true, events: [] },
    { day: 4, other: true, events: [] },
    { day: 5, other: true, events: [] },
  ],
]

const selectedEvent = {
  title: 'Order Meeting',
  date: '30 Sep 2026, 03:00 PM – 04:00 PM',
  location: 'Zoom Meeting',
  desc: 'Discuss order status and delivery updates with the team.',
  avatars: ['https://i.pravatar.cc/32?img=11', 'https://i.pravatar.cc/32?img=5', 'https://i.pravatar.cc/32?img=9'],
  extra: 2,
}

function MainCalendar() {
  const [view, setView] = useState('Month')
  const [showPopup, setShowPopup] = useState(true)

  return (
    <div className='relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/20 dark:border-slate-700/50'>
      <div className='flex flex-wrap items-center justify-between gap-4 mb-6'>
        <div className='flex items-center space-x-3'>
          <button className='px-3 py-1.5 rounded-lg border border-slate-200/50 dark:border-slate-700/50 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'>
            Today
          </button>
          <button className='p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'>
            <ChevronLeft className='w-4 h-4' />
          </button>
          <button className='p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'>
            <ChevronRight className='w-4 h-4' />
          </button>
          <h3 className='text-lg font-bold text-slate-800 dark:text-white'>September 2026</h3>
        </div>

        <div className='flex items-center bg-slate-100 dark:bg-slate-800 rounded-xl p-1'>
          {['Month', 'Week', 'Day', 'Agenda'].map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                view === v
                  ? 'bg-purple-600 text-white shadow'
                  : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      <div className='grid grid-cols-7 text-center mb-2'>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
          <span key={d} className='text-xs font-semibold text-slate-400 uppercase py-2'>
            {d}
          </span>
        ))}
      </div>

      <div className='space-y-1'>
        {weeks.map((week, wi) => (
          <div key={wi} className='grid grid-cols-7 gap-1'>
            {week.map((cell, ci) => (
              <div
                key={ci}
                onClick={() => cell.today && setShowPopup(true)}
                className={`min-h-[90px] p-2 rounded-xl border transition-colors cursor-pointer ${
                  cell.today
                    ? 'border-blue-500 bg-blue-500/10'
                    : 'border-transparent hover:bg-slate-50 dark:hover:bg-slate-800/40'
                }`}
              >
                <span
                  className={`text-xs font-medium ${
                    cell.other
                      ? 'text-slate-300 dark:text-slate-600'
                      : cell.today
                      ? 'text-blue-500 font-bold'
                      : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {cell.day}
                </span>
                <div className='mt-1 space-y-1'>
                  {cell.events?.slice(0, 2).map((ev, ei) => (
                    <div key={ei} className='flex items-center space-x-1'>
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${ev.color}`}></span>
                      <span className='text-[10px] text-slate-600 dark:text-slate-300 truncate'>{ev.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Event popup */}
      {showPopup && (
        <div className='absolute bottom-8 left-1/2 -translate-x-1/2 w-80 bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl p-5 z-20'>
          <div className='flex items-center justify-between mb-3'>
            <div className='flex items-center space-x-2'>
              <span className='w-2.5 h-2.5 rounded-full bg-blue-500'></span>
              <h4 className='text-sm font-bold text-white'>{selectedEvent.title}</h4>
            </div>
            <button onClick={() => setShowPopup(false)} className='text-slate-400 hover:text-white'>
              <X className='w-4 h-4' />
            </button>
          </div>

          <p className='text-xs text-slate-400 mb-2'>{selectedEvent.date}</p>
          <div className='flex items-center space-x-1.5 text-xs text-slate-400 mb-3'>
            <Video className='w-3.5 h-3.5' />
            <span>{selectedEvent.location}</span>
          </div>
          <p className='text-sm text-slate-300 mb-4'>{selectedEvent.desc}</p>

          <div className='flex items-center -space-x-2 mb-4'>
            {selectedEvent.avatars.map((a, i) => (
              <img key={i} src={a} alt='' className='w-7 h-7 rounded-full border-2 border-slate-900' />
            ))}
            <span className='w-7 h-7 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center text-[10px] text-white'>
              +{selectedEvent.extra}
            </span>
          </div>

          <div className='flex items-center space-x-2'>
            <button className='flex-1 flex items-center justify-center space-x-1 py-2 rounded-xl border border-slate-700 text-sm text-slate-300 hover:bg-slate-800'>
              <Pencil className='w-3.5 h-3.5' />
              <span>Edit</span>
            </button>
            <button className='flex-1 flex items-center justify-center space-x-1 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm'>
              <Trash2 className='w-3.5 h-3.5' />
              <span>Delete</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default MainCalendar