import React, {useContext} from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ImageBackground, SafeAreaView, Dimensions } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { Philosopher_400Regular, Philosopher_700Bold } from '@expo-google-fonts/philosopher';
import UserContext from '../../context/UserContext';

const anytimeIcon = require('./../../assets/anytimeLogo.png'); 
const Icon1 = require('./../../assets/icon1.png');
const Icon2 = require('./../../assets/icon2.png');
const Icon3 = require('./../../assets/icon3.png');
const Icon4 = require('./../../assets/icon4.png');
const Icon5 = require('./../../assets/icon5.png');
const Icon6 = require('./../../assets/icon6.png');
const Icon7 = require('./../../assets/icon7.png');
const Icon8 = require('./../../assets/icon8.png');
const Icon9 = require('./../../assets/icon9.png');
const Icon10 = require('./../../assets/icon10.png');
const Icon11 = require('./../../assets/icon11.png');
const Icon12 = require('./../../assets/icon12.png');

const { width, height } = Dimensions.get('window');

const Question = () => {
  const navigation = useNavigation(); 
  const User=useContext(UserContext);
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
    Philosopher_400Regular,
    Philosopher_700Bold,
  });

  if (!fontsLoaded) {
    return null; // or a loading spinner
  }

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground 
        style={styles.background}
      >
        <SafeAreaView style={styles.safeArea}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color="#9800ff" />
            </TouchableOpacity>
            <Text style={styles.headerText}> Нууц үг солих </Text>
            {/* Empty view to align the text properly */}
            <View style={styles.emptyView} />
          </View>

          {/* Main Content */}
          <View style={styles.mainContent}>
            {/* Logo */}
            <Image 
              source={anytimeIcon} 
              style={styles.logo}
            />

            {/* Information Section */}
            <View style={styles.infoSection}>
              <Text style={styles.questionText}>{User.questions_obj[User.questionKey].value}</Text>
              <View style={styles.inputContainer}>
                <TextInput 
                  placeholder="хариулт"
                  placeholderTextColor="#888"
                  style={styles.textInput}
                />
                <MaterialCommunityIcons name="marker" size={26} color="#7200ca" style={styles.inputIcon} />
              </View>
            </View>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <TouchableOpacity 
              style={styles.nextButton}
              onPress={() => navigation.navigate('NewPass')}
            >
              <Ionicons name="arrow-forward" size={24} color="white" />
            </TouchableOpacity>
          </View>

          {/* Icons */}
          <Image source={Icon1} style={[styles.icon, styles.icon1]} />
          <Image source={Icon2} style={[styles.icon, styles.icon2]} />
          <Image source={Icon3} style={[styles.icon, styles.icon3]} />
          <Image source={Icon4} style={[styles.icon, styles.icon4]} />
          <Image source={Icon5} style={[styles.icon, styles.icon5]} />
          <Image source={Icon6} style={[styles.icon, styles.icon6]} />
          <Image source={Icon7} style={[styles.icon, styles.icon7]} />
          <Image source={Icon8} style={[styles.icon, styles.icon8]} />
          <Image source={Icon9} style={[styles.icon, styles.icon9]} />
          <Image source={Icon10} style={[styles.icon, styles.icon10]} />
          <Image source={Icon11} style={[styles.icon, styles.icon11]} />
          <Image source={Icon12} style={[styles.icon, styles.icon12]} />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.05,
  },
  backButton: {
    marginRight: width * 0.01,
  },
  headerText: {
    color: '#fff',
    fontSize: width * 0.045,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Philosopher_700Bold',
  },
  emptyView: {
    width: width * 0.05,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.01, // Reduced marginTop
  },
  logo: {
    width: width * 0.7,
    height: height * 0.22, // Further increased height
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: height * 0.09, // Reduced marginBottom
    top: -65,
  },
  infoSection: {
    width: width * 0.85,
    paddingVertical: height * 0.07, // Further increased paddingVertical
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3e206d',
    borderRadius: 20,
    paddingHorizontal: width * 0.05,
    top: -110,
  },
  questionText: {
    color: 'white',
    fontSize: width * 0.045,
    marginBottom: height * 0.02,
    textAlign: 'center',
    top: -20,
    fontFamily: 'Nunito_400Regular',
  },
  inputContainer: {
    width: width * 0.75,
    height: height * 0.07,
    borderWidth: 1,
    borderColor: '#9800ff',
    borderRadius: 20,
    paddingHorizontal: width * 0.03,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    top: -15,
  },
  textInput: {
    color: 'white',
    flex: 1,
  },
  inputIcon: {
    marginLeft: width * 0.02,
  },
  footer: {
    position: 'absolute',
    bottom: height * 0.05,
    right: width * 0.05,
  },
  nextButton: {
    backgroundColor: '#7200ca',
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.07,
    borderRadius: 40,
    top: -70,
  },
  icon: {
    position: 'absolute',
    width: width * 0.1,
    height: height * 0.05,
    resizeMode: 'contain',
  },
  icon1: {
    top: '5%',
    left: '10%',
  },
  icon2: {
    top: '15%',
    left: '30%',
  },
  icon3: {
    top: '10%',
    right: '15%',
  },
  icon4: {
    top: '25%',
    left: '5%',
  },
  icon5: {
    top: '35%',
    right: '10%',
  },
  icon6: {
    top: '45%',
    left: '20%',
  },
  icon7: {
    top: '50%',
    right: '20%',
  },
  icon8: {
    top: '60%',
    left: '30%',
  },
  icon9: {
    top: '70%',
    right: '15%',
  },
  icon10: {
    top: '75%',
    left: '10%',
  },
  icon11: {
    top: '85%',
    right: '25%',
  },
  icon12: {
    top: '90%',
    left: '20%',
  },
});

export default Question;
