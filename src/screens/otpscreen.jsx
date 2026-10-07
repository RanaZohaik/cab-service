import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const OTPScreen = ({ navigation }) => {
  const [otp, setOtp] = useState("");

  const verifyOTP = () => {
    if (otp === "1234") {
      alert("OTP Verified Successfully");
      navigation.navigate("SetPassword");
    } else {
      alert("Invalid OTP. Try 1234");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>

      <Text style={styles.subtitle}>
        Enter the 4-digit OTP sent to your phone
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        keyboardType="number-pad"
        maxLength={4}
        value={otp}
        onChangeText={setOtp}
      />

      <TouchableOpacity style={styles.button} onPress={verifyOTP}>
        <Text style={styles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.resend}>Resend OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitle: {
    textAlign: "center",
    color: "gray",
    marginTop: 10,
    marginBottom: 30,
  },

  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    padding: 15,
    textAlign: "center",
    fontSize: 20,
  },

  button: {
    backgroundColor: "#EAA315",
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },

  resend: {
    textAlign: "center",
    marginTop: 20,
    fontWeight: "bold",
  },
});
