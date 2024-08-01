import React, { useState, useContext, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Dimensions, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { Philosopher_400Regular, Philosopher_700Bold } from '@expo-google-fonts/philosopher';
import UserContext from "../../context/UserContext";

const DateIcon = require('./../../assets/Date.png');
const JinIcon = require('./../../assets/Jin.png');
const OndorIcon = require('./../../assets/Ondor.png');
const NuutsugIcon = require('./../../assets/Nuutsug.png');

const { width } = Dimensions.get('window');

const InfoSection = () => {
  const [editingField, setEditingField] = useState(null);
  const User = useContext(UserContext);
  const [info, setInfo] = useState({
    dateOfBirth: User.bday,
    weight: User.weight,
    height: User.height,
    password: 'Нууц үг солих'
  });

  const [newWeight, setNewWeight] = useState('');
  const [newHeight, setNewHeight] = useState('');

  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const inputRefs = useRef({});

  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
    Philosopher_400Regular,
    Philosopher_700Bold,
  });

  if (!fontsLoaded) {
    return null; // or a loading spinner
  }

  const handlePress = (field) => {
    if (field === 'password') {
      navigation.navigate('Question');
    } else {
      setEditingField(field);
      setInfo(prevInfo => ({ ...prevInfo, [field]: '' }));
    }
  };

  const handleChange = (field, value) => {
    let formattedValue = value;
    if (field === 'dateOfBirth') {
      formattedValue = formatDate(value);
      User.setBday(formattedValue);
    } else if (field === 'weight') {
      formattedValue = value.replace(/[^0-9]/g, '');
      if (formattedValue.length > 3) {
        formattedValue = formattedValue.slice(0, 3);
      }
      formattedValue += 'кг';
      setNewWeight(formattedValue);
    } else if (field === 'height') {
      formattedValue = value.replace(/[^0-9]/g, '');
      if (formattedValue.length > 3) {
        formattedValue = formattedValue.slice(0, 3);
      }
      formattedValue += 'см';
      setNewHeight(formattedValue);
    }

    setInfo(prevInfo => ({ ...prevInfo, [field]: formattedValue }));
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
                scrollViewRef.current.scrollTo({ y: inputRefs.current[field].offsetTop, animated: true });
              }
            }, 100);
          }}
        />
      ) : (
        <Text style={[styles.infoValue, field === 'weight' || field === 'height' || field === 'password' ? styles.boldText : null]}>
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
      <ScrollView
        style={styles.infoSection}
        ref={scrollViewRef}
        contentContainerStyle={styles.scrollViewContent}
      >
        {renderInfoItem(DateIcon, 'dateOfBirth', info.dateOfBirth)}
        {renderInfoItem(JinIcon, 'weight', info.weight)}
        {renderInfoItem(OndorIcon, 'height', info.height)}
        {renderInfoItem(NuutsugIcon, 'password', info.password)}
      </ScrollView>
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
});

export default InfoSection;
