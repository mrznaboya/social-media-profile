import auth from "@react-native-firebase/auth";
import { router } from "expo-router";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

import { ROUTES } from "../src/routes";
import { useAppDispatch } from "../src/store";
import { TakeUserToAppThunk } from "../src/store/thunks/user-thunk";

const Root = () => {
  const dispatch = useAppDispatch();

  const goToSignUp = () => router.push(ROUTES.SIGN_UP);
  const goToApp = () => router.push(ROUTES.HOME);

  useEffect(() => {
    if (auth().currentUser?.email) {
      console.log(
        "🚀 ~ file: root.tsx:17 ~ useEffect ~ (auth().currentUser?.email):",
        auth().currentUser?.email
      );

      dispatch(
        TakeUserToAppThunk({
          email: auth().currentUser?.email || "",
          onSuccess: goToApp,
          onError: goToSignUp,
        })
      );
    } else {
      goToSignUp();
    }
  }, []);
  return (
    <View>
      <Text>Root</Text>
    </View>
  );
};

export default Root;
