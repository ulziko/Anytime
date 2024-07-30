import { View, Text, Image, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function Start() {
    const navigation = useNavigation();
    const anytimeIcon = require('../../assets/logo.png'); 
    const doneIcon = require('../../assets/nike.png'); 
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
                    <View className="flex-1 justify-center items-center ">
                        <Image 
                            source={anytimeIcon} 
                            className="w-[70vw] h-[22vh] mb-[6vh]"
                            style={{ resizeMode: 'contain', alignSelf: 'center' }}
                        />
                        <View className="w-[85vw] h-[30vh] py-[2vh] items-center justify-center bg-gray-800 rounded-2xl px-[3vw] z-10">
                            <Image 
                                source={doneIcon} 
                                className="absolute top-[-100px] transform -translate-y-1/2"
                                style={{ resizeMode: 'contain', marginBottom: height * 0.02, height: height*0.22 }}
                            />
                            <Text className="text-3xl mb-[0.2vh] text-center text-purple-600">Таны нууц үг амжилттай солигдлоо.</Text>
                        </View>
                    </View>
                    <Image source={Icon1} className="absolute w-[10vw] h-[5vh] top-[10%] left-[10%]" />
                    <Image source={Icon2} className="absolute w-[5vw] h-[3vh] top-[20%] left-[40%]" />
                    <Image source={Icon3} className="absolute w-[10vw] h-[5vh] top-[10%] right-[15%]" />
                    <Image source={Icon4} className="absolute w-[10vw] h-[5vh] top-[25%] left-[5%]" />
                    <Image source={Icon5} className="absolute w-[10vw] h-[5vh] top-[40%] right-[5%]" />
                    <Image source={Icon6} className="absolute w-[10vw] h-[5vh] top-[45%] left-[20%]" />
                    <Image source={Icon7} className="absolute w-[5vw] h-[3vh] top-[80%] right-[40%]" />
                    <Image source={Icon8} className="absolute w-[10vw] h-[5vh] top-[60%] left-[30%]" />
                    <Image source={Icon9} className="absolute w-[10vw] h-[5vh] top-[70%] right-[5%]" />
                    <Image source={Icon10} className="absolute w-[10vw] h-[5vh] top-[80%] left-[10%]" />
                    <Image source={Icon11} className="absolute w-[10vw] h-[5vh] top-[93%] right-[25%]" />
                    <Image source={Icon12} className="absolute w-[10vw] h-[5vh] top-[90%] left-[35%]" />
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
}
