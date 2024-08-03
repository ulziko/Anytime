import React from "react";
import { View, Text, Image, StyleSheet,Dimensions } from 'react-native';

const { width } = Dimensions.get("window");

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
        top: width < 900 ?'50%' : '75%',
        left: width < 900 ? 190 : '40%',
        zIndex: -1,
        width: width <= 900 ? '100%' : '150%',
        height: '100%',
    },
    image: {
        width: width < 900 ? '10%' : '100%',
        height: width < 900 ? '10%' : '100%',
        position: 'absolute',
        top: 90,
        left: 0,
        zIndex: 0
    },
});

export default Arrow;
