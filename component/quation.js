import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
const Quation = () => {
  return (
    <View style={styles.container}>
      <Text> quation screen </Text>
    </View>
  );
};
export default Quation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
