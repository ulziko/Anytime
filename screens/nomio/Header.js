// Header.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useProfileImage } from './ProfileImageContext';

const { width, height } = Dimensions.get('window');

const Header = () => {
  const navigation = useNavigation();
  const profileImage = useProfileImage();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={width * 0.06} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Миний Мэдээлэл</Text>
      </View>
      <View style={styles.profileSection}>
        <View style={styles.gradientFrame}>
          <View style={styles.profileImageContainer}>
            <Image
              source={profileImage ? { uri: profileImage } : require('../../assets/user.png')}
              style={styles.profileImage}
            />
            <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('CameraSection')}>
              <Ionicons name="camera" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.profileName}>Ганболд</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#9800ff',
    borderBottomLeftRadius: width * 0.15,
    borderBottomRightRadius: width * 0.15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: width * 0.055,
  },
  headerText: {
    flex: 1,
    color: 'white',
    fontSize: width * 0.054,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: width * 0.05,
    borderBottomLeftRadius: width * 0.2,
    borderBottomRightRadius: width * 0.2,
  },
  gradientFrame: {
    padding: 15,
  },
  profileImageContainer: {
    position: 'relative',
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: width * 0.15,
    backgroundColor: 'rgba(152, 0, 255, 0.33)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#fff',
  },
  profileImage: {
    width: height * 0.15,
    height: height * 0.15,
    borderRadius: width * 0.15,
  },
  iconContainer: {
    position: 'absolute',
    right: -10,
    bottom: -10,
    borderRadius: width * 0.05,
    backgroundColor: '#9800ff',
    padding: 5,
  },
  profileName: {
    color: 'white',
    fontSize: width * 0.06,
    marginTop: 10,
  },
});

export default Header;
