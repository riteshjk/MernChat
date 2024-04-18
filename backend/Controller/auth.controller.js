import User from "../Model/auth.model.js";
import bcryptjs from "bcryptjs";
import { verifyToken } from "../Utils/VerifyToken.js";
export const registerUser = async(req,res) =>{
    const {fullName,username,password,confirmPassword,gender,profilePic} = req.body
   
    if(!fullName || !username|| !password || !confirmPassword || !gender || fullName === "" || username === "" || password === "" || confirmPassword=== "" || gender === ""){
        return res.status(400).json({message:"All fields are required"})
    }
    if(password !=confirmPassword){
        return res.status(400).json({message:"Password do not match"})
    }

    const user = await User.findOne({username})
    if(user){
        return res.status(400).json({message:"Username already exists"})
    }
    const hasPassword =  bcryptjs.hashSync(password, 12);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

     const new_user = new User({
        fullName,
        username,
        password: hasPassword,
        gender,
        profilePic: gender === "male" ? boyProfilePic : girlProfilePic
     })

     try {
        if(new_user){
             verifyToken(new_user._id, res);
            await new_user.save();
            res.json({_id: new_user._id, username: new_user.username, profilePic: new_user.profilePic, gender: new_user.gender});
        }
      } catch (error) {
        res.status(500).json({message: error.message});
      }
}

export const loginUser = async(req,res) =>{
    const {username,password} = req.body;
    try{
        const user = await User.findOne({username});
        const passwordIsCorrect = bcryptjs.compareSync(password, user?.password || "");
    
        if(!user || !passwordIsCorrect){
            return res.status(400).json({message:"Invalid username or password"})
        }
    
        verifyToken(user._id, res);
    
        res.json({_id: user._id, username: user.username, profilePic: user.profilePic, gender: user.gender});
    }
    catch(error){
        res.status(500).json({message: error.message});
    }

   
}