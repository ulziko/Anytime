import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get("window");
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
    top: width < 800 ? '-10%': "0%",
  },
  image: {
    width: width < 800 ? 100 : 150,
    height: width < 800 ? 100 : 150,
    resizeMode: 'contain',
    marginHorizontal: 10,
  },
});

export default TwoButton;
