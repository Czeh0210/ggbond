'use client';

import React, { useState, useContext, useEffect } from 'react';
import { LocationContext } from './LocationContext';

// Define the structure for a landmark's data
export interface LandmarkData {
  name: string;
  location: string;
  mainImage: string;
  type: 'default' | 'airport';
  info: {
    description: string;
    stats: { label: string; value: string | number }[];
  };
  history: {
    title: string;
    text: string;
  };
  photos: string[];
}

interface LandmarkInfoProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  landmark: LandmarkData | null;
}

const LandmarkInfo = ({ open, setOpen, landmark }: LandmarkInfoProps) => {
  const [activeTab, setActiveTab] = useState<'STATS' | 'HISTORY' | 'PHOTOS' | 'FLIGHT'>('STATS');
  const { hasFlightTicket, setCurrentLocation } = useContext(LocationContext);

  useEffect(() => {
    // Reset to the default tab when a new landmark is opened
    if (open) {
      setActiveTab('STATS');
    }
  }, [open, landmark]);

  if (!open || !landmark) {
    return null;
  }
  
  const TabButton = ({ tabName }: { tabName: 'STATS' | 'HISTORY' | 'PHOTOS' | 'FLIGHT' }) => (
    <button
      onClick={() => setActiveTab(tabName)}
      className={`flex-1 py-2 px-2 text-base font-bold uppercase tracking-wider transition-colors border-b-4 ${
        activeTab === tabName
          ? 'border-[#7c5a3a] text-[#7c5a3a]'
          : 'border-transparent text-gray-500 hover:text-[#7c5a3a]'
      }`}
    >
      {tabName}
    </button>
  );
  
  const FlyButton = ({ destination }: { destination: string }) => {
    const handleFly = () => {
      if (hasFlightTicket) {
        setOpen(false); // Close modal
        setCurrentLocation(destination);
      }
    };

    return (
      <button
        onClick={handleFly}
        disabled={!hasFlightTicket}
        className={`w-full py-3 mt-4 text-base font-bold uppercase rounded-md transition-colors ${
          hasFlightTicket
            ? 'bg-[#a86c3c] text-white hover:bg-[#c4884a] border-b-4 border-[#7c5a3a]'
            : 'bg-gray-400 text-gray-200 cursor-not-allowed'
        }`}
      >
        {hasFlightTicket ? `Fly to ${destination}` : 'Ticket Required'}
      </button>
    );
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60" onClick={() => setOpen(false)}>
      <div 
        className="relative w-[500px] max-w-[90vw] bg-[#f7e0a3] shadow-xl pixel-font p-1 overflow-hidden border-8 border-[#a86c3c]"
        style={{ imageRendering: 'pixelated' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-[#bfa46a] border-b-4 border-[#7c5a3a] px-4 py-2">
          <span className="text-xl font-bold text-[#7c5a3a] tracking-widest">{landmark.name}</span>
          <button onClick={() => setOpen(false)} className="text-[#7c5a3a] hover:text-red-600 text-2xl font-bold px-2">✕</button>
        </div>

        {/* Tabs */}
        <div className="flex justify-around bg-[#d3b880] border-b-4 border-[#7c5a3a]">
          <TabButton tabName="STATS" />
          <TabButton tabName="HISTORY" />
          <TabButton tabName="PHOTOS" />
          {landmark.type === 'airport' && <TabButton tabName="FLIGHT" />}
        </div>

        {/* Content */}
        <div className="p-8 bg-[#fff7c2] min-h-[300px]">
          {activeTab === 'STATS' && (
            <div className="flex gap-4">
              <img src={landmark.mainImage} alt={landmark.name} className="w-1/2 border-4 border-[#7c5a3a]" />
              <div className="w-1/2">
                <h3 className="text-lg font-bold text-[#7c5a3a] mb-2">Info</h3>
                <p className="text-base text-gray-800 mb-4 leading-relaxed">{landmark.info.description}</p>
                {landmark.info.stats.map(stat => (
                  <div key={stat.label} className="flex justify-between text-base mb-1">
                    <span className="font-bold">{stat.label}:</span>
                    <span>{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'HISTORY' && (
            <div>
              <h3 className="text-lg font-bold text-[#7c5a3a] mb-2">{landmark.history.title}</h3>
              <p className="text-base text-gray-800 whitespace-pre-line leading-relaxed">{landmark.history.text}</p>
            </div>
          )}

          {activeTab === 'PHOTOS' && (
            <div className="grid grid-cols-2 gap-2">
              {landmark.photos.map((photo, index) => (
                <img key={index} src={photo} alt={`${landmark.name} photo ${index + 1}`} className="w-full h-auto border-2 border-[#7c5a3a]" />
              ))}
            </div>
          )}

          {activeTab === 'FLIGHT' && landmark.type === 'airport' && (
            <div className="text-center">
              <h3 className="text-lg font-bold text-[#7c5a3a] mb-2">Flight Information</h3>
              <p className="text-base text-gray-800 mb-4 leading-relaxed">
                {hasFlightTicket
                  ? 'You have a flight ticket! Ready for your next destination?'
                  : 'You need a flight ticket to travel from this airport.'}
              </p>
              <FlyButton destination="selangor" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandmarkInfo;
