import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import currentPost from "./features/currentPost";
import currentUser from "./features/currentUser";
import posts from "./features/posts";
import user from "./features/user";

const store = configureStore({
  reducer: {
    /**
     * When the user visits the PostDetailPage, the currentPost slice of state is updated with the post that the user clicked on.
     */
    currentPost,
    /**
     * When the user visits the UserDetailPage, the currentUser slice of state is updated with the user that the user clicked on.
     */
    currentUser,
    /**
     * The currently logged in user is stored in the user slice of state.
     */
    user,
    /**
     * As the user comes across posts in the app, they are stored in the posts dump of state.
     */
    posts,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

/**
 * Used throughout the app to write from redux
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/**
 * Used throughout the app to read from redux
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
