import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";

const Signup = () => {
  const [name, setName]=useState("");
  const [email, setEmail]=useState("");
  const[gender, setGender]=useState(""); 


  return (
    <View>
      <Text>Signup</Text>
      <TextInput placeholder="Name"/>
      <TextInput placeholder="Email" />
       <View style={styles.container}>
      <Text style={styles.label}>Gender</Text>

      <View style={styles.dropdown}>
        <Picker
          selectedValue={gender}
          onValueChange={(value) => setGender(value)}
        >
          <Picker.Item label="Select Gender" value="" />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Other" value="other" />
        </Picker>
      </View>

      <Text>Selected Gender: {gender}</Text>
    </View>
      



    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container:{
  flex: 1,
  alignContent:"center",

  }
});
