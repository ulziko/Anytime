import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions, Alert, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { useProfileImage } from './ProfileImageContext';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Philosopher_700Bold } from '@expo-google-fonts/philosopher';

const { width, height } = Dimensions.get('window');

const CombinedComponent = () => {
  const navigation = useNavigation();
  const { profileImage, setProfileImage } = useProfileImage();
  
  const [fontsLoaded] = useFonts({
    Philosopher_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Required', 'You need to grant permission to access the media library.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      const { uri } = result.assets[0];
      setProfileImage(uri);
      navigation.goBack();
    }
  };

  const takePicture = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Required', 'You need to grant permission to use the camera.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      quality: 1,
    });

    if (!result.canceled) {
      const { uri } = result.assets[0];
      setProfileImage(uri);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <LinearGradient
        colors={['#9800ff', '#A219FF']}
        style={styles.headerContainer}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={width * 0.06} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Миний Мэдээлэл</Text>
        </View>
        <View style={styles.profileSection}>
          <LinearGradient
            colors={['#ffffff', '#ffffff00']} // Fade border colors
            style={styles.gradientFrame}
          >
            <View style={styles.profileImageContainer}>
              <Image
                source={profileImage ? { uri: profileImage } : require('../../assets/user.png')}
                style={styles.profileImage}
              />
            </View>
          </LinearGradient>
          <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('CameraSection')}>
            <Ionicons name="camera" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
        <Text style={styles.profileName}>Ганболд</Text>
      </LinearGradient>

      {/* Content Area */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Add your content here */}
      </ScrollView>

      {/* Footer Section */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <Text style={styles.buttonText}>Зураг сонгох</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={takePicture}>
          <Text style={styles.buttonText}>Зураг авах</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  headerContainer: {
    borderBottomLeftRadius: width * 0.15,
    borderBottomRightRadius: width * 0.15,
    borderWidth: 1,
    borderColor: '#9800ff',
    borderTopWidth: 0,
    top: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: width * 0.055,
    top: 20,
  },
  headerText: {
    flex: 1,
    color: 'white',
    fontSize: width * 0.054,
    textAlign: 'center',
    fontFamily: 'Philosopher_700Bold',
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: width * 0.09,
    borderBottomLeftRadius: width * 0.2,
    borderBottomRightRadius: width * 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  gradientFrame: {
    padding: 5,
    borderRadius: width * 0.165,
  },
  profileImageContainer: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: width * 0.15,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#9800ff',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: width * 0.15,
  },
  iconContainer: {
    position: 'absolute',
    right: width * 0.27,
    bottom: width * 0.06,
    borderRadius: width * 0.05,
    padding: 10,
  },
  profileName: {
    color: 'white',
    fontSize: width * 0.07,
    marginLeft: 9,
    fontFamily: 'Philosopher_700Bold',
    alignSelf: 'center',
  },
  content: {
    flexGrow: 1,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: 350,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(152, 0, 255, 0.2)',
    borderRadius: 20,
    padding: 20,
    alignSelf: 'center',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#9800ff',
    borderWidth: 1,
    borderColor: 'rgba(152, 0, 255, 0.2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Philosopher_700Bold',
  },
});

export default CombinedComponent;
