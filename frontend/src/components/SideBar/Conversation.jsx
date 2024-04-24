import React from 'react'

const Conversation = ({users}) => {
	//console.log(users)
	const {profilePic,username,gender} = users
	
  return (
    <>
			<div
				className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer}`}>
				<div className={`avatar online`}>
					<div className='w-12 rounded-full'>
						<img src={profilePic} alt='user avatar' />
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between'>
						<p className='font-bold text-gray-200'>{username}</p>
						<span className='text-xl'>{gender}</span>
					</div>
				</div>
			</div>

			 <div className='divider my-0 py-0 h-1' />
		</>
  )
}

export default Conversation
