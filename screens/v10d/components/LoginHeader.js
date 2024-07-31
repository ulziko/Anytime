import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const LoginHeader = () => {
    const navigation = useNavigation();

    return (
        <View className="bg-black rounded-b-3xl h-[40vh]">
            <SafeAreaView className="flex">
                <View className="flex-row justify-center py-[9vh]">
                    <Image
                        className="mt-[2vh] w-[50vw] h-[7vh]"
                        source={require('../../../assets/logo.png')}
                    />
                </View>
                <View className="flex-row justify-center pt-[4vh]">
                    <View className="flex-col">
                        <TouchableOpacity>
                            <Text className="font-semibold text-purple-600">Нэвтрэх</Text>
                        </TouchableOpacity>
                        <View className="flex justify-center items-center bg-purple-700 rounded-full ml-[1vw] mt-[0.5vh] h-[0.5vh] w-[12vw]" />
                    </View>
                    <TouchableOpacity className="pl-[16vh]" onPress={() => navigation.navigate('Register1')}>
                        <Text className="font-semibold text-purple-600">Бүртгүүлэх</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    );
};

export default LoginHeader;
