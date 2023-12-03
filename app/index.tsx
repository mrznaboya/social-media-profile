import React from "react";
import { Redirect } from "expo-router";
import { ROUTES } from "../src/routes";
import { StatusBar } from "react-native";

const Page = () => {
  return <Redirect href={ROUTES.HOME} />;
};

export default Page;
