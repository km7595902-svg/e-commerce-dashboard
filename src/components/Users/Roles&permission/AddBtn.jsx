import React from 'react'

function AddBtn() {
  return (
       <div className='flex flex-wrap items-center justify-end gap-3'>
        <button className='flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium hover:shadow-lg transition-all'>
          <span>+ Add Role</span>
        </button>
      </div>
  )
}

export default AddBtn
