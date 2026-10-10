import React from 'react'
import {  Plus,  } from 'lucide-react'
function ToolBar() {
  return (
    <div className='flex flex-wrap items-center justify-end gap-3'>
      <button className='flex items-center space-x-2 px-4 py-2.5 rounded-xl border border-slate-200/50 dark:border-slate-700/50 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
        <span>Last 30 Days</span>
      </button>
      <button className='flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium hover:shadow-lg transition-all'>
          <Plus className='w-4 h-4' />
        <span>Export Orders</span>
      </button>
    </div>
  )
}

export default ToolBar