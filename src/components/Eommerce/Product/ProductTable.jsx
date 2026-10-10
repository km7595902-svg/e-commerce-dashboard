import React from 'react'
import { Search, ChevronDown, Eye, Pencil, Trash2, ChevronLeft, ChevronRight } from 'lucide-react'

const products = [
  { id: 1, name: 'iPhone 15 Pro', sku: 'IP15-001', image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=100', category: 'Electronics', catColor: 'bg-blue-500/15 text-blue-400', price: '$999.00', stock: 25, status: 'In Stock' },
  { id: 2, name: 'Nike Air Max 270', sku: 'NK-002', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100', category: 'Fashion', catColor: 'bg-purple-500/15 text-purple-400', price: '$150.00', stock: 12, status: 'In Stock' },
  { id: 3, name: 'Dell Inspiron 15', sku: 'DL-003', image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=100', category: 'Electronics', catColor: 'bg-blue-500/15 text-blue-400', price: '$699.00', stock: 0, status: 'Out of Stock' },
  { id: 4, name: 'Fossil Watch', sku: 'FS-004', image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=100', category: 'Accessories', catColor: 'bg-amber-500/15 text-amber-400', price: '$120.00', stock: 18, status: 'In Stock' },
  { id: 5, name: 'Skybags Backpack', sku: 'SB-005', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100', category: 'Bags', catColor: 'bg-emerald-500/15 text-emerald-400', price: '$65.00', stock: 30, status: 'In Stock' },
  { id: 6, name: 'Cotton T-Shirt', sku: 'CT-006', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100', category: 'Fashion', catColor: 'bg-purple-500/15 text-purple-400', price: '$25.00', stock: 5, status: 'In Stock' },
  { id: 7, name: 'Face Cream', sku: 'FC-007', image: 'https://images.unsplash.com/photo-1598440947619-2c35cc9019b3?w=100', category: 'Beauty', catColor: 'bg-pink-500/15 text-pink-400', price: '$18.00', stock: 22, status: 'In Stock' },
  { id: 8, name: 'Boat Headphones', sku: 'BH-008', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100', category: 'Electronics', catColor: 'bg-blue-500/15 text-blue-400', price: '$45.00', stock: 0, status: 'Out of Stock' },
]

function ProductTable() {
  return (
    <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/20 dark:border-slate-700/50 overflow-hidden'>
      <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50'>
        <div className='flex flex-wrap items-center gap-3'>
          <div className='relative flex-1 min-w-[220px]'>
            <Search className='w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2' />
            <input
              type='text'
              placeholder='Search products by name, SKU, or category...'
              className='w-full pl-9 pr-4 py-2.5 bg-slate-100 dark:bg-slate-800 border border-transparent rounded-xl text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 focus:outline-none'
            />
          </div>
          <button className='flex items-center space-x-1 px-3 py-2.5 rounded-xl border border-slate-200/50 dark:border-slate-700/50 text-sm text-slate-600 dark:text-slate-300 whitespace-nowrap'>
            <span>All Categories</span>
            <ChevronDown className='w-4 h-4' />
          </button>
          <button className='flex items-center space-x-1 px-3 py-2.5 rounded-xl border border-slate-200/50 dark:border-slate-700/50 text-sm text-slate-600 dark:text-slate-300 whitespace-nowrap'>
            <span>All Status</span>
            <ChevronDown className='w-4 h-4' />
          </button>
          <button className='flex items-center space-x-1 px-3 py-2.5 rounded-xl border border-slate-200/50 dark:border-slate-700/50 text-sm text-slate-600 dark:text-slate-300 whitespace-nowrap'>
            <span>Sort by: Newest</span>
            <ChevronDown className='w-4 h-4' />
          </button>
        </div>
      </div>

      <div className='overflow-x-auto'>
        <table className='w-full'>
          <thead>
            <tr className='text-left border-b border-slate-200/50 dark:border-slate-700/50'>
              <th className='px-6 py-3'>
                <input type='checkbox' className='rounded' />
              </th>
              <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>Product</th>
              <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>Category</th>
              <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>Price</th>
              <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>Stock</th>
              <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>Status</th>
              <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className='border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors'>
                <td className='px-6 py-4'>
                  <input type='checkbox' className='rounded' />
                </td>
                <td className='px-6 py-4'>
                  <div className='flex items-center space-x-3'>
                    <img src={p.image} alt={p.name} className='w-10 h-10 rounded-lg object-cover' />
                    <div>
                      <p className='text-sm font-medium text-slate-800 dark:text-white whitespace-nowrap'>{p.name}</p>
                      <p className='text-xs text-slate-500 dark:text-slate-400'>SKU: {p.sku}</p>
                    </div>
                  </div>
                </td>
                <td className='px-6 py-4'>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap ${p.catColor}`}>
                    {p.category}
                  </span>
                </td>
                <td className='px-6 py-4 text-sm font-semibold text-slate-800 dark:text-white whitespace-nowrap'>{p.price}</td>
                <td className='px-6 py-4 text-sm text-slate-600 dark:text-slate-300'>{p.stock}</td>
                <td className='px-6 py-4'>
                  <span
                    className={`inline-flex items-center space-x-1.5 px-2.5 py-1 text-xs font-medium rounded-full whitespace-nowrap ${
                      p.status === 'In Stock'
                        ? 'bg-emerald-500/15 text-emerald-400'
                        : 'bg-red-500/15 text-red-400'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${p.status === 'In Stock' ? 'bg-emerald-400' : 'bg-red-400'}`}></span>
                    <span>{p.status}</span>
                  </span>
                </td>
                <td className='px-6 py-4'>
                  <div className='flex items-center space-x-1'>
                    <button className='p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
                      <Eye className='w-4 h-4' />
                    </button>
                    <button className='p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
                      <Pencil className='w-4 h-4' />
                    </button>
                    <button className='p-1.5 rounded-lg text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors'>
                      <Trash2 className='w-4 h-4' />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='p-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/50 dark:border-slate-700/50'>
        <p className='text-sm text-slate-500 dark:text-slate-400'>Showing 1 - 8 of 248 products</p>
        <div className='flex items-center space-x-2'>
          <button className='p-2 rounded-lg border border-slate-200/50 dark:border-slate-700/50 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
            <ChevronLeft className='w-4 h-4' />
          </button>
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
                page === 1
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {page}
            </button>
          ))}
          <span className='text-slate-400 px-1'>...</span>
          <button className='w-9 h-9 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
            31
          </button>
          <button className='p-2 rounded-lg border border-slate-200/50 dark:border-slate-700/50 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
            <ChevronRight className='w-4 h-4' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductTable