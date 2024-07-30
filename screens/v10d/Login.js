import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { themeColors } from '../../theme';

export default function Login() {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View className="flex-1 justify-center bg-purple-600">
            <View className="bg-black rounded-b-3xl h-[40vh]">
                <SafeAreaView className="flex">
                    <View className="flex-row justify-center py-[9vh]">
                        <Image
                            className="mt-[2vh] w-[50vw] h-[7vh]"
                            source={require('../../assets/logo.png')}
                        />
                    </View>
                    <View className="flex-row justify-center pt-[2vh]">
                        <View className="flex-col">
                            <TouchableOpacity>
                                <Text className="font-semibold text-purple-600"> Нэвтрэх</Text>
                            </TouchableOpacity>
                            <View className="flex justify-center bg-purple-700 rounded-full ml-[1vw] mt-[0.5vh] h-[3px] w-[12vw]" />
                        </View>
                        <TouchableOpacity className="pl-[16vh]" onPress={() => navigation.navigate('Register1')}>
                            <Text className="font-semibold text-purple-600"> Бүртгүүлэх</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </View>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['#9800FF', '#000000']} style={themeColors.grad}>
                <View className="flex justify-center px-[8vw] py-[4vh]">
                    <Text className="text-white font-bold text-3xl text-center pb-[4vh]">
                        Тавтай морилно уу
                    </Text>
                    <View className="form space-y-2">
                        <Text className="text-white ml-[2vw]">Нэвтрэх нэр</Text>
                        <TextInput
                            className="p-[2.2vh] bg-gray-100 text-gray-700 rounded-2xl mb-[2vh]"
                            value={username}
                            onChangeText={value => setUsername(value)}
                        />
                        <Text className="text-white ml-[1vh]">Нууц үг</Text>
                        <TextInput
                            className="p-[2.2vh] bg-gray-100 text-gray-700 rounded-2xl"
                            secureTextEntry
                            value={password}
                            onChangeText={value => setPassword(value)}
                        />
                        <TouchableOpacity className="flex items-end">
                            <Text className="text-purple-600 mb-5">Нууц үгээ мартсан уу?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Home')}
                            className="py-[1.5vh] bg-purple-600 rounded-3xl"
                        >
                            <Text className="text-xl font-bold text-center text-white">
                                Нэвтрэх
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View className="flex-row justify-center mt-[2vh]">
                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                            <Text className="font-semibold text-purple-600"> Бүртгүүлэх</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
}
