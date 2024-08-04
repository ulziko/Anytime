
import React, { useState , useContext} from 'react';
import { View, Text, Image, StyleSheet, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TwoButton from './TwoButton';
import UserContext from '../../../context/UserContext';


const { width, height } = Dimensions.get('window');

function calculateMuscleMass(age, sex) {
  let muscleMass;

  switch (sex) {
    case 1: // Male
      switch (true) {
        case age >= 18 && age <= 35:
          muscleMass = 0.42;
          break;
        case age >= 36 && age <= 55:
          muscleMass = 0.38;
          break;
        case age >= 56 && age <= 75:
          muscleMass = 0.34;
          break;
        case age > 75:
          muscleMass = 0.3;
          break;
        default:
          muscleMass = 'Unknown';
          break;
      }
      break;

    case 2: // Female
    switch (true) {
      case age >= 18 && age <= 35:
        muscleMass = 0.32;
        break;
      case age >= 36 && age <= 55:
        muscleMass = 0.3;
        break;
      case age >= 56 && age <= 75:
        muscleMass = 0.28;
        break;
      case age > 75:
        muscleMass = 0.26;
        break;
      default:
        muscleMass = 'Unknown';
        break;
    }
      break;

    default:
      muscleMass = 'Unknown';
      break;
  }

  return muscleMass;
}


const BodyTypeCarousel = () => {
  const [sex, setSex] = useState(2);
  const navigation = useNavigation();
  const User=useContext(UserContext);
  const mass=calculateMuscleMass(User.age, sex)

  const bodyTypes = sex === 1
    ? [
        { id: '1', image: require('../../../assets/Slim.png'), weight: '70 - 75', mass: Math.floor(70*mass), margin: 0.1 * width },
        { id: '2', image: require('../../../assets/SlimShredded.png'), weight: '80 - 85', mass: Math.floor(80*mass), margin: -0.1 * width },
        { id: '3', image: require('../../../assets/beachBody.png'), weight: '90 - 95', mass: Math.floor(90*mass), margin: 0.1 * width },
        { id: '4', image: require('../../../assets/Hero.png'), weight: '100 - 105', mass: Math.floor(100*mass), margin: -0.1 * width },
        { id: '5', image: require('../../../assets/BodyBuilder.png'), weight: '110 нэмэх', mass: Math.floor(110*mass), margin: 0.1 * width },
      ]
    : [
        { id: '1', image: require('../../../assets/5.png'), weight: '45 - 50', mass: Math.floor(45*mass), margin: 0.05 * width },
        { id: '2', image: require('../../../assets/6.png'), weight: '50 - 55', mass: Math.floor(50*mass), margin: -0.05 * width },
        { id: '3', image: require('../../../assets/8.png'), weight: '55 - 60', mass: Math.floor(55*mass), margin: 0.1 * width },
        { id: '4', image: require('../../../assets/9.png'), weight: '65 - 70', mass: Math.floor(60*mass), margin: -0.05 * width },
        { id: '5', image: require('../../../assets/10.png'), weight: '75 - 80', mass: Math.floor(65*mass), margin: 0.15 * width },
      ];
  const handlePress = (id, sex) => {
    
    User.setPlanId({id});
    User.checkPlan(true);
    navigation.navigate('Plan', { id, sex });
  };
    

  const renderItem = ({ item }) => (
    <TouchableOpacity style={[styles.bodyContainer, { marginHorizontal: item.margin }]} onPress={() => handlePress(item.id)}>
      <Image source={item.image} style={styles.bodyImage} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Жин: {item.weight}</Text>
        <Text style={styles.text}>Булчингийн Масс: {item.mass}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      {/* <TwoButton setSex={setSex} /> */}
      <FlatList
        data={bodyTypes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width * 0.7}
        decelerationRate="fast"
        contentContainerStyle={styles.carouselContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    alignItems: 'center',
    marginBottom: width < 500 ? height * 0.47 : height * 0.34,
    left: width < 500 ? 160 : 0,
    paddingHorizontal: width < 800 ? 20 : 20,
  },
  bodyContainer: {
    width: width * 0.7,
    alignItems: 'center',
    right: width < 500 ? 150 : 0,
  },
  bodyImage: {
    width: width < 500 ? '110%' : '100%',
    height: height * 0.4,
    resizeMode: 'contain',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 0,
  },
  text: {
    color: '#FFFFFF',
    fontSize: width * 0.04,
  },
});

export default BodyTypeCarousel;
