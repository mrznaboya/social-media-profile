import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Post } from "../../model/post";

type PostsInitalState = {
  [key: string]: Post;
};

const initialState: PostsInitalState = {};

export const posts = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPosts: (state, action: PayloadAction<Post[]>) => {
      action.payload.map((post) => {
        state[post.id] = post;
      });
    },
    resetPosts: () => {
      return initialState;
    },
  },
});

export const PostsActions = posts.actions;

export default posts.reducer;
