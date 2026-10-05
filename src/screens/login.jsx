import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";

const login = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.text}>Sign In</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TouchableOpacity
        onPress={() => navigation.navigate("WelcomeScreen")}
        style={styles.sbutton}
      >
        <Text style={styles.sbuttontext}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "left",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },

  sbutton: {
    backgroundColor: "#EAA315",
    padding: 10,
    borderRadius: 5,
    width: "80%",
    alignSelf: "center",
    marginBottom: 20,
  },
  sbuttontext: {
    color: "white",
    textAlign: "center",
  },
});
