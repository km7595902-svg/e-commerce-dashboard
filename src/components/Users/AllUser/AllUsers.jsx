import React from 'react'
import Toolbar from './Toolbar'
import Stats from './Stats '
import UserTable from './UserTable'


function AllUsers() {
  return (
    <div className='space-y-6'>
        <Toolbar />
        <Stats />
        <UserTable />

        
    </div>
  )
}

export default AllUsers