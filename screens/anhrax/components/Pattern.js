import React from "react";
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const localImage = require('../../../assets/stand.png');

const SquarePattern = () => {
    return (
        <View style={styles.container}>
            <Image source={localImage} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute', // Ensure the container is relative
        transform: [{ translateX: width*-0.25}, { translateY: height > 900 ? height*0.25 : height*0.35}],
        width: width * 0.5,
        height: width * 0.5,
         zIndex: -1,
    
    },
    image: {
        position: 'absolute',
        width:  '200%',
        height: '200%',
        resizeMode: 'contain',
    },
});

export default SquarePattern;
