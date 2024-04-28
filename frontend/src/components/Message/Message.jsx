import React from 'react';
import { useSelector } from 'react-redux';

const Message = ({messages}) => {
	const {message} = messages;
	const {currentUser,selectedConversationId,selectedUser,users} = useSelector((state) => state.user);
	 const fromMe = messages.senderId == currentUser._id;
	 const chatClassName = fromMe ? "chat-end" : "chat-start";
     const profilePic = fromMe ? currentUser.profilePic : selectedUser?.profilePic;
	const bubbleBgColor = fromMe ? "bg-blue-500" : "";
	// const shakeClass = message.shouldShake ? "shake" : "";
	
  return (
    <div className={`chat ${chatClassName}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='bubble' src={profilePic} />
				</div>
			</div>
	<div className={`chat-bubble text-white bg-sky-500 ${bubbleBgColor}`}>
					{message}
			</div>	
	
          	<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:42</div>
		</div>
  )
}

export default Message
