import React, { useState } from 'react'
import {
  Zap,
  ChevronDown,
  ShoppingBag,
  LayoutDashboard,
  BarChart3,
  Users,
  Package,
  MessageSquare,
  Calendar,
  FileText,
  Settings,
  X,
} from 'lucide-react'

const menuItems = [
  {
    id: 'dashboard',
    icon: LayoutDashboard,
    label: 'Dashboard',
    badge: 'New',
  },
  {
    id: 'analytics',
    icon: BarChart3,
    label: 'Analytics',
    submenu: [
      { id: 'overview', label: 'Overview' },
      { id: 'reports', label: 'Reports' },
      { id: 'insights', label: 'Insights' },
    ],
  },
  {
    id: 'users',
    icon: Users,
    label: 'Users',
    count: '3.8k',
    submenu: [
      { id: 'all-users', label: 'All Users' },
      { id: 'permission', label: 'Roles & Permissions' },
      { id: 'activity', label: 'User Activity' },
    ],
  },
  {
    id: 'ecommerce',
    icon: ShoppingBag,
    label: 'E-commerce',
    submenu: [
      { id: 'product', label: 'Products' },
      { id: 'orders', label: 'Orders' },
      { id: 'customers', label: 'Customers' },
    ],
  },
  {
    id: 'inventory',
    icon: Package,
    label: 'Inventory',
    count: '1.2k',
  },
  {
    id: 'messages',
    icon: MessageSquare,
    label: 'Messages',
    badge: '30',
  },
  {
    id: 'calendar',
    icon: Calendar,
    label: 'Calendar',
  },
  {
    id: 'reports-page',
    icon: FileText,
    label: 'Reports',
  },
  {
    id: 'settings',
    icon: Settings,
    label: 'Settings',
  },
]

function Sidebar({ collapsed, mobileOpen, onToggle, currentPage, onPageChange }) {
  const [expandedItems, setExpandedItems] = useState(new Set(['analytics']))

 
  const isCollapsed = collapsed && !mobileOpen

  const toggleExpanded = (itemId) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId)
    } else {
      newExpanded.add(itemId)
    }
    setExpandedItems(newExpanded)
  }

  return (
    <div
      className={`fixed inset-y-0 left-0 z-40 w-72 h-screen transform transition-all duration-300 ease-in-out
        lg:static lg:translate-x-0
        ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
        ${collapsed ? 'lg:w-20' : 'lg:w-72'}
        bg-white dark:bg-slate-900 lg:bg-white/80 lg:dark:bg-slate-900/80 backdrop-blur-xl
        border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col shrink-0`}
    >
      {/* logo */}
      <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-3'>
            <div className='w-10 h-10 shrink-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg'>
              <Zap className='w-6 h-6 text-white' />
            </div>
            {!isCollapsed && (
              <div>
                <h1 className='text-xl font-bold text-slate-800 dark:text-white'>AXS</h1>
                <p className='text-xs text-slate-500 dark:text-slate-400'>Admin Panel</p>
              </div>
            )}
          </div>

          <button
            onClick={onToggle}
            className='lg:hidden p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'
          >
            <X className='w-5 h-5' />
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className='flex-1 p-4 space-y-2 overflow-y-auto scrollbar-thin'>
        {menuItems.map((item) => {
          const isActive = currentPage === item.id
          const isExpanded = expandedItems.has(item.id)

          return (
            <div key={item.id}>
              <button
                onClick={() => {
                  if (item.submenu) {
                    toggleExpanded(item.id)
                    onPageChange?.(item.submenu[0].id)
                  } else {
                    onPageChange?.(item.id)
                  }
                }}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <div className='flex items-center space-x-3'>
                  <item.icon className='w-5 h-5 shrink-0' />
                  {!isCollapsed && (
                    <>
                      <span className='text-sm font-medium'>{item.label}</span>
                      {item.badge && (
                        <span className='px-2 py-1 text-xs bg-red-500 text-white rounded-full'>
                          {item.badge}
                        </span>
                      )}
                      {item.count && (
                        <span className='px-2 py-1 text-xs bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full'>
                          {item.count}
                        </span>
                      )}
                    </>
                  )}
                </div>

                {!isCollapsed && item.submenu && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </button>

              {/* sub menu */}
              {!isCollapsed && item.submenu && isExpanded && (
                <div className='ml-8 mt-2 space-y-1'>
                  {item.submenu.map((subitem) => (
                    <button
                      key={subitem.id}
                      onClick={() => onPageChange?.(subitem.id)}
                      className={`w-full text-left text-sm p-2 rounded-lg transition-colors ${
                        currentPage === subitem.id
                          ? 'text-blue-500 font-medium'
                          : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      {subitem.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </nav>

      {/* User Profile */}
      {!isCollapsed && (
        <div className='p-4 border-t border-slate-200/50 dark:border-slate-700/50'>
          <div className='flex items-center space-x-3 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50'>
            <img
              src='https://static.vecteezy.com/system/resources/previews/023/826/514/large_2x/ai-artificial-intelligence-humanoid-side-portrait-view-with-blue-and-orange-vibrant-neon-and-copy-space-artificial-intelligence-technology-concept-ai-generated-illustration-free-photo.jpg'
              alt='User'
              className='w-10 h-10 rounded-full ring-2 ring-blue-500 shrink-0'
            />
            <div className='flex-1 min-w-0'>
              <p className='text-sm font-medium text-slate-800 dark:text-white truncate'>Nirmal</p>
              <p className='text-xs text-slate-500 dark:text-slate-400'>Administrator</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Sidebar