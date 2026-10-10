import React, { useState } from 'react'
import { Plus } from 'lucide-react'
import Conversationlist from "./Conversationlist ";
import WindoChat from './WindoChat'
import Profilepanel from './Profilepanel'
import { conversations } from './Messagesdata'
import './Messages.css'

function Messages() {
  const [activeId, setActiveId] = useState(conversations[0]?.id)

  const activeConversation = conversations.find((c) => c.id === activeId)

  return (
    <div className='space-y-6'>
      <div className='flex flex-wrap items-center justify-end gap-3'>
        <button className='flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium hover:shadow-lg transition-all'>
          <Plus className='w-4 h-4' />
          <span>New Message</span>
        </button>
      </div>

      <div className='grid grid-cols-1 xl:grid-cols-12 gap-6 items-start'>
        <div className='xl:col-span-3'>
          <Conversationlist activeId={activeId} onSelect={setActiveId} />
        </div>
        <div className='xl:col-span-6'>
          <WindoChat conversation={activeConversation} />
        </div>
        <div className='xl:col-span-3'>
          <Profilepanel conversation={activeConversation} />
        </div>
      </div>
    </div>
  )
}

export default Messages