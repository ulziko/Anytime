import React ,{useContext, useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, Alert } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { useProfileImage } from '../../context/ProfileImageContext';
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';
import { useFonts, Philosopher_700Bold } from '@expo-google-fonts/philosopher';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";

const { width } = Dimensions.get('window');

const Header = () => {
  const [userName, setUserName] = useState('');
  const navigation = useNavigation();
  const { profileImage, setProfileImage } = useProfileImage();

  const [fontsLoaded] = useFonts({
    Philosopher_700Bold,
  });

  useEffect(() => {
    const fetchUserName = async () => {
      const auth = getAuth();
      const userId = auth.currentUser.uid;
      const db = getDatabase();
      const userRef = ref(db, 'users/' + userId);

      onValue(userRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setUserName(data.username);
          setProfileImage(data.profileImage); 
        } else {
          console.log("No data available");
        }
      });
    };

    fetchUserName();
  }, []);

  const uploadImage = async (uri) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      throw new Error("User not authenticated");
    }

    const userId = user.uid;
    const storage = getStorage();
    
    const response = await fetch(uri);
    const blob = await response.blob();

    const fileRef = storageRef(storage, `users/${userId}/profileImages/${userId}.jpg`);
    await uploadBytes(fileRef, blob);

    const downloadURL = await getDownloadURL(fileRef);
    return downloadURL;
  };

  const saveProfileImage = async (downloadURL) => {
    const db = getDatabase();
    const auth = getAuth();
    const userId = auth.currentUser.uid;
    
    const userRef = ref(db, 'users/' + userId + '/profileImage');
    await set(userRef, downloadURL);
  };

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
      const downloadURL = await uploadImage(uri);
      await saveProfileImage(downloadURL); 
      setProfileImage(downloadURL); 
    }
  };

  return (
    <LinearGradient
      colors={['#9800ff', '#A219FF']}
      style={styles.container}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={width * 0.06} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Миний Мэдээлэл</Text>
      </View>
      <View style={styles.profileSection}>
        <LinearGradient
          colors={['#ffffff', '#ffffff00']}
          style={styles.gradientFrame}
        >
          <View style={styles.profileImageContainer}>
            <Image
              source={profileImage ? { uri: profileImage } : require('../../assets/user.png')}
              style={styles.profileImage}
            />
          </View>
        </LinearGradient>
        <TouchableOpacity style={styles.iconContainer} onPress={pickImage}>
          <MaterialCommunityIcons name="camera-flip" size={23} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.profileName}>{userName}</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomLeftRadius: width * 0.15,
    borderBottomRightRadius: width * 0.15,
    borderWidth: 1,
    borderColor: '#9800ff',
    borderTopWidth: 0,
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
    fontFamily: 'Philosopher_700Bold',
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: width * 0.05,
    borderBottomLeftRadius: width * 0.2,
    borderBottomRightRadius: width * 0.2,
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
    right: width * 0.26,
    bottom: width * 0.09,
    borderRadius: width * 0.02,
    padding: 25,
  },
  profileName: {
    color: 'white',
    fontSize: width * 0.06,
    marginTop: 10,
    fontFamily: 'Philosopher_700Bold',
  },
});

export default Header;