import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Friendship } from "../../model/friendship";

type FriendshipsInitalState = {
  [key: string]: Friendship;
};

const initialState: FriendshipsInitalState = {};

export const friendships = createSlice({
  name: "friendships",
  initialState,
  reducers: {
    addFriendships: (state, action: PayloadAction<Friendship[]>) => {
      action.payload.map((friendship) => {
        state[friendship.id] = friendship;
      });
    },
    resetFriendships: () => {
      return initialState;
    },
  },
});

export const FriendshipsActions = friendships.actions;

export default friendships.reducer;
