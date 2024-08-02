import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import BodyTypeCarousel from './components/BodyTypeCarousel';
import BackButton from './components/backButton';
import SquarePattern from './components/Pattern';
import Arrow from './components/Arrow';
import Light from './components/light';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { Philosopher_400Regular, Philosopher_700Bold } from '@expo-google-fonts/philosopher';
// import AppLoading from 'expo-app-loading';

const { width, height } = Dimensions.get('window');
function FitnessAppPage() {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
    Philosopher_400Regular,
    Philosopher_700Bold,
  });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

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
    fontSize: width < 800 ? 36 : 64,
    fontWeight: 'bold',
    marginVertical: 150,
    top: width < 800 ? 0 : 20,
    marginBottom: width < 800 ? 40 : 20,
  },
  footerText: {
    color: '#FFFFFF',
    fontSize: width * 0.04,
    marginVertical: '-70%',
    top: width < 800 ? 0 : 200,
  },
});

export default FitnessAppPage;
