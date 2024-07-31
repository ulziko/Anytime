import React from 'react';
import AppNavigation from './navigation/appNavigation';
import {UserStore} from './context/UserContext';

export default function App() {
  return (
    <UserStore>
      <AppNavigation />
    </UserStore>
  );
}