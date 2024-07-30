
import React from 'react'

const ChatMsg = ({name,msg}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
       <img
          className="h-8 col-span-1"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
        <span className='font-bold px-2'>{name}</span>
        <span>{msg}</span>
    </div>
  )
}

export default ChatMsg
