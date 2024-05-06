import React from 'react';
import { useSelector } from 'react-redux';
import { extractTime } from '../../utils/extractTime';

const Message = ({messages}) => {
	
	const {message,senderId,createdAt} = messages 
	const {currentUser,selectedConversationId,selectedUser,users} = useSelector((state) => state.user);
	const fromMe = senderId == currentUser._id;
	const chatClassName = fromMe ? "chat-end" : "chat-start";
    const profilePic = fromMe ? currentUser.profilePic : selectedUser?.profilePic;
	const bubbleBgColor = fromMe ? "bg-blue-500" : "";
	const formattedTime = extractTime(createdAt);
	
	
  return (
    <div className={`chat ${chatClassName}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='bubble' src={profilePic} />
				</div>
			</div>
	<div className={`chat-bubble text-white ${bubbleBgColor}`}>
					{message}
			</div>	
	
          	<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
		</div>
  )
}

export default Message