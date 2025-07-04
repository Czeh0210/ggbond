"use client";
import React, { useState } from "react";
import Inventory from "../components/Inventory";
import ReturnMap from "../components/ReturnMap";
import FarmTile from "../components/FarmTile";

export default function friendfarm() {

  const [playerDurian, setPlayerDurian] = useState<number>(3);
  const [playerPineapple, setPlayerPineapple] = useState<number>(3);
  const [batuCavesTicket, setBatuCavesTicket] = useState<number>(1);
  const [sapling, setSapling] = useState<number>(0);
  const [aeroplane, setAeroplane] = useState<number>(0);

// Import the CropState type from FarmTile
type CropState = 'grown' | 'planted' | 'stolen';
  // Initialize crop states: first row is grown, rest are planted
  const [cropStates, setCropStates] = useState<CropState[]>([
    'grown', 'grown', 'grown',
    'planted', 'planted', 'planted',
    'planted', 'planted', 'planted'
  ]);

  // Track number of stolen crops
  const [stolenCount, setStolenCount] = useState(0);
  
  // Handle stealing a crop
  const handleSteal = (index: number) => {
    if (cropStates[index] === 'grown') {
      const newCropStates = [...cropStates];
      newCropStates[index] = 'stolen';
      setCropStates(newCropStates);
      setStolenCount(prev => prev + 1);
      
      // Always add durian to inventory when stealing
      setPlayerDurian(prev => prev + 1);
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/greenfield.png"
          alt="Green Field Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Return Map Button - Top Left Corner */}
      <div className="absolute top-4 left-4 z-20">
        <ReturnMap />
      </div>

      {/* Shop Icon - Top Right Corner */}
      <div className="absolute top-4 right-4 z-20 flex flex-col items-center">
        <Inventory
          playerDurian={playerDurian}
          playerPineapple={playerPineapple}
          batuCavesTicket={batuCavesTicket}
          sapling={sapling}
          aeroplane={aeroplane}
          setPlayerDurian={setPlayerDurian}
        />
      </div>

      {/* Notification Area */}
      <div className="relative z-10 w-full text-center pt-4">
        <div className="bg-amber-100/80 inline-block px-4 py-1 rounded-lg shadow-md text-sm md:text-base">
          You are visiting <span className="font-bold">Friend</span>'s farm
          {stolenCount > 0 && (
            <span className="ml-2 text-green-700">• Stolen crops: {stolenCount}</span>
          )}
        </div>
      </div>

      {/* Farm Title */}
      <div className="relative z-10 w-full text-center pt-4">
        <h1 className="text-3xl font-bold bg-amber-100/80 inline-block px-6 py-2 rounded-lg shadow-md">
          Friend's Farm
        </h1>
      </div>

      {/* Main container for centering the farm */}
      <div className="relative z-10 flex items-center justify-center h-[calc(100vh-160px)] py-4">
        {/* Farm Container - Wraps farmland grid and all decorative elements */}
        <div className="farm-container relative w-fit mx-auto my-auto">

          {/* Farmland Grid Container */}
          <div className="clear-both relative grid grid-cols-3 grid-rows-3 gap-2 md:gap-4">
            {/* 3x3 Grid of Farmland Tiles with different states */}
            {cropStates.map((state, index) => (
              <FarmTile 
                key={index} 
                index={index} 
                state={state} 
                onSteal={handleSteal} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
