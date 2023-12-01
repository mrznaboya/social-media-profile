import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topInfo}>
        <View style={styles.imageColumn} />
        <View style={styles.userInfoColumn} />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  topInfo: {
    height: 150,
    backgroundColor: "red",
  },
  imageColumn: {
    height: "100%",
    width: "35%",
    backgroundColor: "orange",
  },
  userInfoColumn: {
    height: "100%",
    width: "65%",
    backgroundColor: "yellow",
  },
});
