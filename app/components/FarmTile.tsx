'use client'
import React, { useState } from 'react';

type CropState = 'grown' | 'planted' | 'stolen';

interface FarmTileProps {
  index: number;
  state: CropState;
  onSteal: (index: number) => void;
}

export default function FarmTile({ index, state, onSteal }: FarmTileProps) {
  const [hovered, setHovered] = useState(false);
  
  // Determine the image source based on the crop state
  const getImageSrc = (state: CropState): string => {
    switch(state) {
      case 'grown':
        return '/well-grown.png';
      case 'planted':
        return '/planted.png';
      case 'stolen':
        return '/farmland.png';
      default:
        return '/farmland.png';
    }
  };

  // Determine if the tile is stealable (only grown crops can be stolen)
  const isStealable = state === 'grown';

  return (
    <div 
      className={`relative w-[15vw] h-[15vw] min-w-[80px] min-h-[80px] max-w-[120px] max-h-[120px] ${isStealable ? 'cursor-pointer' : ''}`}
      onClick={isStealable ? () => onSteal(index) : undefined}
      onMouseEnter={() => isStealable && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={getImageSrc(state)}
        alt={`Farm Tile ${index + 1}`}
        className="w-full h-full object-contain drop-shadow-md transition-transform duration-200 ease-in-out"
      />
      
      {/* Sickle icon for stealing grown crops */}
      {isStealable && hovered && (
        <div className="absolute top-0 left-0 z-10">
          <div className="bg-amber-100 rounded-full p-1 shadow-md transform -translate-x-1/4 -translate-y-1/4">
            <img 
              src="/sickle.png" 
              alt="Steal Crop" 
              className="w-8 h-8 object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}