import User from "../Model/auth.model.js";

export const getUsersForSideBar =async(req,res) =>{
    try{
        const loggedInUserId  = req.user._id;

        const filteredUser = await User.find({ _id : {$ne : loggedInUserId}}).select("-password")
        res.status(200).json(filteredUser);
    }
    catch (error){
    return res.status(500).json({ message: error.message});
    }
    

}