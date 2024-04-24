import React, { useEffect } from 'react'
import Conversation from './Conversation';
import { useSelector, useDispatch } from "react-redux";
import { setUsers,setLoading,setError } from "../../redux/user/userSlice";

const Conversations = () => {
  const dispatch = useDispatch();
   const { users } = useSelector((state) => state.user);

  const fetchAllUsers = async() =>{
    try{
      const res= await fetch("/api/users/user",{
        method: "GET",
      })
      const data = await res.json();
      dispatch(setUsers(data))
    }
    catch(error){
        console.log(error)
    }
  }
  
  useEffect(() => {
    fetchAllUsers()
  },[])

   console.log(users,"ababab")
  return (
    <div className='flex flex-col py-2 overflow-auto'>
      {
        users?.map((el)=>  <Conversation users={el}/>)
      }
     
    </div>
  )
}

export default Conversations
