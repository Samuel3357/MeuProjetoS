import { TouchableOpacity, Text, StyleSheet } from "react-native";

type BotaoProps = {
  titulo: string;
};

export default function Botao({ titulo }: BotaoProps) {
  return (
    <TouchableOpacity style={styles.botao}>
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: "#6200ee",
    width: 200,
    padding: 15,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    elevation: 4
  },

  texto: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  }
});