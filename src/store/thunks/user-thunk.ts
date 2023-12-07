import { AppThunk } from "..";
import { supabase } from "../../api/utils/supabase";
import { createUserProfile } from "../../services/user";

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
      newUser.created_at = Date.now();

      const { error } = await supabase.auth.signUp({
        email: newUser.email,
        password,
      });

      if (error) {
        console.error(error);
        return onError();
      }

      await createUserProfile(newUser);

      onSuccess();
    } catch (error) {
      console.log(error);
      return onError();
    }
  };
};
