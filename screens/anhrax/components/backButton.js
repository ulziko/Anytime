import React from 'react';
import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
    top: '10%',
    left: '10%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  text: {
    marginTop: 5,
  },
});

export default BackButton;
