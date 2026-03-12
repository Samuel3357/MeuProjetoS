import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Meu Aplicativo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4CAF50",
    padding: 20,
    alignItems: "center",
  },
  texto: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});