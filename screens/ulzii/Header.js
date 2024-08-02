import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");

const Header = () => {
  const logoUri = require('../../assets/anytimeLogo.png'); 

  return (
    <View style={styles.header}>
      <Image source={logoUri} style={styles.logoImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginTop: 25,
  },
  logoImage: {
    width: height *0.22,
    height: height*0.04,
    marginBottom: 10,
  }
});

export default Header;