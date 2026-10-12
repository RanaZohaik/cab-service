import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ProfileScreen = () => {
  const [email, setEmail] = useState("rana@gmail.com");
  const [gender, setGender] = useState("Male");
  const [address, setAddress] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>

      <View style={styles.picture}>
        <Ionicons name="person" size={50} color="#555" />
      </View>

      <Text style={styles.name}>Your Name</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />

      <Text style={styles.label}>Gender</Text>
      <TextInput style={styles.input} value={gender} onChangeText={setGender} />

      <Text style={styles.label}>Address</Text>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={setAddress}
        placeholder="Enter your address"
      />

      <TouchableOpacity onPress={() => alert("Updated")} style={styles.sbutton}>
        <Text style={styles.sbuttontext}>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 25,
    paddingTop: 55,
  },
  title: {
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },
  picture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#FFF4B8",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  label: {
    fontSize: 15,
    marginBottom: 8,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#FFCC38",
    borderRadius: 7,
    padding: 12,
    marginBottom: 18,
    fontSize: 15,
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
