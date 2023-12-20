import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, View, Text, Image } from 'react-native';

export default function Onboarding({navigation}) {
  return (
    <View>
      <Image source={require('../../assets/logo.png')}
        style={styles.screenLogo} />
      <Text style={styles.screenTitle}>Welcome</Text>
      <Text style={styles.screenSubtitle}>Create an Account and Order Foods!</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={styles.button}>
        <Text style={styles.buttonText}>Getting Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screenLogo: {
    marginTop: '10%',
    width: '100%',
    height: '50%',
    resizeMode: 'contain',
  },
  screenTitle: {
    fontSize: 36,
    textAlign: 'center',
    fontWeight: '500',
    padding: 30
  },
  screenSubtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: 'gray',
    fontWeight: '300'
  },
  button:{
    elevation: 8,
    backgroundColor: "#FBC400",
    borderRadius: 15,
    paddingVertical: 22,
    marginHorizontal:40,
    marginTop:60,
  },
  buttonText:{
    fontSize: 25,
    alignSelf: "center"
  }
});