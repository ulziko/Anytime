import React from 'react';
import { ProfileImageProvider } from './ProfileImageContext';
import CameraSection from './CameraSection';

export default function tmp (){
    return (
    <ProfileImageProvider>
      <CameraSection />
    </ProfileImageProvider>
  );
}
