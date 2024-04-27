import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import messageSlice from "./message/messageSlice";

const store = configureStore ({
    reducer :{
        user : userSlice,
        message: messageSlice
    }
})

export default store;