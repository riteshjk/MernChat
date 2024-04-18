import Conversation from "../Model/conversation.model.js";
import Message from "../Model/message.model.js";

export const sendMessage = async (req, res) => {
    try{
        const {message} = req.body;
        const {id:receiverId} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {
                $all : [senderId,receiverId]
            }
        })

        if(!conversation){
            conversation  = await Conversation.create({
                participants : [senderId,receiverId],

            })

        }
        const new_message = new Message({
            senderId ,
            receiverId ,
            message
        })

        if(new_message){
            conversation.messages.push(new_message._id)
        }
        await conversation.save();
        await new_message.save()
        res.status(201).json(new_message)
    }
    catch (error){
   return res.status(500).json({ message: error.message });
};

   
}