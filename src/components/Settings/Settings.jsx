import React, { useState } from 'react'
import { Info, Save } from 'lucide-react'
import Banner from './Banner'
import SettingsNav from './SettingsNav'
import ProfileSettings from './ProfileSettings'
import Notifications from './Notifications'
import Appearance from './Appearance'
import Security from './Security'

function Settings() {
  const [active, setActive] = useState('profile')
  
  return (
    <div className='space-y-6'>
      <Banner />

      <div className='grid grid-cols-1 xl:grid-cols-4 gap-6 items-start'>
        <div className='xl:col-span-1'>
          <SettingsNav active={active} onSelect={setActive} />
        </div>

        <div className='xl:col-span-2 space-y-6'>
          <ProfileSettings />
          <Notifications />
        </div>

        <div className='xl:col-span-1 space-y-6'>
          <Appearance />
          <Security />
        </div>
      </div>

      <div className='flex flex-wrap items-center justify-between gap-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-4 border border-slate-200/20 dark:border-slate-700/50'>
        <div className='flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400'>
          <Info className='w-4 h-4' />
          <span>Last updated: 30 Sep 2026, 10:24 AM</span>
        </div>
        <button className='flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium hover:shadow-lg transition-all'>
          <Save className='w-4 h-4' />
          <span>Save Changes</span>
        </button>
      </div>
    </div>
  )
}

export default Settings