import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

const data = [
  { name: 'Electronics', value: 45, color: '#0000FF' },
  { name: 'Clothing', value: 30, color: '#FF0000' },
  { name: 'Books', value: 15, color: '#00FF00' },
  { name: 'Other', value: 10, color: '#FFFF00' },
]

function SalesChart() {
  return (
    <div className='bg-white dark:bg-slate-900 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/10 dark:border-slate-700/50'>
      <div className='mb-6'>
        <h3 className='text-lg font-bold text-slate-800 dark:text-white'>Sales By Category</h3>
        <p className='text-sm text-slate-500 dark:text-slate-400'>Product Distribution</p>
      </div>

      <div className='h-45'>
        <ResponsiveContainer width='100%' height='100%'>
          <PieChart>
            <Pie
              data={data}
              cx='50%'
              cy='50%'
              innerRadius={40}
              outerRadius={70}
              paddingAngle={2}
              dataKey='value'
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: '#1e293b',
                border: 'none',
                borderRadius: '12px',
                color: '#fff',
              }}
              formatter={(value, name) => [`${value}%`, name]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className='mt-4 grid grid-cols-2 gap-2'>
        {data.map((item, index) => (
          <div key={index} className='flex items-center space-x-2'>
            <div
              className='w-3 h-3 rounded-full'
              style={{ backgroundColor: item.color }}
            ></div>
            <span className='text-xs text-slate-600 dark:text-slate-400'>
              {item.name}
            </span>
            <span className='text-xs font-medium text-slate-800 dark:text-white ml-auto'>
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SalesChart