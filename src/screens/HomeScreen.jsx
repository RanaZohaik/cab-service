import React, { useRef, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";

const HomeScreen = ({ navigation }) => {
  const searchInputRef = useRef(null);
  const [selectedOption, setSelectedOption] = useState("transport");
  const [isRentalSelected, setIsRentalSelected] = useState(false);

  const openSidebar = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const focusSearch = () => {
    searchInputRef.current?.focus();
  };

  const showNotifications = () => {
    Alert.alert("Notifications", "You have no new notifications.");
  };

  return (
    <View style={styles.container}>
      <View style={styles.mapArea}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={openSidebar}
          accessibilityLabel="Open navigation menu"
          accessibilityRole="button"
        >
          <Ionicons name="menu" size={25} color="#555" />
        </TouchableOpacity>

        <View style={styles.topRight}>
          <TouchableOpacity
            style={styles.smallButton}
            onPress={focusSearch}
            accessibilityLabel="Search for a destination"
            accessibilityRole="button"
          >
            <Ionicons name="search" size={20} color="#555" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.smallButton}
            onPress={showNotifications}
            accessibilityLabel="Show notifications"
            accessibilityRole="button"
          >
            <Ionicons name="notifications-outline" size={20} color="#555" />
          </TouchableOpacity>
        </View>

     

        <TouchableOpacity
          style={[
            styles.rentalButton,
            isRentalSelected && styles.rentalButtonSelected,
          ]}
          onPress={() => setIsRentalSelected((selected) => !selected)}
          accessibilityLabel="Toggle rental service"
          accessibilityRole="button"
          accessibilityState={{ selected: isRentalSelected }}
        >
          <Text style={styles.rental}>Rental</Text>
        </TouchableOpacity>

        <View style={styles.search}>
          <View style={styles.searchInputContainer}>
            <Ionicons name="search-outline" size={20} color="#777" />

            <TextInput
              ref={searchInputRef}
              style={styles.searchInput}
              placeholder="Where would you go?"
              placeholderTextColor="#999"
              returnKeyType="search"
              accessibilityLabel="Destination"
            />

            <Ionicons name="heart-outline" size={20} color="#999" />
          </View>

          <View style={styles.optionsContainer}>
            <TouchableOpacity
              style={[
                styles.transportButton,
                selectedOption !== "transport" && styles.unselectedButton,
              ]}
              onPress={() => setSelectedOption("transport")}
              accessibilityLabel="Select transport"
              accessibilityRole="button"
              accessibilityState={{ selected: selectedOption === "transport" }}
            >
              <Text
                style={
                  selectedOption === "transport"
                    ? styles.selectedText
                    : styles.optionText
                }
              >
                Transport
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.deliveryButton,
                selectedOption === "delivery" && styles.selectedButton,
              ]}
              onPress={() => setSelectedOption("delivery")}
              accessibilityLabel="Select delivery"
              accessibilityRole="button"
              accessibilityState={{ selected: selectedOption === "delivery" }}
            >
              <Text
                style={
                  selectedOption === "delivery"
                    ? styles.selectedText
                    : styles.optionText
                }
              >
                Delivery
              </Text>
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

  rentalButtonSelected: {
    backgroundColor: "#D99800",
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

  locationMarker: {
    position: "absolute",
    top: "42%",
    left: "50%",
    marginLeft: -19,
    marginTop: -19,
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "rgba(255, 185, 0, 0.2)",
    alignItems: "center",
    justifyContent: "center",
  },

  locationDot: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#FFB900",
    alignItems: "center",
    justifyContent: "center",
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

  selectedButton: {
    backgroundColor: "#FFB900",
  },

  unselectedButton: {
    backgroundColor: "#FFFDF2",
  },

  selectedText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },

  optionText: {
    color: "#555",
    fontSize: 14,
  },
});
