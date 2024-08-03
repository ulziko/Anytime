import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { themeColors } from '../../theme';
import LoginHeader from './components/LoginHeader';
import Input from './components/Input';
import Textt from './components/Textt';
import UserContext from "../../context/UserContext";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';

export default function Login() {
    const navigation = useNavigation();
    const User=useContext(UserContext);

    const checkValueExists = async (key) => {
        try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null) {
                // Value exists
                return true;
            } else {
                // Value does not exist
                console.log(`No value found for ${key}`);
                return false;
            }
            } catch (error) {
            console.error('Error reading from AsyncStorage:', error);
            return false;
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                navigation.navigate('Home');
            }
        });
        return unsubscribe;
    }, []);

    const handleLogin = async () => {
        const username = User.name;
        const password = User.password;
        const email = `${username}@yourapp.com`; 

        try {
            await signInWithEmailAndPassword(auth, email, password);
            await AsyncStorage.setItem("user_name", username);
            await AsyncStorage.setItem("user_password", password);
            navigation.navigate('Home');
        } catch (err) {
            console.log('Got error: ', err.message);
            Alert.alert('Login Failed', err.message);
        }
    };

    const inputs = [
        {
            label: "Нэвтрэх нэр",
            value: User.name,
            onChangeText: checkValueExists('user_name'),
        },
        {
            label: "Нууц үг",
            value: User.password,
            onChangeText: checkValueExists('user_password'),
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
                            // onPress={() => navigation.navigate('Home')}
                            onPress={handleLogin}
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
