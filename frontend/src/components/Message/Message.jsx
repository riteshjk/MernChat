import React from 'react'

const Message = ({messages}) => {
	const {message} = messages
	
  return (
    <div className={`chat chat-end`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='bubble' src="" />
				</div>
			</div>
              <div className={`chat-bubble text-white bg-sky-500 pb-2`}>
             {message}
      </div>			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:42</div>
		</div>
  )
}

export default Message
