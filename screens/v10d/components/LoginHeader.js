import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import * as Device from "expo-device";

const LoginHeader = () => {
  const navigation = useNavigation();

  return (
    <View className="bg-black rounded-b-3xl h-[40%]">
      <SafeAreaView className="flex">
        {/* <TouchableOpacity
          className=""
          onPress={() => navigation.navigate("Home")}
        > */}
          <Image
            className="mx-auto my-[17%] w-[55%] h-[25%]"
            source={require("../../../assets/logo.png")}
          />
        {/* </TouchableOpacity> */}
        <View
          className={`${
            Device.deviceType === 1 ? "mt-14" : ""
          } flex-row justify-center pt-[3%]`}
        >
          <View className="flex-col">
            <TouchableOpacity>
              <Text className="font-semibold text-purple-600">Нэвтрэх</Text>
            </TouchableOpacity>
            <View className="flex justify-center items-center bg-purple-700 rounded-full ml-[-5%] mt-[5%] h-[6%] w-[110%]" />
          </View>
          <TouchableOpacity
            className="pl-[16vh]"
            onPress={() => navigation.navigate("Register1")}
          >
            <Text className="font-semibold text-purple-600">Бүртгүүлэх</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default LoginHeader;
