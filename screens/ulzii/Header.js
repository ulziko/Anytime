import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

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
    width:120,
    height: 40,
    marginBottom: 10,
  }
});

export default Header;