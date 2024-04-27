import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messages: [],
}

const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        addMessage: (state, action) => {
          return {
            ...state,
            messages: [...state.messages, action.payload],
          };
        },
        setMessages: (state, action) => {
          state.messages = action.payload;
        },
      },
})

export const { addMessage, setMessages } = messageSlice.actions;

export default messageSlice.reducer