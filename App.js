import React from 'react';
import { StatusBar } from 'react-native';
import AppNavigation from './navigation/appNavigation';
import {UserStore} from './context/UserContext';

export default function App() {
  return (
    <>
    <StatusBar barStyle="light-content"/>
    <UserStore >
      <AppNavigation/>
    </UserStore>
    </>
  );
}