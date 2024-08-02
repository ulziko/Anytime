import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const localImage = require('../../../assets/light.png');

const Light = () => {
    return (
        <View style={styles.container}>
            <Image source={localImage} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: height * 0.45,
        left: -width * 0.2,
        zIndex: -2,
        width: width * 1.5,
        height: height * 1.5,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    image: {
        width: width * 1.5,
        height: height * 1.5,
        position: 'absolute',
        top: height * 0.05,
        left: 0,
        zIndex: 0
    },
});

export default Light;
