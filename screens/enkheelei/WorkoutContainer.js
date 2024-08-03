import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  Button,
} from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { Svg, Circle } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import workoutsData from "./workout.json";

const WorkoutPage = ({ workoutId, navigation }) => {
  const navigation1 = useNavigation();
  const [workout, setWorkout] = useState(null);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isVideoVisible, setVideoVisible] = useState(false);
  const [questionVisible, setQuestionVisible] = useState(false);

  const watchVideo = () => {
    setVideoVisible(!isVideoVisible);
  };

  const showDetails = () => {
    setQuestionVisible(!questionVisible);
    console.log("show details");
  };

  useEffect(() => {
    const loadWorkout = () => {
      const selectedWorkout = workoutsData.find((w) => w.id === workoutId);
      setWorkout(selectedWorkout);
    };

    loadWorkout();
  }, [workoutId]);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const reset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  const formatTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  const toggle = () => {
    setIsActive(!isActive);
  };

  const handleCircleClick = () => {
    if (isActive) {
      setIsActive(false);
    } else if (seconds !== 0) {
      reset();
    } else {
      setIsActive(true);
    }
  };

  const radius = 40;
  const strokeWidth = 3;
  const circumference = 2 * Math.PI * radius;
  const progress = (seconds % 60) / 60;

  if (!workout) {
    return (
      <View className="flex-1 bg-purple-600 items-center justify-center">
        <Text className="text-white">Loading...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-black p-5">
      {/* Header */}
      <View className="flex-row justify-between items-center">
        <TouchableOpacity
          onPress={() => navigation1.navigate("Home")}
          className="flex justify-center items-center mt-[2vh] bg-purple-600 rounded-3xl w-[11vw] h-[5vh]"
        >
          <ArrowLeftIcon size="20" color="white" />
        </TouchableOpacity>
        <Text className="text-white text-4xl mt-[2vh] mr-[14vh]">Workout</Text>
      </View>
      {/* Main Content */}
      <View className="flex items-center justify-center mt-[4vh]">
        <View className="flex-row bg-gray-800 p-[3vh] rounded-3xl w-full items-center h-[40vh]">
          <Image
            source={require("../../assets/man.png")}
            className="w-[30vw]"
            resizeMode="contain"
          />
          <View className="flex-col mb-[10vh]">
            <Text className="text-purple-600 text-3xl font-bold">
              {workout.name}
            </Text>
            <View className="flex items-center justify-around mt-3 w-full">
              <View className="flex-row justify-start items-start p-[1vh] m-[2vh]">
                <Image
                  source={require("../../assets/Vector.png")}
                  className="h-[3vh] w-[3vh]"
                />
                <Text className="text-white text-xl pl-8">
                  {workout.bodyPart}
                </Text>
              </View>
              <View className="flex-row justify-start items-start p-[1vh]">
                <Image
                  source={require("../../assets/vector2.png")}
                  className="h-[3vh] w-[3vh] left-2.5"
                />
                <Text className="text-white text-xl pl-8">
                  {workout.equipment}
                </Text>
              </View>
            </View>
          </View>
          <View className="absolute top-[75%] right-[20%]">
            <TouchableOpacity onPress={handleCircleClick} activeOpacity={1}>
              <Svg height="100" width="100" viewBox="0 0 100 100">
                <Circle
                  cx="50"
                  cy="50"
                  r={radius}
                  stroke="grey"
                  strokeWidth={strokeWidth}
                  fill="none"
                />
                <Circle
                  cx="50"
                  cy="50"
                  r={radius}
                  stroke="#9800FF"
                  strokeWidth={strokeWidth}
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference - progress * circumference}
                  strokeLinecap="round"
                />
              </Svg>
              <Text className="absolute top-[43%] left-[37%] text-center text-purple-600">
                {formatTime(seconds)}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* Exercise Details */}
      <View className="mt-5">
        <View className="flex-row items-center mb-3">
          <View className="bg-gray-700 p-3 rounded-full">
            <Text className="text-white">🔄</Text>
          </View>
          <Text className="text-white ml-3">Оролт: {workout.sets}</Text>
        </View>
        <View className="flex-row items-center mb-3">
          <View className="bg-gray-700 p-3 rounded-full">
            <Text className="text-white">1️⃣0️⃣</Text>
          </View>
          <Text className="text-white ml-3">Давтах: {workout.reps}</Text>
        </View>
        <View className="flex-row items-center">
          <View className="bg-gray-700 p-3 rounded-full">
            <Text className="text-white">💬</Text>
          </View>
          <Text className="text-white ml-3">
            Нэмэлт: {workout.additionalInfo}
          </Text>
        </View>
      </View>
      {/* Start Button */}
      <TouchableOpacity
        className="bg-purple-600 p-4 mt-5 rounded-full items-center justify-center"
        onPress={() => {
          watchVideo(true);
        }}
      >
        <FontAwesome5 name="play" size={24} color="white" />
      </TouchableOpacity>
      <View>
        <Modal animationType="fade" visible={isVideoVisible} transparent={true}>
          <Pressable
            onPressOut={() => {
              watchVideo(!isVideoVisible);
            }}
            className="flex h-screen w-screen justify-center items-center content-center bg-black/75"
          >
            <View className="flex bg-white items-center border-solid border-2 rounded-xl w-[80%] h-[22%]">
              <Text className="text-3xl text-purple-600"> Video Player</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                watchVideo(!isVideoVisible);
                showDetails(!questionVisible);
              }}
              className="rounded-full items-end w-4/5 p-5"
            >
              <FontAwesome
                name="question-circle-o"
                size={24}
                color="white"
                className="w-[10%] h-[10%]"
              />
            </TouchableOpacity>
          </Pressable>
        </Modal>
      </View>
      <View>
        <Modal
          animationType="fade"
          visible={questionVisible}
          transparent={true}
        >
          <Pressable
            onPressOut={() => {
              showDetails(!questionVisible);
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

export default WorkoutPage;
