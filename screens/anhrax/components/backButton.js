import React from 'react';
import { Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const { width } = Dimensions.get("window");
const localImage = require('../../../assets/backButton.png');

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Home')}>
      <Image source={localImage} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: width < 800 ? 80 : 100,
    left: '10%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  image: {
    width: width < 800 ? 30 : 50,
    height: width < 800 ? 30 : 50,
    resizeMode: 'contain',
  },
  text: {
    marginTop: 5,
  },
});

export default BackButton;
