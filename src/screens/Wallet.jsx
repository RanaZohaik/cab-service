import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Wallet = () => {
  return (
    <View style={styles.Container}>
      <Text>Wallet</Text>
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
