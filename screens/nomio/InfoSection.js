import React, { useState, useEffect, useContext, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';
import { Philosopher_400Regular, Philosopher_700Bold } from '@expo-google-fonts/philosopher';
import UserContext from '../../context/UserContext';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { getDatabase, ref, update, get } from 'firebase/database';
import { database } from '../../config/firebase';
import { getAuth } from 'firebase/auth';

const DateIcon = require('./../../assets/Date.png');
const JinIcon = require('./../../assets/Jin.png');
const OndorIcon = require('./../../assets/Ondor.png');
const NuutsugIcon = require('./../../assets/Nuutsug.png');

const { width } = Dimensions.get('window');

const InfoSection = () => {
  const [editingField, setEditingField] = useState(null);
  const [editedFields, setEditedFields] = useState({}); // Track edited fields
  const [isEdited, setIsEdited] = useState(false); // Track if any fields are edited
  const User = useContext(UserContext);
  const [info, setInfo] = useState({
    dateOfBirth: User.bday,
    weight: User.weight,
    height: User.height,
    password: 'Нууц үг солих',
  });

  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const inputRefs = useRef({});

  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
    Philosopher_400Regular,
    Philosopher_700Bold,
  });

  useEffect(() => {
    const auth = getAuth(); 
    const user = auth.currentUser; 

    if (user) {
      const userId = user.uid; 
      fetchUserData(userId);
    } else {
      console.log('No user is logged in');
      Alert.alert("Error", "User not logged in. Please login.");
    }
  }, []);


  const fetchUserData = async (userId) => {
    try {
      const userRef = ref(database, `users/${userId}`);
      const snapshot = await get(userRef);
      if (snapshot.exists()) {
        const userData = snapshot.val();
        setInfo({
          dateOfBirth: userData.dateOfBirth || '',
          weight: userData.weight ? `${userData.weight}кг` : '',
          height: userData.height ? `${userData.height}см` : '',
          password: 'Нууц үг солих',
        });
      } else {
        console.log('No data available');
        Alert.alert("Error", "Failed to find user data. Please try login again or register again.");
      }
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  const handlePress = (field) => {
    if (field === 'password') {
      navigation.navigate('Question');
    } else {
      setEditingField(field);
      setInfo((prevInfo) => ({ ...prevInfo, [field]: '' }));
    }
  };

  const handleChange = (field, value) => {
    let formattedValue = value;
    if (field === 'dateOfBirth') {
      formattedValue = formatDate(value);
      User.setBday(formattedValue);
      setEditedFields((prev) => ({ ...prev, [field]: true }));
      setEditedFields((prev) => ({ ...prev, age: true }));
    } else if (field === 'weight') {
      formattedValue = value.replace(/[^0-9]/g, '');
      if (formattedValue.length > 3) {
        formattedValue = formattedValue.slice(0, 3);
      }
      User.setWeight(formattedValue);
      setEditedFields((prev) => ({ ...prev, [field]: true }));
      formattedValue += 'кг';
    } else if (field === 'height') {
      formattedValue = value.replace(/[^0-9]/g, '');
      if (formattedValue.length > 3) {
        formattedValue = formattedValue.slice(0, 3);
      }
      User.setHeight(formattedValue);
      setEditedFields((prev) => ({ ...prev, [field]: true }));
      formattedValue += 'см';
    }

    setInfo((prevInfo) => ({ ...prevInfo, [field]: formattedValue }));

    setIsEdited(true);
  };

  const formatDate = (date) => {
    const cleaned = date.replace(/\D/g, '');
    let formatted = '';

    if (cleaned.length <= 4) {
      formatted = cleaned;
    } else if (cleaned.length <= 6) {
      formatted = `${cleaned.slice(0, 4)}-${cleaned.slice(4)}`;
    } else {
      formatted = `${cleaned.slice(0, 4)}-${cleaned.slice(4, 6)}-${cleaned.slice(6, 8)}`;
    }

    return formatted;
  };

  const handleSave = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      try {
        const database = getDatabase();
        const updates = {};

        if (editedFields.dateOfBirth) {
          updates.dateOfBirth = info.dateOfBirth;
        }
        if (editedFields.weight) {
          updates.weight = User.weight;
        }
        if (editedFields.height) {
          updates.height = User.height;
        }
        if (editedFields.age) {
          updates.age = calculateAge(info.dateOfBirth);
        }

        await update(ref(database, 'users/' + user.uid), updates);

        console.log('User data updated successfully!');
        Alert.alert('Success', 'Your profile has been updated.');

        // Reset edited fields
        setEditedFields({});
        setIsEdited(false); // Reset edited state
      } catch (err) {
        console.error('Error updating user data: ', err.message);
        Alert.alert('Error', 'Failed to update user data. Please try again.');
      }
    } else {
      Alert.alert('Error', 'No authenticated user found.');
    }
  };

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const renderInfoItem = (icon, field, value) => (
    <TouchableOpacity
      style={[styles.infoItem, styles.customBackground]}
      onPress={() => handlePress(field)}
    >
      <Image source={icon} style={styles.image} resizeMode="contain" />
      {editingField === field ? (
        <TextInput
          style={styles.infoValue}
          value={value}
          onChangeText={(text) => handleChange(field, text)}
          onBlur={() => setEditingField(null)}
          placeholder={
            field === 'dateOfBirth' ? 'Он-сар-өдөр' :
            field === 'weight' ? 'Жин' :
            field === 'height' ? 'Өндөр' : ''
          }
          placeholderTextColor='rgba(255, 255, 255, 0.6)'
          maxLength={field === 'dateOfBirth' ? 10 : 6}
          keyboardType={field === 'dateOfBirth' ? 'numeric' : 'number-pad'}
          ref={(ref) => { inputRefs.current[field] = ref; }}
          onFocus={() => {
            setTimeout(() => {
              if (scrollViewRef.current && inputRefs.current[field]) {
                scrollViewRef.current.scrollToPosition(0, inputRefs.current[field].offsetTop, true);
              }
            }, 100);
          }}
        />
      ) : (
        <Text
          style={[
            styles.infoValue,
            field === 'weight' || field === 'height' || field === 'password' ? styles.boldText : null,
          ]}
        >
          {value}
        </Text>
      )}
    </TouchableOpacity>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <KeyboardAwareScrollView
        style={styles.infoSection}
        contentContainerStyle={styles.scrollViewContent}
        enableOnAndroid={true}
        extraScrollHeight={Platform.OS === 'ios' ? 0 : 0}
        ref={scrollViewRef}
      >
        {renderInfoItem(DateIcon, 'dateOfBirth', info.dateOfBirth)}
        {renderInfoItem(JinIcon, 'weight', info.weight)}
        {renderInfoItem(OndorIcon, 'height', info.height)}
        {renderInfoItem(NuutsugIcon, 'password', info.password)}
      </KeyboardAwareScrollView>
      {isEdited && ( 
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoSection: {
    paddingHorizontal: width * 0.05,
    paddingVertical: width * 0.15,
    backgroundColor: '#000',
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,
    padding: width * 0.04,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#9800ff',
  },
  infoValue: {
    color: 'white',
    fontSize: width * 0.04,
    flex: 1,
  },
  boldText: {
    fontFamily: 'Nunito_700Bold',
  },
  customBackground: {
    backgroundColor: 'rgba(152, 0, 255, 0.33)',
  },
  image: {
    width: width * 0.1,
    height: width * 0.08,
    marginRight: 18,
  },
  saveButton: {
    marginTop: -50,
    margin: 20,
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#9800ff',
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default InfoSection;
