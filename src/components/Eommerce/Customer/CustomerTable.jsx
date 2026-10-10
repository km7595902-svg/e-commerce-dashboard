import React from 'react'
import { Search, ChevronDown, Filter, Eye, MoreVertical, ChevronLeft, ChevronRight } from 'lucide-react'

const customers = [
  { name: 'Rahul Sharma', email: 'rahul@example.com', avatar: 'https://i.pravatar.cc/40?img=11', tag: 'VIP', tagColor: 'bg-purple-500/15 text-purple-400', orders: 24, spent: '$2,450', lastOrder: 'Oct 4, 2026 10:42 AM', status: 'Active' },
  { name: 'Sneha Das', email: 'sneha@example.com', avatar: 'https://i.pravatar.cc/40?img=5', tag: 'Regular', tagColor: 'bg-blue-500/15 text-blue-400', orders: 18, spent: '$1,820', lastOrder: 'Oct 4, 2026 10:35 AM', status: 'Active' },
  { name: 'Amit Kumar', email: 'amit@example.com', avatar: 'https://i.pravatar.cc/40?img=12', tag: 'Regular', tagColor: 'bg-blue-500/15 text-blue-400', orders: 12, spent: '$940', lastOrder: 'Oct 3, 2026 09:21 PM', status: 'Active' },
  { name: 'Priya Roy', email: 'priya@example.com', avatar: 'https://i.pravatar.cc/40?img=9', tag: 'New', tagColor: 'bg-emerald-500/15 text-emerald-400', orders: 8, spent: '$620', lastOrder: 'Oct 2, 2026 06:14 PM', status: 'Inactive' },
  { name: 'Rohan Gupta', email: 'rohan@example.com', avatar: 'https://i.pravatar.cc/40?img=15', tag: 'Regular', tagColor: 'bg-blue-500/15 text-blue-400', orders: 15, spent: '$1,230', lastOrder: 'Oct 2, 2026 03:42 PM', status: 'Active' },
  { name: 'Kavita Singh', email: 'kavita@example.com', avatar: 'https://i.pravatar.cc/40?img=20', tag: 'New', tagColor: 'bg-emerald-500/15 text-emerald-400', orders: 6, spent: '$420', lastOrder: 'Oct 1, 2026 12:18 PM', status: 'Active' },
  { name: 'Souvik Das', email: 'souvik@example.com', avatar: 'https://i.pravatar.cc/40?img=13', tag: 'Regular', tagColor: 'bg-blue-500/15 text-blue-400', orders: 10, spent: '$780', lastOrder: 'Sep 30, 2026 08:45 PM', status: 'Inactive' },
  { name: 'Anjali Patel', email: 'anjali@example.com', avatar: 'https://i.pravatar.cc/40?img=24', tag: 'VIP', tagColor: 'bg-purple-500/15 text-purple-400', orders: 22, spent: '$1,980', lastOrder: 'Sep 29, 2026 05:21 PM', status: 'Active' },
]

