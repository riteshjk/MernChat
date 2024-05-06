import { useEffect, useRef } from "react";
import Message from './Message';
import { useSelector,useDispatch } from 'react-redux';
import {setMessage} from '../../redux/message/messageSlice'
import MessageSkeleton from '../skeletons/MessageSkeleton';
import {addMessageStart,addMessageSuccess,addMessageFailure} from '../../redux/message/messageSlice'



const Messages = () => {
  const {messages,loading} = useSelector((state) => state.message);
  const {users,selectedConversationId,selectedUser} = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const lastMessageRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);

  // console.log(selectedConversationId)
  
  useEffect(() => {
    const getMessages = async() =>{
      try{
        dispatch(addMessageStart())
        const res = await fetch(`/api/message/${selectedUser._id}`)
        const data = await res.json();
        // console.log(data,"hshshshsh")
        dispatch(setMessage(data))
      }
      catch(error){
        console.log(error)
      }
  
    }
    if(selectedUser._id) getMessages()
  },[selectedUser._id,setMessage])

  //  console.log(messages,"ajajaj")
  
  return (
    <div className='px-4 flex-1 overflow-auto'>
    {selectedUser && selectedUser._id ? (
      !loading &&
        messages?.length > 0 &&
        messages?.map((el) => (
          <Message  ref={lastMessageRef} messages={el} />
        ))
    ) : (
      <p className='text-center'>Select a user to start messaging</p>
    )}
    {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
    {!loading && messages.length === 0 && (
      <p className='text-center'>Send a message to start the conversation</p>
    )}
  </div>
  )
}

export default Messages