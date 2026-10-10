import React, { useState } from 'react'
import { Search, Filter } from 'lucide-react'
import Avatar from './Avatar'
import { conversations } from './Messagesdata'

function Conversationlist({ activeId, onSelect }) {
  const [tab, setTab] = useState('All')

  const filtered = conversations.filter((c) => {
    if (tab === 'All') return true
    if (tab === 'Customers') return c.type === 'Customer'
    if (tab === 'Team') return c.type === 'Team'
    return true
  })

  return (
    <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/20 dark:border-slate-700/50 overflow-hidden h-[720px] flex flex-col'>
      <div className='p-4 border-b border-slate-200/50 dark:border-slate-700/50 shrink-0'>
        <div className='relative'>
          <Search className='w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2' />
          <input
            type='text'
            placeholder='Search messages...'
            className='w-full pl-9 pr-10 py-2.5 bg-slate-100 dark:bg-slate-800 border border-transparent rounded-xl text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 focus:outline-none'
          />
          <button className='absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors'>
            <Filter className='w-4 h-4' />
          </button>
        </div>
      </div>

      <div className='flex-1 overflow-y-auto scrollbar-thin'>
        {filtered.map((c) => (
          <button
            key={c.id}
            onClick={() => onSelect(c.id)}
            className={`w-full flex items-start space-x-3 p-4 border-b border-slate-100 dark:border-slate-800 text-left transition-colors ${
              activeId === c.id
                ? 'bg-blue-50 dark:bg-slate-800/60'
                : 'hover:bg-slate-50 dark:hover:bg-slate-800/30'
            }`}
          >
            <Avatar name={c.name} image={c.avatar} online={c.online} isTeam={c.type === 'Team'} />
            <div className='flex-1 min-w-0'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-2 min-w-0'>
                  <span className='text-sm font-semibold text-slate-800 dark:text-white truncate'>{c.name}</span>
                  <span
                    className={`px-2 py-0.5 text-[10px] font-medium rounded-full shrink-0 ${
                      c.type === 'Customer'
                        ? 'bg-blue-500/15 text-blue-400'
                        : 'bg-purple-500/15 text-purple-400'
                    }`}
                  >
                    {c.type}
                  </span>
                </div>
                <span className='text-xs text-slate-400 shrink-0 ml-1'>{c.time}</span>
              </div>
              <div className='flex items-center justify-between mt-1'>
                <p className='text-xs text-slate-500 dark:text-slate-400 truncate'>{c.lastMessage}</p>
                {c.unread > 0 && (
                  <span className='ml-2 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-semibold flex items-center justify-center shrink-0'>
                    {c.unread}
                  </span>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Conversationlist