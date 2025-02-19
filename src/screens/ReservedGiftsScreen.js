import React, { useEffect, useState } from "react";
import { View, FlatList, Image, StyleSheet, Text } from "react-native";
import { Button } from "react-native-paper";
import api from "../services/api";

const ReservedGiftsScreen = () => {
  const [gifts, setGifts] = useState([]);

  useEffect(() => {
    api.get("/api/Gift/reserved").then((response) => {
      setGifts(response.data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={gifts}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Text>{item.name}</Text>
            <Button>Unreserve</Button>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ReservedGiftsScreen;
