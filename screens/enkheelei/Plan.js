import * as React from "react";
import {
  View,
  Text,
  Dimensions,
  Animated,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import plansMapping from "./Mapping"; // Import the mapping

const { width, height } = Dimensions.get("window");
const cardWidth = width;

const Plan = ({ route }) => {
  const navigation = useNavigation();
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const [active, setActive] = React.useState(0);
  const [plan, setPlan] = React.useState([]);
  const { idd, sex } = route.params;
  const [planDetail, setPlanDetail] = React.useState([]);
  const fileKey = `${sex === 1 ? "m" : "f"}_${idd}`;

  const showPlanDetails = () => {
    setPlanDetail(!planDetail);
    console.log("show details");
  };

  React.useEffect(() => {
    const loadPlan = () => {
      try {
        const planData = plansMapping[fileKey];
        setPlan(planData);
      } catch (error) {
        console.error("Error loading plan:", error);
      }
    };

    loadPlan();
  }, [idd, sex]);

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  const handleScrollEnd = (event) => {
    const index = Math.floor(
      event.nativeEvent.contentOffset.x / cardWidth.toFixed(0) + 0.01
    );
    setActive(index);
  };

  return (
    <View className={"flex flex-1 h-full bg-black justify-center items-center"}>
      <View className="flex-row justify-between items-center w-full mt-5">
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
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
        scrollEventThrottle={8}
        snapToAlignment="center"
        decelerationRate="fast"
        onScroll={handleScroll}
        onMomentumScrollEnd={handleScrollEnd}
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
                    {item.exercises.map((exercise, idx) => (
                      <Text
                        key={idx}
                        className={`${
                          index === active
                            ? "text-left text-lg mx-12 w-full text-white"
                            : "-z-10"
                        }`}
                      >
                        {exercise.name}
                      </Text>
                    ))}
                  </View>
                  <TouchableOpacity
                    className={`${
                      index === active
                        ? "w-2/5 h-[8%] mx-auto my-auto bottom-0 rounded-full bg-purple-600 justify-center"
                        : "invisible"
                    }`}
                    onPress={() => {
                      console.log(
                        "Navigating to Workout with workoutId:",
                        index,
                        "and fileKey:",
                        fileKey
                      );
                      navigation.navigate("Workout", {
                        workoutId: index,
                        fileKey: fileKey,
                      });
                    }}
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
      <View className="flex-row justify-end items-center w-full pr-5 pb-5">
        <TouchableOpacity
          onPress={() => setPlanDetail(!planDetail)}
          className="flex justify-center items-center mt-[2vh] bg-purple-600 rounded-3xl w-[11vw] h-[5vh]"
        >
          <ArrowLeftIcon size="20" color="white" />
        </TouchableOpacity>
      </View>
      {/* Plan Detail */}
      <View>
        <Modal animationType="fade" visible={planDetail} transparent={true}>
          <Pressable
            onPressOut={() => {
              showPlanDetails(!planDetail);
            }}
            className="flex h-screen w-screen justify-center items-center content-center bg-black/75"
          >
            <View className="flex items-center rounded-xl w-[80%] h-[22%]">
              <Text className="text-lg font-bold text-white">Хөтөлбөр</Text>
              <Text className="text-lg font-bold text-purple-600">
                Хөтөлбөр
              </Text>
            </View>
          </Pressable>
        </Modal>
      </View>
    </View>
  );
};

const styles = {
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  title: {
    fontSize: 32,
  },
};

export default Plan;
