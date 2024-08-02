import * as React from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Dimensions,
  Animated,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
// import YoutubePlayer from "react-native-youtube-iframe";
import plan from "./plans/1.json";

const { width, height } = Dimensions.get("window");
// 411.5 274.3 137.2 68.6 34
const cardWidth = width;
const spaceCard = (width - cardWidth) / 2;

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function Plan() {
  const navigation = useNavigation();
  const scrollX = React.useRef(new Animated.Value(0)).current; //hajuu tiish guilgehed
  const [active, setActive] = React.useState([]);

  const onCardChanged = React.useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActive(viewableItems[0].index);
    }
  }).current;

  return (
    <View className={"flex flex-1 h-full bg-black justify-center items-center"}>
      <View className="flex-row justify-between items-center w-full mt-5">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="flex justify-center items-center mt-[2vh] bg-purple-600 rounded-3xl w-[11vw] h-[5vh]"
        >
          <ArrowLeftIcon size="20" color="white" />
        </TouchableOpacity>
        <Text className="text-white text-4xl mx-auto">Workout</Text>
      </View>

      <Animated.FlatList
        data={plan}
        horizontal
        pagingEnabled
        snapToInterval={cardWidth}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment="center"
        decelerationRate="fast"
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        onViewableItemsChanged={onCardChanged}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignContent: "flex-start",
        }}
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
            outputRange: [0, -50, 0],
          });
          return (
            <View
              style={{ width: cardWidth }}
              className={`${
                index === active ? "h-3/5" : "h-2/5 -z-10"
              }  my-auto`}
            >
              <Animated.View
                style={{ transform: [{ translateY }] }}
                className={
                  "flex flex-1 border-2 border-white items-center shadow-xl shadow-white rounded-3xl mx-auto w-2/3 h-full"
                }
              >
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  colors={[
                    `${index === active ? "#9800FF" : "#475569"}`,
                    "#000000",
                  ]}
                  className={"flex bg-black w-full h-full rounded-3xl"}
                >
                  <Text
                    className={`${
                      index === active ? "text-white" : "text-purple-600"
                    } flex flex-2 text-center text-3xl my-5 w-full h-12`}
                  >
                    {item.title}
                  </Text>
                  <View
                    key={item.id}
                    className="flex w-3/5 py-1 content-between justify-center"
                  >
                    {item.exercises.map((item, idx) => (
                      <Text
                        key={idx}
                        className={`${
                          index === active
                            ? "text-left text-lg mx-12 w-full text-white"
                            : "-z-10"
                        }`}
                      >
                        {item.name} {index} {active}
                      </Text>
                    ))}
                  </View>
                  <TouchableOpacity
                    className={`${
                      index === active
                        ? "w-2/5 h-[8%] mx-auto my-auto bottom-0 rounded-full bg-purple-600 justify-center"
                        : "invisible"
                    }`}
                    onPress={() => navigation.navigate("Detail")}
                  >
                    <Text
                      className={`${
                        index === active
                          ? "text-white text-lg text-center"
                          : "invisible"
                      }`}
                    >
                      Эхлэх
                    </Text>
                  </TouchableOpacity>
                </LinearGradient>
              </Animated.View>
            </View>
          );
        }}
      />
    </View>
  );
}

// https://www.youtube.com/watch?v=Noy9fdL7Jhs
