'use client'
import { useState } from 'react';
import Shop from "../components/Shop";
import ReturnMap from "../components/ReturnMap";
import FarmTile from "../components/FarmTile";

// Import the CropState type from FarmTile
type CropState = 'grown' | 'planted' | 'stolen';

export default function Page3() {
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
      <div className="absolute top-4 right-4 z-20">
        <Shop />
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
          {/* Wooden Plank - Top Left */}
          <div className="relative -top-[3rem] -left-[3rem] w-[12vw] h-[12vw] max-w-[100px] max-h-[100px] z-20 float-left">
            <img
              src="/woodenplank.png"
              alt="Wooden Plank"
              className="w-full h-full object-contain transform scale-90"
            />
          </div>

          {/* House - Top Right */}
          <div className="relative -top-[3rem] -right-[3rem] w-[12vw] h-[12vw] max-w-[100px] max-h-[100px] z-20 float-right">
            <img
              src="/house.png"
              alt="Farm House"
              className="w-full h-full object-contain transform scale-90"
            />
          </div>

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