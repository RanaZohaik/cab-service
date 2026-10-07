import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ForgetPassword = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Forget Password</Text>
    </View>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  
  text: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
});
