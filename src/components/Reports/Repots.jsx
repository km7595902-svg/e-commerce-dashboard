import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import {
  DollarSign,
  ShoppingCart,
  Users,
  Percent,
  BarChart3,
  Package,
  MoreVertical,
  ArrowUpRight,
  ArrowDownRight,
  FileText,
} from 'lucide-react'

const stats = [
  {
    title: 'Revenue',
    value: '$45,231.89',
    change: '+13.5%',
    trend: 'up',
    icon: DollarSign,
    bg: 'bg-emerald-500',
  },
  {
    title: 'Orders',
    value: '567',
    change: '+8.2%',
    trend: 'up',
    icon: ShoppingCart,
    bg: 'bg-blue-600',
  },
  {
    title: 'Customers',
    value: '3,842',
    change: '+5.4%',
    trend: 'up',
    icon: Users,
    bg: 'bg-indigo-600',
  },
  {
    title: 'Conversion Rate',
    value: '4.8%',
    change: '+1.2%',
    trend: 'up',
    icon: Percent,
    bg: 'bg-pink-600',
  },
]

const performanceData = [
  { date: 'Apr 1', revenue: 4000, orders: 1200, customers: 900, expenses: 600 },
  { date: 'Apr 4', revenue: 6000, orders: 2000, customers: 1300, expenses: 900 },
  { date: 'Apr 7', revenue: 7000, orders: 2200, customers: 1500, expenses: 1000 },
  { date: 'Apr 10', revenue: 9500, orders: 2800, customers: 1800, expenses: 1200 },
  { date: 'Apr 13', revenue: 11000, orders: 3000, customers: 1900, expenses: 1400 },
  { date: 'Apr 16', revenue: 13500, orders: 3400, customers: 2100, expenses: 1600 },
  { date: 'Apr 19', revenue: 17000, orders: 3800, customers: 2400, expenses: 1900 },
  { date: 'Apr 22', revenue: 28450, orders: 342, customers: 1204, expenses: 8320 },
  { date: 'Apr 25', revenue: 37000, orders: 4600, customers: 3000, expenses: 2300 },
  { date: 'Apr 28', revenue: 42000, orders: 5000, customers: 3300, expenses: 2600 },
  { date: 'Apr 30', revenue: 48000, orders: 5500, customers: 3700, expenses: 2900 },
]

const reportCategories = [
  {
    icon: BarChart3,
    bg: 'bg-indigo-500/15 text-indigo-400',
    title: 'Sales Report',
    desc: 'Revenue, orders and product sales',
  },
  {
    icon: Users,
    bg: 'bg-blue-500/15 text-blue-400',
    title: 'Customer Report',
    desc: 'New customers, returning customers',
  },
  {
    icon: Package,
    bg: 'bg-emerald-500/15 text-emerald-400',
    title: 'Product Report',
    desc: 'Top products and low-performing products',
  },
  {
    icon: Package,
    bg: 'bg-amber-500/15 text-amber-400',
    title: 'Inventory Report',
    desc: 'Stock levels and inventory movement',
  },
]

const recentReports = [
  {
    icon: BarChart3,
    bg: 'bg-indigo-500/15 text-indigo-400',
    name: 'Sales Report',
    date: 'Apr 30, 2025',
    time: '10:24 AM',
    status: 'Ready',
    size: '2.4 MB',
  },
  {
    icon: Users,
    bg: 'bg-blue-500/15 text-blue-400',
    name: 'Customer Report',
    date: 'Apr 29, 2025',
    time: '09:16 AM',
    status: 'Ready',
    size: '1.8 MB',
  },
  {
    icon: Package,
    bg: 'bg-emerald-500/15 text-emerald-400',
    name: 'Inventory Report',
    date: 'Apr 28, 2025',
    time: '04:32 PM',
    status: 'Processing',
    size: '3.1 MB',
  },
  {
    icon: Percent,
    bg: 'bg-pink-500/15 text-pink-400',
    name: 'Conversion Report',
    date: 'Apr 27, 2025',
    time: '11:12 AM',
    status: 'Ready',
    size: '1.2 MB',
  },
]

const statusStyles = {
  Ready: 'bg-emerald-500/15 text-emerald-400',
  Processing: 'bg-amber-500/15 text-amber-400',
}

