import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topInfo}>
        <View style={styles.imageColumn}>
          <View style={styles.photo} />
        </View>
        <View style={styles.userInfoColumn}>
          <Text style={styles.name}> Zuriel Naboya</Text>
          <Text style={styles.username}>@mrznaboya</Text>
          <Text style={styles.bio}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut,
            earum!
          </Text>
        </View>
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
});
