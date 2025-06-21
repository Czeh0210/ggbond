'use client';

import { useState, useContext, createContext } from 'react';

// Define the type for our location context
type LocationContextType = {
  currentLocation: string;
  setCurrentLocation: (location: string) => void;
};

// Create a fallback context in case the component is used outside of a LocationContext provider
const FallbackLocationContext = createContext<LocationContextType>({
  currentLocation: 'johor',
  setCurrentLocation: (location: string) => {}
});

// Custom hook to get the LocationContext from either page or exploration page
function useLocationContext(): LocationContextType {
  try {
    // First try to import from main page
    const MainLocationContext = require('../app/page').LocationContext;
    return useContext(MainLocationContext);
  } catch (error) {
    try {
      // Then try to import from exploration page
      const ExplorationLocationContext = require('../app/exploration/page').LocationContext;
      return useContext(ExplorationLocationContext);
    } catch (error) {
      // Fallback to our local context if neither is available
      return useContext(FallbackLocationContext);
    }
  }
}

interface LandmarkInfoProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  landmarkType?: 'lamp' | 'airport' | 'temple';
  hasFlightTicket?: boolean;
  landmarkImage?: string;
}

// FlyButton component to handle location changes
function FlyButton({ destination, setOpen }: { destination: string, setOpen: (open: boolean) => void }) {
  const { currentLocation, setCurrentLocation } = useLocationContext();
  
  const handleFly = () => {
    // Close the landmark info modal
    setOpen(false);
    
    console.log('Current location before change:', currentLocation);
    
    // Change the location based on destination
    if (destination === 'kuala_lumpur') {
      console.log('Setting location to kuala_lumpur');
      setCurrentLocation('kuala_lumpur');
    } else if (destination === 'singapore') {
      // For now, we'll just use InState2 for both destinations
      console.log('Setting location to kuala_lumpur (from Singapore)');
      setCurrentLocation('kuala_lumpur');
    }
    
    // Force a location update by dispatching a custom event
    const locationChangeEvent = new CustomEvent('locationChange', { 
      detail: { newLocation: 'kuala_lumpur' } 
    });
    window.dispatchEvent(locationChangeEvent);
  };
  
  return (
    <button 
      onClick={handleFly}
      className="w-full bg-[#a86c3c] hover:bg-[#8a5a2c] text-white py-1 rounded pixel-font"
    >
      FLY NOW
    </button>
  );
}

