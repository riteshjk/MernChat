import React from 'react'
import GenderCheckbox from './GenderCheckBox'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40'>
        <h1 className='text-3xl font-semibold text-center text-black-300'>
            SignUp
            <span className='text-red-500'> ChatApp</span>
        </h1>
        <form>
            <div className='mt-4'>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Full Name</span>
                </label>
                <input type="text" placeholder="Enter your fullname" className="input input-text w-full" />

            </div>
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

            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Confirm Password</span>
                </label>
                <input type="text" placeholder="Confirm password" className="input input-text w-full" />

            </div>
            <div className='mt-2 mx-1'>
    <GenderCheckbox/>
    </div>
            <a href="#" className='text-sm  hover:underline hover:text-blue-600 mt-2 mx-2 inline-block'>
                {"already"} have an account?
                </a>

                <button className='w-full p-2 rounded-lg shadow-md bg-blue-600 hover:bg-red-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 my-2 text-center text-white black-500'>Sign up</button>
            </div>
        </form>
    </div>
</div>

  )
}

export default SignUp
