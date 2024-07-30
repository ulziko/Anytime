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
        top: 650,
        left: 150,
        zIndex: -1,
        width: '100%',
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    image: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 90,
        left: 0,
        zIndex: 0
    },
});

export default Arrow;