function Reports() {
  return (
    <div className='space-y-6'>
      {/* Toolbar */}
      <div className='flex flex-wrap items-center justify-end gap-3'>
        <button className='flex items-center space-x-2 px-4 py-2.5 rounded-xl border border-slate-200/50 dark:border-slate-700/50 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
          <span>Apr 1 – Apr 30</span>
        </button>
        <button className='flex items-center space-x-2 px-4 py-2.5 rounded-xl border border-slate-200/50 dark:border-slate-700/50 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
          <span>Export Report</span>
        </button>
        <button className='flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium hover:shadow-lg transition-all'>
          <span>+ Create Report</span>
        </button>
      </div>

      {/* Stats */}
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
        {stats.map((stat, i) => (
          <div
            key={i}
            className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-5 border border-slate-200/20 dark:border-slate-700/50'
          >
            <div className='flex items-center space-x-3 mb-4'>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.bg}`}>
                <stat.icon className='w-5 h-5 text-white' />
              </div>
              <p className='text-sm font-medium text-slate-500 dark:text-slate-400'>{stat.title}</p>
            </div>
            <p className='text-2xl font-bold text-slate-800 dark:text-white mb-2'>{stat.value}</p>
            <div className='flex items-center space-x-1'>
              {stat.trend === 'up' ? (
                <ArrowUpRight className='w-4 h-4 text-emerald-500' />
              ) : (
                <ArrowDownRight className='w-4 h-4 text-red-500' />
              )}
              <span className={`text-sm font-semibold ${stat.trend === 'up' ? 'text-emerald-500' : 'text-red-500'}`}>
                {stat.change}
              </span>
              <span className='text-xs text-slate-500 dark:text-slate-400'>vs last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Performance + Report Categories */}
      <div className='grid grid-cols-1 xl:grid-cols-3 gap-6'>
        <div className='xl:col-span-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/20 dark:border-slate-700/50'>
          <div className='flex flex-wrap items-center justify-between gap-4 mb-6'>
            <div>
              <h3 className='text-lg font-bold text-slate-800 dark:text-white'>Performance Overview</h3>
              <p className='text-sm text-slate-500 dark:text-slate-400'>Revenue, orders, customers and expenses</p>
            </div>
            <div className='flex items-center bg-slate-100 dark:bg-slate-800 rounded-xl p-1'>
              {['Daily', 'Weekly', 'Monthly'].map((label, i) => (
                <button
                  key={label}
                  className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                    i === 0
                      ? 'bg-blue-600 text-white shadow'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className='flex flex-wrap items-center gap-4 mb-4'>
            <div className='flex items-center space-x-2'>
              <div className='w-2.5 h-2.5 rounded-full bg-purple-500'></div>
              <span className='text-xs text-slate-600 dark:text-slate-400'>Revenue</span>
            </div>
            <div className='flex items-center space-x-2'>
              <div className='w-2.5 h-2.5 rounded-full bg-blue-500'></div>
              <span className='text-xs text-slate-600 dark:text-slate-400'>Orders</span>
            </div>
            <div className='flex items-center space-x-2'>
              <div className='w-2.5 h-2.5 rounded-full bg-emerald-500'></div>
              <span className='text-xs text-slate-600 dark:text-slate-400'>Customers</span>
            </div>
            <div className='flex items-center space-x-2'>
              <div className='w-2.5 h-2.5 rounded-full bg-amber-500'></div>
              <span className='text-xs text-slate-600 dark:text-slate-400'>Expenses</span>
            </div>
          </div>

          <div className='h-72'>
            <ResponsiveContainer width='100%' height='100%'>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray='3 3' stroke='#334155' opacity={0.2} vertical={false} />
                <XAxis dataKey='date' stroke='#94a3b8' fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '12px', color: '#fff' }}
                />
                <Line type='monotone' dataKey='revenue' stroke='#a855f7' strokeWidth={2} dot={{ r: 3 }} />
                <Line type='monotone' dataKey='orders' stroke='#3b82f6' strokeWidth={2} dot={{ r: 3 }} />
                <Line type='monotone' dataKey='customers' stroke='#10b981' strokeWidth={2} dot={{ r: 3 }} />
                <Line type='monotone' dataKey='expenses' stroke='#f59e0b' strokeWidth={2} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/20 dark:border-slate-700/50'>
          <h3 className='text-lg font-bold text-slate-800 dark:text-white'>Report Categories</h3>
          <p className='text-sm text-slate-500 dark:text-slate-400 mb-5'>Quick access to different types of reports</p>

          <div className='space-y-3'>
            {reportCategories.map((cat, i) => (
              <button
                key={i}
                className='w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors text-left'
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${cat.bg}`}>
                  <cat.icon className='w-5 h-5' />
                </div>
                <div className='flex-1 min-w-0'>
                  <p className='text-sm font-semibold text-slate-800 dark:text-white'>{cat.title}</p>
                  <p className='text-xs text-slate-500 dark:text-slate-400 truncate'>{cat.desc}</p>
                </div>
                <ArrowUpRight className='w-4 h-4 text-slate-400 shrink-0' />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Reports */}
      <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/20 dark:border-slate-700/50 overflow-hidden'>
        <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50 flex items-center justify-between'>
          <div>
            <h3 className='text-lg font-bold text-slate-800 dark:text-white'>Recent Reports</h3>
            <p className='text-sm text-slate-500 dark:text-slate-400'>View and manage your generated reports</p>
          </div>
          <button className='text-blue-500 hover:text-blue-600 text-sm font-medium flex items-center space-x-1'>
            <span>View All</span>
            <ArrowUpRight className='w-4 h-4' />
          </button>
        </div>

        <div className='overflow-x-auto'>
          <table className='w-full'>
            <thead>
              <tr className='text-left border-b border-slate-200/50 dark:border-slate-700/50'>
                <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>
                  Report Name
                </th>
                <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>
                  Date Generated
                </th>
                <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>
                  Status
                </th>
                <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>
                  Size
                </th>
                <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {recentReports.map((report, i) => (
                <tr
                  key={i}
                  className='border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors'
                >
                  <td className='px-6 py-4'>
                    <div className='flex items-center space-x-3'>
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${report.bg}`}>
                        <report.icon className='w-4 h-4' />
                      </div>
                      <span className='text-sm font-medium text-slate-800 dark:text-white'>{report.name}</span>
                    </div>
                  </td>
                  <td className='px-6 py-4 text-sm text-slate-500 dark:text-slate-400'>
                    {report.date} &nbsp; {report.time}
                  </td>
                  <td className='px-6 py-4'>
                    <span
                      className={`inline-flex items-center space-x-1 px-3 py-1 text-xs font-medium rounded-full ${statusStyles[report.status]}`}
                    >
                      {report.status === 'Processing' && (
                        <span className='w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse'></span>
                      )}
                      <span>{report.status}</span>
                    </span>
                  </td>
                  <td className='px-6 py-4 text-sm text-slate-500 dark:text-slate-400'>{report.size}</td>
                  <td className='px-6 py-4'>
                    <div className='flex items-center space-x-2'>
                      <button className='px-3 py-1.5 text-xs font-medium rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors'>
                        View
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
      </div>
    </div>
  )
}

export default Reports