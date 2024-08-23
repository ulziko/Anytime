import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  Alert,
} from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { Svg, Circle } from "react-native-svg";
import { useNavigation, useRoute } from "@react-navigation/native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import workoutsMapping from "./Mapping";
import { Video } from "expo-av";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

const WorkoutPage = () => {
  const navigation1 = useNavigation();
  const route = useRoute();
  const [selectedWorkout, setSelectedWorkout] = useState([]);
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [timerStart, setTimerStart] = useState(false);
  const [key, setKey] = useState(0);
  const [isVideoVisible, setVideoVisible] = useState(false);
  const [questionVisible, setQuestionVisible] = useState(false);
  const { workoutId, fileKey } = route.params || {};

  useEffect(() => {
    if (!fileKey) {
      console.error("fileKey is undefined");
      return;
    }
    const workoutData = workoutsMapping[fileKey];
    // console.log('workoutdata:', workoutData);
    if (!workoutData) {
      console.error("No workout data found for fileKey:", fileKey);
      return;
    }

    const workoutBatch = workoutData.find(
      (w) => String(w.exercise_set) === String(workoutId)
    );

    if (workoutBatch) {
      // console.log('Found workoutBatch:', workoutBatch);
      setSelectedWorkout(workoutBatch.exercises || []);
      // console.log('SelectedWorkoutBatch:', selectedWorkout);
    } else {
      console.error("No workout batch found for workoutId:", workoutId);
    }
  }, [fileKey, workoutId]);

  const watchVideo = () => {
    setVideoVisible(!isVideoVisible);
  };

  const showDetails = () => {
    setQuestionVisible(!questionVisible);
    console.log("show details");
  };

  const nextWorkout = () => {
    if (
      selectedWorkout.length > 0 &&
      exerciseIndex < selectedWorkout.length - 1
    ) {
      setExerciseIndex(exerciseIndex + 1);
      console.log({ exerciseIndex });
    } else {
      console.log("No more exercises.");
    }
  };

  const prevWorkout = () => {
    if (exerciseIndex > 0) {
      setExerciseIndex(exerciseIndex - 1);
      console.log({ exerciseIndex });
    } else {
      console.log("Already at the first exercise.");
    }
  };

  // console.log('SelectedWorkoutBatch:', selectedWorkout.length);
  if (!selectedWorkout.length) {
    return (
      <View className="flex-1 bg-purple-600 items-center justify-center">
        <Text className="text-white">Loading...</Text>
        <Text>Workout ID: {workoutId}</Text>
      </View>
    );
  }

  const currentExercise = selectedWorkout[exerciseIndex];

  const images = {
    Abductors: require("../../assets/Abductors.png"),
    Abs: require("../../assets/Abs.png"),
    Adductors: require("../../assets/Adductors.png"),
    Biceps: require("../../assets/Biceps.png"),
    Calves: require("../../assets/Calves.png"),
    Chest: require("../../assets/Chest.png"),
    Forearms: require("../../assets/Forearms.png"),
    Glutes: require("../../assets/Glutes.png"),
    Hamstrings: require("../../assets/Hamstrings.png"),
    Hip_Flexors: require("../../assets/Hip_Flexors.png"),
    It_Band: require("../../assets/IT_Band.png"),
    Lats: require("../../assets/Lats.png"),
    Lower_Back: require("../../assets/Lower_Back.png"),
    Neck: require("../../assets/Neck.png"),
    Obliques: require("../../assets/Obliques.png"),
    Palmar_Fascia: require("../../assets/Palmar_Fascia.png"),
    Plantar_Fascia: require("../../assets/Plantar_Fascia.png"),
    Quads: require("../../assets/Quads.png"),
    Shoulders: require("../../assets/Shoulders.png"),
    Traps: require("../../assets/Traps.png"),
    Triceps: require("../../assets/Triceps.png"),
    Upper: require("../../assets/Upper_Back.png"),
  };

  return (
    <View className="flex w-screen h-screen bg-black p-5">
      {/* Header */}
      <View className="flex-row justify-between mt-4">
        <TouchableOpacity
          onPress={() => navigation1.navigate("Home")}
          className="flex justify-center items-center bg-purple-600 rounded-3xl w-[11vw] h-[5vh]"
        >
          <ArrowLeftIcon size="20" color="white" />
        </TouchableOpacity>
        <Text className="text-white text-4xl mx-auto">Workout</Text>
      </View>
      {/* Main Content */}
      <View className="flex mt-5 h-[50%]">
        <View className="flex-row bg-gray-800 p-[3vh] rounded-3xl w-full h-full">
          <Image
            source={images[currentExercise.bodyImage]}
            // source={{ uri: imagePath }}
            className="w-[40%] h-[90%] m-5"
            resizeMode="stretch"
          />
          <View className="flex-col mt-5 mx-auto">
            <Text className="text-purple-600 text-3xl font-bold">
              {currentExercise.name}
            </Text>
            <View className="flex items-center justify-around mt-3 w-full">
              <View className="flex-row justify-start items-start p-[1vh] m-[2vh]">
                <Image
                  source={require("../../assets/e_target.png")}
                  className="h-[3vh] w-[3vh]"
                />
                <Text className="text-white text-xl pl-8">
                  {currentExercise.bodyPart}
                </Text>
              </View>
              <View className="flex-row justify-start items-start p-[1vh]">
                <Image
                  source={require("../../assets/e_weight.png")}
                  className="h-[3vh] w-[3vh] left-2.5"
                />
                <Text className="text-white text-xl pl-8">
                  {currentExercise.equipment}
                </Text>
              </View>
            </View>
          </View>
          {/* timer */}
          <View className="absolute top-[68%] right-[10%]">
            <TouchableOpacity
              onPress={() => {
                console.log("Before setTimer:", timerStart);
                setTimerStart((prev) => (!prev ? true : prev));
                console.log("After setTimer:", timerStart);
              }}
            >
              <CountdownCircleTimer
                isPlaying={timerStart}
                duration={30}
                colors={["#9800FF", "#8902a0", "#670178", "#1b0020"]}
                colorsTime={[7, 5, 3, 0]}
                size={150}
                key={key}
                onComplete={() => {
                  setKey((prevKey) => prevKey + 1);
                  setTimerStart(false);
                  return undefined;
                }}
              >
                {({ remainingTime }) => (
                  <Text className="text-xl text-white">{remainingTime}</Text>
                )}
              </CountdownCircleTimer>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* Exercise Details */}
      <View className="flex flex-col m-5">
        <View className="flex-row items-center mb-3">
          <View className="bg-gray-700 p-3 rounded-full">
            <Image
              source={require("../../assets/e_sets.png")}
              className="h-[3vh] w-[3vh]"
            />
          </View>
          <Text className="text-purple-600 text-2xl ml-3">Оролт: </Text>
          <Text className="text-white text-lg">{currentExercise.sets}</Text>
        </View>
        <View className="flex-row items-center mb-3">
          <View className="bg-gray-700 p-3 rounded-full">
            <Image
              source={require("../../assets/e_reps.png")}
              className="h-[3vh] w-[3vh]"
            />
          </View>
          <Text className="text-purple-600 text-2xl ml-3">Давталт: </Text>
          <Text className="text-white text-lg">{currentExercise.reps}</Text>
        </View>
        <View className="flex-row items-center">
          <View className="bg-gray-700 p-3 rounded-full">
            <Image
              source={require("../../assets/e_plus.png")}
              className="h-[3vh] w-[3vh]"
            />
          </View>
          <Text className="text-purple-600 text-2xl ml-3">Нэмэлт: </Text>
          <Text className="text-white text-lg">
            {currentExercise.additionalInfo}
          </Text>
        </View>
      </View>
      {/* Start Button */}
      <TouchableOpacity
        className="bg-purple-600 w-3/5 mx-auto p-4 mt-5 rounded-full items-center justify-center"
        onPress={() => {
          watchVideo(true);
        }}
      >
        <Image
          source={require("../../assets/e_play.png")}
          className="h-[3vh] w-[3vh]"
        />
      </TouchableOpacity>
      <View>
        <Modal animationType="fade" visible={isVideoVisible} transparent={true}>
          <Pressable
            onPressOut={() => {
              watchVideo(!isVideoVisible);
            }}
            className="flex h-screen w-screen justify-center items-center content-center bg-black/75"
          >
            <View className="flex bg-white items-center border-solid border-2 rounded-xl w-[80%] h-[32%]">
              <Text className="absolute top-[45%] text-purple-600 text-lg">
                Loading...
              </Text>
              <Video
                source={{
                  // uri: "https://drive.google.com/uc?id=1WaTR8TqoaHsyb6A7QAGK72y3eogPDXyZ",
                  uri: currentExercise.video,
                }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                isLooping
                className="justify-center items-center mt-[1%] w-[98%] h-[96%] rounded-xl"
                // style={{ width: 300, height: 200 }}
              />
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
      <View className="h-[100%] w-[100%] my-auto">
        <View className="flex flex-row w-full h-1/5">
          <TouchableOpacity
            className={`${
              exerciseIndex === 0 ? "invisible" : "bg-purple-600"
            } rounded-full mr-auto -ml-10 w-[10%] h-full`}
            // disabled={`${exerciseIndex === 0 ? "disable" : ""}`}
            disabled={exerciseIndex === 0}
            onPress={timerStart ? {} : prevWorkout}
          ></TouchableOpacity>
          <TouchableOpacity
            className={`${
              exerciseIndex === selectedWorkout.length - 1
                ? "invisible"
                : "bg-purple-300"
            } rounded-full ml-auto -mr-10 w-[10%] h-full`}
            // disabled={`${exerciseIndex ===  selectedWorkout.length - 1? "disable" : ""}`}
            disabled={exerciseIndex === selectedWorkout.length - 1}
            onPress={timerStart ? {} : nextWorkout}
          ></TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default WorkoutPage;
