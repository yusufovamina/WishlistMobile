import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleLogin = async () => {
    setError("");
    setLoading(true);
    try {
      const response = await api.post("/api/Auth/login", {
        username,
        passwordHash: password,
        role: "user",
      });

      await AsyncStorage.setItem("token", response.data.token);
      navigation.navigate("ReservedGifts");
    } catch (err) {
      setError("Invalid username or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button mode="contained" loading={loading} onPress={handleLogin} style={styles.button}>
        Login
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
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#6A1B9A",
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 5,
  },
  error: {
    color: "red",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#8E24AA",
  },
});

export default LoginScreen;
