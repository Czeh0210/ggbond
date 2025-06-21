'use client'
import { useState } from 'react';
import Image from "next/image";
import dynamic from "next/dynamic";
import InState from "../components/JohorState";
import InState2 from "../components/SelangorState";

// Import Game component dynamically to avoid SSR issues with Phaser
const GameWithNoSSR = dynamic(
  () => import('../components/JohorState'),
  { ssr: false }
);

// Create a context to share the current location state across components
import { createContext } from 'react';

// Create a context with a default value
export const LocationContext = createContext({
  currentLocation: 'johor',
  setCurrentLocation: (location: string) => {}
});

export default function Home() {
  const [currentLocation, setCurrentLocation] = useState('johor');
  
  return (
    <LocationContext.Provider value={{ currentLocation, setCurrentLocation }}>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        {/* Game container with fixed dimensions */}
        <div className="w-[800px] h-[600px] border border-gray-300 rounded-lg overflow-hidden shadow-lg">
          {currentLocation === 'johor' ? (
            <InState />
          ) : (
            <InState2 />
          )}
        </div>
      </div>
    </LocationContext.Provider>
  );  
}
