import { View, Text, TouchableOpacity, TextInput, Pressable, Platform, KeyboardAvoidingView, ScrollView } from 'react-native';
import React, { useState, useContext } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';
import RegisterHeader from './components/RegisterHeader';
import { themeColors } from '../../theme';
import Textt from './components/Textt';
import Input from './components/Input';
import UserContext from "../../context/UserContext";
import AsyncStorage from '@react-native-async-storage/async-storage';

function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
}

export default function Register_2() {
    const navigation = useNavigation();
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);

    // user info 
    const User = useContext(UserContext);

    const toggleDatePicker = () => {
        setShowPicker(!showPicker);
    };

    const onChange = (event, selectedDate) => {
        if (selectedDate) {
            const currentDate = selectedDate || date;
            setDate(currentDate);
            toggleDatePicker();
            User.setBday(currentDate.toDateString());
            User.setAge(calculateAge(currentDate));
        } else {
            toggleDatePicker();
        }
    };

    const inputs = [
        {
            label: "Биеийн жин",
            value: User.weight,
            onChangeText: User.setWeight,
        },
        {
            label: "Биеийн өндөр",
            value: User.height,
            onChangeText: User.setHeight,
        },
    ];

    const textt = [
        {
            label: " Мэдээллээ оруулна уу",
        },
    ];

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View className="flex-1 bg-purple-600">
                    <RegisterHeader />
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['#9800FF', '#000000']} style={themeColors.grad}>
                        <View className="flex-1 px-[8vw] pt-[6vh]">
                            <Textt textt={textt} />
                            <View className="pb-[2vh]">
                                <Text className="pb-[1vh] text-white ml-[2vw]">Төрсөн он сар өдөр</Text>

                                {showPicker && (
                                    <DateTimePicker
                                        mode="date"
                                        display="spinner"
                                        value={date}
                                        onChange={onChange}
                                    />
                                )}

                                {!showPicker && (
                                    <Pressable onPress={toggleDatePicker}>
                                        <TextInput
                                            className="p-[1.8vh] bg-gray-100 text-gray-700 rounded-2xl mb-[2vh]"
                                            value={User.bday}
                                            placeholder="MM/DD/YYYY"
                                            editable={false}
                                        />
                                    </Pressable>
                                )}

                                <Input inputs={inputs} />
                            </View>
                            <View className="flex-row justify-center">
                                <TouchableOpacity
                                    onPress={() => navigation.goBack()}
                                    className="w-[20vw] h-[6vh] flex justify-center items-center bg-purple-600 rounded-3xl"
                                >
                                    <ArrowLeftIcon size="20" color="white" />
                                </TouchableOpacity>
                                <Text className="p-[8vh]" />
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Register3')}
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
