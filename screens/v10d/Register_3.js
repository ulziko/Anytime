import { View, Text, TouchableOpacity, Image, TextInput, Alert } from 'react-native'
import React, { useState, useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import {ArrowRightIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import RegisterHeader from './components/RegisterHeader';
import { themeColors } from '../../theme';
import Textt from './components/Textt';
import Input from './components/Input';
import Dropdown from './components/Dropdown';
import UserContext from "../../context/UserContext";

export default function Register_3(){
    const navigation = useNavigation();
    const User=useContext(UserContext);

    const inputs = [
        {
            label: "Баталгаажуулах асуултын хариу",
            value: User.questionAnswer,
            onChangeText: User.setQuestionAnswer,
        },
    ];

    const textt = [
        {
            label: " Мэдээллээ оруулна уу",
        },
    ];

    return (
        <View className="flex-1 bg-purple-600">
            <RegisterHeader />
            <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#9800FF', '#000000']} style={themeColors.grad}>
            <View className="flex-1 px-[8vw] pt-[6vh]">
                <Textt textt={textt}/>
                <View className="form space-y-2">
                    <Text className="text-white ml-[2vw]">Баталгаажуулах асуултаа сонгоно уу?</Text>
                    <View 
                        className='w-[76vw] h-[6vh] flex-row justify-start items-center  bg-gray-100 rounded-2xl z-20'
                    >
                        <Dropdown />
                    </View>
                    <View className='pt-[2vh]'>
                        <Input 
                            inputs={inputs} 
                        />
                    </View>
                </View>
                <View className='flex justify-center items-center py-[2vh] m-[2vh] text-xs mt-[3vh]'>
                    <Text 
                        className="text-gray-100"
                    >
                        Та энэ асуултын хариуг мартсанаас нууц
                    </Text>
                    <Text 
                        className="text-gray-100"
                    >
                        үгээ мартсан нь дээр шүү 🤗
                    </Text>
                </View>
                
                <View className="flex-row justify-center items-center">
                    <TouchableOpacity 
                        onPress={()=> navigation.goBack()}
                        className="w-[20vw] h-[6vh] flex justify-center items-center bg-purple-600 rounded-3xl"
                    >
                        <ArrowLeftIcon size="20" color="white" />
                    </TouchableOpacity>
                    <Text 
                        className="px-16"
                    >

                    </Text>
                    <TouchableOpacity 
                        onPress={()=> navigation.navigate('Register4')}
                        className="w-[20vw] h-[6vh] flex justify-center items-center bg-purple-600 rounded-3xl"
                    >
                        <ArrowRightIcon size="20" color="white" />
                    </TouchableOpacity>
                </View> 
            </View>
            </LinearGradient>
        </View>
    )
}