import { View, Text, TextInput } from 'react-native';
import React from 'react';

const Textt = ({ textt }) => {
    return (
        <View>
            {textt.map((input) => (
                <Text className="text-white font-bold text-2xl text-center pb-[4vh]">{input.label}</Text>
            ))}
        </View>
    );
};

export default Textt;
