import React, { useState, useContext } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Plan from './Plan';
import NoPlan from './NoPlan';
import { useNavigation } from '@react-navigation/native';
import UserContext from "../../context/UserContext";
const WorkoutPlan = () => {
  const navigation = useNavigation();
  const User=useContext(UserContext);
 // State to hold the list of plans

 // Function to add a new plan
//  const addNewPlan = () => {
//    const newPlan = { id: plans.length + 1, title: 'Мангас төлөвлөгөө', date: '2024/07/22' };
//    setPlans([...plans, newPlan]);
//  };

 return (
   <View style={styles.container}>
     {User.Plan==true ? (
       <Plan planName={User.planId}/>
     ) : (
    //   <TouchableOpacity onPress={() => navigation.navigate('Plan')}>
        <NoPlan/>
    //  </TouchableOpacity>
       
     )}
   </View>
 );
};

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:200,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  planTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  planDate: {
    fontSize: 16,
    color: '#fff',
  },
});



export default WorkoutPlan;