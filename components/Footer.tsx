import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>© 2026 Meu App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333",
    padding: 15,
    alignItems: "center",
  },
  texto: {
    color: "#fff",
    fontSize: 16,
  },
});