const LandmarkInfo = ({ open, setOpen, landmarkType = 'lamp', hasFlightTicket = true, landmarkImage = "/assets/tangible/SultanMosque.png" }: LandmarkInfoProps) => {
  // Use different tab state types based on landmark type
  const [tab, setTab] = useState<'INFO' | 'FLIGHT' | 'HISTORY' | 'PHOTOS'>(landmarkType === 'airport' ? 'INFO' : 'INFO');

  return (
    <div>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="relative ml-180 mt-13 w-[450px] h-[400px] rounded-lg border-4 border-[#7c5a3a] bg-[#f7e0a3] shadow-xl pixel-font p-0 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between bg-[#bfa46a] border-b-4 border-[#7c5a3a] px-4 py-2">
              <div className="flex items-center gap-2">
                <img 
                  src={landmarkType === 'airport' ? "/map/airport.png" : "/assets/lamp(unlighted).png"} 
                  alt={landmarkType} 
                  className="w-6 h-6 inline-block object-contain" 
                />
                <span className="font-bold text-lg text-[#fff7c2] drop-shadow capitalize">{landmarkType}</span>
              </div>
              <span className="text-2xl font-bold text-[#7c5a3a] tracking-widest">LANDMARK</span>
              <button onClick={() => setOpen(false)} className="text-[#7c5a3a] hover:text-red-600 text-xl font-bold px-2">✕</button>
            </div>
            {/* Tabs */}
            <div className="flex bg-[#e2c290] border-b-4 border-[#7c5a3a]">
              {(landmarkType === 'airport' ? ['INFO', 'FLIGHT', 'HISTORY'] : ['INFO', 'HISTORY', 'PHOTOS']).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t as any)}
                  className={`flex-1 py-2 font-bold text-lg border-r-2 border-[#7c5a3a] last:border-r-0 ${tab === t ? 'bg-[#f7e0a3] text-[#7c5a3a]' : 'bg-[#e2c290] text-[#7c5a3a] hover:bg-[#f7e0a3]'}`}
                >
                  {t}
                </button>
              ))}
            </div>
            {/* Content */}
            <div className="p-5 bg-[#f7e0a3] h-[350px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#a86c3c] scrollbar-track-[#e2c290] flex flex-col">
              {tab === 'INFO' && (
                <div className="w-full border-4 border-[#a86c3c] rounded-lg bg-[#f7e0a3] p-4 shadow-inner" style={{boxShadow:'0 0 0 4px #bfa46a'}}>
                  <div className="flex items-start gap-4">
                    {/* Left: Image */}
                    <div className="p-2 border-4 border-[#a86c3c] bg-[#e2c290] rounded-lg flex items-center justify-center" style={{boxShadow:'0 0 0 3px #bfa46a'}}>
                      <img 
                        src={landmarkType === 'airport' ? "/map/airportpixel.png" : landmarkImage} 
                        alt={landmarkType} 
                        className="w-24 h-24 object-contain pixelated" 
                      />
                    </div>
                    {/* Right: Information */}
                    <div className="flex-1">
                      <h3 className="font-bold text-2xl text-[#7c5a3a] tracking-widest pixel-font mb-2 capitalize">
                        {landmarkType === 'airport' ? 'Johor Bahru Airport' : 
                         landmarkType === 'temple' ? 'Johor Temple Parade' : 
                         'Sultan Ibrahim Building'}
                      </h3>
                      <p className="text-[#7c5a3a] mb-2">
                        {landmarkType === 'airport' 
                          ? 'Senai International Airport is the main airport serving Johor Bahru and the southern region of Peninsular Malaysia.'
                          : landmarkType === 'temple'
                          ? 'The Temple Parade is a vibrant cultural celebration in Johor, featuring ornate decorations, traditional music, and colorful processions honoring local deities.'
                          : 'The Sultan Ibrahim Building is an iconic historical landmark in Johor Bahru, Malaysia. Built in 1940, it features a distinct blend of Malay and colonial architectural styles.'}
                      </p>
                      <p className="text-[#7c5a3a] mb-2">
                        {landmarkType === 'lamp' && 'These ornate lamps surrounding the building are part of the original design, illuminating the structure at night and highlighting its architectural beauty.'}
                        {landmarkType === 'temple' && 'This annual celebration brings together the community and showcases the rich cultural heritage of Johor\'s diverse population.'}
                      </p>
                      {landmarkType === 'airport' && (
                        <div className="flex items-center gap-2 mt-3">
                          <span className="bg-[#a86c3c] text-white px-3 py-1 rounded-full text-sm">International Flights</span>
                          <span className="bg-[#a86c3c] text-white px-3 py-1 rounded-full text-sm">Domestic Flights</span>
                        </div>
                      )}
                      {landmarkType === 'lamp' && (
                        <div className="flex items-center gap-2 mt-3">
                          <span className="bg-[#a86c3c] text-white px-3 py-1 rounded-full text-sm">Historical Site</span>
                          <span className="bg-[#a86c3c] text-white px-3 py-1 rounded-full text-sm">Cultural Heritage</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
              {tab === 'FLIGHT' && landmarkType === 'airport' && (
                <div className="w-full border-4 border-[#a86c3c] rounded-lg bg-[#f7e0a3] p-4 shadow-inner" style={{boxShadow:'0 0 0 4px #bfa46a'}}>
                  <h3 className="font-bold text-xl text-[#7c5a3a] tracking-widest pixel-font mb-3 text-center">FLIGHT STATUS</h3>
                  
                  {hasFlightTicket ? (
                    <>
                      <div className="bg-[#e2c290] p-3 rounded-lg border-2 border-[#a86c3c] mb-4">
                        <div className="flex justify-between items-center">
                          <span className="text-[#7c5a3a] font-bold">Flight Ticket</span>
                          <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">AVAILABLE</span>
                        </div>
                      </div>
                      
                      <h4 className="font-bold text-lg text-[#7c5a3a] mb-2">Choose Destination:</h4>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-[#e2c290] p-3 rounded-lg border-2 border-[#a86c3c]">
                          <h5 className="font-bold text-[#7c5a3a] mb-1">Kuala Lumpur</h5>
                          <p className="text-xs text-[#7c5a3a] mb-2">Capital city of Malaysia</p>
                          <FlyButton destination="kuala_lumpur" setOpen={setOpen} />
                        </div>
                        
                        <div className="bg-[#e2c290] p-3 rounded-lg border-2 border-[#a86c3c]">
                          <h5 className="font-bold text-[#7c5a3a] mb-1">Singapore</h5>
                          <p className="text-xs text-[#7c5a3a] mb-2">Island city-state</p>
                          <FlyButton destination="singapore" setOpen={setOpen} />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="bg-[#e2c290] p-3 rounded-lg border-2 border-[#a86c3c] mb-4">
                        <div className="flex justify-between items-center">
                          <span className="text-[#7c5a3a] font-bold">Flight Ticket</span>
                          <span className="bg-red-600 text-white px-2 py-1 rounded text-xs">NOT AVAILABLE</span>
                        </div>
                      </div>
                      
                      <div className="text-center mt-4">
                        <button className="bg-[#a86c3c] hover:bg-[#8a5a2c] text-white py-2 px-4 rounded-lg pixel-font">
                          PURCHASE TICKET
                        </button>
                      </div>
                    </>
                  )}
                </div>
              )}
              {tab === 'HISTORY' && (
                <div className="w-full border-4 border-[#a86c3c] rounded-lg bg-[#f7e0a3] p-4 shadow-inner" style={{boxShadow:'0 0 0 4px #bfa46a'}}>
                  <h3 className="font-bold text-xl text-[#7c5a3a] tracking-widest pixel-font mb-3">
                    {landmarkType === 'airport' ? 'AIRPORT HISTORY' : 'LANDMARK HISTORY'}
                  </h3>
                  <p className="text-[#7c5a3a] mb-3">
                    {landmarkType === 'airport' 
                      ? 'Senai International Airport was established in 1974 and has since become a vital transportation hub for the southern region of Malaysia. It connects Johor to various domestic and international destinations.'
                      : 'The Sultan Ibrahim Building was commissioned by Sultan Ibrahim of Johor and completed in 1940 as the state secretariat building. It was named after the sultan and designed by renowned architect Palmer and Turner.'}
                  </p>
                  <p className="text-[#7c5a3a] mb-3">
                    {landmarkType === 'airport' 
                      ? 'The airport has undergone several expansions and renovations over the years to accommodate increasing passenger traffic and improve facilities.'
                      : 'During World War II, the building was used as the Japanese military administrative center. After the war, it returned to its original function as a government office.'}
                  </p>
                  <p className="text-[#7c5a3a]">
                    {landmarkType === 'lamp' && 'The ornate lamps that surround the building were part of the original design. They were carefully crafted to complement the architectural style and have been maintained in their original form to preserve the historical authenticity of the site.'}
                  </p>
                </div>
              )}
              {tab === 'PHOTOS' && landmarkType === 'lamp' && (
                <div className="w-full border-4 border-[#a86c3c] rounded-lg bg-[#f7e0a3] p-4 shadow-inner" style={{boxShadow:'0 0 0 4px #bfa46a'}}>
                  <h3 className="font-bold text-xl text-[#7c5a3a] tracking-widest pixel-font mb-3 text-center">PHOTO GALLERY</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="border-2 border-[#a86c3c] rounded-lg p-1 bg-[#e2c290]">
                      <div className="bg-[#bfa46a] h-24 w-full rounded flex items-center justify-center">
                        <span className="text-[#7c5a3a] text-sm">Building Exterior</span>
                      </div>
                    </div>
                    <div className="border-2 border-[#a86c3c] rounded-lg p-1 bg-[#e2c290]">
                      <div className="bg-[#bfa46a] h-24 w-full rounded flex items-center justify-center">
                        <span className="text-[#7c5a3a] text-sm">Lamp Close-up</span>
                      </div>
                    </div>
                    <div className="border-2 border-[#a86c3c] rounded-lg p-1 bg-[#e2c290]">
                      <div className="bg-[#bfa46a] h-24 w-full rounded flex items-center justify-center">
                        <span className="text-[#7c5a3a] text-sm">Night View</span>
                      </div>
                    </div>
                    <div className="border-2 border-[#a86c3c] rounded-lg p-1 bg-[#e2c290]">
                      <div className="bg-[#bfa46a] h-24 w-full rounded flex items-center justify-center">
                        <span className="text-[#7c5a3a] text-sm">Historical Photo</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* Pixel-art style border */}
            <div className="absolute inset-0 pointer-events-none border-4 border-[#fff7c2] rounded-lg" style={{boxShadow:'0 0 0 4px #7c5a3a'}}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandmarkInfo;
