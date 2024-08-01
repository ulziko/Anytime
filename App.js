import React from 'react';
import { StatusBar } from 'react-native';
import AppNavigation from './navigation/appNavigation';
import {UserStore} from './context/UserContext';

export default function App() {
  const User=UserContext(UserContext);
  const loginCheck = User.isLoggedIn; 
  if (loginCheck){
  return (
      navi
  );
  }
  else {
  return false;
  }
  return (
    <>
    <StatusBar barStyle="light-content"/>
    <UserStore >
      <AppNavigation/>
    </UserStore>
    </>
  );
}