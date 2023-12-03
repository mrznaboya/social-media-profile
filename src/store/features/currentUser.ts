import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../model/user";

type CurrentUserInitalState = User;

const initialState: CurrentUserInitalState = {
  id: "",
  firstName: "",
  lastName: "",
  userName: "",
  bio: "",
};

export const currentUser = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      return action.payload;
    },
  },
});

export const CurrentUserActions = currentUser.actions;

export default currentUser.reducer;
