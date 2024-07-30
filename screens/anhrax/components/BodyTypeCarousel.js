import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TwoButton from './TwoButton'; // Assuming backButton.js is in the same directory

const { width } = Dimensions.get('window'); // Extract width outside the component

const BodyTypeCarousel = () => {
  const [sex, setSex] = useState(2); // Default value is 2
  const navigation = useNavigation();

  const bodyTypes = sex === 1
    ? [
        { id: '1', image: require('../../../assets/Slim.png'), weight: '70 - 75', mass: '70 - 75', margin: 0.1 * width },
        { id: '2', image: require('../../../assets/SlimShredded.png'), weight: '80 - 85', mass: '80 - 85', margin: -0.1 * width },
        { id: '3', image: require('../../../assets/beachBody.png'), weight: '90 - 95', mass: '90 - 95', margin: 0.1 * width },
        { id: '4', image: require('../../../assets/Hero.png'), weight: '100 - 105', mass: '100 - 105', margin: -0.1 * width },
        { id: '5', image: require('../../../assets/BodyBuilder.png'), weight: '110 - 115', mass: '110 - 115', margin: 0.1 * width },
      ]
    : [
        { id: '1', image: require('../../../assets/5.png'), weight: '70 - 75', mass: '70 - 75', margin: 0.05 * width },
        { id: '2', image: require('../../../assets/6.png'), weight: '80 - 85', mass: '80 - 85', margin: -0.05 * width },
        { id: '3', image: require('../../../assets/8.png'), weight: '90 - 95', mass: '90 - 95', margin: 0.1 * width },
        { id: '4', image: require('../../../assets/9.png'), weight: '100 - 105', mass: '100 - 105', margin: -0.05 * width },
        { id: '5', image: require('../../../assets/10.png'), weight: '110 - 115', mass: '110 - 115', margin: 0.15 * width },
      ];

  const handlePress = (id) => {
    navigation.navigate('OtherPage', { id });
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
      <TwoButton setSex={setSex} />
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
    marginBottom: width * 0.8,
    paddingHorizontal: 20,
  },
  bodyContainer: {
    width: width * 0.7,
    alignItems: 'center',
  },
  bodyImage: {
    width: '150%',
    height: width,
    resizeMode: 'contain',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'Nunito_700Bold',
  },
});

export default BodyTypeCarousel;
