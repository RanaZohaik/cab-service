import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtitle}>Have a better sharing experience.</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("SignUp")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Create an account</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("login")}
        style={styles.sbutton}
      >
        <Text style={styles.sbuttontext}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
    color: "#7e7b76",
  },
  button: {
    backgroundColor: "#EAA315",
    padding: 12,
    padding: 14,
    borderRadius: 8,
    width: "90%",
    position: "absolute",
    bottom: 120,
  },
  sbutton: {
    borderWidth: 1.5,
    borderColor: "#EAA315",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    position: "absolute",
    bottom: 60,
    width: "90%",
  },
  sbuttontext: {
    color: "#EAA315",
    textAlign: "center",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
