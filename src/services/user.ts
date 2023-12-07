import { createProfileWithId } from "../api/utils/DocumentMutator";
import { SUPABASE_TABLES } from "../api/utils/supabase";
import { User } from "../model/user";

export const createUserProfile = async (user: User) => {
  const resp = await createProfileWithId(
    SUPABASE_TABLES.PROFILE,
    user.id,
    user
  );

  if (resp.error) {
    throw resp.error;
  }
};
