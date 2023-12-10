import { router } from "expo-router";
import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../src/components/Header";
import Friends from "../src/components/user/Friends";
import Posts from "../src/components/user/Posts";
import UserInfo from "../src/components/user/UserInfo";
import { useAppSelector } from "../src/store";
import { BORDER_LIGHT_GREY } from "../src/utils/colors";

type TABS = "Posts" | "Friends";

const MyProfile = () => {
  const user = useAppSelector((state) => state.user);

  const [activeTab, setActiveTab] = useState<TABS>("Posts");

  const goBack = () => {
    router.back();
  };

  const onTabPress = (tab: TABS) => setActiveTab(tab);

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Header leftButton={{ onPress: goBack }} showLogo />
      <View style={styles.main}>
        {/* User Info */}
        <UserInfo user={user} />

        {/* Tabs */}
        <Tabs onTabPress={onTabPress} />
        <Posts isActive={activeTab === "Posts"} />
        <Friends isActive={activeTab === "Friends"} />
      </View>
    </SafeAreaView>
  );
};

export default MyProfile;

type TabsProps = {
  onTabPress: (tab: TABS) => void;
};

const Tabs = (props: TabsProps) => {
  const { onTabPress } = props;

  const [activeTab, setActiveTab] = useState<TABS>("Posts");

  const onPostsPress = () => {
    setActiveTab("Posts");
    onTabPress("Posts");
  };
  const onFriendsPress = () => {
    setActiveTab("Friends");
    onTabPress("Friends");
  };

  return (
    <View style={styles.tabsContainer}>
      <TouchableOpacity
        style={[
          styles.tabColumn,
          activeTab === "Posts" ? styles.selectedTabColumn : {},
        ]}
        onPress={onPostsPress}
      >
        <Text>Posts</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.tabColumn,
          activeTab === "Friends" ? styles.selectedTabColumn : {},
        ]}
        onPress={onFriendsPress}
      >
        <Text>Friends</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
  main: {
    // flex: 1,
    paddingTop: 10,
    // backgroundColor: "red",
  },
  tabsContainer: {
    flexDirection: "row",
    // borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: BORDER_LIGHT_GREY,
  },
  tabColumn: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  selectedTabColumn: {
    borderBottomWidth: 1,
    borderColor: "blue",
  },
});
