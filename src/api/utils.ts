import firestore, {
  FirebaseFirestoreTypes,
} from "@react-native-firebase/firestore";

// eslint-disable-next-line import/no-duplicates

export const generateFirebaseId = (path: string) => {
  const firRef = firestore().collection(path).doc();

  return firRef.id;
};

export enum FIREBASE_COLLECTIONS {
  USER = "user",
}

export const getDocumentFromQuerySnapshot = (
  querySnapshot: FirebaseFirestoreTypes.QuerySnapshot
) => {
  const documents: any = [];
  querySnapshot.forEach((doc) => {
    documents.push(doc.data());
  });
  return documents;
};
