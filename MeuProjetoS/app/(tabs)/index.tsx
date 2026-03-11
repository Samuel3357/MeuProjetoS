import { View, StyleSheet } from "react-native";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Botao from "../../components/Botao";

export default function Index() {
  return (
    <View style={styles.container}>

      <Header />

      <View style={styles.conteudo}>
        <Botao titulo="Entrar" />
        <Botao titulo="Cadastrar" />
        <Botao titulo="Sobre" />
      </View>

      <Footer />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "space-between",
  },

  conteudo: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});