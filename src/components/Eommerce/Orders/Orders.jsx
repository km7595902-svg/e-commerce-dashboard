import React from 'react'
import ToolBar from './ToolBar'
import Stats from './Stats'
import OrdersTable from './OrdersTable'
import SidePanel from './SidePanel'

function Orders() {
  return (
    <div className='space-y-6'>
      <ToolBar />
      <Stats />
        <div className='grid grid-cols-1 xl:grid-cols-3 gap-6 items-start'>
        <div className='xl:col-span-2'>
          <OrdersTable />
        </div>
        <SidePanel />
      </div>
    </div>
  )
}

export default Orders
