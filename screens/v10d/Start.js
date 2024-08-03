import { View, Text, Image, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import UserContext from "../../context/UserContext";

const { width, height } = Dimensions.get('screen');

export default function Start() {
    const User = useContext(UserContext);
    const navigation = useNavigation();

    const handlePress = () => {
        if (User.isLoggedIn) {
            navigation.navigate("Home");
        } else {
            navigation.navigate("Login")
        }
    };

    const anytimeIcon = require('../../assets/logo.png'); 
    const Icon1 = require('../../assets/icon1.png');
    const Icon2 = require('../../assets/icon2.png');
    const Icon3 = require('../../assets/icon3.png');
    const Icon4 = require('../../assets/icon4.png');
    const Icon5 = require('../../assets/icon5.png');
    const Icon6 = require('../../assets/icon6.png');
    const Icon7 = require('../../assets/icon7.png');
    const Icon8 = require('../../assets/icon8.png');
    const Icon9 = require('../../assets/icon9.png');
    const Icon10 = require('../../assets/icon10.png');
    const Icon11 = require('../../assets/icon11.png');
    const Icon12 = require('../../assets/icon12.png');

    return (
        <View className="flex-1 bg-black">
            <ImageBackground className="flex-1" source={null}>
                <SafeAreaView className="flex-1">
                    <TouchableOpacity 
                        className='flex items-center justify-center content-center'
                        onPress={handlePress}
                    >
                        <Image 
                            source={anytimeIcon}
                            className='my-[45vh]'
                        />
                    </TouchableOpacity>
                    <Image source={Icon1} className="absolute  top-[10%] left-[10%]" />
                    <Image source={Icon2} className="absolute  top-[20%] right-[40%]" />
                    <Image source={Icon3} className="absolute  top-[10%] right-[15%]" />
                    <Image source={Icon4} className="absolute  top-[25%] left-[5%]" />
                    <Image source={Icon5} className="absolute  top-[40%] right-[15%]" />
                    <Image source={Icon6} className="absolute  top-[35%] left-[30%]" />
                    <Image source={Icon7} className="absolute  top-[80%] right-[40%]" />
                    <Image source={Icon8} className="absolute  top-[65%] left-[30%]" />
                    <Image source={Icon9} className="absolute  top-[70%] right-[20%]" />
                    <Image source={Icon10} className="absolute  top-[80%] left-[10%]" />
                    <Image source={Icon11} className="absolute  top-[93%] right-[25%]" />
                    <Image source={Icon12} className="absolute  top-[90%] left-[35%]" />
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
}
