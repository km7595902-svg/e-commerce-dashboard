import React from 'react'
import ToolBar from './ToolBar'
import Stats from './Stats'
import ChartTime from './ChartTime'
import RecentActivity from './RecentActivity'
import Queick from './Queick'

function Activity() {
  return (
    <div className='space-y-6'>
      <ToolBar />
      <Stats />
      <ChartTime />
      <div className='grid grid-cols-1 xl:grid-cols-4 gap-6 items-start'>
        <div className='xl:col-span-3'>
          <RecentActivity />
        </div>
        <Queick />
      </div>
    </div>
  )
}

export default Activity