import React from 'react';
import AppNavigation from './navigation/appNavigation';
import {UserStore} from './context/UserContext';

export default function App() {
  // nomioo check
  return (
    <UserStore>
      <AppNavigation />
    </UserStore>
  );
}