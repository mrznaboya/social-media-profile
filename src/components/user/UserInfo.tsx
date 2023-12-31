import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { User } from "../../model/user";
import { useAppSelector } from "../../store";
import ManageFriendshipButton from "../ManageFriendshipButton";

type Props = {
  user: User;
};

const UserInfo = (props: Props) => {
  const { user } = props;

  const loggedInUser = useAppSelector((state) => state.user);

  return (
    <View style={styles.topInfo}>
      {/* Photo Column */}
      <View style={styles.imageColumn}>
        <View style={styles.photo} />
      </View>

      {/* User Info Column */}
      <View style={styles.userInfoColumn}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.username}>@{user.username}</Text>
        <Text style={styles.bio}>{user.bio}</Text>
      </View>

      {/* Manage Friendship */}
      <View style={styles.friendshipButton}>
        {loggedInUser.id !== user.id && (
          <ManageFriendshipButton otherUser={user} />
        )}
      </View>
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  topInfo: {
    height: 100,
    flexDirection: "row",
    // backgroundColor: "red",
  },
  imageColumn: {
    height: "100%",
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "orange",
  },
  userInfoColumn: {
    height: "100%",
    width: "65%",
    justifyContent: "center",
  },
  photo: {
    height: 100,
    width: 100,
    backgroundColor: "blue",
    borderRadius: 50,
  },
  name: {
    fontSize: 20,
    fontWeight: "500",
  },
  username: {
    fontSize: 20,
    fontWeight: "400",
    fontStyle: "italic",
  },
  bio: {
    fontSize: 13,
    fontWeight: "300",
    marginTop: 5,
  },
  friendshipButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});
