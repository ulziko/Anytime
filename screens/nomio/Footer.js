import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, Dimensions, Keyboard, TouchableOpacity, Text, Image } from 'react-native';
import { useFonts, Philosopher_700Bold } from '@expo-google-fonts/philosopher';
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../config/firebase';

const exitIcon = require('./../../assets/exit.png');

const { width, height } = Dimensions.get('window');

const Footer = () => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    Philosopher_700Bold,
  });
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigation.navigate('Login');
  };

  if (!fontsLoaded) {
    return null; // or a loading spinner
  }

  return (
    <View style={styles.container}>

      {!isKeyboardVisible && (
        <View style={styles.footer}>
          <TouchableOpacity style={styles.button} onPress={handleLogout}>
            <Image source={exitIcon} style={styles.image} resizeMode="contain" />
            <Text style={styles.buttonText}>Гарах</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  

  input: {
    width: '50%',
    padding: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 5,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '0%',
    //flexDirection: 'row',
    //justifyContent: 'space-between',
    //paddingHorizontal: width * 0.05, // Horizontal padding relative to screen width
    paddingVertical: height * 0.02, // Vertical padding relative to screen height
    backgroundColor: '#fff',
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
