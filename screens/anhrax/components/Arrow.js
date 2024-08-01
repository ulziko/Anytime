import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';

const localImage = require('../../../assets/arrow.gif');

const Arrow = () => {
    return (
        <View style={styles.container}>
            <Image source={localImage} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: width < 800 ? 650 : '75%',
        left: width < 800 ? 190 : '40%',
        zIndex: -1,
        width: width < 800 ? '100%' : '150%',
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    image: {
        width: width < 800 ? '10%' : '10%',
        height: width < 800 ? '10%' : '10%',
        position: 'absolute',
        top: 90,
        left: 0,
        zIndex: 0
    },
});

export default Arrow;
