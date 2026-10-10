import React from 'react'
import Toolbar from '../Product/Toolbar'
import ProductTable from '../Product/ProductTable'
import Stats from '../Product/Stats'
import SidePanel from '../Product/SidePanel'

function Product() {
  return (
    <div  className='space-y-6'>
      <Toolbar />
      <Stats />

       <div className='grid grid-cols-1 xl:grid-cols-3 gap-6 items-start'>
        <div className='xl:col-span-2'>
           <ProductTable />
        </div>
        <SidePanel />
      </div> 

    </div>
  )
}

export default Product
