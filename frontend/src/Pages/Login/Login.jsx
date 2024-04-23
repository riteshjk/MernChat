import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import {signInStart,signInSuccess,signInFailure} from '../../redux/user/userSlice'

const Login = () => {

    const [formData, setFormData] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChange =(e) =>{
        setFormData({...formData,[e.target.id]:e.target.value})
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();

        if ( !formData.username || !formData.password) {
            return useDispatch(signInFailure(errorMessage || "Please fill all the fields"));
          }
        
        try{
            dispatch(signInStart())
            const res= await fetch("/api/auth/login",{

                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            })
            const data = await res.json();
            if (res.ok) {
                dispatch(signInSuccess(data));
                navigate("/");
            }
            
        }
        catch (error) {
             dispatch(signInFailure(error));
            console.log(error);
          }
    }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40'>
        <h1 className='text-3xl font-semibold text-center text-black-300'>
            Login
            <span className='text-red-500'> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
            <div className='mt-4'>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Username</span>
                </label>
                <input type="text" placeholder="Enter Username" className="input input-text w-full" id="username" onChange={handleChange}/>

            </div>

            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Password</span>
                </label>
                <input type="password" placeholder="Enter password" className="input input-text w-full" id="password" onChange={handleChange}/>

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
