import React, { useState } from 'react'
import {
  User,
  Search,
  ChevronDown,
  Pencil,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Crown,
  UserCog,
  PenLine,
  Headphones,
  Package,
  Shield,
  ShoppingCart,
  Boxes,
  Lock,
} from 'lucide-react'

const rolesData = [
  {
    id: 'administrator',
    name: 'Administrator',
    icon: Crown,
    bg: 'bg-purple-600',
    description: 'Full access to all features and settings.',
    users: 1,
    permissions: 'All (24)',
    active: true,
  },
  {
    id: 'manager',
    name: 'Manager',
    icon: UserCog,
    bg: 'bg-blue-600',
    description: 'Can manage team, products and orders.',
    users: 6,
    permissions: 'Limited (18)',
    active: true,
  },
  {
    id: 'editor',
    name: 'Editor',
    icon: PenLine,
    bg: 'bg-violet-600',
    description: 'Can manage content and basic settings.',
    users: 12,
    permissions: 'Content (8)',
    active: true,
  },
  {
    id: 'support',
    name: 'Customer Support',
    icon: Headphones,
    bg: 'bg-cyan-600',
    description: 'Can handle customer queries and support tickets.',
    users: 28,
    permissions: 'Support (10)',
    active: true,
  },
  {
    id: 'warehouse',
    name: 'Warehouse Staff',
    icon: Package,
    bg: 'bg-amber-600',
    description: 'Can manage inventory and shipments.',
    users: 46,
    permissions: 'Inventory (6)',
    active: false,
  },
]

const permissionGroups = [
  {
    id: 'user-management',
    title: 'User Management',
    icon: User,
    bg: 'bg-blue-500/15 text-blue-400',
    enabled: true,
    permissions: [
      { label: 'View Users', checked: true },
      { label: 'Create Users', checked: true },
      { label: 'Edit Users', checked: true },
      { label: 'Delete Users', checked: false },
    ],
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    icon: ShoppingCart,
    bg: 'bg-purple-500/15 text-purple-400',
    enabled: true,
    permissions: [
      { label: 'View Orders', checked: true },
      { label: 'Manage Orders', checked: true },
      { label: 'Manage Products', checked: true },
      { label: 'Apply Discounts', checked: false },
    ],
  },
  {
    id: 'inventory',
    title: 'Inventory',
    icon: Boxes,
    bg: 'bg-amber-500/15 text-amber-400',
    enabled: true,
    permissions: [
      { label: 'View Inventory', checked: true },
      { label: 'Manage Inventory', checked: true },
      { label: 'Update Stock', checked: true },
    ],
  },
]

