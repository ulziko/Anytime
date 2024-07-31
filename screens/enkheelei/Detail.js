import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WorkoutContainer from './WorkoutContainer';

function Detail({ route }) {
  return (
    <WorkoutContainer workoutId={1} />
  );
}

export default Detail;
