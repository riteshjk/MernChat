import { useEffect, useRef } from "react";
import Message from './Message';
import { useSelector,useDispatch } from 'react-redux';
import {setMessage} from '../../redux/message/messageSlice'
import MessageSkeleton from '../skeletons/MessageSkeleton';
import {addMessageStart,addMessageSuccess,addMessageFailure} from '../../redux/message/messageSlice'



const Messages = () => {
  const {messages,loading} = useSelector((state) => state.message);
  const {users,selectedConversationId} = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const lastMessageRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);

  
  useEffect(() => {
    const getMessages = async() =>{
      try{
        dispatch(addMessageStart())
        const res = await fetch(`/api/message/${selectedConversationId}`)
        const data = await res.json();
        dispatch(setMessage(data))
      }
      catch(error){
        console.log(error)
      }
  
    }
    if(selectedConversationId) getMessages()
  },[selectedConversationId,setMessage])

  // console.log(loading,"ajajaj")
  
  return (
    <div className='px-4 flex-1 overflow-auto'>
       {
        !loading &&messages?.map((el) => <Message key={el._id} ref={lastMessageRef} messages={el}/>)
      }
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
     
      {!loading && messages.length === 0 && (
				<p className='text-center'>Send a message to start the conversation</p>
			)}
      
      
    </div>
  )
}

export default Messages
