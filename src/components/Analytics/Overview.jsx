import React from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from 'recharts'
import {
   DollarSign, Users, ShoppingCart, Eye,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  ShoppingBag,
  Package,
  Zap,
  ShieldCheck,
  Headphones,
  BarChart3,
} from 'lucide-react'

const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+13.5%",
    trend: "up",
    icon: DollarSign,
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-500/10 dark:bg-emerald-900/20",
    textColor: "text-emerald-500 dark:text-emerald-400",
  },
  {
    title: "Active Users",
    value: "1,234",
    change: "+5.2%",
    trend: "up",
    icon: Users,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-500/10 dark:bg-blue-900/20",
    textColor: "text-blue-500 dark:text-blue-400",
  },
  {
    title: "Total Orders",
    value: "567",
    change: "+2.3%",
    trend: "up",
    icon: ShoppingCart,
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-500/10 dark:bg-amber-900/20",
    textColor: "text-amber-500 dark:text-amber-400",
  },
  {
    title: "Page Views",
    value: "12,345",
    change: "-1.2%",
    trend: "down",
    icon: Eye,
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-500/10 dark:bg-pink-900/20",
    textColor: "text-pink-500 dark:text-pink-400",
  },
]


const revenueData = [
  { date: 'Apr 1', revenue: 6000, expenses: 3000 },
  { date: 'Apr 4', revenue: 8000, expenses: 4500 },
  { date: 'Apr 7', revenue: 7500, expenses: 5000 },
  { date: 'Apr 10', revenue: 9500, expenses: 6000 },
  { date: 'Apr 13', revenue: 9000, expenses: 6500 },
  { date: 'Apr 16', revenue: 11000, expenses: 7000 },
  { date: 'Apr 19', revenue: 10500, expenses: 7200 },
  { date: 'Apr 22', revenue: 12500, expenses: 8000 },
  { date: 'Apr 25', revenue: 13000, expenses: 8800 },
  { date: 'Apr 28', revenue: 15500, expenses: 10000 },
  { date: 'Apr 30', revenue: 19500, expenses: 12500 },
]

const salesByCategory = [
  { name: 'Electronics', value: 42.3, amount: '$19,132', color: '#6366f1' },
  { name: 'Fashion', value: 28.7, amount: '$12,982', color: '#3b82f6' },
  { name: 'Home', value: 18.5, amount: '$8,364', color: '#10b981' },
  { name: 'Beauty', value: 10.5, amount: '$4,753', color: '#f59e0b' },
]

const topProducts = [
  { icon: Headphones, name: 'Wireless Earbuds', category: 'Electronics', sold: 482, revenue: '$6,278', change: '+18%' },
  { icon: ShoppingBag, name: "Men's Hoodie", category: 'Fashion', sold: 356, revenue: '$4,210', change: '+12%' },
  { icon: Package, name: 'Smart Watch', category: 'Electronics', sold: 298, revenue: '$2,850', change: '+9%' },
  { icon: Package, name: 'Skincare Set', category: 'Beauty', sold: 241, revenue: '$1,367', change: '+7%' },
  { icon: ShoppingBag, name: 'Backpack', category: 'Fashion', sold: 219, revenue: '$1,450', change: '+6%' },
]

const activity = [
  { icon: ShoppingCart, bg: 'bg-blue-500/20 text-blue-400', title: 'New order received', desc: 'Order #ORD-7842 - $129.00', time: '2m ago' },
  { icon: Users, bg: 'bg-purple-500/20 text-purple-400', title: 'New user registered', desc: 'Rahul Sharma', time: '12m ago' },
  { icon: DollarSign, bg: 'bg-emerald-500/20 text-emerald-400', title: 'Payment received', desc: '$89.00 from Priya Das', time: '28m ago' },
  { icon: Package, bg: 'bg-amber-500/20 text-amber-400', title: 'Product low stock', desc: 'Skincare Set (3 left)', time: '1h ago' },
  { icon: BarChart3, bg: 'bg-blue-500/20 text-blue-400', title: 'Report generated', desc: 'Monthly sales report', time: '2h ago' },
]

const features = [
  { icon: Zap, title: 'Real-time Data', desc: 'Updated every minute', color: 'text-amber-400' },
  { icon: ShieldCheck, title: 'Secure & Reliable', desc: 'Your data is safe with us', color: 'text-emerald-400' },
  { icon: Headphones, title: '24/7 Support', desc: "We're here to help", color: 'text-blue-400' },
  { icon: BarChart3, title: 'Advanced Analytics', desc: 'Make data-driven decisions', color: 'text-purple-400' },
]

