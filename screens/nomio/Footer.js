import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { useFonts, Philosopher_700Bold } from '@expo-google-fonts/philosopher';

const helpIcon = require('./../../assets/help.png');
const exitIcon = require('./../../assets/exit.png');

const { width, height } = Dimensions.get('window');

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
      {/* Uncomment and use if you need a help icon */}
      {/* <TouchableOpacity style={styles.button}>
        <Image
          source={helpIcon}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.buttonText}>Тусламж</Text>
      </TouchableOpacity> */}
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
    paddingHorizontal: width * 0.05, // Horizontal padding relative to screen width
    paddingVertical: height * 0.02, // Vertical padding relative to screen height
    backgroundColor: '#000',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: width * 0.02, // Padding relative to screen width
    borderRadius: 5,
    width: width * 1.5, // Button width relative to screen width
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: width * 0.04, // Font size relative to screen width
    marginLeft: 5,
  },
  image: {
    width: width * 0.1, // Image width relative to screen width
    height: width * 0.07, // Image height relative to screen width
  },
});

export default Footer;
