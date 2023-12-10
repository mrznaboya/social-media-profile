import { Slot } from "expo-router";
import React from "react";
import { Provider } from "react-redux";

import CreatePostModal from "../src/components/createPostModal";
import store from "../src/store";

const Layout = () => {
  return (
    <Provider store={store}>
      <Slot />
      <CreatePostModal />
    </Provider>
  );
};

export default Layout;
