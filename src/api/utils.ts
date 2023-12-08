import firestore from "@react-native-firebase/firestore";

export const generateFirebaseId = (path: string) => {
  const firRef = firestore().collection(path).doc();

  return firRef.id;
};

export enum FIREBASE_COLLECTIONS {
  USER = "user",
}
