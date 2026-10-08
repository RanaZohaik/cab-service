import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = () => {
  

  return (
    <View style={styles.container}>
  
      <View style={styles.mapArea}>
      
        <TouchableOpacity style={styles.menuButton}>
          <Ionicons name="menu" size={25} color="#555" />
        </TouchableOpacity>

        <View style={styles.topRight}>
          <TouchableOpacity style={styles.smallButton}>
            <Ionicons name="search" size={20} color="#555" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.smallButton}>
            <Ionicons name="notifications-outline" size={20} color="#555" />
          </TouchableOpacity>
        </View>

        <View>
          <View>
            <View>
              <Ionicons name="location" size={20} color="#555" />
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.rentalButton}>
          <Text style={styles.rental}>Rental</Text>
        </TouchableOpacity>

        <View style={styles.search}>
          <View style={styles.searchInputContainer}>
            <Ionicons name="search-outline" size={20} color="#777" />

            <TextInput
              style={styles.searchInput}
              placeholder="Where would you go?"
              placeholderTextColor="#999"
            />

            <Ionicons name="heart-outline" size={20} color="#999" />
          </View>

          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.transportButton}>
              <Text style={styles.selectedText}>Transport</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.deliveryButton}>
              <Text style={styles.optionText}>Delivery</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  mapArea: {
    flex: 1,
    backgroundColor: "#F1F2EF",
    position: "relative",
    overflow: "hidden",
  },

  menuButton: {
    position: "absolute",
    top: 50,
    left: 20,
    width: 42,
    height: 42,
    backgroundColor: "#FFF4B8",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  topRight: {
    position: "absolute",
    top: 50,
    right: 20,
    flexDirection: "row",
    gap: 8,
  },

  smallButton: {
    width: 42,
    height: 42,
    backgroundColor: "#FFF4B8",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  rentalButton: {
    position: "absolute",
    bottom: 185,
    left: 25,
    width: 140,
    height: 45,
    backgroundColor: "#FFB900",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },

  rental: {
    color: "white",
    fontSize: 15,
    fontWeight: "600",
  },

  search: {
    position: "absolute",
    bottom: 75,
    left: 25,
    right: 25,
    backgroundColor: "#FFFDF2",
    borderWidth: 1,
    borderColor: "#FFCC38",
    borderRadius: 8,
    padding: 9,
  },

  searchInputContainer: {
    height: 52,
    borderWidth: 1,
    borderColor: "#FFCC38",
    borderRadius: 7,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    color: "#333",
  },

  optionsContainer: {
    height: 38,
    flexDirection: "row",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#FFCC38",
    borderRadius: 6,
    overflow: "hidden",
  },

  transportButton: {
    flex: 1,
    backgroundColor: "#FFB900",
    alignItems: "center",
    justifyContent: "center",
  },

  deliveryButton: {
    flex: 1,
    backgroundColor: "#FFFDF2",
    alignItems: "center",
    justifyContent: "center",
  },

  selectedText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },


});
