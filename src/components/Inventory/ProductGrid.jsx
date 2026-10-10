import React, { useState } from 'react'
import { Box, Search, ChevronDown, MoreVertical, Package, LayoutGrid, List } from 'lucide-react'

const products = [
  { name: 'iPhone 15 Pro', sku: 'IP15-001', image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=200', category: 'Electronics', price: '$799.00', stock: 124, status: 'In Stock' },
  { name: 'Nike Air Max 270', sku: 'NK-204', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200', category: 'Fashion', price: '$129.00', stock: 18, status: 'Low Stock' },
  { name: 'Smart Watch Pro', sku: 'SW-103', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200', category: 'Accessories', price: '$199.00', stock: 76, status: 'In Stock' },
  { name: 'Wireless Headphones', sku: 'WH-067', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200', category: 'Electronics', price: '$249.00', stock: 0, status: 'Out of Stock' },
  { name: 'Face Cream', sku: 'BC-076', image: 'https://images.unsplash.com/photo-1598440947619-2c35cc9019b3?w=200', category: 'Beauty', price: '$24.00', stock: 56, status: 'In Stock' },
  { name: 'Travel Backpack', sku: 'TB-031', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200', category: 'Accessories', price: '$59.00', stock: 43, status: 'In Stock' },
]

const statusStyles = {
  'In Stock': 'bg-emerald-500/90 text-white',
  'Low Stock': 'bg-amber-500/90 text-white',
  'Out of Stock': 'bg-red-500/90 text-white',
}

function ProductGrid() {
  const [viewMode, setViewMode] = useState('grid')

  return (
    <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/20 dark:border-slate-700/50 overflow-hidden'>
      <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50'>
        <div className='flex flex-wrap items-center justify-between gap-4'>
          <div className='flex items-center space-x-3'>
            <Box className='w-4 h-4 text-blue-400' />
            <h3 className='text-base font-bold text-slate-800 dark:text-white'>Product Inventory</h3>
            <span className='text-sm text-slate-500 dark:text-slate-400'>1,248 products</span>
          </div>

          <div className='flex flex-wrap items-center gap-3'>
            <button className='flex items-center space-x-1 px-3 py-2 rounded-xl border border-slate-200/50 dark:border-slate-700/50 text-sm text-slate-600 dark:text-slate-300 whitespace-nowrap'>
              <span>All Categories</span>
              <ChevronDown className='w-4 h-4' />
            </button>
            <button className='flex items-center space-x-1 px-3 py-2 rounded-xl border border-slate-200/50 dark:border-slate-700/50 text-sm text-slate-600 dark:text-slate-300 whitespace-nowrap'>
              <span>All Status</span>
              <ChevronDown className='w-4 h-4' />
            </button>
            <div className='relative'>
              <Search className='w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2' />
              <input
                type='text'
                placeholder='Search product...'
                className='pl-9 pr-4 py-2 w-48 bg-slate-100 dark:bg-slate-800 border border-transparent rounded-xl text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 focus:outline-none'
              />
            </div>
            <div className='flex items-center bg-slate-100 dark:bg-slate-800 rounded-xl p-1'>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}
              >
                <LayoutGrid className='w-4 h-4' />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}
              >
                <List className='w-4 h-4' />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='p-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4'>
          {products.map((p, i) => (
            <div
              key={i}
              className='rounded-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden hover:shadow-lg transition-shadow'
            >
              <div className='relative'>
                <img src={p.image} alt={p.name} className='w-full h-28 object-cover' />
                <span className={`absolute top-2 left-2 px-2 py-1 text-[10px] font-semibold rounded-full ${statusStyles[p.status]}`}>
                  {p.status}
                </span>
                <button className='absolute top-2 right-2 p-1 rounded-lg bg-black/30 text-white hover:bg-black/50 transition-colors'>
                  <MoreVertical className='w-3.5 h-3.5' />
                </button>
              </div>
              <div className='p-3'>
                <p className='text-sm font-semibold text-slate-800 dark:text-white truncate'>{p.name}</p>
                <p className='text-xs text-slate-400 mb-2'>SKU: {p.sku}</p>
                <span className='inline-block px-2 py-0.5 text-[10px] font-medium rounded-full bg-indigo-500/15 text-indigo-400 mb-2'>
                  {p.category}
                </span>
                <div className='flex items-center justify-between'>
                  <span className='text-sm font-bold text-slate-800 dark:text-white'>{p.price}</span>
                  <span className='flex items-center space-x-1 text-xs text-slate-500 dark:text-slate-400'>
                    <Package className='w-3 h-3' />
                    <span>{p.stock} in stock</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductGrid