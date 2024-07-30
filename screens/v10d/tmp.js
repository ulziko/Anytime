import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowRightIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { themeColors } from '../../theme';

export default function Register_1() {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, check] = useState('');
    const [password1, setPassword] = useState('');

    return (
        <View className="flex-1 bg-purple-600">
            <View className="bg-black rounded-b-2xl" style={{ height: '35vh' }}>
                <SafeAreaView className="flex">
                    <View className="flex-row justify-center py-[3vh]">
                        <Image
                            className="mt-[2vh]"
                            source={require('../../assets/logo.png')}
                            style={{ width: '50vw', height: '5vh' }}
                        />
                    </View>
                    <View className="flex-row justify-center pt-[1vh]">
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text className="font-semibold text-purple-600"> Нэвтрэх</Text>
                        </TouchableOpacity>
                        <View className="flex-col items-end">
                            <TouchableOpacity className="pl-[8vw]" onPress={() => navigation.navigate('Register1')}>
                                <Text className="font-semibold text-purple-600"> Бүртгүүлэх</Text>
                            </TouchableOpacity>
                            <View className="bg-purple-700 rounded-full ml-[1vw] mt-[1vh]" style={{ height: '0.4vh', width: '17vw' }} />
                        </View>
                    </View>
                </SafeAreaView>
            </View>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['#9800FF', '#000000']} style={themeColors.grad}>
                <View className="flex-1 px-[4vw] pt-[4vh]">
                    <Text className="text-white font-bold text-3xl text-center pb-[2vh]">
                        Мэдээллээ оруулна уу
                    </Text>
                    <View className="form space-y-[1vh]">
                        <Text className="text-white ml-[1vw]">Нэвтрэх нэр</Text>
                        <TextInput
                            className="p-[1.5vh] bg-gray-100 rounded-2xl mb-[1.5vh]"
                            value={username}
                            onChangeText={value => setUsername(value)}
                        />
                        <Text className="text-white ml-[1vw]">Нууц үг</Text>
                        <TextInput
                            className="p-[1.5vh] bg-gray-100 rounded-2xl mb-[1.5vh]"
                            value={password}
                            onChangeText={value => setPassword(value)}
                        />
                        <Text className="text-white ml-[1vw]">Нууц үгээ давтах</Text>
                        <TextInput
                            className="p-[1.5vh] bg-gray-100 rounded-2xl mb-[3vh]"
                            secureTextEntry
                            value={password1}
                            onChangeText={value => check(value)}
                        />
                    </View>
                    <View className="flex-row justify-end">
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Register2')}
                            className="flex justify-center items-center bg-purple-600 rounded-3xl"
                            style={{ width: '20vw', height: '6vh' }}
                        >
                            <ArrowRightIcon size="20" color="white" />
                        </TouchableOpacity>
                    </View>
                    <View className="flex-row justify-center mt-[2vh]">
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text className="font-semibold text-purple-600"> Нэвтрэх</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
}
