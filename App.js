import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Details from './Details'; // Importando o componente Details
import Cadastro from './Cadastro'
import Perfil from './Perfil'

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Conheça nosso catálogo</Text>
          <TouchableOpacity style={styles.playButton}>
            <Image source={require('./assets/play-video-1.png')} style={styles.playIcon} />
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.carousel}>
          <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <Image source={require('./assets/stock-photo-neon-avatar-vector-style-image-of-naruto-avatar-with-elements-of-cs-2515582615.jpg')} style={styles.card} />
          </TouchableOpacity>
          <View style={styles.cardSpacer} />
          <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <Image source={require('./assets/naruto-profile-pictures-sa1tekghfajrr928.jpg')} style={styles.card} />
          </TouchableOpacity>
          <View style={styles.cardSpacer} />
          <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <Image source={require('./assets/naruto-thelast.jpg')} style={styles.card} />
          </TouchableOpacity>
          <View style={styles.cardSpacer} />
          <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <Image source={require('./assets/boruto.jpg')} style={styles.card} />
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.spacer} />
        <Text style={styles.subtitle}>Em breve...</Text>
        <View style={styles.spacer} />
        <View style={styles.comingSoon}>
          <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <Image source={require('./assets/images.jpeg')} style={[styles.thumbnail, styles.thumbnailRedBorder]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <Image source={require('./assets/ordem-dragon-ball-e1618001880183.jpeg')} style={[styles.thumbnail, styles.thumbnailRedBorder]} />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity>
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

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="cadastro">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
        <Stack.Screen name="cadastro" component={Cadastro} options={{ headerShown: false }} />
        <Stack.Screen name="perfil" component={Perfil} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
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
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
  },
  playButton: {
    padding: 10,
  },
  playIcon: {
    width: 60,
    height: 60,
  },
  carousel: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  card: {
    width: 170,
    height: 170,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#8B0000',
  },
  cardSpacer: {
    width: 20,
  },
  subtitle: {
    color: '#fff',
    fontSize: 26,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  spacer: {
    height: 20,
  },
  comingSoon: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  thumbnail: {
    width: 170,
    height: 170,
    borderRadius: 10,
  },
  thumbnailRedBorder: {
    borderWidth: 2,
    borderColor: '#8B0000',
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
