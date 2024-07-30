import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BodyTypeCarousel from './components/BodyTypeCarousel';
import BackButton from './components/backButton';
import SquarePattern from './components/Pattern';
import Arrow from './components/Arrow';
import Light from './components/light';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { Philosopher_400Regular, Philosopher_700Bold } from '@expo-google-fonts/philosopher';
import AppLoading from 'expo-app-loading';

function FitnessAppPage() {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
    Philosopher_400Regular,
    Philosopher_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <BackButton/>
      <Text style={styles.title}>Төлөвлөгөө үүсгэх</Text>
      <BodyTypeCarousel/>
      <SquarePattern/>
      <Arrow/>
      <Text style={styles.footerText}>Та хүсч буй бие дээрээ дарна уу.</Text>
      <Light/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
  },
  title: {
    color: '#9800ff',
    fontSize: 38,
    fontWeight: 'bold',
    marginVertical: 150,
    marginBottom: 40,
    fontFamily: 'Philosopher_700Bold',
  },
  footerText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginVertical: '-70%',
    fontFamily: 'Nunito_700Bold',
  },
});

export default FitnessAppPage;
