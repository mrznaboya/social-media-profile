import { createSlice } from "@reduxjs/toolkit";

import { Post } from "../../model/post";

type CurrentPostInitalState = Post;

const initialState: CurrentPostInitalState = {
  id: "",
  text: "",
  user: "",
  createdDate: Date.now(),
};

export const currentPost = createSlice({
  name: "currentPost",
  initialState,
  reducers: {
    setCurrentPost: (state, action) => {
      return action.payload;
    },
  },
});

export const CurrentPostActions = currentPost.actions;

export default currentPost.reducer;
