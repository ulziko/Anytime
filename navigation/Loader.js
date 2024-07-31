import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Loader = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('FitnessApp');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);

  const anytimeIcon = require('../assets/logo.png'); 
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

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ActivityIndicator size="large" color="#ffffff" />
        <Text style={styles.text}>Төлөвлөгөөг боловсруулж байна...</Text>
        <Image source={anytimeIcon} style={styles.anytimeIcon} />
        <Image source={Icon1} style={styles.icon1} />
        <Image source={Icon2} style={styles.icon2} />
        <Image source={Icon3} style={styles.icon3} />
        <Image source={Icon4} style={styles.icon4} />
        <Image source={Icon5} style={styles.icon5} />
        <Image source={Icon6} style={styles.icon6} />
        <Image source={Icon7} style={styles.icon7} />
        <Image source={Icon8} style={styles.icon8} />
        <Image source={Icon9} style={styles.icon9} />
        <Image source={Icon10} style={styles.icon10} />
        <Image source={Icon11} style={styles.icon11} />
        <Image source={Icon12} style={styles.icon12} />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 20,
    position: 'absolute',
    bottom: '15%',
  },
  anytimeIcon: {
    position: 'absolute',
    top: '45%',
    left: '6%',
  },
  icon1: {
    position: 'absolute',
    width: '10vw',
    height: '5vh',
    top: '10%',
    left: '10%',
  },
  icon2: {
    position: 'absolute',
    width: '5vw',
    height: '3vh',
    top: '20%',
    right: '40%',
  },
  icon3: {
    position: 'absolute',
    width: '10vw',
    height: '5vh',
    top: '10%',
    right: '15%',
  },
  icon4: {
    position: 'absolute',
    width: '10vw',
    height: '5vh',
    top: '25%',
    left: '5%',
  },
  icon5: {
    position: 'absolute',
    width: '10vw',
    height: '5vh',
    top: '40%',
    right: '15%',
  },
  icon6: {
    position: 'absolute',
    width: '10vw',
    height: '5vh',
    top: '35%',
    left: '30%',
  },
  icon7: {
    position: 'absolute',
    width: '5vw',
    height: '3vh',
    top: '80%',
    right: '40%',
  },
  icon8: {
    position: 'absolute',
    width: '10vw',
    height: '5vh',
    top: '65%',
    left: '30%',
  },
  icon9: {
    position: 'absolute',
    width: '10vw',
    height: '5vh',
    top: '70%',
    right: '20%',
  },
  icon10: {
    position: 'absolute',
    width: '10vw',
    height: '5vh',
    top: '80%',
    left: '10%',
  },
  icon11: {
    position: 'absolute',
    width: '10vw',
    height: '5vh',
    top: '93%',
    right: '25%',
  },
  icon12: {
    position: 'absolute',
    width: '10vw',
    height: '5vh',
    top: '90%',
    left: '35%',
  },
});

export default Loader;
