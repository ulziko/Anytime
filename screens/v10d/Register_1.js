import { View, Text, TouchableOpacity, Image, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import {ArrowRightIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient'
import { themeColors } from '../../theme'
import Input from './components/Input'
import RegisterHeader from './components/RegisterHeader';
import Textt from './components/Textt';

export default function Register_1(){
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password1, check] = useState('');

    const inputs = [
        {
            label: "Нэвтрэх нэр",
            value: username,
            onChangeText: setUsername,
        },
        {
            label: "Нууц үг",
            value: password,
            onChangeText: setPassword,
            secureTextEntry: true,
        },
        {
            label: "Нууц үгээ давтах",
            value: password1,
            onChangeText: check,
            secureTextEntry: true,
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
                    <View className="pb-[2vh]">
                        <Input inputs={inputs}/>
                    </View>
                    <View className="flex-row justify-end">
                        <TouchableOpacity 
                            onPress={()=> navigation.navigate('Register2')}
                            className="w-[20vw] h-[6vh] flex justify-center items-center bg-purple-600 rounded-3xl"
                        >
                            <ArrowRightIcon size="20" color="white" />
                        </TouchableOpacity>
                    </View> 
                    {/* <View className="flex-row justify-center mt-7">
                        <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                            <Text className="font-semibold text-purple-600"> Нэвтрэх</Text>
                        </TouchableOpacity>
                    </View> */}
                </View>
            </LinearGradient>
        </View>
    )
}