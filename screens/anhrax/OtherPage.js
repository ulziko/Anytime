import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Plan from '../enkheelei/Plan';

function OtherPage({ route }) {
  const { id } = route.params;

  return (
    <Plan />
  );
}

export default OtherPage;
