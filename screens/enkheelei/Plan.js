import * as React from "react";
import {
    SafeAreaView,
    View,
    Text,
    FlatList,
    Dimensions,
    Animated,
    TouchableOpacity,
    Header
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from '@react-navigation/native';
import plan from "./plan.json";

const { width } = Dimensions.get("window");

const cardWidth = (width * 4) / 5;

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

export default function Plan() {
    const navigation = useNavigation();
    const [active, setActive] = React.useState([]);
    const scrollX = React.useRef(new Animated.Value(0)).current;

    return (
        <View
            className={
                "flex flex-1 h-full bg-black justify-center items-center"
            }
        >
            <View className="flex-row justify-between items-center w-full mt-5">
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    className="flex justify-center items-center mt-[2vh] bg-purple-600 rounded-3xl w-[11vw] h-[5vh]"
                >
                    <ArrowLeftIcon size="20" color="white" />
                </TouchableOpacity>
                <Text className="text-white text-4xl mx-auto">Workout</Text>
            </View>
            <View
                className={
                    "flex flex-1 w-full h-full bg-black justify-center items-center"
                }
            >
                <Animated.FlatList
                    data={plan}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    snapToInterval={width}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: true },
                    )}
                    scrollEventThrottle={16}
                    snapToAlignment="center"
                    decelerationRate="fast"
                    getItemLayout={(data, index) => ({
                        length: cardWidth,
                        offset: cardWidth * index,
                        index,
                    })}
                    renderItem={({ item, index }) => {
                        const inputRange = [
                            (index - 1) * cardWidth,
                            index * cardWidth,
                            (index + 1) * cardWidth,
                        ];
                        const translateY = scrollX.interpolate({
                            inputRange,
                            outputRange: [0, -20, 0],
                        });
                        return (
                            <Animated.View
                                style={{ transform: [{ translateY }] }}
                                className="w-screen my-auto md:w-96 h-3/5"
                            >
                                <View
                                    className="flex flex-1 border-2 border-white items-center
                    shadow-xl shadow-white
                    rounded-3xl mx-auto w-4/5 h-full"
                                >
                                    <LinearGradient
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 0, y: 1 }}
                                        colors={["#9800FF", "#000000"]}
                                        className={
                                            "flex bg-black w-full h-full rounded-3xl"
                                        }
                                    >
                                        <Text
                                            className={
                                                "flex flex-2 text-center text-3xl text-white my-5 w-full h-12"
                                            }
                                        >
                                            {item.title}
                                        </Text>
                                        <View
                                            key={item.id}
                                            className="flex w-3/5 py-1 content-between justify-center"
                                        >
                                            {item.exercises.map((item) => (
                                                <Text className="text-left text-lg mx-12 text-white">
                                                    {item}
                                                </Text>
                                            ))}
                                        </View>
                                        <TouchableOpacity
                                            className="w-2/5 h-[6%] mx-auto bottom-0 rounded-full bg-purple-600 justify-center"
                                            onPress={() => navigation.navigate('Detail')}
                                        >
                                            <Text className="text-white text-md text-center">
                                                Эхлэх
                                            </Text>
                                        </TouchableOpacity>
                                    </LinearGradient>
                                </View>
                            </Animated.View>
                        );
                    }}
                />
            </View>
        </View>
    );
}
