import React from 'react'
import { Search, ChevronDown, Filter, Eye, MoreVertical, ChevronLeft, ChevronRight, ListFilter } from 'lucide-react'

const orders = [
  { id: '#ORD-1024', customer: 'Rahul Sharma', email: 'rahul@example.com', avatar: 'https://i.pravatar.cc/40?img=11', product: 'iPhone 15 Pro', items: '1 item', image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=100', amount: '$999.00', date: 'Oct 4, 2026 10:42 AM', status: 'Completed' },
  { id: '#ORD-1023', customer: 'Sneha Das', email: 'sneha@example.com', avatar: 'https://i.pravatar.cc/40?img=5', product: 'Nike Air Max 270', items: '2 items', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100', amount: '$150.00', date: 'Oct 4, 2026 10:35 AM', status: 'Pending' },
  { id: '#ORD-1022', customer: 'Amit Kumar', email: 'amit@example.com', avatar: 'https://i.pravatar.cc/40?img=12', product: 'Dell Inspiron 15', items: '1 item', image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=100', amount: '$699.00', date: 'Oct 3, 2026 09:21 PM', status: 'Processing' },
  { id: '#ORD-1021', customer: 'Priya Roy', email: 'priya@example.com', avatar: 'https://i.pravatar.cc/40?img=9', product: 'Fossil Watch', items: '1 item', image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=100', amount: '$120.00', date: 'Oct 3, 2026 06:14 PM', status: 'Cancelled' },
  { id: '#ORD-1020', customer: 'Rohan Gupta', email: 'rohan@example.com', avatar: 'https://i.pravatar.cc/40?img=15', product: 'Boat Headphones', items: '1 item', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100', amount: '$45.00', date: 'Oct 3, 2026 04:32 PM', status: 'Completed' },
  { id: '#ORD-1019', customer: 'Anjali Patel', email: 'anjali@example.com', avatar: 'https://i.pravatar.cc/40?img=24', product: 'Cotton T-Shirt', items: '3 items', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100', amount: '$75.00', date: 'Oct 3, 2026 11:20 AM', status: 'Processing' },
  { id: '#ORD-1018', customer: 'Kavita Singh', email: 'kavita@example.com', avatar: 'https://i.pravatar.cc/40?img=20', product: 'Face Cream', items: '1 item', image: 'https://images.unsplash.com/photo-1598440947619-2c35cc9019b3?w=100', amount: '$18.00', date: 'Oct 2, 2026 06:45 PM', status: 'Completed' },
  { id: '#ORD-1017', customer: 'Sourav Mehta', email: 'sourav@example.com', avatar: 'https://i.pravatar.cc/40?img=13', product: 'Backpack', items: '1 item', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100', amount: '$65.00', date: 'Oct 2, 2026 02:12 PM', status: 'Pending' },
]

const statusStyles = {
  Completed: 'bg-emerald-500/15 text-emerald-400',
  Pending: 'bg-amber-500/15 text-amber-400',
  Processing: 'bg-blue-500/15 text-blue-400',
  Cancelled: 'bg-red-500/15 text-red-400',
}

function OrdersTable() {
  return (
    <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/20 dark:border-slate-700/50 overflow-hidden'>
      <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50'>
        <div className='flex flex-wrap items-center justify-between gap-4'>
          <div className='flex items-center space-x-3'>
            <div className='w-10 h-10 rounded-xl bg-indigo-600/20 flex items-center justify-center'>
              <ListFilter className='w-5 h-5 text-indigo-400' />
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-800 dark:text-white'>Recent Orders</h3>
              <p className='text-xs text-slate-500 dark:text-slate-400'>Latest customer orders and their status</p>
            </div>
          </div>
          <div className='flex items-center gap-3'>
           <div className='relative flex-1 min-w-[200px]'>
            <Search className='w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2' />
           <input
           type='text'
            placeholder='Search by order ID, customer or product...'
             className='w-full pl-9 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border border-transparent rounded-xl text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 focus:outline-none'
           />
           </div>
            <button className='flex items-center space-x-1 px-3 py-2 rounded-xl border border-slate-200/50 dark:border-slate-700/50 text-sm text-slate-600 dark:text-slate-300 whitespace-nowrap'>
              <span>All Status</span>
              <ChevronDown className='w-4 h-4' />
            </button>
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
              <th className='px-6 py-3'>
                <input type='checkbox' className='rounded' />
              </th>
              <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>Order ID</th>
              <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>Customer</th>
              <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>Products</th>
              <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>Amount</th>
              <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>Date</th>
              <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>Status</th>
              <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o, i) => (
              <tr key={i} className='border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors'>
                <td className='px-6 py-4'>
                  <input type='checkbox' className='rounded' />
                </td>
                <td className='px-6 py-4'>
                  <span className='px-2.5 py-1 text-xs font-semibold rounded-lg bg-blue-500/10 text-blue-400 whitespace-nowrap'>
                    {o.id}
                  </span>
                </td>
                <td className='px-6 py-4'>
                  <div className='flex items-center space-x-3'>
                    <img src={o.avatar} alt={o.customer} className='w-8 h-8 rounded-full' />
                    <div>
                      <p className='text-sm font-medium text-slate-800 dark:text-white whitespace-nowrap'>{o.customer}</p>
                      <p className='text-xs text-slate-500 dark:text-slate-400'>{o.email}</p>
                    </div>
                  </div>
                </td>
                <td className='px-6 py-4'>
                  <div className='flex items-center space-x-3'>
                    <img src={o.image} alt={o.product} className='w-9 h-9 rounded-lg object-cover' />
                    <div>
                      <p className='text-sm text-slate-700 dark:text-slate-300 whitespace-nowrap'>{o.product}</p>
                      <p className='text-xs text-slate-500 dark:text-slate-400'>{o.items}</p>
                    </div>
                  </div>
                </td>
                <td className='px-6 py-4 text-sm font-semibold text-slate-800 dark:text-white whitespace-nowrap'>{o.amount}</td>
                <td className='px-6 py-4 text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap'>{o.date}</td>
                <td className='px-6 py-4'>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap ${statusStyles[o.status]}`}>
                    {o.status}
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
        <p className='text-sm text-slate-500 dark:text-slate-400'>Showing 1 - 8 of 1,248 orders</p>
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
            157
          </button>
          <button className='p-2 rounded-lg border border-slate-200/50 dark:border-slate-700/50 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
            <ChevronRight className='w-4 h-4' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrdersTable