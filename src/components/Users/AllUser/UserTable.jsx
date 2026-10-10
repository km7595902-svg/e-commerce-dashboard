import React, { useState } from 'react'

import {
 
  Search,
  Filter,
  ChevronDown,
  Eye,
  Pencil,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  UserCircle,
  Edit3,
  Shield,
  KeyRound,
  Ban,
  PenSquare,
} from 'lucide-react'

const users = [
  { id: 1, name: 'Rahul Sharma', email: 'rahul@example.com', avatar: 'https://i.pravatar.cc/40?img=11', role: 'Admin', status: 'Active', joined: 'Apr 28, 2025', phone: '+91 98765 43210', location: 'Kolkata, West Bengal, India', orders: 124, spent: '$5,842' },
  { id: 2, name: 'Sneha Das', email: 'sneha@example.com', avatar: 'https://i.pravatar.cc/40?img=5', role: 'Editor', status: 'Active', joined: 'Apr 26, 2025', phone: '+91 91234 56780', location: 'Mumbai, Maharashtra, India', orders: 58, spent: '$2,140' },
  { id: 3, name: 'Amit Kumar', email: 'amit@example.com', avatar: 'https://i.pravatar.cc/40?img=12', role: 'Customer', status: 'Active', joined: 'Apr 25, 2025', phone: '+91 99887 65432', location: 'Delhi, India', orders: 12, spent: '$640' },
  { id: 4, name: 'Priya Roy', email: 'priya@example.com', avatar: 'https://i.pravatar.cc/40?img=9', role: 'Customer', status: 'Active', joined: 'Apr 24, 2025', phone: '+91 90000 11223', location: 'Pune, Maharashtra, India', orders: 20, spent: '$980' },
  { id: 5, name: 'Sourav Mehta', email: 'sourav@example.com', avatar: 'https://i.pravatar.cc/40?img=13', role: 'Editor', status: 'Active', joined: 'Apr 22, 2025', phone: '+91 98123 45670', location: 'Bengaluru, Karnataka, India', orders: 41, spent: '$1,760' },
  { id: 6, name: 'Kavita Singh', email: 'kavita@example.com', avatar: 'https://i.pravatar.cc/40?img=20', role: 'Customer', status: 'Inactive', joined: 'Apr 20, 2025', phone: '+91 97654 32109', location: 'Jaipur, Rajasthan, India', orders: 3, spent: '$120' },
  { id: 7, name: 'Rohan Gupta', email: 'rohan@example.com', avatar: 'https://i.pravatar.cc/40?img=15', role: 'Seller', status: 'Active', joined: 'Apr 18, 2025', phone: '+91 96543 21098', location: 'Ahmedabad, Gujarat, India', orders: 67, spent: '$3,210' },
  { id: 8, name: 'Anjali Patel', email: 'anjali@example.com', avatar: 'https://i.pravatar.cc/40?img=24', role: 'Customer', status: 'Active', joined: 'Apr 16, 2025', phone: '+91 95432 10987', location: 'Surat, Gujarat, India', orders: 9, spent: '$415' },
]

const roleStyles = {
  Admin: 'bg-purple-500/15 text-purple-400',
  Editor: 'bg-blue-500/15 text-blue-400',
  Customer: 'bg-emerald-500/15 text-emerald-400',
  Seller: 'bg-amber-500/15 text-amber-400',
}

