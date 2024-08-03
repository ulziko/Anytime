import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { themeColors } from '../../theme';
import LoginHeader from './components/LoginHeader';
import Input from './components/Input';
import Textt from './components/Textt';
import UserContext from "../../context/UserContext";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
    const navigation = useNavigation();
    const User=useContext(UserContext);

    const inputs = [
        {
            label: "Нэвтрэх нэр",
            // value: User.name,
            // onChangeText: checkValueExists('user_name'),
        },
        {
            label: "Нууц үг",
            value: User.password,
            ///onChangeText: checkValueExists('user_password'),
            secureTextEntry: true,
        },
    ];

    const textt = [
        {
            label: "Тавтай морилно уу",
        },
    ];

    
      

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
    >
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
    </KeyboardAvoidingView>
    );
}
