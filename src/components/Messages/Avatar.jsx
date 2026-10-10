import React from 'react'
import { Users } from 'lucide-react'

const colors = [
  'bg-indigo-600', 'bg-blue-600', 'bg-purple-600',
  'bg-emerald-600', 'bg-amber-600', 'bg-pink-600',
]

function getInitials(name) {
  return name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

function Avatar({ name, image, online, size = 'w-10 h-10', isTeam = false }) {
  const colorIndex = name ? name.charCodeAt(0) % colors.length : 0

  return (
    <div className='relative shrink-0'>
      {image ? (
        <img src={image} alt={name} className={`${size} rounded-full object-cover`} />
      ) : (
        <div className={`${size} rounded-full flex items-center justify-center text-white font-semibold text-sm ${colors[colorIndex]}`}>
          {isTeam ? <Users className='w-1/2 h-1/2' /> : getInitials(name)}
        </div>
      )}
      {online && (
        <span className='absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-white dark:border-slate-900'></span>
      )}
    </div>
  )
}

export default Avatar