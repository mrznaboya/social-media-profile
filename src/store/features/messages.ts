import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Message } from "../../model/message";

type MessagesInitalState = {
  [key: string]: Message;
};

const initialState: MessagesInitalState = {};

export const messages = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessages: (state, action: PayloadAction<Message[]>) => {
      action.payload.map((message) => {
        state[message.id] = message;
      });
    },
    resetMessages: () => {
      return initialState;
    },
  },
});

export const messagesActions = messages.actions;

export default messages.reducer;