function UserTable() {
  const [selectedUser, setSelectedUser] = useState(users[0])

  return (
    <div className='space-y-6'>
      {/* Users table + profile panel */}
      <div className='grid grid-cols-1 xl:grid-cols-3 gap-6'>
        {/* All Users table */}
        <div className='xl:col-span-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/20 dark:border-slate-700/50 overflow-hidden'>
          <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50'>
            <div className='flex flex-wrap items-center justify-between gap-4'>
              <div>
                <h3 className='text-lg font-bold text-slate-800 dark:text-white'>All Users</h3>
                <p className='text-sm text-slate-500 dark:text-slate-400'>Showing all users in your system</p>
              </div>
              <div className='flex flex-wrap items-center gap-3'>
                <div className='relative'>
                  <Search className='w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2' />
                  <input
                    type='text'
                    placeholder='Search users...'
                    className='pl-9 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border border-transparent rounded-xl text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 focus:outline-none'
                  />
                </div>
                <button className='p-2 rounded-xl border border-slate-200/50 dark:border-slate-700/50 text-slate-500 dark:text-slate-400'>
                  <Filter className='w-4 h-4' />
                </button>
                <button className='flex items-center space-x-1 px-3 py-2 rounded-xl border border-slate-200/50 dark:border-slate-700/50 text-sm text-slate-600 dark:text-slate-300'>
                  <span>All Roles</span>
                  <ChevronDown className='w-4 h-4' />
                </button>
                <button className='flex items-center space-x-1 px-3 py-2 rounded-xl border border-slate-200/50 dark:border-slate-700/50 text-sm text-slate-600 dark:text-slate-300'>
                  <span>Sort by: Latest</span>
                  <ChevronDown className='w-4 h-4' />
                </button>
              </div>
            </div>
          </div>

          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead>
                <tr className='text-left border-b border-slate-200/50 dark:border-slate-700/50'>
                  <th className='px-6 py-3'>
                    <input type='checkbox' className='rounded' />
                  </th>
                  <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>User</th>
                  <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>Email</th>
                  <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>Role</th>
                  <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>Status</th>
                  <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>Joined</th>
                  <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    onClick={() => setSelectedUser(user)}
                    className={`border-b border-slate-100 dark:border-slate-800 cursor-pointer transition-colors ${
                      selectedUser.id === user.id
                        ? 'bg-blue-50 dark:bg-slate-800/60'
                        : 'hover:bg-slate-50 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    <td className='px-6 py-4' onClick={(e) => e.stopPropagation()}>
                      <input type='checkbox' className='rounded' />
                    </td>
                    <td className='px-6 py-4'>
                      <div className='flex items-center space-x-3'>
                        <img src={user.avatar} alt={user.name} className='w-8 h-8 rounded-full' />
                        <span className='text-sm font-medium text-slate-800 dark:text-white'>{user.name}</span>
                      </div>
                    </td>
                    <td className='px-6 py-4 text-sm text-slate-500 dark:text-slate-400'>{user.email}</td>
                    <td className='px-6 py-4'>
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${roleStyles[user.role]}`}>
                        {user.role}
                      </span>
                    </td>
                    <td className='px-6 py-4'>
                      <span className='inline-flex items-center space-x-1.5 text-sm'>
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            user.status === 'Active' ? 'bg-emerald-500' : 'bg-red-500'
                          }`}
                        ></span>
                        <span className={user.status === 'Active' ? 'text-emerald-500' : 'text-red-500'}>
                          {user.status}
                        </span>
                      </span>
                    </td>
                    <td className='px-6 py-4 text-sm text-slate-500 dark:text-slate-400'>{user.joined}</td>
                    <td className='px-6 py-4' onClick={(e) => e.stopPropagation()}>
                      <div className='flex items-center space-x-1'>
                        <button className='p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
                          <Eye className='w-4 h-4' />
                        </button>
                        <button className='p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
                          <Pencil className='w-4 h-4' />
                        </button>
                        <button className='p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
                          <MoreVertical className='w-4 h-4' />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className='p-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/50 dark:border-slate-700/50'>
            <p className='text-sm text-slate-500 dark:text-slate-400'>Showing 1 - 8 of 3,842 users</p>
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
                481
              </button>
              <button className='p-2 rounded-lg border border-slate-200/50 dark:border-slate-700/50 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
                <ChevronRight className='w-4 h-4' />
              </button>
            </div>
          </div>
        </div>

        {/* Selected user profile panel */}
        <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/20 dark:border-slate-700/50 overflow-hidden'>
          <div className='relative h-28 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700'>
            <button className='absolute top-4 right-4 p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors'>
              <PenSquare className='w-4 h-4' />
            </button>
          </div>

          <div className='px-6 pb-6'>
            <div className='-mt-12 mb-3'>
              <div className='relative inline-block'>
                <img
                  src={selectedUser.avatar}
                  alt={selectedUser.name}
                  className='w-20 h-20 rounded-full border-4 border-white dark:border-slate-900 object-cover'
                />
                <span className='absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white dark:border-slate-900'></span>
              </div>
            </div>

            <div className='flex items-center space-x-2 mb-3'>
              <h3 className='text-lg font-bold text-slate-800 dark:text-white'>{selectedUser.name}</h3>
              <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${roleStyles[selectedUser.role]}`}>
                {selectedUser.role}
              </span>
            </div>

            <div className='space-y-2 mb-5'>
              <div className='flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400'>
                <Mail className='w-4 h-4 shrink-0' />
                <span className='truncate'>{selectedUser.email}</span>
              </div>
              <div className='flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400'>
                <Phone className='w-4 h-4 shrink-0' />
                <span>{selectedUser.phone}</span>
              </div>
              <div className='flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400'>
                <MapPin className='w-4 h-4 shrink-0' />
                <span>{selectedUser.location}</span>
              </div>
            </div>

            <div className='grid grid-cols-3 gap-2 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl mb-5'>
              <div>
                <p className='text-xs text-slate-500 dark:text-slate-400 mb-1'>Total Orders</p>
                <p className='text-sm font-bold text-slate-800 dark:text-white'>{selectedUser.orders}</p>
              </div>
              <div>
                <p className='text-xs text-slate-500 dark:text-slate-400 mb-1'>Total Spent</p>
                <p className='text-sm font-bold text-slate-800 dark:text-white'>{selectedUser.spent}</p>
              </div>
              <div>
                <p className='text-xs text-slate-500 dark:text-slate-400 mb-1'>Last Login</p>
                <p className='text-sm font-bold text-slate-800 dark:text-white'>{selectedUser.joined}</p>
              </div>
            </div>

            <div className='space-y-2'>
              {[
                { icon: UserCircle, label: 'View Profile' },
                { icon: Edit3, label: 'Edit User' },
                { icon: Shield, label: 'Change Role' },
                { icon: KeyRound, label: 'Reset Password' },
                { icon: Ban, label: 'Block User', danger: true },
              ].map((action, i) => (
                <button
                  key={i}
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    action.danger
                      ? 'text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  <span className='flex items-center space-x-2'>
                    <action.icon className='w-4 h-4' />
                    <span>{action.label}</span>
                  </span>
                  <ChevronRight className='w-4 h-4' />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserTable