import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";

const login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mockuser = {
    email: "user@gmail.com",
    password: "1234",
  };

  const handleLogin = () => {
    if (email == mockuser.email && password == mockuser.password) {
      navigation.navigate("Home");
    } else {
      Alert.alert("Login Failed");
    }
  };

  return (
    <View style={styles.Container}>
      <Text style={styles.text}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity onPress={handleLogin} style={styles.sbutton}>
      
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
