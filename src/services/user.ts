import { createProfileWithId } from "../api/DocumentMutator";
import { FIREBASE_COLLECTIONS } from "../api/utils";
import { User } from "../model/user";

export const createUserDocument = async (user: User) => {
  const resp = await createProfileWithId(
    FIREBASE_COLLECTIONS.USER,
    user.id,
    user
  );

  if (resp.error) {
    throw resp.error;
  }
};
