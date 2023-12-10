import { createDocumentWithId } from "../api/DocumentMutator";
import {
  WhereCriteria,
  getDocumentsWithCriteria,
} from "../api/DocumentRetriever";
import { FIREBASE_COLLECTIONS } from "../api/utils";
import { Friendship } from "../model/friendship";

export const createFriendshipDocument = async (friendship: Friendship) => {
  const resp = await createDocumentWithId(
    FIREBASE_COLLECTIONS.FRIENDSHIP,
    friendship.id,
    friendship
  );

  if (resp.error) {
    throw resp.error;
  }
};

/**
 * Given a `User.id`, retrieve all of the posts that the User has created.
 * @returns List of `Post`
 */
export const getFriendshipsForUser = async (user: string) => {
  const criteria: WhereCriteria = {
    field: "users",
    operation: "array-contains",
    criteria: user,
  };

  const resp = await getDocumentsWithCriteria(
    FIREBASE_COLLECTIONS.USER,
    criteria
  );

  if (resp.error) {
    throw resp.error;
  }

  return resp.data as Friendship[];
};
