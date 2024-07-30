import { View, Text, TouchableOpacity, Image, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import {ArrowRightIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { themeColors } from '../../theme';

export default function Register_1(){
    const navigation = useNavigation();
    const [bday, setBday] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');

    return (
        <View className="flex-1 bg-purple-600">
            <View className="bg-black rounded-b-2xl" style={{height: 280}}>
                <SafeAreaView className="flex">
                    <View  className="flex-row justify-center py-12">
                        <Image 
                        className='mt-8'
                        source={require('../../assets/logo.png')} 
                        style={{width: 200, height: 50}} />
                    </View>
                    <View className="flex-row justify-center pt-4">
                        <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                            <Text className="font-semibold text-purple-600"> Нэвтрэх</Text>
                        </TouchableOpacity>
                        <View className='flex-col items-end'>
                            <TouchableOpacity className='pl-32' onPress={()=> navigation.navigate('Register1')}>
                                <Text className="font-semibold text-purple-600"> Бүртгүүлэх</Text>
                            </TouchableOpacity>
                            <View 
                                className='bg-purple-700 rounded-full ml-1 mt-1'
                                style={{height: 3, width:68}}
                            />
                        </View>
                    </View>
                </SafeAreaView>
            </View>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#9800FF', '#000000']} style={themeColors.grad}>
            <View className="flex-1  justify-center px-8 pb-16">
                <Text 
                    className="text-white font-bold text-3xl text-center pb-12">
                    Мэдээллээ оруулна уу
                </Text>
                <View className="form space-y-4">
                    <Text className="text-white ml-4">Баталгаажуулах асуултаа сонгоно уу?</Text>
                    <View 
                        style={{height: 54, width: 300}}
                        className='flex-row justify-start items-center  bg-gray-100 rounded-2xl'
                    >
                        <Text className='text-gray-400 pl-6'>
                        Таны багын хоч юу байсан бэ?
                        </Text>
                        <Image 
                            source={require('../../assets/arrow.png')}
                            className='ml-14'
                        />
                    </View>
                    {/* <TextInput
                        className="p-5 bg-gray-100 rounded-2xl mb-3"
                        value={bday}
                        onChangeText={value=> setBday(value)}
                        placeholder=''
                    /> */}
                    <Text className="text-white ml-4">Баталгаажуулах асуултын хариу</Text>
                    <TextInput
                        className="p-5 bg-gray-100 rounded-2xl mb-3"
                        value={weight}
                        onChangeText={value=> setWeight(value)}
                    />
                </View>
                <Text 
                    className="py-4"
                >
                </Text>
                <View className="flex-row justify-center items-center">
                    <TouchableOpacity 
                        onPress={()=> navigation.goBack()}
                        className="flex justify-center items-center bg-purple-600 rounded-3xl"
                        style={{width: 80, height: 50}}
                    >
                        <ArrowLeftIcon size="20" color="white" />
                    </TouchableOpacity>
                    <Text 
                        className="px-16"
                    >

                    </Text>
                    <TouchableOpacity 
                        onPress={()=> navigation.navigate('Register4')}
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