function Overview() {
  return (
    <div className='space-y-6'>
      {/* Stats */}
     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            return (
              <div
                className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl hover:shadow-slate-600/50 transition-all duration-300 group"
                key={index}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-300">
                      {stat.title}
                    </p>
    
                    <p className="text-2xl font-bold text-slate-600 dark:text-white mb-4">
                      {stat.value}
                    </p>
    
                    <div className="flex items-center space-x-2">
                      {stat.trend === "up" ? (
                        <ArrowUpRight className="w-4 h-4 text-green-400" />
                      ) : (
                        <ArrowDownRight className="w-4 h-4 text-red-400" />
                      )}
                      <span
                        className={`text-sm font-semibold ${
                          stat.trend === "up" ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {stat.change}
                      </span>
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        vs Last Month
                      </span>
                    </div>
                  </div>
    
                  <div
                    className={`p-3 rounded-xl group-hover:scale-110 transition-all duration-200 ${stat.bgColor}`}
                  >
                    <stat.icon className={`w-6 h-6 ${stat.textColor}`} />
                  </div>
                </div>
    
                {/* Progress bar */}
                <div className="mt-4 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r rounded-full transition-all duration-500 ${stat.color}`}
                    style={{ width: stat.trend === "up" ? "75%" : "45%" }}
                  ></div>
                </div>
              </div>
            )
          })}
        </div>

      {/* Revenue + Sales by Category */}
      <div className='grid grid-cols-1 xl:grid-cols-3 gap-6'>
        <div className='xl:col-span-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/20 dark:border-slate-700/50'>
          <div className='flex items-center justify-between mb-6'>
            <div>
              <h3 className='text-lg font-bold text-slate-800 dark:text-white'>Revenue Overview</h3>
              <p className='text-sm text-slate-500 dark:text-slate-400'>Monthly revenue vs expenses</p>
            </div>
            <div className='flex items-center space-x-4'>
              <div className='flex items-center space-x-2'>
                <div className='w-3 h-3 rounded-full bg-purple-500'></div>
                <span className='text-sm text-slate-600 dark:text-slate-400'>Revenue</span>
              </div>
              <div className='flex items-center space-x-2'>
                <div className='w-3 h-3 rounded-full bg-blue-500'></div>
                <span className='text-sm text-slate-600 dark:text-slate-400'>Expenses</span>
              </div>
            </div>
          </div>

          <div className='h-72'>
            <ResponsiveContainer width='100%' height='100%'>
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id='revFill' x1='0' y1='0' x2='0' y2='1'>
                    <stop offset='0%' stopColor='#a855f7' stopOpacity={0.5} />
                    <stop offset='100%' stopColor='#a855f7' stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id='expFill' x1='0' y1='0' x2='0' y2='1'>
                    <stop offset='0%' stopColor='#3b82f6' stopOpacity={0.4} />
                    <stop offset='100%' stopColor='#3b82f6' stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray='3 3' stroke='#334155' opacity={0.2} vertical={false} />
                <XAxis dataKey='date' stroke='#94a3b8' fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '12px', color: '#fff' }}
                />
                <Area type='monotone' dataKey='revenue' stroke='#a855f7' strokeWidth={2} fill='url(#revFill)' dot={{ r: 3 }} />
                <Area type='monotone' dataKey='expenses' stroke='#3b82f6' strokeWidth={2} fill='url(#expFill)' dot={{ r: 3 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/20 dark:border-slate-700/50'>
          <h3 className='text-lg font-bold text-slate-800 dark:text-white mb-6'>Sales by Category</h3>

          <div className='relative h-48 flex items-center justify-center mb-6'>
            <ResponsiveContainer width='100%' height='100%'>
              <PieChart>
                <Pie
                  data={salesByCategory}
                  cx='50%'
                  cy='50%'
                  innerRadius={55}
                  outerRadius={80}
                  paddingAngle={3}
                  dataKey='value'
                >
                  {salesByCategory.map((entry, i) => (
                    <Cell key={i} fill={entry.color} stroke='none' />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className='absolute inset-0 flex flex-col items-center justify-center pointer-events-none'>
              <p className='text-xl font-bold text-slate-800 dark:text-white'>$45,231</p>
              <p className='text-xs text-slate-500 dark:text-slate-400'>Total Sales</p>
            </div>
          </div>

          <div className='space-y-3'>
            {salesByCategory.map((cat, i) => (
              <div key={i} className='flex items-center justify-between text-sm'>
                <div className='flex items-center space-x-2'>
                  <div className='w-2.5 h-2.5 rounded-full' style={{ backgroundColor: cat.color }}></div>
                  <span className='text-slate-600 dark:text-slate-300'>{cat.name}</span>
                </div>
                <div className='flex items-center space-x-4'>
                  <span className='text-slate-500 dark:text-slate-400'>{cat.value}%</span>
                  <span className='font-medium text-slate-800 dark:text-white'>{cat.amount}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Products + Recent Activity + Promo */}
      <div className='grid grid-cols-1 xl:grid-cols-3 gap-6'>
        <div className='xl:col-span-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/20 dark:border-slate-700/50 overflow-hidden'>
          <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50 flex items-center justify-between'>
            <h3 className='text-lg font-bold text-slate-800 dark:text-white'>Top Products</h3>
            <button className='text-blue-500 hover:text-blue-600 text-sm font-medium flex items-center space-x-1'>
              <span>View All</span>
              <ArrowUpRight className='w-4 h-4' />
            </button>
          </div>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead>
                <tr className='text-left border-b border-slate-200/50 dark:border-slate-700/50'>
                  <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase'>#</th>
                  <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase'>Product</th>
                  <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase'>Category</th>
                  <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase'>Sales</th>
                  <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase'>Revenue</th>
                  <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase'>Trend</th>
                </tr>
              </thead>
              <tbody>
                {topProducts.map((p, i) => (
                  <tr key={i} className='border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors'>
                    <td className='px-6 py-4 text-sm text-slate-500 dark:text-slate-400'>{i + 1}</td>
                    <td className='px-6 py-4'>
                      <div className='flex items-center space-x-3'>
                        <div className='w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center'>
                          <p.icon className='w-4 h-4 text-slate-500 dark:text-slate-400' />
                        </div>
                        <span className='text-sm font-medium text-slate-800 dark:text-white'>{p.name}</span>
                      </div>
                    </td>
                    <td className='px-6 py-4 text-sm text-slate-500 dark:text-slate-400'>{p.category}</td>
                    <td className='px-6 py-4 text-sm text-slate-600 dark:text-slate-300'>{p.sold} sold</td>
                    <td className='px-6 py-4 text-sm font-semibold text-slate-800 dark:text-white'>{p.revenue}</td>
                    <td className='px-6 py-4'>
                      <span className='inline-flex items-center space-x-1 text-emerald-500 text-sm font-medium'>
                        <TrendingUp className='w-3.5 h-3.5' />
                        <span>{p.change}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className='space-y-6'>
          <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/20 dark:border-slate-700/50 p-6'>
            <div className='flex items-center justify-between mb-4'>
              <h3 className='text-lg font-bold text-slate-800 dark:text-white'>Recent Activity</h3>
              <button className='text-blue-500 hover:text-blue-600 text-sm font-medium'>View All</button>
            </div>
            <div className='space-y-4'>
              {activity.map((a, i) => (
                <div key={i} className='flex items-start space-x-3'>
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${a.bg}`}>
                    <a.icon className='w-4 h-4' />
                  </div>
                  <div className='flex-1 min-w-0'>
                    <p className='text-sm font-medium text-slate-800 dark:text-white'>{a.title}</p>
                    <p className='text-xs text-slate-500 dark:text-slate-400 truncate'>{a.desc}</p>
                  </div>
                  <span className='text-xs text-slate-400 dark:text-slate-500 whitespace-nowrap'>{a.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className='bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-6 text-white'>
            <TrendingUp className='w-8 h-8 mb-3' />
            <h3 className='text-lg font-bold mb-2'>Grow Your Business</h3>
            <p className='text-sm text-blue-100 mb-4'>
              Get detailed insights, track performance and make better decisions.
            </p>
            <button className='w-full bg-white text-blue-700 rounded-xl py-2.5 text-sm font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-1'>
              <span>View Reports</span>
              <ArrowUpRight className='w-4 h-4' />
            </button>
          </div>
        </div>
      </div>

      {/* Feature strip */}
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4'>
        {features.map((f, i) => (
          <div
            key={i}
            className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/20 dark:border-slate-700/50 p-4 flex items-center space-x-3'
          >
            <f.icon className={`w-6 h-6 ${f.color}`} />
            <div>
              <p className='text-sm font-semibold text-slate-800 dark:text-white'>{f.title}</p>
              <p className='text-xs text-slate-500 dark:text-slate-400'>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Overview