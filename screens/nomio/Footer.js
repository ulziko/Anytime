import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { useFonts, Philosopher_700Bold } from '@expo-google-fonts/philosopher';

const helpIcon = require('./../../assets/help.png');
const exitIcon = require('./../../assets/exit.png');

const { width } = Dimensions.get('window');

const Footer = () => {
  const [fontsLoaded] = useFonts({
    Philosopher_700Bold,
  });

  if (!fontsLoaded) {
    return null; // or a loading spinner
  }

  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.button}>
        <Image
          source={exitIcon}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.buttonText}>Гарах</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#000',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    width: width * 0.35,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: width * 0.04,
    marginLeft: 5,
  },
  image: {
    width: width * 0.1, // Image width
    height: width * 0.07, // Image height
  },
});

export default Footer;
