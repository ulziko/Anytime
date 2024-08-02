import React from "react";
import { View, Text, Image, StyleSheet, Dimensions} from 'react-native';

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
        position: 'absolute',
        top: height < 900 ? 340 : 485,
        left: width < 600 ? 0 : 65,
        zIndex: -1,
        width: width * 0.5,
        height: width * 0.5,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    image: {
        width: width < 800 ? '200%' : '150%',
        height: width < 800 ? '200%' : '150%',
        resizeMode: 'contain',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0
    },
});

export default SquarePattern;
