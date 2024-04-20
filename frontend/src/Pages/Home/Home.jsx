import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import MessageContainer from '../../components/Message/MessageContainer'

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] p-6 rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<SideBar />
			<MessageContainer />
		</div>
  )
}

export default Home
