import React from 'react'
import {
  Search,
  Filter,
  ListFilter,
  ArrowRight,
  Users,
  ShoppingCart,
  Lock,
  MessageSquare,
} from 'lucide-react'

const recentActivity = [
  { user: 'Rahul Sharma', email: 'rahul@example.com', avatar: 'https://i.pravatar.cc/40?img=11', action: 'Logged In', actionColor: 'bg-emerald-500/15 text-emerald-400', module: 'Account', moduleIcon: Users, time: 'Oct 2, 2026 10:42 AM', status: 'Success' },
  { user: 'Sneha Das', email: 'sneha@example.com', avatar: 'https://i.pravatar.cc/40?img=5', action: 'Updated Profile', actionColor: 'bg-blue-500/15 text-blue-400', module: 'Users', moduleIcon: Users, time: 'Oct 2, 2026 10:35 AM', status: 'Success' },
  { user: 'Amit Kumar', email: 'amit@example.com', avatar: 'https://i.pravatar.cc/40?img=12', action: 'Created Order', actionColor: 'bg-amber-500/15 text-amber-400', module: 'E-commerce', moduleIcon: ShoppingCart, time: 'Oct 2, 2026 10:21 AM', status: 'Success' },
  { user: 'Priya Roy', email: 'priya@example.com', avatar: 'https://i.pravatar.cc/40?img=9', action: 'Changed Password', actionColor: 'bg-orange-500/15 text-orange-400', module: 'Security', moduleIcon: Lock, time: 'Oct 2, 2026 09:58 AM', status: 'Success' },
  { user: 'Rohan Gupta', email: 'rohan@example.com', avatar: 'https://i.pravatar.cc/40?img=15', action: 'Failed Login', actionColor: 'bg-red-500/15 text-red-400', module: 'Account', moduleIcon: Users, time: 'Oct 2, 2026 09:41 AM', status: 'Failed' },
  { user: 'Anjali Patel', email: 'anjali@example.com', avatar: 'https://i.pravatar.cc/40?img=24', action: 'Created Product', actionColor: 'bg-emerald-500/15 text-emerald-400', module: 'Inventory', moduleIcon: ShoppingCart, time: 'Oct 2, 2026 09:27 AM', status: 'Success' },
  { user: 'Sourav Mehta', email: 'sourav@example.com', avatar: 'https://i.pravatar.cc/40?img=13', action: 'Deleted Product', actionColor: 'bg-red-500/15 text-red-400', module: 'Inventory', moduleIcon: ShoppingCart, time: 'Oct 2, 2026 08:52 AM', status: 'Success' },
  { user: 'Kavita Singh', email: 'kavita@example.com', avatar: 'https://i.pravatar.cc/40?img=20', action: 'New Message', actionColor: 'bg-cyan-500/15 text-cyan-400', module: 'Messages', moduleIcon: MessageSquare, time: 'Oct 2, 2026 08:36 AM', status: 'Success' },
]

const statusStyles = {
  Success: 'bg-emerald-500/15 text-emerald-400',
  Failed: 'bg-red-500/15 text-red-400',
}

function RecentActivity() {
  return (
    <div className=''>
      <div className=' bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/20 dark:border-slate-700/50 overflow-hidden'>
        <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50'>
          <div className='flex flex-wrap items-center justify-between gap-4'>
            <div className='flex items-center space-x-3'>
              <div className='w-10 h-10 rounded-xl bg-indigo-600/20 flex items-center justify-center'>
                <ListFilter className='w-5 h-5 text-indigo-400' />
              </div>
              <h3 className='text-lg font-bold text-slate-800 dark:text-white'>Recent User Activity</h3>
            </div>
            <div className='flex items-center gap-3'>
              <div className='relative'>
                <Search className='w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2' />
                <input
                  type='text'
                  placeholder='Search by user, action or module...'
                  className='pl-9 pr-4 py-2 w-64 bg-slate-100 dark:bg-slate-800 border border-transparent rounded-xl text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 focus:outline-none'
                />
              </div>
              <button className='flex items-center space-x-2 px-3 py-2 rounded-xl border border-slate-200/50 dark:border-slate-700/50 text-sm text-slate-600 dark:text-slate-300'>
                <Filter className='w-4 h-4' />
                <span>Filter</span>
              </button>
            </div>
          </div>
        </div>

        <div className='overflow-x-auto'>
          <table className='w-full'>
            <thead>
              <tr className='text-left border-b border-slate-200/50 dark:border-slate-700/50'>
                <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>#</th>
                <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>User</th>
                <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>Action</th>
                <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>Module</th>
                <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>Date & Time</th>
                <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>Status</th>
                <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>Details</th>
              </tr>
            </thead>
            <tbody>
              {recentActivity.map((item, i) => (
                <tr
                  key={i}
                  className='border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors'
                >
                  <td className='px-6 py-4 text-sm text-slate-500 dark:text-slate-400'>{i + 1}</td>
                  <td className='px-6 py-4'>
                    <div className='flex items-center space-x-3'>
                      <img src={item.avatar} alt={item.user} className='w-8 h-8 rounded-full' />
                      <div>
                        <p className='text-sm font-medium text-slate-800 dark:text-white whitespace-nowrap'>{item.user}</p>
                        <p className='text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap'>{item.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className='px-6 py-4'>
                    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap ${item.actionColor}`}>
                      {item.action}
                    </span>
                  </td>
                  <td className='px-6 py-4'>
                    <span className='inline-flex items-center space-x-1.5 text-sm text-slate-600 dark:text-slate-300 whitespace-nowrap'>
                      <item.moduleIcon className='w-3.5 h-3.5' />
                      <span>{item.module}</span>
                    </span>
                  </td>
                  <td className='px-6 py-4 text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap'>{item.time}</td>
                  <td className='px-6 py-4'>
                    <span className={`inline-flex items-center space-x-1.5 px-2.5 py-1 text-xs font-medium rounded-full whitespace-nowrap ${statusStyles[item.status]}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${item.status === 'Success' ? 'bg-emerald-400' : 'bg-red-400'}`}></span>
                      <span>{item.status}</span>
                    </span>
                  </td>
                  <td className='px-6 py-4'>
                    <button className='inline-flex items-center space-x-1 text-sm font-medium text-blue-500 hover:text-blue-600 whitespace-nowrap'>
                      <span>View Details</span>
                      <ArrowRight className='w-3.5 h-3.5' />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default RecentActivity