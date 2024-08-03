import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { themeColors } from '../../theme';
import LoginHeader from './components/LoginHeader';
import Textt from './components/Textt';
import UserContext from "../../context/UserContext";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';

export default function Login() {
    const navigation = useNavigation();
    const User = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        const loadUserData = async () => {
            const storedUsername = await AsyncStorage.getItem('user_name');
            const storedPassword = await AsyncStorage.getItem('user_password');
            if (storedUsername && storedPassword) {
                setUsername(storedUsername);
                setPassword(storedPassword);
                User.setName(storedUsername);
                User.setPassword(storedPassword);
            }
        };
        loadUserData();
    }, []);

    const textt = [
        {
            label: "Тавтай морилно уу",
        },
    ];

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View className="flex-1 justify-center bg-purple-600">
                    <LoginHeader />
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['#9800FF', '#000000']} style={themeColors.grad}>
                        <View className="flex justify-center px-[8vw] py-[4vh]">
                            <Textt textt={textt} />
                            <View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text style={{ color: 'white', marginBottom: 5 }}>Нэвтрэх нэр</Text>
                                    <TextInput
                                        style={{ backgroundColor: 'white', padding: 15, borderRadius: 13 }}
                                        value={username}
                                        onChangeText={setUsername}
                                    />
                                </View>
                                <View style={{ marginBottom: 20 }}>
                                    <Text style={{ color: 'white', marginBottom: 5 }}>Нууц үг</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: 13 }}>
                                        <TextInput
                                            style={{ flex: 1, padding: 16 }}
                                            value={password}
                                            onChangeText={setPassword}
                                            secureTextEntry={!showPassword}
                                        />
                                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{ padding: 10 }}>
                                            <Ionicons name={showPassword ? "eye-outline" : "eye-off-outline"} size={24} color="black" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <TouchableOpacity 
                                    className="flex items-end"
                                    onPress={() => navigation.navigate('Question')}
                                >
                                    <Text className="text-purple-600 mb-[5vh]">Нууц үгээ мартсан уу?</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        User.setName(username);
                                        User.setPassword(password);
                                        navigation.navigate('Home');
                                    }}
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
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
