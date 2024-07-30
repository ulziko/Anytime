import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';

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
        top: 350,
        left: 0,
        zIndex: -1,
        width: '100%',
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    image: {
        width: 400,
        height: 400,
        position: 'absolute',
        top: 40,
        left: 0,
        zIndex: 0
    },
});

export default SquarePattern;
