import React, { useEffect } from 'react'
import MessageInput from './MessageInput';
import { TiMessages } from "react-icons/ti";
import Messages from './Messages';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setSelectedConversationId } from '../../redux/user/userSlice';


const MessageContainer = () => {
   const {selectedConversationId,selectedUser} = useSelector((state) => state.user);
   const dispatch = useDispatch();

   console.log(selectedUser,"abcdefg")

   useEffect(() => {
     return () => {
      dispatch(setSelectedConversationId(null))
     }
   },[setSelectedConversationId])
 
  return (
    <div className='md:min-w-[450px] flex flex-col'> 
    {
        !selectedConversationId ? <NoChatSelected /> : (
            
        <>
        {/* Header */}
        <div className='bg-slate-500 px-4 py-2 mb-2'>
            <span className='label-text'>To:</span>{" "}
            <span className='text-gray-900 font-bold'>{selectedUser.fullName}</span>
        </div>
        <Messages />
        <MessageInput />
    </>
        )
    }
</div>
  )
}

export default MessageContainer

const NoChatSelected = () => {
  const {currentUser} = useSelector((state) => state.user);
  
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 {currentUser?.username} ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};

