import { createProfileWithId } from "../api/DocumentMutator";
import {
  WhereCriteria,
  getDocumentsWithCriteria,
} from "../api/DocumentRetriever";
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

export const getUserDocumentWithEmail = async (email: string) => {
  const criteria: WhereCriteria = {
    field: "email",
    operation: "==",
    criteria: email,
  };
  const resp = await getDocumentsWithCriteria(
    FIREBASE_COLLECTIONS.USER,
    criteria
  );

  if (resp.error) {
    throw resp.error;
  }

  return (resp.data as User[])[0];
};
