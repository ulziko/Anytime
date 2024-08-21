import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const RegisterHeader = () => {
    const navigation = useNavigation();
    return (
        <View className="bg-black rounded-b-2xl h-[35%]">
                <SafeAreaView className="flex">
                    <View  className="flex-row justify-center py-[18%]">
                        <Image 
                        className='h-[5vh] w-[45%]'
                        source={require('../../../assets/logo.png')}  />
                    </View>
                    <View className="flex-row justify-center">
                        <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                            <Text className="font-semibold text-purple-600"> Нэвтрэх</Text>
                        </TouchableOpacity>
                        <View className='flex-col items-end'>
                            <TouchableOpacity className='pl-[16vh]' onPress={()=> navigation.navigate('Register1')}>
                                <Text className="font-semibold text-purple-600"> Бүртгүүлэх</Text>
                            </TouchableOpacity>
                            <View 
                                className='h-[5%] w-[33%] bg-purple-700 rounded-full ml-[1%] mt-[2%]'
                            />
                        </View>
                    </View>
                </SafeAreaView>
            </View>
    );
};

export default RegisterHeader;
