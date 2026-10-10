import React from 'react'
import ToolBar from './ToolBar'
import Stats from './Stats'
import CustomerTable from './CustomerTable'
import SidePanel from './SidePanel'

function Customers() {
  return (
    <div className='space-y-6'>
        <ToolBar />
        <Stats />
         <div className='grid grid-cols-1 xl:grid-cols-3 gap-6 items-start'>
        <div className='xl:col-span-2'>
          <CustomerTable />
        </div>
          <SidePanel />
      </div>
    </div>
  )
}

export default Customers