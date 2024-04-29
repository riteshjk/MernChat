import React, { useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { useSelector,useDispatch } from 'react-redux';
import {setSelectedUser,setSelectedConversationId} from "../../redux/user/userSlice"

const SearchInput = () => {
  const [searchName,setSearchName] = useState('');
  const {users} = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSeachValue = (e) => {
    e.preventDefault();

    const conversation = users.find((c)=> c.fullName.toLowerCase().includes(searchName.toLowerCase()));
    console.log(conversation)
    
    if(conversation){
      dispatch(setSelectedUser(conversation))
      dispatch(setSelectedConversationId(conversation._id))
    }
  }

  // console.log(selectedUser,"ananana")
  return (
    <form className='flex items-center gap-2' onSubmit={handleSeachValue}>
    <input
      type='text'
      placeholder='Search…'
      className='input input-bordered rounded-full'
      value={searchName}
       onChange={(e)=>setSearchName(e.target.value)}
    />
    <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
      <IoSearchSharp className='w-6 h-6 outline-none' />
    </button>
  </form>
  )
}

export default SearchInput
