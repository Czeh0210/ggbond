import Image from "next/image";
import { CSSProperties } from "react";

export default function OverviewMap() {
  // Define coordinates for each state
  const statePositions = {
    negerisembilan: { x: -240, y: 270 },
    melaka: { x: -250, y: 280 },
    johor: { x: -200, y: 250 }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <h1 className="text-3xl font-bold">Malaysia States Map</h1>
        <p className="text-center max-w-2xl">
          This page shows the geographical layout of selected Malaysian states.
        </p>
      </main>
      
      <footer className="row-start-3 flex flex-col items-center justify-center w-full max-w-2xl">
        <h2 className="text-xl font-semibold mb-4">States of Malaysia</h2>
        
        {/* Map container with relative positioning */}
        <div className="relative w-full max-w-md h-[600px]">
          {/* Negeri Sembilan */}
          <div 
            className="absolute" 
            style={{ 
              top: `${statePositions.negerisembilan.y}px`, 
              left: `${statePositions.negerisembilan.x}px` 
            } as CSSProperties}
          >
            <Image
              src="/assets/negerisembilan.png" 
              alt="Map of Negeri Sembilan"
              width={65}
              height={500}
              className="w-auto h-auto"
            />
          </div>
          
          {/* Melaka */}
          <div 
            className="absolute" 
            style={{ 
              top: `${statePositions.melaka.y}px`, 
              left: `${statePositions.melaka.x}px` 
            } as CSSProperties}
          >
            <Image
              src="/assets/melaka.png" 
              alt="Map of Melaka"
              width={80}
              height={500}
              className="w-auto h-auto"
            />
          </div>
          
          {/* Johor */}
          <div 
            className="absolute" 
            style={{ 
              top: `${statePositions.johor.y}px`, 
              left: `${statePositions.johor.x}px` 
            } as CSSProperties}
          >
            <Image
              src="/assets/johor.png" 
              alt="Map of Johor"
              width={500}
              height={500}
              className="w-auto h-auto"
            />
          </div>
        </div>
        
        <p className="mt-4 text-sm text-gray-600 text-center">
          The green areas represent (from top to bottom): Negeri Sembilan, Melaka, and Johor states.
        </p>
      </footer>
    </div>
  );
}