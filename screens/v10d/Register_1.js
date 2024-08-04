import { View, Text, TouchableOpacity, TextInput, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import React, { useContext, useState } from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { themeColors } from '../../theme';
import Input from './components/Input';
import RegisterHeader from './components/RegisterHeader';
import Textt from './components/Textt';
import UserContext from "../../context/UserContext";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';

export default function Register_1() {
    const User = useContext(UserContext);
    const navigation = useNavigation();
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const handleSubmit = async () => {
        if (User.email && User.password) {
            try {
                await createUserWithEmailAndPassword(auth, User.email, User.password);
                navigation.navigate('Register2')
            } catch (err) {
                console.log("got error: ", err.message);
                let msg = err.message;
                if (msg.includes("auth/email-already-in-use"))
                msg = "Email already in use";
                if (msg.includes("auth/invalid-email)"))
                msg = "Please use a valid email";
                Alert.alert("Sign Up", msg);
            }
        }
    };

    const inputs = [
        {
            label: "Нэвтрэх нэр",
            value: User.name,
            defaultValue: 'Нэрээ оруул.',
            onChangeText: User.setName,
            placeholder: "Өлзийтөгс"
        },
        {
            label: "Цахим хаяг",
            value: User.email,
            onChangeText: User.setEmail,
            // secureTextEntry: !showPassword2,
            placeholder: "test@example.com"
        },
        {
            label: "Нууц үг",
            value: User.password,
            onChangeText: User.setPassword,
            secureTextEntry: !showPassword1,
            placeholder: "Str0ng_P@ssw0rd"
        },
    ];

    const textt = [
        {
            label: "Мэдээллээ оруулна уу",
        },
    ];

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View className="flex-1 bg-purple-600">
                    <RegisterHeader />
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['#9800FF', '#000000']} style={themeColors.grad}>
                        <View className="flex-1 px-[8vw] pt-[6vh]">
                            <Textt textt={textt} />
                            <View className="pb-[2vh]">
                                {inputs.map((input, index) => (
                                    <View key={index} style={{ marginBottom: 20 }}>
                                        <Text style={{ color: 'white', marginBottom: 7 }}>{input.label}</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: 12 }}>
                                            <TextInput
                                                style={{ flex: 1, padding: 14 }}
                                                value={input.value}
                                                onChangeText={input.onChangeText}
                                                secureTextEntry={input.secureTextEntry}
                                            />
                                            {input.label === "Нууц үг" && (
                                                <TouchableOpacity onPress={() => setShowPassword1(!showPassword1)} style={{ padding: 14 }}>
                                                    <Ionicons name={showPassword1 ? "eye-off-outline" : "eye-outline"} size={24} color="black" />
                                                </TouchableOpacity>
                                            )}
                                            {/* {input.label === "Цахим хаяг" && (
                                                <TouchableOpacity onPress={() => setShowPassword2(!showPassword2)} style={{ padding: 14}}>
                                                    <Ionicons name={showPassword2 ? "eye-outline" : "eye-off-outline"} size={24} color="black" />
                                                </TouchableOpacity>
                                            )} */}
                                        </View>
                                    </View>
                                ))}
                            </View>
                            <View className="flex-row justify-end">
                                <TouchableOpacity 
                                    onPress={handleSubmit}
                                    className="w-[20vw] h-[6vh] flex justify-center items-center bg-purple-600 rounded-3xl"
                                >
                                    <ArrowRightIcon size="20" color="white" />
                                </TouchableOpacity>
                            </View> 
                        </View>
                    </LinearGradient>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
