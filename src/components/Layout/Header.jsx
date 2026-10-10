import { Filter, Menu, Plus, Search, Sun, Bell, Settings, ChevronDown } from 'lucide-react'
import React from 'react'

const pageInfo = {
  dashboard: {
    title: 'Dashboard',
    subtitle: 'Welcome back, Nirmal!',
  },
  overview: {
    title: 'Analytics',
    subtitle: 'Track your store performance',
  },
  reports: {
    title: 'Reports',
    subtitle: 'View detailed analytics reports',
  },
  insights: {
    title: 'Insights',
    subtitle: 'Data-driven business insights',
  },
  'all-users': {
    title: 'All Users',
    subtitle: 'Manage your users, roles and permissions',
  },
  permission: {
    title: 'Roles & Permissions',
    subtitle: 'Manage user roles and permissions',
  },
  activity: {
    title: 'User Activity',
    subtitle: 'View user activity and interactions',
  },
  product: {
    title: 'Products',
    subtitle: 'Manage your product inventory',
  },
  orders: {
    title: 'Orders',
    subtitle: 'Manage your orders and shipments',
  },
  customers: {
    title: 'Customers',
    subtitle: 'Manage your customer information and interactions',
  },
  inventory: {
    title: 'Inventory',
    subtitle: 'Manage your product inventory and stock levels',
  },
  messages: {
    title: 'Messages',
    subtitle: 'Manage your messages and communications',
  },
  calendar: {
    title: 'Calendar',
    subtitle: 'View and manage your calendar events',
  },
  settings: {
    title: 'Settings',
    subtitle: 'Manage your store settings and preferences',
  },
  'reports-page': {
    title: 'Reports',
    subtitle: 'View detailed analytics reports',
  },
}

function Header({ onToggle, currentPage, onPageChange }) {
  const info = pageInfo[currentPage] || pageInfo.dashboard

  return (
    <div className='bg-white/80 dark:bg-slate-900 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 px-4 md:px-6 py-3 md:py-5'>
      <div className='flex items-center justify-between gap-3'>
        {/* left section */}
        <div className='flex items-center space-x-2 md:space-x-4 min-w-0'>
          <button
            onClick={onToggle}
            className='flex shrink-0 rounded-lg p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'
          >
            <Menu className='w-5 h-5' />
          </button>
          <div className='min-w-0'>
            <h1 className='text-lg md:text-2xl font-semibold text-slate-800 dark:text-white truncate'>
              {info.title}
            </h1>
            <p className='hidden sm:block text-sm text-slate-500 dark:text-slate-400 truncate'>
              {info.subtitle}
            </p>
          </div>
        </div>

        {/* center section */}
        <div className='hidden md:flex flex-1 max-w-md mx-4 lg:mx-8'>
          <div className='relative w-full'>
            <Search className='w-4 h-4 text-slate-500 dark:text-slate-400 absolute left-3 top-1/2 -translate-y-1/2' />
            <input
              type='text'
              placeholder='Search...'
              className='w-full pl-10 pr-12 py-2.5 bg-slate-800 border border-slate-600 dark:border-slate-700 rounded-xl text-slate-200'
            />
            <button className='absolute right-1 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
              <Filter className='w-4 h-4' />
            </button>
          </div>
        </div>

        {/* right section */}
        <div className='flex items-center space-x-1 sm:space-x-3 shrink-0'>
        
          <button className='md:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
            <Search className='w-5 h-5' />
          </button>

          {/* Add New -> Products */}
          <button
            onClick={() => onPageChange?.('product')}
            className='hidden lg:flex items-center space-x-2 py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl cursor-pointer hover:shadow-lg transition-all'
          >
            <Plus className='w-4 h-4' />
            <span className='text-sm font-medium'>Add New</span>
          </button>

          {/* Theme toggle */}
          <button className='hidden sm:block p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
            <Sun className='w-5 h-5' />
          </button>

          {/* Notification -> Messages */}
          <button
            onClick={() => onPageChange?.('messages')}
            className={`relative p-2 sm:p-2.5 rounded-xl transition-colors ${
              currentPage === 'messages'
                ? 'bg-blue-500/15 text-blue-500'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Bell className='w-5 h-5' />
            <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
              3
            </span>
          </button>

          {/* Settings -> Settings page */}
          <button
            onClick={() => onPageChange?.('settings')}
            className={`hidden sm:block p-2.5 rounded-xl transition-colors ${
              currentPage === 'settings'
                ? 'bg-blue-500/15 text-blue-500'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Settings className='w-5 h-5' />
          </button>

          {/* user profile -> Settings page */}
          <button
            onClick={() => onPageChange?.('settings')}
            className='flex items-center space-x-2 md:space-x-3 pl-2 md:pl-3 border-l border-slate-200/50 dark:border-slate-700/50 text-left'
          >
            <img
              src='https://static.vecteezy.com/system/resources/previews/023/826/514/large_2x/ai-artificial-intelligence-humanoid-side-portrait-view-with-blue-and-orange-vibrant-neon-and-copy-space-artificial-intelligence-technology-concept-ai-generated-illustration-free-photo.jpg'
              alt='User Profile'
              className='w-8 h-8 rounded-full ring-2 ring-blue-500 shrink-0'
            />
            <div className='hidden md:block'>
              <p className='text-sm font-medium text-slate-800 dark:text-white'>Nirmal</p>
              <p className='text-xs text-slate-500 dark:text-slate-400'>Administrator</p>
            </div>
            <ChevronDown className='hidden md:block w-4 h-4 text-slate-500 dark:text-slate-400' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header