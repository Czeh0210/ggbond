'use client'
import { useState, createContext } from 'react';
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import InState from "../components/InState";
import InState2 from "../components/InState2";

// Import Game component dynamically to avoid SSR issues with Phaser
const GameWithNoSSR = dynamic(
  () => import('../components/InState'),
  { ssr: false }
);

// Create a context with a default value
export const LocationContext = createContext({
  currentLocation: 'johor',
  setCurrentLocation: (location: string) => {}
});

export default function Home() {
  const [currentLocation, setCurrentLocation] = useState('johor');
  
  return (
    <LocationContext.Provider value={{ currentLocation, setCurrentLocation }}>
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
        {/* Game container with fixed dimensions */}
        <div className="w-[800px] h-[600px] border border-gray-300 rounded-lg overflow-hidden shadow-lg">
          {currentLocation === 'johor' ? (
            <InState />
          ) : (
            <InState2 />
          )}
        </div>
        
        <footer className="mt-8 flex gap-[24px] flex-wrap items-center justify-center">
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 bg-green-100 px-3 py-1 rounded-full transition-colors hover:bg-green-200"
            href="/overview-map"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Map icon"
              width={16}
              height={16}
            />
            View Overview Map
          </Link>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
        </footer>
      </div>
    </LocationContext.Provider>
  );
}
