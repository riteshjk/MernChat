import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40'>
        <h1 className='text-3xl font-semibold text-center text-black-300'>
            Login
            <span className='text-red-500'> ChatApp</span>
        </h1>
        <form>
            <div className='mt-4'>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Username</span>
                </label>
                <input type="text" placeholder="Enter Username" className="input input-text w-full" />

            </div>

            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Password</span>
                </label>
                <input type="text" placeholder="Enter password" className="input input-text w-full" />

            </div>

            <Link to="/signup" className='text-sm  hover:underline hover:text-blue-600 mt-4 mx-2 inline-block'>
                {"Don't"} have an account?
                </Link>

                <button className='w-full p-2 rounded-lg shadow-md bg-blue-600 hover:bg-red-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 text-center text-white black-500'>Login</button>
            </div>
        </form>
    </div>
</div>
  )
}

export default Login
