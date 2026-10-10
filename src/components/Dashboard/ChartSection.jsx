import React from 'react'
import RevnueChart from './RevnueChart'
import SelesChart from './SelesChart'


function ChartSection() {
  return (
    <div className='grid grid-cols-1  xl:grid-cols-3 gap-6'>
        <div className='xl:col-span-2 '>
             <RevnueChart />
        </div>
        <div className='space-y-6'>
            <SelesChart />
        </div>
     
    </div>
  )
}

export default ChartSection
