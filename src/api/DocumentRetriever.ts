import firestore, {
  FirebaseFirestoreTypes,
} from "@react-native-firebase/firestore";

import { getDocumentFromQuerySnapshot } from "./utils";

export const getDocumentWithPathAndId = async (
  path: string,
  documentId: string
) => {
  return await firestore()
    .collection(path)
    .doc(documentId)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return { data: doc.data(), erro: null };
      } else {
        return { data: null, error: "No document exists with the ID" };
      }
    })
    .catch((error) => {
      return { data: null, error };
    });
};

/**
 * Used to filter documents.
 * @Link https://googleapis.dev/nodjs/firestore/latest/CollectionReference.html#where
 */
export type WhereCriteria = {
  field: string | FirebaseFirestoreTypes.FieldPath;
  operation: FirebaseFirestoreTypes.WhereFilterOp;
  criteria: any;
};

/**
 * Retrieve document at a given path that matches one set of criteria
 * @param path The collection to read from
 * @param criteria The set of instructors to filter documents by
 */
export const getDocumentsWithCriteria = async (
  path: string,
  criteria: WhereCriteria
) => {
  const query = firestore()
    .collection(path)
    .where(
      criteria.field || firestore.FieldPath.documentId(),
      criteria.operation,
      criteria.criteria
    );
  return await query
    .get()
    .then((snapshot) => {
      return handleWhereQuery(path, snapshot);
    })
    .catch((error) => {
      return { data: null, error };
    });
};

/**
 * Handle the result of a where query and it's list of QuerySnapshots
 * @param path The collection that the documents are return from
 * @param criteria The result of a where query - containing a listing of data
 */
const handleWhereQuery = async (
  path: string,
  snapshot: FirebaseFirestoreTypes.QuerySnapshot
) => {
  const documents = getDocumentFromQuerySnapshot(snapshot);
  if (documents.length > 0) {
    return { data: documents, error: null };
  } else {
    return { data: null, error: `No documents were found at path(${path})` };
  }
};
