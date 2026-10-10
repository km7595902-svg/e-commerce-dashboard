import React from 'react'
import { Mail, Phone, MapPin, Calendar, MoreVertical, ShoppingCart, Send, PhoneCall, Ban, Package, MessageSquare, UserPlus } from 'lucide-react'
import Avatar from './Avatar'

const activityIcons = {
  order: ShoppingCart,
  message: MessageSquare,
  account: UserPlus,
}

const activityColors = {
  order: 'bg-blue-500/15 text-blue-400',
  message: 'bg-purple-500/15 text-purple-400',
  account: 'bg-emerald-500/15 text-emerald-400',
}

function Profilepanel({ conversation }) {
  if (!conversation) {
    return (
      <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/20 dark:border-slate-700/50 h-[720px]'></div>
    )
  }

  return (
    <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/20 dark:border-slate-700/50 h-[720px] overflow-y-auto scrollbar-thin p-6'>
      {/* Profile header */}
      <div className='flex items-center justify-between mb-5'>
        <div className='flex items-center space-x-3'>
          <Avatar name={conversation.name} image={conversation.avatar} size='w-14 h-14' isTeam={conversation.type === 'Team'} />
          <div>
            <h3 className='text-base font-bold text-slate-800 dark:text-white'>{conversation.name}</h3>
            <span
              className={`inline-block mt-1 px-2.5 py-0.5 text-xs font-medium rounded-full ${
                conversation.type === 'Customer'
                  ? 'bg-blue-500/15 text-blue-400'
                  : 'bg-purple-500/15 text-purple-400'
              }`}
            >
              {conversation.type}
            </span>
            <p className='text-xs text-emerald-500 mt-1'>{conversation.online ? '● Online' : '○ Offline'}</p>
          </div>
        </div>
        <button className='p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
          <MoreVertical className='w-4 h-4' />
        </button>
      </div>

      {/* Contact info */}
      <div className='space-y-2.5 mb-6'>
        <div className='flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-300'>
          <Mail className='w-4 h-4 text-slate-400 shrink-0' />
          <span className='truncate'>{conversation.email}</span>
        </div>
        <div className='flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-300'>
          <Phone className='w-4 h-4 text-slate-400 shrink-0' />
          <span>{conversation.phone}</span>
        </div>
        <div className='flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-300'>
          <MapPin className='w-4 h-4 text-slate-400 shrink-0' />
          <span>{conversation.location}</span>
        </div>
        <div className='flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-300'>
          <Calendar className='w-4 h-4 text-slate-400 shrink-0' />
          <span>Customer since {conversation.since}</span>
        </div>
      </div>

      {/* Order stats */}
      <div className='grid grid-cols-3 gap-2 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl mb-6'>
        <div>
          <p className='text-xs text-slate-500 dark:text-slate-400 mb-1'>Total Orders</p>
          <p className='text-sm font-bold text-slate-800 dark:text-white'>{conversation.totalOrders}</p>
        </div>
        <div>
          <p className='text-xs text-slate-500 dark:text-slate-400 mb-1'>Total Spent</p>
          <p className='text-sm font-bold text-slate-800 dark:text-white'>{conversation.totalSpent}</p>
        </div>
        <div>
          <p className='text-xs text-slate-500 dark:text-slate-400 mb-1'>Last Order</p>
          <p className='text-sm font-bold text-slate-800 dark:text-white'>{conversation.lastOrder}</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className='mb-6'>
        <h4 className='text-sm font-bold text-slate-800 dark:text-white mb-3'>Quick Actions</h4>
        <div className='grid grid-cols-2 gap-2'>
          <button className='flex items-center justify-center space-x-2 py-2.5 rounded-xl border border-slate-200/50 dark:border-slate-700/50 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors'>
            <ShoppingCart className='w-4 h-4' />
            <span>View Orders</span>
          </button>
          <button className='flex items-center justify-center space-x-2 py-2.5 rounded-xl border border-slate-200/50 dark:border-slate-700/50 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors'>
            <Send className='w-4 h-4' />
            <span>Send Email</span>
          </button>
          <button className='flex items-center justify-center space-x-2 py-2.5 rounded-xl border border-slate-200/50 dark:border-slate-700/50 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors'>
            <PhoneCall className='w-4 h-4 ml-2' />
            <span>Call Customer</span>
          </button>
          <button className='flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-red-500/10 text-red-500 text-sm hover:bg-red-500/20 transition-colors'>
            <Ban className='w-4 h-4' />
            <span>Block User</span>
          </button>
        </div>
      </div>

      {/* Activity */}
      <div>
        <h4 className='text-sm font-bold text-slate-800 dark:text-white mb-3'>Activity</h4>
        <div className='space-y-4'>
          {conversation.activity.map((a, i) => {
            const Icon = activityIcons[a.icon] || Package
            return (
              <div key={i} className='flex items-start space-x-3'>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${activityColors[a.icon]}`}>
                  <Icon className='w-4 h-4' />
                </div>
                <div>
                  <p className='text-sm font-medium text-slate-800 dark:text-white'>{a.title}</p>
                  <p className='text-xs text-slate-500 dark:text-slate-400'>{a.time}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Profilepanel