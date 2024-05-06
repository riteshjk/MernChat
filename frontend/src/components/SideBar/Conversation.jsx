import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedConversationId ,setSelectedUser} from '../../redux/user/userSlice';

const Conversation = ({ users, emoji, lastIdx }) => {
	// console.log(users,"ahat ka..?")
    const dispatch = useDispatch();
    const {selectedConversationId,selectedUser} = useSelector((state) => state.user);

    const handleUserSelection = () => {
        //  dispatch(setSelectedConversationId(users?._id)); 
		dispatch(setSelectedUser(users));
    };

	// console.log(selectedUser,"hahahahah")
	
  return (
    <>
			 <div
                onClick={handleUserSelection} 
                className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${
                    selectedUser?._id === users?._id ? "bg-sky-500" : ""
                }`}
            >
				<div className={`avatar online`}>
					<div className='w-12 rounded-full'>
						<img src={users?.profilePic} alt='user avatar' />
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between'>
						<p className='font-bold text-gray-200'>{users?.fullName}</p>
						<span className='text-xl'>{emoji}</span>
					</div>
				</div>
			</div>

			 {!lastIdx && <div className='divider my-0 py-0 h-1' />}
		</>
  )
}

export default Conversation