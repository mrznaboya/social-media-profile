import { AppThunk } from "..";
import { getPostsForUser } from "../../services/post";
import { PostsActions } from "../features/posts";

export const getPostsForUserThunk = (id: string): AppThunk<void> => {
  return async (dispatch, state) => {
    try {
      const postsForUser = await getPostsForUser(id);
      dispatch(PostsActions.addPosts(postsForUser));
    } catch (error) {
      console.log("Could not retrieve posts for user", id, error);
    }
  };
};
