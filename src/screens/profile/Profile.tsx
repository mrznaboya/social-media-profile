import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { POSTS } from "../../data/posts";
import PostCard from "../../components/PostCard";
import UserInfo from "../../components/UserInfo";
import { USERS } from "../../data/users";

const Profile = () => {
  const myUser = USERS[0];
  const postForUser = POSTS;

  return (
    <View style={styles.container}>
      {/* For Android */}
      <StatusBar backgroundColor={"transparent"} barStyle="dark-content" />
      {/* User Info Header */}
      <UserInfo user={myUser} />

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

  posts: {
    height: "100%",
    // backgroundColor: "pink",
    alignItems: "center",
  },
});
