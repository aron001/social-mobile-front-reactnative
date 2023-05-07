import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
const Settingscreen = () => {
  return (
    <View style={styles.container}>
      <Text> Settingscreen T</Text>
    </View>
  );
};
export default Settingscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
