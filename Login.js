import React, { useState } from "react";
import { Text, SafeAreaView, StyleSheet, View, TextInput, TouchableOpacity, Image } from "react-native";
import TextTitle from "./components/Title";

export default function Login({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TextTitle titleContent="Login" />
      <View style={styles.form}>
        <Text style={styles.bold}>Email</Text>
        <TextInput style={styles.input} />
        <Text style={styles.bold}>Senha</Text>
        <TextInput style={styles.input} secureTextEntry />

        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
          <Text style={styles.link}>Não tem uma conta? Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#222222",
  },
  form: {
    width: "90%",
  },
  input: {
    height: 48,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "#444444",
    color: "#ffffff",
  },
  button: {
    backgroundColor: "#8B0000",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  link: {
    marginTop: 10,
    color: "#FFBB12",
    textAlign: "center",
  },
  bold: {
    fontWeight: "bold",
    color: "#ffffff",
  },
});
