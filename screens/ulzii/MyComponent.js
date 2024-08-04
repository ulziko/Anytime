import React from "react";
import Header from "./Header";
import UserInfo from "./UserInfo";
import Calendar from "./Calendar";
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PlanContainer from "./PlanContainer";

function MyComponent() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <>
      <Header/>
      <UserInfo />
      <View>
        <Calendar onSelectDate={setSelectedDate} selected={selectedDate} />
      </View>
      <PlanContainer/>
    
    </>
  );
}

export default MyComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});