function CustomerTable() {
  return (
    <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/20 dark:border-slate-700/50 overflow-hidden'>
      <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50'>
        <div className='flex flex-wrap items-center gap-3'>
          <div className='relative flex-1 min-w-[220px]'>
            <Search className='w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2' />
            <input
              type='text'
              placeholder='Search by name, email, or customer ID...'
              className='w-full pl-9 pr-4 py-2.5 bg-slate-100 dark:bg-slate-800 border border-transparent rounded-xl text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 focus:outline-none'
            />
          </div>
          <button className='flex items-center space-x-1 px-3 py-2.5 rounded-xl border border-slate-200/50 dark:border-slate-700/50 text-sm text-slate-600 dark:text-slate-300 whitespace-nowrap'>
            <span>All Status</span>
            <ChevronDown className='w-4 h-4' />
          </button>
          <button className='flex items-center space-x-1 px-3 py-2.5 rounded-xl border border-slate-200/50 dark:border-slate-700/50 text-sm text-slate-600 dark:text-slate-300 whitespace-nowrap'>
            <span>Customer Type</span>
            <ChevronDown className='w-4 h-4' />
          </button>
          <button className='flex items-center space-x-1 px-3 py-2.5 rounded-xl border border-slate-200/50 dark:border-slate-700/50 text-sm text-slate-600 dark:text-slate-300 whitespace-nowrap'>
            <span>Sort by Spending</span>
            <ChevronDown className='w-4 h-4' />
          </button>
          <button className='flex items-center space-x-2 px-3 py-2.5 rounded-xl border border-slate-200/50 dark:border-slate-700/50 text-sm text-slate-600 dark:text-slate-300'>
            <Filter className='w-4 h-4' />
            <span>Filter</span>
          </button>
        </div>
      </div>

      <div className='overflow-x-auto'>
        <table className='w-full'>
          <thead>
            <tr className='text-left border-b border-slate-200/50 dark:border-slate-700/50'>
              <th className='px-6 py-3'>
                <input type='checkbox' className='rounded' />
              </th>
              <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>Customer</th>
              <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>Email</th>
              <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>Orders</th>
              <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>Total Spent</th>
              <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>Last Order</th>
              <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>Status</th>
              <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c, i) => (
              <tr key={i} className='border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors'>
                <td className='px-6 py-4'>
                  <input type='checkbox' className='rounded' />
                </td>
                <td className='px-6 py-4'>
                  <div className='flex items-center space-x-3'>
                    <img src={c.avatar} alt={c.name} className='w-9 h-9 rounded-full' />
                    <div>
                      <p className='text-sm font-medium text-slate-800 dark:text-white whitespace-nowrap'>{c.name}</p>
                      <span className={`inline-block mt-0.5 px-2 py-0.5 text-[10px] font-medium rounded-full ${c.tagColor}`}>
                        {c.tag}
                      </span>
                    </div>
                  </div>
                </td>
                <td className='px-6 py-4 text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap'>{c.email}</td>
                <td className='px-6 py-4 text-sm text-slate-600 dark:text-slate-300'>{c.orders}</td>
                <td className='px-6 py-4 text-sm font-semibold text-slate-800 dark:text-white whitespace-nowrap'>{c.spent}</td>
                <td className='px-6 py-4 text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap'>{c.lastOrder}</td>
                <td className='px-6 py-4'>
                  <span
                    className={`inline-flex items-center space-x-1.5 px-2.5 py-1 text-xs font-medium rounded-full whitespace-nowrap ${
                      c.status === 'Active'
                        ? 'bg-emerald-500/15 text-emerald-400'
                        : 'bg-amber-500/15 text-amber-400'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${c.status === 'Active' ? 'bg-emerald-400' : 'bg-amber-400'}`}></span>
                    <span>{c.status}</span>
                  </span>
                </td>
                <td className='px-6 py-4'>
                  <div className='flex items-center space-x-1'>
                    <button className='p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
                      <Eye className='w-4 h-4' />
                    </button>
                    <button className='p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
                      <MoreVertical className='w-4 h-4' />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='p-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/50 dark:border-slate-700/50'>
        <p className='text-sm text-slate-500 dark:text-slate-400'>Showing 1 - 8 of 3,842 customers</p>
        <div className='flex items-center space-x-2'>
          <button className='p-2 rounded-lg border border-slate-200/50 dark:border-slate-700/50 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
            <ChevronLeft className='w-4 h-4' />
          </button>
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
                page === 1
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {page}
            </button>
          ))}
          <span className='text-slate-400 px-1'>...</span>
          <button className='w-9 h-9 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
            482
          </button>
          <button className='p-2 rounded-lg border border-slate-200/50 dark:border-slate-700/50 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
            <ChevronRight className='w-4 h-4' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CustomerTable