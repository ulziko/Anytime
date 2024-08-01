import { View, Text, TouchableOpacity, Image, TextInput, Alert } from 'react-native'
import React, { useContext , useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import {ArrowRightIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient'
import { themeColors } from '../../theme';
import Input from './components/Input'
import RegisterHeader from './components/RegisterHeader';
import Textt from './components/Textt';
import UserContext from "../../context/UserContext";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Register_1() {
    // user object 
    const User=useContext(UserContext);
    const navigation = useNavigation();
    const [tmp_pass01, setTmp_pass01]=useState(null);
    const [tmp_pass02, setTmp_pass02]=useState(null);
    const check= (pass01, pass02)=> {
        if (pass01===pass02 ){
            User.setPassword(pass01);
            return true;
        }
        else {
            return false;
        }
    };

    const save = async () => {
        if (User.name !== "default name") {
            try {
                await AsyncStorage.setItem("user_name", User.name);
                await AsyncStorage.setItem("user_password", User.password);
                return true;
            } catch (error) {
                console.error("Error saving data", error);
                return false;
            }
        }
        return true;
    };
    
    const inputs = [
        {
            label: "Нэвтрэх нэр",
            value: User.name,
            onChangeText: User.setName,
        },
        {
            label: "Нууц үг",
            value: tmp_pass01,
            onChangeText: setTmp_pass01,
            secureTextEntry: true,
        },
        {
            label: "Нууц үгээ давтах",
            value: tmp_pass02,
            onChangeText: setTmp_pass02,
            secureTextEntry: true,
        },
    ];

    const textt = [
        {
            label: " Мэдээллээ оруулна уу",
        },
    ];

    return (
        <View className="flex-1 bg-purple-600">
            <RegisterHeader />
            <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#9800FF', '#000000']} style={themeColors.grad}>
                <View className="flex-1 px-[8vw] pt-[6vh]">
                    <Textt textt={textt}/>
                    <View className="pb-[2vh]">
                        <Input inputs={inputs}/>
                    </View>
                    <View className="flex-row justify-end">
                        <TouchableOpacity 
                             onPress={async () => {
                                if (check(tmp_pass01, tmp_pass02)) {
                                  try {
                                    await save();
                                    navigation.navigate('Register2');
                                  } catch (error) {
                                    alert("Error on navigation");
                                  }
                                } else {
                                  alert("Enter again");
                                }
                              }}
                            className="w-[20vw] h-[6vh] flex justify-center items-center bg-purple-600 rounded-3xl"
                        >
                            <ArrowRightIcon size="20" color="white" />
                        </TouchableOpacity>
                    </View> 
                    {/* <View className="flex-row justify-center mt-7">
                        <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                            <Text className="font-semibold text-purple-600"> Нэвтрэх</Text>
                        </TouchableOpacity>
                    </View> */}
                </View>
            </LinearGradient>
        </View>
    )
}