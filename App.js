import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={style.container}>
      <Text style={style.red}>just red</Text>
      <Text style={style.bigBlue}>just bigBlue</Text>
      <Text style={[style.bigBlue, style.red]}>bigBlue, then red</Text>
      <Text style={[style.red, style.bigBlue]}>red, then bigBlue</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
