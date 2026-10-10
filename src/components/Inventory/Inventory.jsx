import React from 'react'
import ToolBar from './ToolBar'
import Stats from './Stats'
import StockCategories from './StockCategories'
import StockMovement from './StockMovement'
import LowStockAlert from './LowStockAlert'
import ProductGrid from './ProductGrid'

function Inventory() {
  return (
    <div className='space-y-6'>
      <ToolBar />
      <Stats />
      <div className='grid grid-cols-1 xl:grid-cols-4 gap-6 items-start'>
        <div className='xl:col-span-1'>
          <StockCategories />
        </div>
        <div className='xl:col-span-2'>
          <StockMovement />
        </div>
        <div className='xl:col-span-1'>
          <LowStockAlert />
        </div>
      </div>
      <ProductGrid />
    </div>
  )
}

export default Inventory