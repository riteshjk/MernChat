import jwt from "jsonwebtoken";
import User from "../Model/auth.model.js";

export const ProtectRoute = async(req, res, next) => {
    try{
        const token = req.cookies.jwt;

        if(!token){
            return res.status(401).json({error:"Unauthorizes- No Token Provided"})
        }

        const decode = jwt.verify(token,process.env.JWT_SECRET)

        if(!decode){
            return res.status(401).json({error:"Unauthorizes- No Token Provided"})

        }

        const user = await User.findById(decode.userId).select("-password");

        if(!user){
        return res.status(404).json({message: "User not found"});
        }

        req.user = user;
        next();

    }catch(err){
        res.status(500).json({message: "Internal server error"})
    }
    
}