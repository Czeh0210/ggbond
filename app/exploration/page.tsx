'use client'
import { useState, useEffect } from 'react';
import Image from "next/image";
import dynamic from "next/dynamic";
import InState from "../../components/InState";
import InState2 from "../../components/InState2";
import Profile from "../../components/Profile";
import styles from './exploration.module.css';

// Create a context to share the current location state across components
import { createContext } from 'react';

// Create a context with a default value
export const LocationContext = createContext({
  currentLocation: 'johor',
  setCurrentLocation: (location: string) => {}
});

export default function Home() {
  const [currentLocation, setCurrentLocation] = useState('johor');
  
  // Listen for location change events
  useEffect(() => {
    const handleLocationChange = (event: CustomEvent) => {
      console.log('Location change event received:', event.detail);
      setCurrentLocation(event.detail.newLocation);
    };
    
    // Add event listener
    window.addEventListener('locationChange', handleLocationChange as EventListener);
    
    // Cleanup
    return () => {
      window.removeEventListener('locationChange', handleLocationChange as EventListener);
    };
  }, []);
  
  // Debug current location
  useEffect(() => {
    console.log('Current location in exploration page:', currentLocation);
  }, [currentLocation]);
  
  return (
    <LocationContext.Provider value={{ currentLocation, setCurrentLocation }}>
      {/* Animated sea background with multiple layers */}
      {/* <div className={styles.seaBackground}></div>
      <div className={styles.seaBackgroundLayer}></div> */}
      <div className="bg-amber-100">
      {/* Profile Component - Fixed position on the left side */}
      <div className="fixed top-1/2 left-4  -translate-y-1/2 z-20">
        <Profile />
      </div>
      
      {/* Game container */}
      <div className="flex justify-end items-center  p-0 m-0 relative z-10 w-screen h-screen">
        {/* Game container positioned on the right side */}
        <div className="relative w-[800px] h-[600px] overflow-hidden mr-8">
          <div className="absolute inset-0 border-4 border-[#7c5a3a] rounded-lg z-20 pointer-events-none" style={{boxShadow:'0 0 0 4px #fff7c2, 0 0 0 8px #7c5a3a'}}></div>
          <div className="w-full h-full overflow-hidden rounded-lg">
            {currentLocation === 'johor' ? (
              <InState />
            ) : (
              <InState2 />
            )}
          </div>
        </div>
      </div>
      </div>
      
      {/* Profile Component is now displayed directly on the left side */}
    </LocationContext.Provider>
  );  
}
