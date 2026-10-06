import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";

const Signup = ({ navigation }) => {
  const [name, setName] = useState("Rana Zohaik");
  const [email, setEmail] = useState("rana@example.com");
  const [gender, setGender] = useState("male");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Signup</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <View style={styles.dropdown}>
        <Picker
          selectedValue={gender}
          onValueChange={(itemValue) => setGender(itemValue)}
        >
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Other" value="other" />
        </Picker>
      </View>

      <TouchableOpacity
        style={styles.sbutton}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.sbuttontext}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  sbutton: {
    backgroundColor: "#EAA315",
    padding: 10,
    borderRadius: 5,
    width: "100%",
    alignSelf: "center",
    marginBottom: 20,
  },
  sbuttontext: {
    color: "white",
    textAlign: "center",
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
  },
});
