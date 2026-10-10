import { useState } from 'react'
import Sidebar from './components/Layout/Sidebar'
import Header from './components/Layout/Header'
import Dashboard from './components/Dashboard/Dashboard'
import Overview from './components/Analytics/Overview'
import Reports from './components/Analytics/Reports'
import Insights from './components/Analytics/Insights'
import AllUsers from './components/Users/AllUser/AllUsers'
import RolePermission from './components/Users/Roles&permission/RolePermission'
import Activity from './components/Users/UserActitivy/Activity'
import Product from "./components/Eommerce/Product/Product"
import Orders from './components/Eommerce/Orders/Orders'
import Inventory from './components/Inventory/Inventory'
import Messages from './components/Messages/Messages'
import Calender from './components/Calender/Calender'
import Customers from './components/Eommerce/Customer/Customers'
import Settings from './components/Settings/Settings'
import Repots from './components/Reports/Repots'
import './App.css'

function App() {
  const [collapsed, setCollapsed] = useState(false)   
  const [mobileOpen, setMobileOpen] = useState(false) 
  const [currentPage, setCurrentPage] = useState('dashboard')

  const handleToggle = () => {
    if (window.innerWidth < 1024) {
      setMobileOpen((v) => !v)
    } else {
      setCollapsed((v) => !v)
    }
  }

  const handlePageChange = (id) => {
    setCurrentPage(id)
    setMobileOpen(false) 
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-red-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500'>
      <div className='flex h-screen overflow-hidden'>
        {/* Mobile overlay */}
        {mobileOpen && (
          <div
            className='fixed inset-0 bg-black/60 z-30 lg:hidden'
            onClick={() => setMobileOpen(false)}
          />
        )}

        <Sidebar
          collapsed={collapsed}
          mobileOpen={mobileOpen}
          onToggle={handleToggle}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />

        <div className='flex-1 min-w-0 flex flex-col overflow-hidden'>
        <Header
        onToggle={handleToggle}
       currentPage={currentPage}
      onPageChange={handlePageChange}
    />

          <main className='flex-1 overflow-y-auto p-4 md:p-6'>
            <div className='space-y-6'>
              {currentPage === 'dashboard' && <Dashboard />}
              {currentPage === 'overview' && <Overview />}
              {currentPage === 'reports' && <Reports />}
              {currentPage === 'insights' && <Insights />}
              {currentPage === 'all-users' && <AllUsers />}
              {currentPage === 'roles' && <RolePermission />}
              {currentPage === 'activity' && <Activity />}
              {currentPage === 'orders' && <Orders />}
              {currentPage ===  'product' && <Product />}
              {currentPage === 'inventory' && <Inventory />}
              {currentPage === 'customers' && <Customers />}
              {currentPage === 'messages' && <Messages />}
              {currentPage === 'calendar' && <Calender />}
              {currentPage === 'settings' && <Settings />}
              {currentPage === 'reports-page' && <Repots />}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default App