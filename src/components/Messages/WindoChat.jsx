import React, { useState } from 'react'
import { Phone, Video, MoreVertical, Paperclip, Smile, Send, Check, CheckCheck } from 'lucide-react'
import Avatar from './Avatar'

function WindoChat({ conversation }) {
  const [message, setMessage] = useState('')

  if (!conversation) {
    return (
      <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/20 dark:border-slate-700/50 h-[720px] flex items-center justify-center'>
        <p className='text-slate-400 text-sm'>Select a conversation to start chatting</p>
      </div>
    )
  }

  return (
    <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/20 dark:border-slate-700/50 overflow-hidden h-[720px] flex flex-col'>
      {/* Header */}
      <div className='flex items-center justify-between p-4 border-b border-slate-200/50 dark:border-slate-700/50 shrink-0'>
        <div className='flex items-center space-x-3'>
          <Avatar name={conversation.name} image={conversation.avatar} online={conversation.online} isTeam={conversation.type === 'Team'} />
          <div>
            <div className='flex items-center space-x-2'>
              <h3 className='text-sm font-semibold text-slate-800 dark:text-white'>{conversation.name}</h3>
              <span
                className={`px-2 py-0.5 text-[10px] font-medium rounded-full ${
                  conversation.type === 'Customer'
                    ? 'bg-blue-500/15 text-blue-400'
                    : 'bg-purple-500/15 text-purple-400'
                }`}
              >
                {conversation.type}
              </span>
            </div>
            <p className='text-xs text-emerald-500'>{conversation.online ? 'Online' : 'Offline'}</p>
          </div>
        </div>
        <div className='flex items-center space-x-1'>
          <button className='p-2 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
            <Phone className='w-4 h-4' />
          </button>
          <button className='p-2 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
            <Video className='w-4 h-4' />
          </button>
          <button className='p-2 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
            <MoreVertical className='w-4 h-4' />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className='flex-1 overflow-y-auto scrollbar-thin p-4 space-y-4'>
        {conversation.messages[0]?.date && (
          <div className='flex justify-center'>
            <span className='px-3 py-1 text-xs text-slate-400 bg-slate-100 dark:bg-slate-800 rounded-full'>
              {conversation.messages[0].date}
            </span>
          </div>
        )}
        {conversation.messages.map((m, i) => (
          <div key={i} className={`flex items-end gap-2 ${m.fromMe ? 'justify-end' : 'justify-start'}`}>
            {!m.fromMe && (
              <Avatar name={conversation.name} image={conversation.avatar} size='w-7 h-7' />
            )}
            <div className={`max-w-[70%] ${m.fromMe ? 'items-end' : 'items-start'} flex flex-col`}>
              <div
                className={`px-4 py-2.5 rounded-2xl text-sm whitespace-pre-line ${
                  m.fromMe
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-br-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-bl-sm'
                }`}
              >
                {m.text}
              </div>
              <div className='flex items-center space-x-1 mt-1 px-1'>
                <span className='text-[10px] text-slate-400'>{m.time}</span>
                {m.fromMe && <CheckCheck className='w-3 h-3 text-blue-400' />}
              </div>
            </div>
            {m.fromMe && (
              <Avatar name='Nirmal' image='https://i.pravatar.cc/40?img=68' size='w-7 h-7' />
            )}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className='p-4 border-t border-slate-200/50 dark:border-slate-700/50 shrink-0'>
        <div className='flex items-center space-x-2 bg-slate-100 dark:bg-slate-800 rounded-xl px-3 py-2'>
          <button className='text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors'>
            <Paperclip className='w-4 h-4' />
          </button>
          <input
            type='text'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Type a message...'
            className='flex-1 bg-transparent text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 focus:outline-none'
          />
          <button className='text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors'>
            <Smile className='w-4 h-4' />
          </button>
          <button className='p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg transition-all'>
            <Send className='w-4 h-4' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default WindoChat