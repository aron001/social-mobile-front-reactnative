import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
const Profilescreen = () => {
  return (
    <View style={styles.container}>
      <Text> My profile </Text>
    </View>
  );
};
export default Profilescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
