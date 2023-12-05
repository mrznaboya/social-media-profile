import { AppThunk } from "..";
import { supabase } from "../../api/utils/supabase";

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
      // const newUser = Object.assign({}, state().user);
      // newUser.createdDate = Date.now();

      //   auth().createUserWithEmailandPassword(newUser.email, password);
      // } catch (error) {
      //   console.log(error);
      // }
      // };
      const newUser = { ...state().user, createdDate: Date.now() };

      const { error } = await supabase.auth.signUp({
        email: newUser.email,
        password,
      });

      if (error) {
        console.error(error);
        return onError();
      }

      return onSuccess();
    } catch (error) {
      console.log(error);
      return onError();
    }
  };
};
