import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Perfil({ navigation }){
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
            <Image source={require('./assets/logo.png')} style={styles.logo} />
      </View>

      {/* Corpo */}
      <View style={styles.body}>
        <View style={styles.profileIcon}>
          <Text style={styles.profileIconText}>👤</Text>
        </View>
        <Text style={styles.greeting}>Olá</Text>

        {/* Campos de entrada */}
        <TextInput style={styles.input} placeholder="Seu nome" placeholderTextColor="#fff" />
        <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor="#fff" />
        <TextInput style={styles.input} placeholder="Anime Favorito" placeholderTextColor="#fff" />
      </View>

      {/* Rodapé */}
<View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" size={40} color="#fff" />
          <Text style={styles.footerLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="perfil" size={40} color="#fff" onPress={() => navigation.navigate('perfil')} />
          <Text style={styles.footerLabel}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  header: {
    backgroundColor: '#990000',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  profileIcon: {
    backgroundColor: '#fff',
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIconText: {
    fontSize: 40,
  },
  greeting: {
    color: '#fff',
    fontSize: 24,
    marginVertical: 20,
  },
  input: {
    backgroundColor: '#990000',
    borderRadius: 20,
    width: '80%',
    height: 40,
    marginVertical: 10,
    paddingHorizontal: 15,
    color: '#fff',
  },
  footer: {
    backgroundColor: '#990000',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#8B0000',
    padding: 15,
  },
  footerLabel: {
    color: '#fff',
    fontSize: 16,
    marginTop: 5,
  },
});
