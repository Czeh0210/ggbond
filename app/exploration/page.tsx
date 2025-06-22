'use client'
import { useState, useEffect } from 'react';
import InState from "../components/JohorState";
import InState2 from "../components/SelangorState";
import Profile from "../components/Profile";
import BigMap from "../components/BigMap";
import { LocationContext } from '../components/LocationContext';

export default function Home() {
  const [currentLocation, setCurrentLocation] = useState('johor');
  const [hasFlightTicket, setHasFlightTicket] = useState(false);
  const [notification, setNotification] = useState('');
  
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

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification('');
      }, 3000); // Notification disappears after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [notification]);
  
  return (
    <LocationContext.Provider value={{ currentLocation, setCurrentLocation, hasFlightTicket, setHasFlightTicket, notification, setNotification }}>
      <div className="flex h-screen bg-amber-100 relative">
        {notification && (
          <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-[#a86c3c] text-white text-lg font-bold px-6 py-3 rounded-lg shadow-lg z-50">
            {notification}
          </div>
        )}
        {/* Left Sidebar */}
        <div className="flex flex-col gap-8 p-4 z-10">
          <BigMap />
          <Profile />
        </div>

        {/* Main Game Content */}
        <div className="flex-grow flex items-center justify-center">
          <div className="relative w-[800px] h-[600px] overflow-hidden rounded-lg border-4 border-[#7c5a3a]" style={{boxShadow:'0 0 0 4px #fff7c2, 0 0 0 8px #7c5a3a'}}>
            {currentLocation === 'johor' ? (
              <InState />
            ) : (
              <InState2 />
            )}
          </div>
        </div>
      </div>
    </LocationContext.Provider>
  );
}