function Toggle({ checked, onChange }) {
  return (
    <button
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors shrink-0 ${
        checked ? 'bg-blue-600' : 'bg-slate-300 dark:bg-slate-700'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          checked ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  )
}

function Permissions() {
  const [roles, setRoles] = useState(rolesData)
  const [selectedRole, setSelectedRole] = useState('manager')
  const [groups, setGroups] = useState(permissionGroups)
  const [expanded, setExpanded] = useState(new Set(['user-management', 'ecommerce', 'inventory']))

  const toggleRoleStatus = (id) => {
    setRoles((prev) => prev.map((r) => (r.id === id ? { ...r, active: !r.active } : r)))
  }

  const toggleGroupEnabled = (groupId) => {
    setGroups((prev) => prev.map((g) => (g.id === groupId ? { ...g, enabled: !g.enabled } : g)))
  }

  const toggleGroupExpand = (groupId) => {
    const next = new Set(expanded)
    next.has(groupId) ? next.delete(groupId) : next.add(groupId)
    setExpanded(next)
  }

  const togglePermission = (groupId, index) => {
    setGroups((prev) =>
      prev.map((g) =>
        g.id === groupId
          ? {
              ...g,
              permissions: g.permissions.map((p, i) => (i === index ? { ...p, checked: !p.checked } : p)),
            }
          : g
      )
    )
  }

  return (
    <div className='grid grid-cols-1 xl:grid-cols-3 gap-6'>
      {/* Roles table */}
      <div className='xl:col-span-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/20 dark:border-slate-700/50 overflow-hidden'>
        <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50'>
          <div className='flex flex-wrap items-center justify-between gap-4'>
            <div>
              <h3 className='text-lg font-bold text-slate-800 dark:text-white'>Roles</h3>
              <p className='text-sm text-slate-500 dark:text-slate-400'>View and manage all user roles in your system</p>
            </div>
            <div className='flex items-center gap-3'>
              <div className='relative'>
                <Search className='w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2' />
                <input
                  type='text'
                  placeholder='Search roles...'
                  className='pl-9 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border border-transparent rounded-xl text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 focus:outline-none'
                />
              </div>
              <button className='flex items-center space-x-1 px-3 py-2 rounded-xl border border-slate-200/50 dark:border-slate-700/50 text-sm text-slate-600 dark:text-slate-300'>
                <span>All Roles</span>
                <ChevronDown className='w-4 h-4' />
              </button>
            </div>
          </div>
        </div>

        <div className='overflow-x-auto'>
          <table className='w-full'>
            <thead>
              <tr className='text-left border-b border-slate-200/50 dark:border-slate-700/50'>
                <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>Role Name</th>
                <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>Description</th>
                <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>Users</th>
                <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>Permissions</th>
                <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>Status</th>
                <th className='px-6 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {roles.map((role) => (
                <tr
                  key={role.id}
                  onClick={() => setSelectedRole(role.id)}
                  className={`border-b border-slate-100 dark:border-slate-800 cursor-pointer transition-colors ${
                    selectedRole === role.id
                      ? 'bg-blue-50 dark:bg-slate-800/60'
                      : 'hover:bg-slate-50 dark:hover:bg-slate-800/40'
                  }`}
                >
                  <td className='px-6 py-4'>
                    <div className='flex items-center space-x-3'>
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${role.bg}`}>
                        <role.icon className='w-4 h-4 text-white' />
                      </div>
                      <span className='text-sm font-medium text-slate-800 dark:text-white'>{role.name}</span>
                    </div>
                  </td>
                  <td className='px-6 py-4 text-sm text-slate-500 dark:text-slate-400 max-w-[220px]'>
                    {role.description}
                  </td>
                  <td className='px-6 py-4'>
                    <span className='inline-flex items-center space-x-1 text-sm text-slate-600 dark:text-slate-300'>
                      <User className='w-3.5 h-3.5' />
                      <span>{role.users}</span>
                    </span>
                  </td>
                  <td className='px-6 py-4'>
                    <span className='px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'>
                      {role.permissions}
                    </span>
                  </td>
                  <td className='px-6 py-4' onClick={(e) => e.stopPropagation()}>
                    <div className='flex items-center space-x-2'>
                      <Toggle checked={role.active} onChange={() => toggleRoleStatus(role.id)} />
                      <span className={`text-sm ${role.active ? 'text-emerald-500' : 'text-slate-400'}`}>
                        {role.active ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                  </td>
                  <td className='px-6 py-4' onClick={(e) => e.stopPropagation()}>
                    <div className='flex items-center space-x-1'>
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
          <p className='text-sm text-slate-500 dark:text-slate-400'>Showing 1 - 5 of 5 roles</p>
          <div className='flex items-center space-x-2'>
            <button className='p-2 rounded-lg border border-slate-200/50 dark:border-slate-700/50 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
              <ChevronLeft className='w-4 h-4' />
            </button>
            <button className='w-9 h-9 rounded-lg text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white'>
              1
            </button>
            <button className='p-2 rounded-lg border border-slate-200/50 dark:border-slate-700/50 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
              <ChevronRight className='w-4 h-4' />
            </button>
          </div>
        </div>
      </div>

      {/* Role Permissions panel */}
      <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/20 dark:border-slate-700/50 p-6 flex flex-col'>
        <div className='flex items-center space-x-3 mb-5'>
          <div className='w-10 h-10 rounded-xl bg-indigo-600/20 flex items-center justify-center'>
            <Shield className='w-5 h-5 text-indigo-400' />
          </div>
          <div>
            <h3 className='text-lg font-bold text-slate-800 dark:text-white'>Role Permissions</h3>
            <p className='text-xs text-slate-500 dark:text-slate-400'>Assign permissions to roles</p>
          </div>
        </div>

        <button className='w-full flex items-center justify-between px-4 py-3 rounded-xl border border-slate-200/50 dark:border-slate-700/50 mb-5'>
          <span className='flex items-center space-x-2'>
            <Crown className='w-4 h-4 text-purple-500' />
            <span className='text-sm font-medium text-slate-800 dark:text-white'>
              {roles.find((r) => r.id === selectedRole)?.name || 'Manager'}
            </span>
          </span>
          <ChevronDown className='w-4 h-4 text-slate-400' />
        </button>

        <div className='space-y-4 flex-1 overflow-y-auto scrollbar-thin'>
          {groups.map((group) => {
            const isExpanded = expanded.has(group.id)
            return (
              <div key={group.id} className='border border-slate-200/50 dark:border-slate-700/50 rounded-xl p-4'>
                <div className='flex items-center justify-between mb-1'>
                  <div className='flex items-center space-x-3'>
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${group.bg}`}>
                      <group.icon className='w-4 h-4' />
                    </div>
                    <span className='text-sm font-semibold text-slate-800 dark:text-white'>{group.title}</span>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <Toggle checked={group.enabled} onChange={() => toggleGroupEnabled(group.id)} />
                    <button onClick={() => toggleGroupExpand(group.id)}>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {isExpanded && (
                  <div className='mt-3 ml-12 space-y-2'>
                    {group.permissions.map((perm, i) => (
                      <label
                        key={i}
                        className='flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-300 cursor-pointer'
                      >
                        <input
                          type='checkbox'
                          checked={perm.checked}
                          onChange={() => togglePermission(group.id, i)}
                          className='rounded accent-blue-600'
                        />
                        <span>{perm.label}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <button className='w-full mt-5 flex items-center justify-center space-x-2 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold hover:shadow-lg transition-all'>
          <Lock className='w-4 h-4' />
          <span>Save Permissions</span>
        </button>
      </div>
    </div>
  )
}

export default Permissions