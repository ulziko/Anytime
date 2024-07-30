import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../screens/v10d/HomeScreen';
import Start from "../screens/v10d/Start";
import Login from "../screens/v10d/Login";
import Register_1 from "../screens/v10d/Register_1";
import Register_2 from "../screens/v10d/Register_2";
import Register_3 from "../screens/v10d/Register_3";
import Register_4 from "../screens/v10d/Register_4";
import FitnessAppPage from "../screens/anhrax/FitnessAppPage";
import OtherPage from '../screens/anhrax/OtherPage';
import TwoButton from '../screens/anhrax/components/TwoButton';
import WorkoutContainer from "../screens/enkheelei/WorkoutContainer";
import CameraSection from '../screens/nomio/ProfileImageProvider';
import Question from '../screens/nomio/Question';
import NewPass from '../screens/nomio/NewPass';
import Done from '../screens/nomio/Done';
import ProfileScreen from "../screens/v10d/ProfileScreen";
import tmp from "../screens/nomio/ProfileImageProvider";

const Stack = createNativeStackNavigator();

export default function AppNavigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Start">
                <Stack.Screen name='Home' options={{headerShown: false}} component={HomeScreen} />
                <Stack.Screen name='Start' options={{headerShown: false}} component={Start} />
                <Stack.Screen name='Login' options={{headerShown: false}} component={Login} />
                <Stack.Screen name='Register1' options={{headerShown: false}} component={Register_1} />
                <Stack.Screen name='Register2' options={{headerShown: false}} component={Register_2} />
                <Stack.Screen name='Register3' options={{headerShown: false}} component={Register_3} />
                <Stack.Screen name='Register4' options={{headerShown: false}} component={Register_4} />
                <Stack.Screen name="FitnessApp" options={{ headerShown: false }} component={FitnessAppPage} />
                <Stack.Screen name="OtherPage" options={{ headerShown: false }} component={OtherPage} />
                <Stack.Screen name="TwoButton" options={{ headerShown: false }} component={TwoButton} />
                <Stack.Screen name="Workout" options={{ headerShown: false }} component={WorkoutContainer} />
                <Stack.Screen name="ProfileScreen" options={{ headerShown: false }} component={ProfileScreen} />
                <Stack.Screen name="CameraSection" options={{ headerShown: false }} component={tmp} />
                <Stack.Screen name="Question" options={{ headerShown: false }} component={Question} />
                <Stack.Screen name="NewPass" options={{ headerShown: false }} component={NewPass} /> 
                <Stack.Screen name="Done" options={{ headerShown: false }} component={Done} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}