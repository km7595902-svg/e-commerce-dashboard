import React, { useState } from 'react'
import { Palette, Sun, Moon, MonitorCog, LayoutGrid, AlignJustify, Columns3 } from 'lucide-react'

function Appearance() {
  const [theme, setTheme] = useState('Dark')
  const [sidebar, setSidebar] = useState('Default')
  const [font, setFont] = useState('Medium')

  return (
    <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/20 dark:border-slate-700/50'>
      <div className='flex items-center space-x-3 mb-5'>
        <div className='w-10 h-10 rounded-xl bg-purple-600/20 flex items-center justify-center'>
          <Palette className='w-5 h-5 text-purple-400' />
        </div>
        <div>
          <h3 className='text-base font-bold text-slate-800 dark:text-white'>Appearance</h3>
          <p className='text-xs text-slate-500 dark:text-slate-400'>Customize how the dashboard looks and feels.</p>
        </div>
      </div>

      <div className='mb-5'>
        <p className='text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2'>Theme Mode</p>
        <div className='grid grid-cols-3 gap-2'>
          {[
            { label: 'Light', icon: Sun },
            { label: 'Dark', icon: Moon },
            { label: 'Auto', icon: MonitorCog },
          ].map((opt) => (
            <button
              key={opt.label}
              onClick={() => setTheme(opt.label)}
              className={`flex items-center justify-center space-x-1.5 py-2.5 rounded-xl border text-sm font-medium transition-colors ${
                theme === opt.label
                  ? 'border-blue-500 bg-blue-500/10 text-blue-500'
                  : 'border-slate-200/50 dark:border-slate-700/50 text-slate-500 dark:text-slate-400'
              }`}
            >
              <opt.icon className='w-4 h-4' />
              <span>{opt.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className='mb-5'>
        <p className='text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2'>Sidebar Style</p>
        <div className='grid grid-cols-3 gap-2 '>
          {[
            { label: 'Default', icon: Columns3 },
            { label: 'Compact', icon: AlignJustify },
            { label: 'Icon Only', icon: LayoutGrid },
          ].map((opt) => (
            <button
              key={opt.label}
              onClick={() => setSidebar(opt.label)}
              className={`flex items-center justify-center space-x-1.5 py-2.5 rounded-xl border text-[12px] font-medium transition-colors ${
                sidebar === opt.label
                  ? 'border-blue-500 bg-blue-500/10 text-blue-500'
                  : 'border-slate-200/50 dark:border-slate-700/50 text-slate-500 dark:text-slate-400'
              }`}
            >
              <opt.icon className='w-4 h-4' />
              <span>{opt.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className='text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2'>Font Size</p>
        <div className='grid grid-cols-3 gap-2'>
          {['Small', 'Medium', 'Large'].map((opt, i) => (
            <button
              key={opt}
              onClick={() => setFont(opt)}
              className={`flex items-center justify-center space-x-1.5 py-2.5 rounded-xl border font-medium transition-colors ${
                font === opt
                  ? 'border-blue-500 bg-blue-500/10 text-blue-500'
                  : 'border-slate-200/50 dark:border-slate-700/50 text-slate-500 dark:text-slate-400'
              }`}
              style={{ fontSize: i === 0 ? '10px' : i === 1 ? '12px' : '14px' }}
            >
              <span>A</span>
              <span>{opt}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Appearance