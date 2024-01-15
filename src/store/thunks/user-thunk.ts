import auth from "@react-native-firebase/auth";

import { getFriendshipsForUserThunk } from "./friendships-thunk";
import { getAllPostsThunk } from "./posts-thunk";
import { AppThunk } from "..";
import { FIREBASE_COLLECTIONS, generateFirebaseId } from "../../api/utils";
import {
  createUserDocument,
  getAllUsers,
  getUserDocumentWithEmail,
} from "../../services/user";
import { FriendshipsActions } from "../features/friendships";
import { messageThreadsActions } from "../features/messageThreads";
import { PostsActions } from "../features/posts";
import { UserActions } from "../features/user";
import { UsersActions } from "../features/users";

type CreateUserAccountThunkProps = {
  password: string;
  onSuccess: () => void;
  onError: () => void;
};

export const createUserAccountThunk = (
  props: CreateUserAccountThunkProps
): AppThunk<void> => {
  const { password, onSuccess, onError } = props;

  return async (_, state) => {
    try {
      const newUser = Object.assign({}, state().user);
      newUser.id = generateFirebaseId(FIREBASE_COLLECTIONS.USER);
      newUser.createdDate = Date.now();

      await auth().createUserWithEmailAndPassword(newUser.email, password);

      await createUserDocument(newUser);

      onSuccess();
    } catch (error) {
      console.log(error);
      return onError();
    }
  };
};

type TakeUserToAppThunkProps = {
  email: string;
  onSuccess: () => void;
  onError: () => void;
};

export const TakeUserToAppThunk = (
  props: TakeUserToAppThunkProps
): AppThunk<void> => {
  const { email, onSuccess, onError } = props;

  return async (dispatch) => {
    try {
      const user = await getUserDocumentWithEmail(email);

      dispatch(UserActions.setUser(user));
      dispatch(UsersActions.addUsers([user]));

      dispatch(getAllPostsThunk());
      dispatch(getAllUsersThunk());
      dispatch(getFriendshipsForUserThunk(user.id));

      onSuccess();
    } catch (error) {
      console.log(error);
      return onError();
    }
  };
};

export const getAllUsersThunk = (): AppThunk<void> => {
  return async (dispatch) => {
    try {
      const users = await getAllUsers();
      dispatch(UsersActions.addUsers(users));
    } catch (error) {
      console.log("Could not retrieve all users", error);
    }
  };
};

type SignInThunkProps = {
  password: string;
  onSuccess: () => void;
  onError: () => void;
};

export const signInThunk = (props: SignInThunkProps): AppThunk<void> => {
  const { password, onSuccess, onError } = props;

  return async (dispatch, state) => {
    const { email } = state().user;
    try {
      await auth().signInWithEmailAndPassword(email, password);

      dispatch(TakeUserToAppThunk({ email, onSuccess, onError }));
      onSuccess();
    } catch (error) {
      console.log(error);
      return onError();
    }
  };
};

export const signOutUsereThunk = (): AppThunk<void> => {
  return async (dispatch) => {
    try {
      dispatch(UserActions.resetUser());
      dispatch(UsersActions.resetUsers());
      dispatch(PostsActions.resetPosts());
      dispatch(messageThreadsActions.resetMessageThreads());
      dispatch(FriendshipsActions.resetFriendships());
    } catch (error) {
      console.log("Could not sign out user", error);
    }
  };
};
