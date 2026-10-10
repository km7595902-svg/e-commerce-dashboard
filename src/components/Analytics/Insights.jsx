import React, { useState } from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import {
  TrendingUp,
  Users,
  ShoppingCart,
  Percent,
  Sparkles,
  Bot,
  Trophy,
  UserCheck,
  Eye,
  Clock,
  Activity,
  Lightbulb,
  ChevronRight,
  Heart,
} from 'lucide-react'

/* ---------------- DATA ---------------- */

const stats = [
  {
    title: 'Revenue Growth',
    value: '+13.5%',
    note: 'Your revenue is trending up!',
    icon: TrendingUp,
    bg: 'bg-emerald-500',
    noteBox: 'bg-emerald-500/10 text-emerald-400',
    color: '#10b981',
    data: [20, 26, 22, 32, 28, 40, 36, 48, 44, 56],
  },
  {
    title: 'New Customers',
    value: '+5.4%',
    note: 'You got 198 new customers this month.',
    icon: Users,
    bg: 'bg-indigo-600',
    noteBox: 'bg-indigo-500/10 text-indigo-300',
    color: '#a855f7',
    data: [18, 24, 20, 30, 26, 38, 34, 44, 40, 52],
  },
  {
    title: 'Average Order Value',
    value: '+8.2%',
    note: 'Your AOV increased to $79.4',
    icon: ShoppingCart,
    bg: 'bg-amber-500',
    noteBox: 'bg-amber-500/10 text-amber-400',
    color: '#f59e0b',
    data: [16, 22, 18, 28, 24, 34, 30, 42, 38, 50],
  },
  {
    title: 'Conversion Rate',
    value: '+1.2%',
    note: 'Now 4.8% of visitors buy',
    icon: Percent,
    bg: 'bg-pink-600',
    noteBox: 'bg-pink-500/10 text-pink-400',
    color: '#ec4899',
    data: [14, 20, 16, 26, 22, 32, 28, 40, 36, 48],
  },
]

const revenueOrdersData = [
  { date: 'Apr 1', revenue: 4000, orders: 1200 },
  { date: 'Apr 4', revenue: 6500, orders: 2100 },
  { date: 'Apr 7', revenue: 7200, orders: 2300 },
  { date: 'Apr 10', revenue: 10500, orders: 2900 },
  { date: 'Apr 13', revenue: 12000, orders: 3100 },
  { date: 'Apr 16', revenue: 14500, orders: 3500 },
  { date: 'Apr 19', revenue: 17500, orders: 3900 },
  { date: 'Apr 22', revenue: 28450, orders: 342 },
  { date: 'Apr 25', revenue: 38000, orders: 4700 },
  { date: 'Apr 28', revenue: 43500, orders: 5100 },
  { date: 'Apr 30', revenue: 48500, orders: 5600 },
]

const aiInsights = [
  { icon: TrendingUp, bg: 'bg-emerald-500/15 text-emerald-400', title: 'Revenue increased by 13.5%', desc: 'Your store made $5,421 more than last month.' },
  { icon: Users, bg: 'bg-indigo-500/15 text-indigo-400', title: 'Top product is Electronics', desc: 'It contributed 42.3% of total sales.' },
  { icon: ShoppingCart, bg: 'bg-amber-500/15 text-amber-400', title: 'Cart abandonment is 6.8%', desc: 'Consider improving checkout experience.' },
  { icon: Heart, bg: 'bg-pink-500/15 text-pink-400', title: 'Mobile traffic is 68%', desc: 'Optimize your mobile experience for more sales.' },
]

