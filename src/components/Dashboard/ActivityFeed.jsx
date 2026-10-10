import React from 'react'
import {
  UserPlus,
  ShoppingCart,
  MessageSquare,
  Star,
  AlertCircle,
  CheckCircle,
} from 'lucide-react'

const activities = [
  {
    id: 1,
    icon: ShoppingCart,
    iconBg: 'bg-blue-500/10 text-blue-500 dark:text-blue-400',
    title: 'New order placed',
    description: 'Rahim Uddin ordered Wireless Headphones',
    time: '2 min ago',
  },
  {
    id: 2,
    icon: UserPlus,
    iconBg: 'bg-emerald-500/10 text-emerald-500 dark:text-emerald-400',
    title: 'New user registered',
    description: 'Fatema Begum created an account',
    time: '15 min ago',
  },
  {
    id: 3,
    icon: Star,
    iconBg: 'bg-amber-500/10 text-amber-500 dark:text-amber-400',
    title: 'New review received',
    description: 'Karim Sheikh rated Smart Watch 5 stars',
    time: '32 min ago',
  },
  {
    id: 4,
    icon: MessageSquare,
    iconBg: 'bg-purple-500/10 text-purple-500 dark:text-purple-400',
    title: 'New message',
    description: 'Ayesha Khatun sent a support inquiry',
    time: '1 hour ago',
  },
  {
    id: 5,
    icon: AlertCircle,
    iconBg: 'bg-red-500/10 text-red-500 dark:text-red-400',
    title: 'Low stock alert',
    description: '4K Monitor inventory below threshold',
    time: '2 hours ago',
  },
  {
    id: 6,
    icon: CheckCircle,
    iconBg: 'bg-emerald-500/10 text-emerald-500 dark:text-emerald-400',
    title: 'Order completed',
    description: 'Jamal Hossain order #ORD-7227 delivered',
    time: '3 hours ago',
  },
]

function ActivityFeed() {
  return (
    <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/20 dark:border-slate-700/50 overflow-hidden h-[608px] flex flex-col'>
      <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50 shrink-0'>
        <div className='flex items-center justify-between'>
          <div>
            <h3 className='text-lg font-bold text-slate-800 dark:text-white'>Activity Feed</h3>
            <p className='text-sm text-slate-500 dark:text-slate-400'>Recent updates & events</p>
          </div>
          <button className='text-blue-600 hover:text-blue-700 text-sm font-medium'>
            View All
          </button>
        </div>
      </div>

      <div className='flex-1 overflow-y-auto scrollbar-thin p-4 space-y-1'>
        {activities.map((activity) => (
          <div
            key={activity.id}
            className='flex items-start space-x-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors'
          >
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${activity.iconBg}`}
            >
              <activity.icon className='w-4 h-4' />
            </div>

            <div className='flex-1 min-w-0'>
              <p className='text-sm font-medium text-slate-800 dark:text-white'>
                {activity.title}
              </p>
              <p className='text-xs text-slate-500 dark:text-slate-400 truncate'>
                {activity.description}
              </p>
              <p className='text-xs text-slate-400 dark:text-slate-500 mt-1'>
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ActivityFeed