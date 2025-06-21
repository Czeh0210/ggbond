import Image from "next/image";
import Link from "next/link";
import { CSSProperties } from "react";

export default function OverviewMap() {
  // Define coordinates and destination pages for each pin
  const pins = [
    { x: "15%", y: "12%", name: "Kedah", path: "/states/kedah" },
    { x: "12.5%", y: "0%", name: "Perlis", path: "/states/perlis" },
    { x: "13%", y: "16%", name: "Penang", path: "/states/penang" },
    { x: "18%", y: "30%", name: "Perak", path: "/states/perak" },
    { x: "21%", y: "50%", name: "Selangor", path: "/states/selangor" },
    { x: "30%", y: "45%", name: "Pahang", path: "/states/pahang" },
    { x: "25%", y: "22%", name: "Kelantan", path: "/states/kelantan" },
    { x: "34%", y: "30%", name: "Terengganu", path: "/states/terengganu" },
    { x: "25%", y: "57%", name: "Negeri Sembilan", path: "/states/negeri-sembilan" },
    { x: "26%", y: "65%", name: "Melaka", path: "/states/melaka" },
    { x: "34%", y: "70%", name: "Johor", path: "/states/johor" },
    { x: "62%", y: "56%", name: "Sabah", path: "/states/sabah" },
    { x: "75%", y: "30%", name: "Sarawak", path: "/states/sarawak" },
  ];

  return (
    <div className="grid grid-rows-[20px_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center w-full">
        <h1 className="text-3xl font-bold">Malaysia Map Overview</h1>
        
        {/* Map container with enhanced border */}
        <div className="relative w-full h-[600px] border-4 border-blue-500 rounded-lg overflow-hidden shadow-lg p-2 bg-white">
          {/* Malaysia map as background */}
          <Image
            src="/assets/malaysiamap.png"
            alt="Map of Malaysia"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
          
          {/* Place clickable pins on the map */}
          {pins.map((pin, index) => (
            <Link 
              key={index}
              href={pin.path}
              className="absolute cursor-pointer transition-transform hover:scale-110 group"
              style={{ 
                top: pin.y, 
                left: pin.x,
                zIndex: 10
              } as CSSProperties}
              title={`Visit ${pin.name} page`}
            >
              <div className="relative">
                <Image
                  src="/assets/pin.png" 
                  alt={`${pin.name} location pin`}
                  width={40}
                  height={40}
                  className="w-auto h-auto object-contain"
                />
                <span className="absolute whitespace-nowrap top-full left-1/2 transform -translate-x-1/2 mt-1 text-xs font-semibold bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
                  {pin.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
        
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