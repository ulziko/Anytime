import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Plan from './Plan';
import NoPlan from './NoPlan';
import { useNavigation } from '@react-navigation/native';
const WorkoutPlan = () => {
  const navigation = useNavigation();
 // State to hold the list of plans
 const [plans, setPlans] = useState([]);

 // Function to add a new plan
 const addNewPlan = () => {
   const newPlan = { id: plans.length + 1, title: 'Мангас төлөвлөгөө', date: '2024/07/22' };
   setPlans([...plans, newPlan]);
 };

 return (
   <View style={styles.container}>
     {plans.length > 0 ? (
       <Plan plans={plans} addNewPlan={addNewPlan} />
     ) : (
      <TouchableOpacity onPress={() => navigation.navigate('Plan')}>
        <NoPlan/>
     </TouchableOpacity>
       
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