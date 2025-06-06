import { View, Text } from "react-native";
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../screens/v10d/HomeScreen';
import Start from "../screens/v10d/Start";
import Login from "../screens/v10d/Login";
import Register_1 from "../screens/v10d/Register_1";
import Register_2 from "../screens/v10d/Register_2";
import Register_4 from "../screens/v10d/Register_4";
import FitnessAppPage from "../screens/anhrax/FitnessAppPage";
import Plan from '../screens/enkheelei/Plan';
import TwoButton from '../screens/anhrax/components/TwoButton';
import WorkoutContainer from "../screens/enkheelei/WorkoutContainer";
import CameraSection from '../screens/nomio/InfoSection';
import Question from '../screens/nomio/Question';
import ProfileScreen from "../screens/v10d/ProfileScreen";
import { ProfileImageProvider } from '../context/ProfileImageContext';
import UserContext from "../context/UserContext";
import loader from "../navigation/loader";
import useAuth from '../hooks/useAuth'

const Stack = createNativeStackNavigator();

export default function AppNavigation(){  
    const User = useContext(UserContext);
    const { user } = useAuth();
    if (user && User.isLoggedIn){
        return(
            <ProfileImageProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Start">
                    <Stack.Screen name='Home' options={{headerShown: false}} component={HomeScreen} />
                    <Stack.Screen name='Start' options={{headerShown: false}} component={Start} />
                    <Stack.Screen name="FitnessApp" options={{ headerShown: false }} component={FitnessAppPage} />
                    <Stack.Screen name="Plan" options={{ headerShown: false }} component={Plan} />
                    <Stack.Screen name="TwoButton" options={{ headerShown: false }} component={TwoButton} />
                    <Stack.Screen name="Workout" options={{ headerShown: false }} component={WorkoutContainer} />
                    <Stack.Screen name="ProfileScreen" options={{ headerShown: false }} component={ProfileScreen} />
                    <Stack.Screen name="CameraSection" options={{ headerShown: false }} component={CameraSection} />
                    <Stack.Screen name='Login' options={{headerShown: false}} component={Login} />
                    <Stack.Screen name="Question" options={{ headerShown: false }} component={Question} />
                    {/* <Stack.Screen name="NewPass" options={{ headerShown: false }} component={NewPass} />  */}
                    {/* <Stack.Screen name="Done" options={{ headerShown: false }} component={Done} /> */}
                    <Stack.Screen name="loader" options={{headerShown:false}} component={loader}/>
                </Stack.Navigator>
            </NavigationContainer>
            </ProfileImageProvider>
        )
    }else{
        return(
            <ProfileImageProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Start">
                    <Stack.Screen name='Home' options={{headerShown: false}} component={HomeScreen} />

                    <Stack.Screen name="FitnessApp" options={{ headerShown: false }} component={FitnessAppPage} />
                    <Stack.Screen name="Plan" options={{ headerShown: false }} component={Plan} />
                    <Stack.Screen name="TwoButton" options={{ headerShown: false }} component={TwoButton} />
                    <Stack.Screen name="Workout" options={{ headerShown: false }} component={WorkoutContainer} />
                    <Stack.Screen name="ProfileScreen" options={{ headerShown: false }} component={ProfileScreen} />
                    <Stack.Screen name="CameraSection" options={{ headerShown: false }} component={CameraSection} />
                    {/* <Stack.Screen name="NewPass" options={{ headerShown: false }} component={NewPass} />  */}
                    {/* <Stack.Screen name="Done" options={{ headerShown: false }} component={Done} /> */}
                    <Stack.Screen name="loader" options={{headerShown:false}} component={loader}/>

                    <Stack.Screen name='Start' options={{headerShown: false}} component={Start} />
                    <Stack.Screen name="Question" options={{ headerShown: false }} component={Question} />
                    <Stack.Screen name='Login' options={{headerShown: false}} component={Login} />
                    <Stack.Screen name='Register1' options={{headerShown: false}} component={Register_1} />
                    <Stack.Screen name='Register2' options={{headerShown: false}} component={Register_2} />
                    {/* <Stack.Screen name='Register3' options={{headerShown: false}} component={Register_3} /> */}
                    <Stack.Screen name='Register4' options={{headerShown: false}} component={Register_4} />
                </Stack.Navigator>
            </NavigationContainer>
            </ProfileImageProvider>
        )
    }
}