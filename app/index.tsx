import { Redirect } from "expo-router";
import React from "react";

import { ROUTES } from "../src/routes";

const AppEntry = () => {
  return <Redirect href={ROUTES.ROOT} />;
};

export default AppEntry;
