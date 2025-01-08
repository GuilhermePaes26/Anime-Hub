import { Text, View, StyleSheet, Image, SafeAreaView } from 'react-native';
export default function Decorator() {
  return (
     <View style= {styles.decorator}></View>
  );
}
const styles = StyleSheet.create({
  decorator: {
     width: '100%',
    height: '5%',
    backgroundColor: "#8B0000"
  }
});