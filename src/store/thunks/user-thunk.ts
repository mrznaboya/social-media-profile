import { AppThunk } from "..";
import { User } from "../../model/user";

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

      newUser.id;
    } catch (error) {
      console.log(error);
    }
  };
};
