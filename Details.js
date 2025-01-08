import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Details({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <Image
          source={require('./assets/stock-photo-neon-avatar-vector-style-image-of-naruto-avatar-with-elements-of-cs-2515582615.jpg')}
          style={styles.image}
        />
        <Text style={styles.description}>
          Naruto é uma série que segue a jornada de Naruto Uzumaki, um jovem ninja que sonha em se tornar o Hokage,
          o líder de sua vila, para conquistar o respeito de todos. Desde o nascimento, ele carrega a Kyubii,
          uma raposa de nove caudas que quase destruiu a Vila Oculta da Folha, o que faz com que seja rejeitado
          pela população e cresça sozinho, em busca de reconhecimento e amizade.
        </Text>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" size={40} color="#fff" />
          <Text style={styles.footerLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="perfil" size={60} color="#fff" onPress={() => navigation.navigate('perfil')}/>
          <Text style={styles.footerLabel}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
  },
  header: {
    backgroundColor: '#8B0000',
    alignItems: 'flex-start',
    padding: 10,
  },
  logo: {
    width: 50,
    height: 50,
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '90%',
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  description: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    marginHorizontal: 10,
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
    textAlign: 'center',
  },
});
