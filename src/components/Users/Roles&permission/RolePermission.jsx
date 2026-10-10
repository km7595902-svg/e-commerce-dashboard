import React from 'react'
import AddBtn from './AddBtn'
import Stat, { STATS } from './Stat'
import Permissions from './Permissions'

function RolePermission() {
  return (
    <div className='space-y-6'>
      <AddBtn />

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
        {STATS.map((stat, i) => (
          <Stat key={i} stat={stat} index={i} />
        ))}
      </div>
       <Permissions />
    </div>
  )
}

export default RolePermission