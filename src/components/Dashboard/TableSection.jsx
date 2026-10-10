import React from 'react'
import { MoreHorizontal, TrendingUp, TrendingDown } from 'lucide-react'

const orders = [
  {
    id: '#ORD-7231',
    customer: 'Rahim Uddin',
    avatar: 'https://i.pravatar.cc/40?img=1',
    product: 'Wireless Headphones',
    amount: '$120.00',
    status: 'Completed',
    date: '24 Sep 2026',
  },
  {
    id: '#ORD-7230',
    customer: 'Fatema Begum',
    avatar: 'https://i.pravatar.cc/40?img=2',
    product: 'Smart Watch',
    amount: '$249.00',
    status: 'Processing',
    date: '24 Sep 2026',
  },
  {
    id: '#ORD-7229',
    customer: 'Karim Sheikh',
    avatar: 'https://i.pravatar.cc/40?img=3',
    product: 'Bluetooth Speaker',
    amount: '$65.50',
    status: 'Pending',
    date: '23 Sep 2026',
  },
  {
    id: '#ORD-7228',
    customer: 'Ayesha Khatun',
    avatar: 'https://i.pravatar.cc/40?img=4',
    product: 'Laptop Sleeve',
    amount: '$34.99',
    status: 'Completed',
    date: '23 Sep 2026',
  },
  {
    id: '#ORD-7227',
    customer: 'Jamal Hossain',
    avatar: 'https://i.pravatar.cc/40?img=5',
    product: '4K Monitor',
    amount: '$399.00',
    status: 'Cancelled',
    date: '22 Sep 2026',
  },
]

const statusStyles = {
  Completed: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  Processing: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  Pending: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
  Cancelled: 'bg-red-500/10 text-red-600 dark:text-red-400',
}

const products = [
  {
    name: 'Wireless Headphones',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100',
    sales: 1234,
    revenue: '$45,231',
    trend: 'up',
    change: '+12%',
  },
  {
    name: 'Smart Watch',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100',
    sales: 987,
    revenue: '$38,900',
    trend: 'up',
    change: '+8%',
  },
  {
    name: 'Bluetooth Speaker',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=100',
    sales: 654,
    revenue: '$21,500',
    trend: 'down',
    change: '-3%',
  },
  {
    name: '4K Monitor',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=100',
    sales: 432,
    revenue: '$18,750',
    trend: 'up',
    change: '+5%',
  },
  {
    name: 'Laptop Sleeve',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100',
    sales: 321,
    revenue: '$9,430',
    trend: 'down',
    change: '-1%',
  },
]

function TableSection() {
  return (
    <div className='space-y-6'>
      {/* Recent Orders */}
      <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/20 dark:border-slate-700/50 overflow-hidden h-[448px] flex flex-col'>
        <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50 shrink-0'>
          <div className='flex items-center justify-between'>
            <div>
              <h3 className='text-lg font-bold text-slate-800 dark:text-white'>Recent Orders</h3>
              <p className='text-sm text-slate-500 dark:text-slate-400'>Latest customer orders</p>
            </div>
            <button className='text-blue-600 hover:text-blue-700 text-sm font-medium'>
              View All
            </button>
          </div>
        </div>

        <div className='overflow-x-auto overflow-y-auto flex-1 scrollbar-thin'>
          <table className='w-full'>
            <thead className='sticky top-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl z-[1]'>
              <tr className='text-left border-b border-slate-200/50 dark:border-slate-700/50'>
                <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>
                  Order
                </th>
                <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>
                  Customer
                </th>
                <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>
                  Product
                </th>
                <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>
                  Amount
                </th>
                <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>
                  Status
                </th>
                <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>
                  Date
                </th>
                <th className='px-6 py-3'></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className='border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors'
                >
                  <td className='px-6 py-4 text-sm font-medium text-slate-800 dark:text-white'>
                    {order.id}
                  </td>
                  <td className='px-6 py-4'>
                    <div className='flex items-center space-x-3'>
                      <img
                        src={order.avatar}
                        alt={order.customer}
                        className='w-8 h-8 rounded-full'
                      />
                      <span className='text-sm text-slate-700 dark:text-slate-300'>
                        {order.customer}
                      </span>
                    </div>
                  </td>
                  <td className='px-6 py-4 text-sm text-slate-600 dark:text-slate-400'>
                    {order.product}
                  </td>
                  <td className='px-6 py-4 text-sm font-semibold text-slate-800 dark:text-white'>
                    {order.amount}
                  </td>
                  <td className='px-6 py-4'>
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${statusStyles[order.status]}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className='px-6 py-4 text-sm text-slate-500 dark:text-slate-400'>
                    {order.date}
                  </td>
                  <td className='px-6 py-4 text-right'>
                    <button className='p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
                      <MoreHorizontal className='w-4 h-4' />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Products */}
      <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/20 dark:border-slate-700/50 overflow-hidden h-[448px] flex flex-col'>
        <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50 shrink-0'>
          <div className='flex items-center justify-between'>
            <div>
              <h2 className='text-lg font-bold text-slate-800 dark:text-white'>Top Products</h2>
              <p className='text-sm text-slate-500 dark:text-slate-400'>Best selling items</p>
            </div>
            <button className='text-blue-600 hover:text-blue-700 text-sm font-medium'>
              View All
            </button>
          </div>
        </div>

        <div className='flex-1 overflow-y-auto scrollbar-thin p-4 space-y-3'>
          {products.map((product, index) => (
            <div
              key={index}
              className='flex items-center space-x-3 p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors'
            >
              <img
                src={product.image}
                alt={product.name}
                className='w-12 h-12 rounded-xl object-cover flex-shrink-0'
              />
              <div className='flex-1 min-w-0'>
                <p className='text-sm font-medium text-slate-800 dark:text-white truncate'>
                  {product.name}
                </p>
                <p className='text-xs text-slate-500 dark:text-slate-400'>
                  {product.sales} sales
                </p>
              </div>
              <div className='text-right flex-shrink-0'>
                <p className='text-sm font-semibold text-slate-800 dark:text-white'>
                  {product.revenue}
                </p>
                <div className='flex items-center justify-end space-x-1'>
                  {product.trend === 'up' ? (
                    <TrendingUp className='w-3 h-3 text-green-500' />
                  ) : (
                    <TrendingDown className='w-3 h-3 text-red-500' />
                  )}
                  <span
                    className={`text-xs font-medium ${
                      product.trend === 'up' ? 'text-green-500' : 'text-red-500'
                    }`}
                  >
                    {product.change}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TableSection