import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import Profile from "./src/screens/profile/Profile";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Profile />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
