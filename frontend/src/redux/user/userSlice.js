import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    users:[],
    loading: false,
    error: null,
    selectedConversationId: null,
    selectedUser:null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signInStart:(state)=>{
            state.loading = true,
            state.error = null
        },
        signInSuccess:(state,action)=>{
            state.loading = false,
            state.currentUser = action.payload
            state.error = null
        },
        signInFailure:(state,action)=>{
            state.loading = false,
            state.error = action.payload
        },
        signOutSuccess:(state)=>{
            state.currentUser = null,
            state.loading = false,
            state.error = null

        },
        setUsers: (state, action) => {
            state.users = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setSelectedConversationId: (state, action) => {
            state.selectedConversationId = action.payload;
        },
        setSelectedUser:(state,action)=>{
            state.selectedUser = action.payload
        }

    }
})

export const {signInStart,signInSuccess,signInFailure,signOutSuccess,setUsers, setLoading, setError,setSelectedConversationId,setSelectedUser} = userSlice.actions;

export default userSlice.reducer
