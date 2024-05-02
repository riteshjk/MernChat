import { configureStore,combineReducers } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import messageSlice from "./message/messageSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { version } from "mongoose";
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({
    user : userSlice,
    message: messageSlice
})

const persistConfig = {
    key: "root",
    storage,
    version: 1,


}

const persistedReducer = persistReducer(persistConfig,rootReducer)
export const store = configureStore ({
    reducer : persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
})

export const persistor = persistStore(store)