import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const localImage1 = require('../../../assets/14.png');
const localImage2 = require('../../../assets/15.png');

const TwoButton = ({ setSex }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setSex(1)}>
        <Image source={localImage1} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSex(2)}>
        <Image source={localImage2} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '-5%',
    left: '20%',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginHorizontal: 10,
  },
});

export default TwoButton;
