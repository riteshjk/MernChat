import User from "../Model/auth.model.js";
import bcryptjs from "bcryptjs";
export const registerUser = async(req,res) =>{
    const {username,email,password} = req.body
   
    if(!username || !email || !password || username === "" || email === "" || password === ""){
        return res.status(400).json({message:"All fields are required"})
    }

    const hasPassword =  bcryptjs.hashSync(password, 12);
     const new_user = new User({
        username,
        email,
        password: hasPassword
     })

     try {
        await new_user.save();
        res.json({ message: "Signup  succesful" });
      } catch (error) {
        next(error);
      }


}