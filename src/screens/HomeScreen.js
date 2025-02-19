import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleWishlistClick = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      navigation.navigate("ReservedGifts");
    } else {
      navigation.navigate("Register");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Wishlist App!</Text>
      <Text style={styles.subtitle}>
        Create and share your dream wishlist with friends and family!
      </Text>
      <Button mode="contained" onPress={handleWishlistClick} style={styles.button}>
        Your Wishlist
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#6A1B9A",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginVertical: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#8E24AA",
  },
});

export default HomeScreen;
