import React, { useEffect } from 'react'
import Conversation from './Conversation';
import { useSelector, useDispatch } from "react-redux";
import { setUsers,setLoading,setError } from "../../redux/user/userSlice";
import { getRandomEmoji } from '../../utils/emojis';

const Conversations = () => {
  const dispatch = useDispatch();
   const { users } = useSelector((state) => state.user);

  const fetchAllUsers = async() =>{
    try{
      const res= await fetch("/api/users/user",{
        method: "GET",
      })
      const data = await res.json();
      // console.log(data,"jaja")
      dispatch(setUsers(data))
    }
    catch(error){
        console.log(error)
    }
  }
  
  useEffect(() => {
    fetchAllUsers()
  },[])


  return (
    <div className='flex flex-col py-2 overflow-auto'>
      {users?.length > 0 && (
  <>
    {users.map((el, ind) => (
      <Conversation key={el._id} users={el} emoji={getRandomEmoji()} lastIdx={ind === users.length - 1} />
    ))}
  </>
)}
     
    </div>
  )
}

export default Conversations