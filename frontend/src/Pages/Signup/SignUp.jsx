import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckBox";
import { Link } from "react-router-dom";

const SignUpUser = () => {
   
    const [inputValue, setInputValue] = useState({
    fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
    })

    
    const handleInputValueChange =(e) =>{
        setInputValue({...inputValue,[e.target.id]:e.target.value})
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(inputValue)
      if (!inputValue.fullName || !inputValue.username || !inputValue.password || !inputValue.confirmPassword || !inputValue.gender) {
       console.log("all fields are required");
        return;
      }
  
      try {
        const res= await fetch("http://localhost:3000/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fullName: inputValue.fullName, username: inputValue.username, password: inputValue.password, confirmPassword: inputValue.confirmPassword, gender: inputValue.gender }),
        })
        setInputValue({});
        console.log(res,"data");
        if (res.status === 200) {
          console.log("Signup was successful.");
          navigate("/login");
        } else {
          console.log("Signup was not successful. Please try again.");
        }
      } catch (error) {
        console.error("Signup failed:", error);
      }
    };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40">
        <h1 className="text-3xl font-semibold text-center text-black-300">
          SignUp
          <span className="text-red-500"> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div>
              <label className="label p-2">
                <span className="text-base label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your fullname"
                className="input input-text w-full"
                id="fullName"
                value={inputValue.fullName}
                onChange={handleInputValueChange}
              />
            </div>
            <div>
              <label className="label p-2">
                <span className="text-base label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                className="input input-text w-full"
                id="username"
                value={inputValue.username}
                onChange={handleInputValueChange}
              />
            </div>

            <div>
              <label className="label p-2">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                type='password'
                placeholder="Enter password"
                className="input input-text w-full"
                id="password"
                value={inputValue.password}
                onChange={handleInputValueChange}
              />
            </div>

            <div>
              <label className="label p-2">
                <span className="text-base label-text">Confirm Password</span>
              </label>
              <input
                type='password'
                placeholder="Confirm password"
                className="input input-text w-full"
                id="confirmPassword"
                value={inputValue.confirmPassword}
                onChange={handleInputValueChange}
              />
            </div>
            <div className="mt-2 mx-1">
              <GenderCheckbox handleInputValueChange={handleInputValueChange}/>
            </div>
            <Link
              to="/login"
              className="text-sm  hover:underline hover:text-blue-600 mt-2 mx-2 inline-block"
            >
              {"already"} have an account?
            </Link>

            <button className="w-full p-2 rounded-lg shadow-md bg-blue-600 hover:bg-red-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 my-2 text-center text-white black-500">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpUser;
