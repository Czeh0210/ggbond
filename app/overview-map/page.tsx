import Image from "next/image";
import { CSSProperties } from "react";

export default function OverviewMap() {
  // Define coordinates for each pin using percentage values
  const pinPositions = [
    { x: "10%", y: "15%" },  // Pin 1
    { x: "20%", y: "25%" },  // Pin 2
    { x: "30%", y: "20%" },  // Pin 3
    { x: "40%", y: "30%" },  // Pin 4
    { x: "50%", y: "25%" },  // Pin 5
    { x: "60%", y: "35%" },  // Pin 6
    { x: "70%", y: "40%" },  // Pin 7
    { x: "25%", y: "45%" },  // Pin 8
    { x: "35%", y: "55%" },  // Pin 9
    { x: "45%", y: "65%" },  // Pin 10
    { x: "55%", y: "60%" },  // Pin 11
    { x: "65%", y: "70%" },  // Pin 12
    { x: "75%", y: "50%" },  // Pin 13
  ];

  return (
    <div className="grid grid-rows-[20px_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center w-full">
        <h1 className="text-3xl font-bold">Malaysia Map Overview</h1>
        
        {/* Map container with relative positioning */}
        <div className="relative w-full max-w-4xl h-[600px] border border-gray-200 rounded-lg overflow-hidden">
          {/* Malaysia map as background */}
          <Image
            src="/assets/malaysiamap.png"
            alt="Map of Malaysia"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
          
          {/* Place 13 pins on the map */}
          {pinPositions.map((position, index) => (
            <div 
              key={index}
              className="absolute" 
              style={{ 
                top: position.y, 
                left: position.x,
                zIndex: 10
              } as CSSProperties}
            >
              <Image
                src="/assets/pin.png" 
                alt={`Location pin ${index + 1}`}
                width={40}
                height={40}
                className="w-auto h-auto object-contain"
              />
            </div>
          ))}
        </div>
        
        <p className="text-center max-w-2xl mt-4">
          Interactive map of Malaysia with key locations marked by pins.
        </p>
      </main>
      
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/"
        >
          Back to Home
        </a>
      </footer>
    </div>
  );
}