import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messages: [],
    loading: false,
    error: null
}

const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
       
        addMessageStart: (state, action) => {
            return {
              ...state,
              loading: true,
              error: null,
            };
          },
          addMessageSuccess: (state, action) => {
            return {
              ...state,
              messages: [...state.messages, action.payload],
              loading: false,
              error: null,
            };
          },
          addMessageFailure: (state, action) => {
            return {
              ...state,
              loading: false,
              error: action.payload,
            };
          },
        
        setMessage: (state, action) => {
          state.messages = action.payload,
          state.loading = false,
          state.error = null
        },
      },
})

export const { addMessageStart,addMessageSuccess,addMessageFailure, setMessage } = messageSlice.actions;

export default messageSlice.reducer