import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DateIcon = require('./../../assets/Date.png');
const JinIcon = require('./../../assets/Jin.png');
const OndorIcon = require('./../../assets/Ondor.png');
const NuutsugIcon = require('./../../assets/Nuutsug.png');

const { width } = Dimensions.get('window');

const InfoSection = () => {
  const [editingField, setEditingField] = useState(null);
  const [info, setInfo] = useState({
    dateOfBirth: '11/12/2000',
    weight: '70kg',
    height: '170cm',
    password: 'Нууц үг солих'
  });

  const navigation = useNavigation();

  const handlePress = (field) => {
    if (field === 'password') {
      navigation.navigate('Question');
    } else {
      setEditingField(field);
    }
  };

  const handleChange = (field, value) => {
    if (field === 'dateOfBirth') {
      setInfo({ ...info, [field]: formatDate(value) });
    } else if (field === 'weight') {
      setInfo({ ...info, [field]: value.replace(/[^0-9]/g, '') + 'kg' });
    } else if (field === 'height') {
      setInfo({ ...info, [field]: value.replace(/[^0-9]/g, '') + 'cm' });
    } else {
      setInfo({ ...info, [field]: value });
    }
  };

  const formatDate = (date) => {
    const cleaned = date.replace(/\D/g, '');
    let formatted = '';
    if (cleaned.length <= 2) {
      formatted = cleaned;
    } else if (cleaned.length <= 4) {
      formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
    } else if (cleaned.length <= 6) {
      formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}/${cleaned.slice(4)}`;
    } else {
      formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}/${cleaned.slice(4, 8)}`;
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
          maxLength={10}
          keyboardType="numeric"
        />
      ) : (
        <Text style={styles.infoValue}>{value}</Text>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.infoSection}>
      {renderInfoItem(DateIcon, 'dateOfBirth', info.dateOfBirth)}
      {renderInfoItem(JinIcon, 'weight', info.weight)}
      {renderInfoItem(OndorIcon, 'height', info.height)}
      {renderInfoItem(NuutsugIcon, 'password', info.password)}
    </View>
  );
};

const styles = StyleSheet.create({
  infoSection: {
    paddingHorizontal: width * 0.06,
    paddingVertical: width * 0.11,
    backgroundColor: '#000',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,
    padding: width * 0.05,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#9800ff',
  },
  infoValue: {
    color: 'white',
    fontSize: width * 0.04,
    flex: 1,
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
