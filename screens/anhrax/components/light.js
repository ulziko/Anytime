import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';

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
        top: 550,
        left: -200,
        zIndex: -2,
        width: '100%',
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    image: {
        width: 800,
        height: 800,
        position: 'absolute',
        top: 40,
        left: 0,
        zIndex: 0
    },
});

export default Light;
