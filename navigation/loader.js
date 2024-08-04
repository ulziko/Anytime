import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, Dimensions, Image, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Philosopher_400Regular, Philosopher_700Bold } from '@expo-google-fonts/philosopher';

const { width, height } = Dimensions.get('screen');

const Loader = () => {
  const navigation = useNavigation();
  const anytimeIcon = require('../assets/anytimeLogo.png'); 
  const Icon1 = require('../assets/icon1.png');
  const Icon2 = require('../assets/icon2.png');
  const Icon3 = require('../assets/icon3.png');
  const Icon4 = require('../assets/icon4.png');
  const Icon5 = require('../assets/icon5.png');
  const Icon6 = require('../assets/icon6.png');
  const Icon7 = require('../assets/icon7.png');
  const Icon8 = require('../assets/icon8.png');
  const Icon9 = require('../assets/icon9.png');
  const Icon10 = require('../assets/icon10.png');
  const Icon11 = require('../assets/icon11.png');
  const Icon12 = require('../assets/icon12.png');

  let [fontsLoaded] = useFonts({
    Philosopher_400Regular,
    Philosopher_700Bold,
  });
  
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('FitnessApp');
    }, 5000); // 5 seconds

    

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, [navigation]);

  if (!fontsLoaded) {
    return null; // or a fallback component
  }

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={null}>
        <SafeAreaView style={styles.safeArea}>
          {/* <TouchableOpacity 
            style={styles.touchable}
            onPress={() => navigation.navigate("Login")}
          > */}
            <Image 
              source={anytimeIcon}
              style={styles.anytimeIcon}
            />
          {/* </TouchableOpacity> */}
          <Text style={styles.text}>Таны төлөвлөгөөг боловсруулж {'\n'}  байна...</Text>
          <Image source={Icon1} style={[styles.icon, { top: '10%', left: '10%' }]} />
          <Image source={Icon2} style={[styles.icon, { top: '20%', right: '40%' }]} />
          <Image source={Icon3} style={[styles.icon, { top: '10%', right: '15%' }]} />
          <Image source={Icon4} style={[styles.icon, { top: '25%', left: '5%' }]} />
          <Image source={Icon5} style={[styles.icon, { top: '40%', right: '15%' }]} />
          <Image source={Icon6} style={[styles.icon, { top: '35%', left: '30%' }]} />
          <Image source={Icon7} style={[styles.icon, { top: '80%', right: '40%' }]} />
          <Image source={Icon8} style={[styles.icon, { top: '65%', left: '30%' }]} />
          <Image source={Icon9} style={[styles.icon, { top: '70%', right: '20%' }]} />
          <Image source={Icon10} style={[styles.icon, { top: '80%', left: '10%' }]} />
          <Image source={Icon11} style={[styles.icon, { top: '93%', right: '25%' }]} />
          <Image source={Icon12} style={[styles.icon, { top: '90%', left: '35%' }]} />
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#9800ff" />
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  background: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchable: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  anytimeIcon: {
    width: width * 0.8, // Adjust width as needed
    height: width * 0.99,
    resizeMode: 'contain',
    left: 24,
    top: 80,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Philosopher_700Bold',
    position: 'absolute',
    bottom: 380,
    textAlign: 'center',
    width: '100%',
  },
  icon: {
    position: 'absolute',
    width: width * 0.1, // Adjust width as needed
    height: height * 0.05, // Adjust height as needed
    resizeMode: 'contain',
  },
  loaderContainer: {
    position: 'absolute',
    bottom: 300,
    width: 180, // Adjust width as needed
    height: 100, // Adjust height as needed
    borderRadius: 100, // To make it circular
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loader;
