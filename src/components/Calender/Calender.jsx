import React from 'react'
import LeftPanel from './LeftPanel'
import MainCalendar from './MainCalendar'
import RightPanel from './RightPanel'

function Calender() {
  return (
    <div className='grid grid-cols-1 xl:grid-cols-5 gap-6 items-start'>
      <div className='xl:col-span-1'>
        <LeftPanel />
      </div>
      <div className='xl:col-span-3'>
        <MainCalendar />
      </div>
      <div className='xl:col-span-1'>
        <RightPanel />
      </div>
    </div>
  )
}

export default Calender