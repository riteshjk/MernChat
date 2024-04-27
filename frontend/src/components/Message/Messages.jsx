import React, { useEffect } from 'react'
import Message from './Message';
import { useSelector,useDispatch } from 'react-redux';
import {setMessages} from '../../redux/message/messageSlice'


const Messages = () => {
  const {messages} = useSelector((state) => state.message);
  const {users,selectedConversationId} = useSelector((state) => state.user);
  const dispatch = useDispatch();

  
  useEffect(() => {
    const getMessages = async() =>{
      try{
        const res = await fetch(`/api/message/${selectedConversationId}`)
        const data = await res.json();
        dispatch(setMessages(data))
      }
      catch(error){
        console.log(error)
      }
  
    }
    if(selectedConversationId) getMessages()
  },[selectedConversationId,setMessages])

  
  
  return (
    <div className='px-4 flex-1 overflow-auto'>
      {
        messages?.map((el) => <Message key={el._id} messages={el}/>)
      }
      
      
    </div>
  )
}

export default Messages
