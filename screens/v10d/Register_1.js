import { View, Text, TouchableOpacity, Image, TextInput, Alert } from 'react-native'
import React, { useContext , useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import {ArrowRightIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient'
import { themeColors } from '../../theme'
import UserContext from "../../context/UserContext";

export default function Register_1(){
    // user object 
    const User=useContext(UserContext);
    const navigation = useNavigation();
    const [tmp_pass01, setTmp_pass01]=useState(null);
    const [tmp_pass02, setTmp_pass02]=useState(null);
    const check= (pass01, pass02)=> {
        if (pass01===pass02 ){
            User.setPassword(pass01);
            return true;
        }
        else {
            return false;
        }
    };

    return (
        <View className="flex-1 bg-purple-600">
            <View className="bg-black rounded-b-2xl h-[31vh]">
                <SafeAreaView className="flex">
                    <View  className="flex-row justify-center py-[5vh]">
                        <Image 
                        className='mt-[2vh] h-[5vh] w-[50vw]'
                        source={require('../../assets/logo.png')}  />
                    </View>
                    <View className="flex-row justify-center pt-[3vh]">
                        <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                            <Text className="font-semibold text-purple-600"> Нэвтрэх</Text>
                        </TouchableOpacity>
                        <View className='flex-col items-end'>
                            <TouchableOpacity className='pl-[16vh]' onPress={()=> navigation.navigate('Register1')}>
                                <Text className="font-semibold text-purple-600"> Бүртгүүлэх</Text>
                            </TouchableOpacity>
                            <View 
                                className='h-[0.4]bg-purple-700 rounded-full ml-[1vw] mt-[0.7vh]'
                                style={{height: 3, width:68}}
                            />
                        </View>
                    </View>
                </SafeAreaView>
            </View>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#9800FF', '#000000']} style={themeColors.grad}>
                <View className="flex-1 px-8 pt-8">
                    <Text 
                        className="text-white font-bold text-3xl text-center pb-8">
                        Мэдээллээ оруулна уу
                    </Text>
                    <View className="form space-y-2">
                        <Text className="text-white ml-4">Нэвтрэх нэр</Text>
                        <TextInput
                            className="p-5 bg-gray-100 rounded-2xl mb-3"
                            value={User.name}
                            onChangeText={value=> User.setName(value)}
                        />
                        <Text className="text-white ml-4">Нууц үг</Text>
                        <TextInput
                            className="p-5 bg-gray-100 rounded-2xl mb-3"
                            value={tmp_pass01}
                            onChangeText={value=> setTmp_pass01(value)}
                        />
                        <Text className="text-white ml-4">Нууц үгээ давтах</Text>
                        <TextInput
                            className="p-5 bg-gray-100 rounded-2xl mb-7"
                            secureTextEntry
                            value={tmp_pass02}
                            onChangeText={value=> setTmp_pass02(value)}
                        />
                    </View>
                    <View className="flex-row justify-end">
                        <TouchableOpacity 
                            onPress={()=> check(tmp_pass01,tmp_pass02)? navigation.navigate('Register2'): alert("enter again")}
                            className="flex justify-center items-center bg-purple-600 rounded-3xl"
                            style={{width: 80, height: 50}}
                        >
                            <ArrowRightIcon size="20" color="white" />
                        </TouchableOpacity>
                    </View> 
                    <View className="flex-row justify-center mt-7">
                        <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                            <Text className="font-semibold text-purple-600"> Нэвтрэх</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        </View>
    )
}