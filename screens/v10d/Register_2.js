import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Pressable,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, useContext } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import DateTimePicker from "@react-native-community/datetimepicker";
import RegisterHeader from "./components/RegisterHeader";
import { themeColors } from "../../theme";
import Input from "./components/Input";
import UserContext from "../../context/UserContext";
import { RadioButton } from "react-native-paper";
import { getDatabase, ref, set } from 'firebase/database';
import { getAuth } from 'firebase/auth';

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

  const User = useContext(UserContext);

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = (event, selectedDate) => {
    if (selectedDate) {
      const currentDate = selectedDate || date;
      setDate(currentDate);
      toggleDatePicker();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
      const day = String(currentDate.getDate()).padStart(2, ''); 
      const formattedDate = `${year}-${month}-${day}`;
  
      User.setBday(formattedDate);
      User.setAge(calculateAge(currentDate));
    } else {
      toggleDatePicker();
    }
  };

  const saveUserData = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      try {
        const database = getDatabase();
        await set(ref(database, 'users/' + user.uid), {
          username: User.name,
          age: User.age,
          dateOfBirth: User.bday,
          weight: User.weight,
          gender: User.gender,
          height: User.height,
          planId: User.planId,
          plan: User.plan,
        });

        console.log('User data saved successfully!');
        navigation.navigate("Register4");
      } catch (err) {
        console.error("Error saving user data: ", err.message);
        Alert.alert("Error", "Failed to save user data. Please try again.");
      }
    } else {
      Alert.alert("Error", "No authenticated user found.");
    }
  };

  const inputs = [
    {
      label: "Биеийн жин",
      value: User.weight,
      onChangeText: User.setWeight,
      placeholder: "70",
    },
    {
      label: "Биеийн өндөр",
      value: User.height,
      onChangeText: User.setHeight,
      placeholder: "170",
    },
  ];

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View className="flex-1 bg-purple-600">
        <RegisterHeader />
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={["#9800FF", "#000000"]}
          style={themeColors.grad}
        >
          <View className="flex-1 px-[8vw] pt-[6%]">
            {/* <Textt textt={textt} /> */}
            <View className="pb-[2vh]">
              <Text className="pb-[1vh] text-white ml-[2vw]">
                Төрсөн он сар өдөр
              </Text>
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
              <Text className=" text-white ml-[2vw]">Хүйс</Text>
              <View className="flex-row items-center justify-around mt-[1.8%] rounded-2xl p-[3%]">
                <View className="flex-row items-center">
                  <RadioButton.Android
                    value="m"
                    status={User.gender === "m" ? "checked" : "unchecked"}
                    onPress={() => User.setGender("m")}
                    color="#9800FF"
                  />
                  <Text className="text-gray-100">Боловсон залуу</Text>
                </View>
                <View className="flex-row items-center">
                  <RadioButton.Android
                    value="f"
                    status={User.gender === "f" ? "checked" : "unchecked"}
                    onPress={() => User.setGender("f")}
                    color="#9800FF"
                  />
                  <Text className="text-gray-100">Хөөрхөн хүүхэн</Text>
                </View>
              </View>
            </View>
            <View className="flex-row justify-center">
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                className="w-[20vw] h-[6vh] flex justify-center items-center bg-purple-600 rounded-3xl"
              >
                <ArrowLeftIcon size="20" color="white" />
              </TouchableOpacity>
              <Text className="p-[24%]" />
              <TouchableOpacity
                onPress={saveUserData}
                className="w-[20vw] h-[6vh] flex justify-center items-center bg-purple-600 rounded-3xl"
              >
                <ArrowRightIcon size="20" color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </View>
    </KeyboardAvoidingView>
  );
}
