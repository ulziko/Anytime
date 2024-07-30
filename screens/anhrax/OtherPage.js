import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WorkoutContainer from '../enkheelei/WorkoutContainer';

function OtherPage({ route }) {
  const { id } = route.params;

  return (
    <WorkoutContainer workoutId={1} />
  );
}

export default OtherPage;
