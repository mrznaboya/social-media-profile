import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { MessageThread } from "../../model/messageThread";

type MessageThreadsInitalState = {
  [key: string]: MessageThread;
};

const initialState: MessageThreadsInitalState = {};

export const messageThreads = createSlice({
  name: "messageThreads",
  initialState,
  reducers: {
    addMessageThreads: (state, action: PayloadAction<MessageThread[]>) => {
      action.payload.map((messageThread) => {
        state[messageThread.id] = messageThread;
      });
    },
  },
});

export const messageThreadsActions = messageThreads.actions;

export default messageThreads.reducer;
