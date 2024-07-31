import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { themeColors } from '../../theme';
import LoginHeader from './components/LoginHeader';
import Input from './components/Input';
import Textt from './components/Textt';

export default function Login() {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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
    ];

    const textt = [
        {
            label: "Тавтай морилно уу",
        },
    ];

    return (
        <View className="flex-1 justify-center bg-purple-600">
            <LoginHeader />
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['#9800FF', '#000000']} style={themeColors.grad}>
                <View className="flex justify-center px-[8vw] py-[4vh]">
                    <Textt textt={textt}/>
                    <View>
                    <Input inputs={inputs} />
                        <TouchableOpacity 
                            className="flex items-end"
                            onPress={() => navigation.navigate('Question')}
                        >
                            <Text className="text-purple-600 mb-[5vh]">Нууц үгээ мартсан уу?</Text>
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
                </View>
            </LinearGradient>
        </View>
    );
}
