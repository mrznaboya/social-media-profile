import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { User } from "../../model/user";

type UsersInitalState = {
  [key: string]: User;
};

const initialState: UsersInitalState = {};

export const users = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUsers: (state, action: PayloadAction<User[]>) => {
      action.payload.map((user) => {
        state[user.id] = user;
      });
    },
  },
});

export const UsersActions = users.actions;

export default users.reducer;
