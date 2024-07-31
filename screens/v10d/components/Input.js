import { View, Text, TextInput } from 'react-native';
import React from 'react';

const Input = ({ inputs }) => {
    return (
        <View className="form space-y-2">
            {inputs.map((input, index) => (
                <View key={index} className="space-y-2">
                    <Text className="text-white ml-[2vw]">{input.label}</Text>
                    <TextInput
                        className="p-[1.8vh] bg-gray-100 text-gray-700 rounded-2xl mb-[2vh]"
                        value={input.value}
                        onChangeText={input.onChangeText}
                        secureTextEntry={input.secureTextEntry}
                    />
                </View>
            ))}
        </View>
    );
};

export default Input;
