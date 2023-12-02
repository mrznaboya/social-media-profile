import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { USERS } from "../../data/users";
import { POSTS } from "../../data/posts";
import PostCard from "../../components/PostCard";

const Profile = () => {
  const myUser = USERS[0];
  //   console.log("🚀 ~ file: App.tsx:7 ~ App ~ myUser:", myUser);
  const postForUser = POSTS;

  return (
    <View style={styles.container}>
      {/* For Android */}
      <StatusBar backgroundColor={"transparent"} barStyle="dark-content" />
      {/* User Info Header */}
      <View style={styles.topInfo}>
        {/* Photo Column */}
        <View style={styles.imageColumn}>
          <View style={styles.photo} />
        </View>

        {/* User Info Column */}
        <View style={styles.userInfoColumn}>
          <Text style={styles.name}>
            {myUser.firstName} {myUser.lastName}
          </Text>
          <Text style={styles.username}>@{myUser.userName}</Text>
          <Text style={styles.bio}>{myUser.bio}</Text>
        </View>
      </View>

      {/* Previous Posts */}
      <View style={styles.posts}>
        {postForUser.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  topInfo: {
    height: 150,
    flexDirection: "row",
  },
  imageColumn: {
    height: "100%",
    width: "35%",
    justifyContent: "center",
    alignItems: "center",
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
  posts: {
    height: "100%",
    // backgroundColor: "pink",
    alignItems: "center",
  },
});
