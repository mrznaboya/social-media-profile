import { configureStore } from "@reduxjs/toolkit";
import currentPost from "./features/currentPost";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import currentUser from "./features/currentUser";

const store = configureStore({
  reducer: {
    currentPost,
    currentUser,
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