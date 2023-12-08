import auth from "@react-native-firebase/auth";

import { AppThunk } from "..";
import { createUserDocument } from "../../services/user";
import { FIREBASE_COLLECTIONS, generateFirebaseId } from "../../api/utils";

type CreateUserAccountThunkProps = {
  password: string;
  onSuccess: () => void;
  onError: () => void;
};

export const createUserAccountThunk = (
  props: CreateUserAccountThunkProps
): AppThunk<void> => {
  const { password, onSuccess, onError } = props;

  return async (dispatch, state) => {
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
