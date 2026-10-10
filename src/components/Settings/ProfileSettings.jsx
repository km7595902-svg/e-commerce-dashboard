import React from 'react'
import { User, Camera } from 'lucide-react'

function ProfileSettings() {
  return (
    <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/20 dark:border-slate-700/50'>
      <div className='flex items-center space-x-3 mb-6'>
        <div className='w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center'>
          <User className='w-5 h-5 text-blue-400' />
        </div>
        <div>
          <h3 className='text-base font-bold text-slate-800 dark:text-white'>Profile Settings</h3>
          <p className='text-xs text-slate-500 dark:text-slate-400'>Update your personal information and profile details.</p>
        </div>
      </div>

      <div className='flex items-center space-x-5 mb-6'>
        <div className='relative'>
          <img
            src='https://static.vecteezy.com/system/resources/previews/023/826/514/large_2x/ai-artificial-intelligence-humanoid-side-portrait-view-with-blue-and-orange-vibrant-neon-and-copy-space-artificial-intelligence-technology-concept-ai-generated-illustration-free-photo.jpg'
            alt='Profile'
            className='w-20 h-20 rounded-full object-cover ring-2 ring-blue-500'
          />
          <button className='absolute bottom-0 right-0 w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center border-2 border-white dark:border-slate-900'>
            <Camera className='w-3.5 h-3.5 text-white' />
          </button>
        </div>
        <button className='flex items-center space-x-2 px-4 py-2 rounded-xl border border-slate-200/50 dark:border-slate-700/50 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors'>
          <span>Change Photo</span>
        </button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div>
          <label className='block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1.5'>Full Name</label>
          <input
            type='text'
            defaultValue='Nirmal'
            className='w-full px-4 py-2.5 bg-slate-100 dark:bg-slate-800 border border-transparent rounded-xl text-sm text-slate-700 dark:text-slate-200 focus:outline-none'
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1.5'>Email Address</label>
          <input
            type='email'
            defaultValue='nirmal@example.com'
            className='w-full px-4 py-2.5 bg-slate-100 dark:bg-slate-800 border border-transparent rounded-xl text-sm text-slate-700 dark:text-slate-200 focus:outline-none'
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1.5'>Phone Number</label>
          <input
            type='text'
            defaultValue='+91 98765 43210'
            className='w-full px-4 py-2.5 bg-slate-100 dark:bg-slate-800 border border-transparent rounded-xl text-sm text-slate-700 dark:text-slate-200 focus:outline-none'
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1.5'>Role</label>
          <select className='w-full px-4 py-2.5 bg-slate-100 dark:bg-slate-800 border border-transparent rounded-xl text-sm text-slate-700 dark:text-slate-200 focus:outline-none'>
            <option>Administrator</option>
            <option>Manager</option>
            <option>Editor</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default ProfileSettings