const topProducts = [
  { image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100', name: 'Wireless Earbuds', price: '$12,450', change: '+18.2%', barColor: 'bg-purple-500', width: '85%' },
  { image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100', name: 'Smart Watch', price: '$9,320', change: '+12.5%', barColor: 'bg-blue-500', width: '65%' },
  { image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100', name: 'Backpack', price: '$7,842', change: '+9.8%', barColor: 'bg-emerald-500', width: '52%' },
  { image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100', name: 'Running Shoes', price: '$5,120', change: '+6.7%', barColor: 'bg-amber-500', width: '38%' },
]

const customerBehavior = [
  { icon: Eye, bg: 'bg-emerald-500/15 text-emerald-400', label: 'Total Visitors', value: '24,832', change: '+12.6%', trend: 'up' },
  { icon: UserCheck, bg: 'bg-blue-500/15 text-blue-400', label: 'Returning Customers', value: '1,542', change: '+9.3%', trend: 'up' },
  { icon: Clock, bg: 'bg-indigo-500/15 text-indigo-400', label: 'Avg. Session Duration', value: '4m 32s', change: '+7.8%', trend: 'up' },
  { icon: Activity, bg: 'bg-pink-500/15 text-pink-400', label: 'Bounce Rate', value: '32.4%', change: '-4.2%', trend: 'down' },
]

const quickSuggestions = [
  { icon: TrendingUp, bg: 'bg-indigo-500/15 text-indigo-400', title: 'Increase product visibility', desc: 'Your top products are Electronics. Add more promotions for other categories.', action: 'Create Campaign', actionColor: 'bg-indigo-600 hover:bg-indigo-700' },
  { icon: ShoppingCart, bg: 'bg-blue-500/15 text-blue-400', title: 'Reduce cart abandonment', desc: 'Send reminder emails to incomplete orders.', action: 'Setup Email', actionColor: 'bg-blue-600 hover:bg-blue-700' },
  { icon: Lightbulb, bg: 'bg-emerald-500/15 text-emerald-400', title: 'Focus on mobile users', desc: 'Mobile traffic is 68%. Improve mobile checkout flow.', action: 'View Guide', actionColor: 'bg-emerald-600 hover:bg-emerald-700' },
]

/* ---------------- SPARKLINE ---------------- */

function Sparkline({ data, color, id }) {
  const w = 100
  const h = 44
  const pad = 3
  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = max - min || 1
  const step = (w - pad * 2) / (data.length - 1)

  const points = data.map((v, i) => [
    pad + i * step,
    h - pad - ((v - min) / range) * (h - pad * 2),
  ])

  const line = points.map((p) => p.join(',')).join(' ')
  const area = `${pad},${h} ${line} ${w - pad},${h}`
  const gradId = `insight-grad-${id}`

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className='w-24 h-11 shrink-0' preserveAspectRatio='none'>
      <defs>
        <linearGradient id={gradId} x1='0' y1='0' x2='0' y2='1'>
          <stop offset='0%' stopColor={color} stopOpacity='0.35' />
          <stop offset='100%' stopColor={color} stopOpacity='0' />
        </linearGradient>
      </defs>
      <polygon points={area} fill={`url(#${gradId})`} />
      <polyline
        points={line}
        fill='none'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        vectorEffect='non-scaling-stroke'
      />
    </svg>
  )
}

/* ---------------- PAGE ---------------- */

function Insights() {
  const [range, setRange] = useState('Daily')

  return (
    <div className='space-y-6'>
      {/* Toolbar */}
      <div className='flex flex-wrap items-center justify-end gap-3'>
        <button className='flex items-center space-x-2 px-4 py-2.5 rounded-xl border border-slate-200/50 dark:border-slate-700/50 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
          <span>Apr 1 – Apr 30</span>
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
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${stat.bg}`}>
                <stat.icon className='w-5 h-5 text-white' />
              </div>
              <p className='text-sm font-medium text-slate-500 dark:text-slate-400 whitespace-nowrap'>
                {stat.title}
              </p>
            </div>

            <div className='flex items-end justify-between mb-4'>
              <div>
                <p className='text-2xl font-bold text-slate-800 dark:text-white'>{stat.value}</p>
                <p className='text-xs text-slate-500 dark:text-slate-400 mt-1'>vs last month</p>
              </div>
              <Sparkline data={stat.data} color={stat.color} id={i} />
            </div>

            <div className={`px-3 py-2 rounded-lg text-xs font-medium ${stat.noteBox}`}>
              {stat.note}
            </div>
          </div>
        ))}
      </div>

      {/* Key Insights + AI Insights */}
      <div className='grid grid-cols-1 xl:grid-cols-3 gap-6 items-start'>
        <div className='xl:col-span-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/20 dark:border-slate-700/50'>
          <div className='flex flex-wrap items-center justify-between gap-4 mb-2'>
            <div className='flex items-center space-x-3'>
              <div className='w-10 h-10 rounded-xl bg-purple-600/20 flex items-center justify-center'>
                <Sparkles className='w-5 h-5 text-purple-400' />
              </div>
              <div>
                <h3 className='text-lg font-bold text-slate-800 dark:text-white'>Key Insights</h3>
                <p className='text-sm text-slate-500 dark:text-slate-400'>Based on your store data and performance trends</p>
              </div>
            </div>
            <div className='flex items-center bg-slate-100 dark:bg-slate-800 rounded-xl p-1'>
              {['Daily', 'Weekly', 'Monthly'].map((label) => (
                <button
                  key={label}
                  onClick={() => setRange(label)}
                  className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                    range === label
                      ? 'bg-purple-600 text-white shadow'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className='mt-4 mb-3'>
            <p className='text-sm font-semibold text-slate-700 dark:text-slate-200'>Revenue vs Orders</p>
            <p className='text-xs text-slate-500 dark:text-slate-400'>How your revenue and orders are performing over time</p>
          </div>

          <div className='flex items-center gap-4 mb-4'>
            <div className='flex items-center space-x-2'>
              <div className='w-2.5 h-2.5 rounded-full bg-purple-500'></div>
              <span className='text-xs text-slate-600 dark:text-slate-400'>Revenue</span>
            </div>
            <div className='flex items-center space-x-2'>
              <div className='w-2.5 h-2.5 rounded-full bg-blue-500'></div>
              <span className='text-xs text-slate-600 dark:text-slate-400'>Orders</span>
            </div>
          </div>

          <div className='h-72'>
            <ResponsiveContainer width='100%' height='100%'>
              <AreaChart data={revenueOrdersData}>
                <defs>
                  <linearGradient id='insightsRevFill' x1='0' y1='0' x2='0' y2='1'>
                    <stop offset='0%' stopColor='#a855f7' stopOpacity={0.5} />
                    <stop offset='100%' stopColor='#a855f7' stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id='insightsOrdFill' x1='0' y1='0' x2='0' y2='1'>
                    <stop offset='0%' stopColor='#3b82f6' stopOpacity={0.4} />
                    <stop offset='100%' stopColor='#3b82f6' stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray='3 3' stroke='#334155' opacity={0.2} vertical={false} />
                <XAxis dataKey='date' stroke='#94a3b8' fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '12px', color: '#fff' }}
                />
                <Area type='monotone' dataKey='revenue' stroke='#a855f7' strokeWidth={2} fill='url(#insightsRevFill)' dot={{ r: 3 }} />
                <Area type='monotone' dataKey='orders' stroke='#3b82f6' strokeWidth={2} fill='url(#insightsOrdFill)' dot={{ r: 3 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/20 dark:border-slate-700/50'>
          <div className='flex items-center justify-between mb-5 gap-2'>
            <div className='flex items-center space-x-3'>
              <div className='w-10 h-10 rounded-xl bg-indigo-600/20 flex items-center justify-center shrink-0'>
                <Bot className='w-5 h-5 text-indigo-400' />
              </div>
              <div>
                <h3 className='text-lg font-bold text-slate-800 dark:text-white'>AI Insights</h3>
                <p className='text-xs text-slate-500 dark:text-slate-400'>Quick takeaways from your data</p>
              </div>
            </div>
            <span className='hidden 2xl:flex items-center space-x-1 px-2.5 py-1 rounded-full bg-indigo-600/20 text-indigo-300 text-xs font-medium whitespace-nowrap'>
              <Sparkles className='w-3 h-3' />
              <span>Powered by AI</span>
            </span>
          </div>

          <div className='space-y-3'>
            {aiInsights.map((insight, i) => (
              <button
                key={i}
                className='w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors text-left'
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${insight.bg}`}>
                  <insight.icon className='w-5 h-5' />
                </div>
                <div className='flex-1 min-w-0'>
                  <p className='text-sm font-semibold text-slate-800 dark:text-white'>{insight.title}</p>
                  <p className='text-xs text-slate-500 dark:text-slate-400'>{insight.desc}</p>
                </div>
                <ChevronRight className='w-4 h-4 text-slate-400 shrink-0' />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Top Products + Customer Behavior + Quick Suggestions */}
      <div className='grid grid-cols-1 xl:grid-cols-3 gap-6 items-start'>
        {/* Top Performing Products */}
        <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/20 dark:border-slate-700/50'>
          <div className='flex items-center justify-between mb-5 gap-2'>
            <div className='flex items-center space-x-3'>
              <div className='w-10 h-10 rounded-xl bg-purple-600/20 flex items-center justify-center shrink-0'>
                <Trophy className='w-5 h-5 text-purple-400' />
              </div>
              <div>
                <h3 className='text-base font-bold text-slate-800 dark:text-white'>Top Performing Products</h3>
                <p className='text-xs text-slate-500 dark:text-slate-400'>Best selling products this month</p>
              </div>
            </div>
            <button className='text-blue-500 hover:text-blue-600 text-xs font-medium flex items-center space-x-1 shrink-0 whitespace-nowrap'>
              <span>View All</span>
              <ChevronRight className='w-3.5 h-3.5' />
            </button>
          </div>

          <div className='space-y-4'>
            {topProducts.map((p, i) => (
              <div key={i} className='flex items-center space-x-3'>
                <img src={p.image} alt={p.name} className='w-10 h-10 rounded-lg object-cover shrink-0' />
                <div className='flex-1 min-w-0'>
                  <p className='text-sm font-medium text-slate-800 dark:text-white'>{p.name}</p>
                  <div className='flex items-center space-x-2 mb-1.5'>
                    <span className='text-xs text-slate-500 dark:text-slate-400'>{p.price}</span>
                    <span className='text-xs font-medium text-emerald-500'>{p.change}</span>
                  </div>
                  <div className='h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden'>
                    <div className={`h-full rounded-full ${p.barColor}`} style={{ width: p.width }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Behavior */}
        <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/20 dark:border-slate-700/50'>
          <div className='flex items-center justify-between mb-5 gap-2'>
            <div className='flex items-center space-x-3'>
              <div className='w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center shrink-0'>
                <Users className='w-5 h-5 text-blue-400' />
              </div>
              <div>
                <h3 className='text-base font-bold text-slate-800 dark:text-white'>Customer Behavior</h3>
                <p className='text-xs text-slate-500 dark:text-slate-400'>How your customers interact with your store</p>
              </div>
            </div>
            <button className='text-blue-500 hover:text-blue-600 text-xs font-medium flex items-center space-x-1 shrink-0 whitespace-nowrap'>
              <span>View All</span>
              <ChevronRight className='w-3.5 h-3.5' />
            </button>
          </div>

          <div className='space-y-4'>
            {customerBehavior.map((item, i) => (
              <div key={i} className='flex items-center space-x-3'>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${item.bg}`}>
                  <item.icon className='w-5 h-5' />
                </div>
                <div className='flex-1 min-w-0'>
                  <p className='text-xs text-slate-500 dark:text-slate-400'>{item.label}</p>
                  <p className='text-lg font-bold text-slate-800 dark:text-white'>{item.value}</p>
                </div>
                <span className={`text-xs font-semibold whitespace-nowrap ${item.trend === 'up' ? 'text-emerald-500' : 'text-red-500'}`}>
                  {item.trend === 'up' ? '↗' : '↘'} {item.change}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Suggestions */}
        <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/20 dark:border-slate-700/50'>
          <div className='flex items-center space-x-3 mb-5'>
            <div className='w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center shrink-0'>
              <Lightbulb className='w-5 h-5 text-amber-400' />
            </div>
            <div>
              <h3 className='text-base font-bold text-slate-800 dark:text-white'>Quick Suggestions</h3>
              <p className='text-xs text-slate-500 dark:text-slate-400'>Actions to improve your performance</p>
            </div>
          </div>

          <div className='space-y-4'>
            {quickSuggestions.map((item, i) => (
              <div key={i} className='flex items-start space-x-3'>
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${item.bg}`}>
                  <item.icon className='w-4 h-4' />
                </div>
                <div className='flex-1 min-w-0'>
                  <p className='text-sm font-semibold text-slate-800 dark:text-white'>{item.title}</p>
                  <p className='text-xs text-slate-500 dark:text-slate-400 mb-2'>{item.desc}</p>
                  <button
                    className={`inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg text-white text-xs font-medium transition-colors ${item.actionColor}`}
                  >
                    <span>{item.action}</span>
                    <ChevronRight className='w-3 h-3' />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Insights