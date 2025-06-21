import Image from "next/image";
import Link from "next/link";
import { CSSProperties } from "react";

export default function OverviewMap() {
  // Define coordinates and destination pages for each pin
  const pins = [
    { x: "2%", y: "16%", name: "Kedah", path: "/states/kedah" },
    { x: "-0.5%", y: "7%", name: "Perlis", path: "/states/perlis" },
    { x: "-1%", y: "24%", name: "Penang", path: "/states/penang" },
    { x: "5%", y: "34%", name: "Perak", path: "/states/perak" },
    { x: "11%", y: "54%", name: "Selangor", path: "/states/selangor" },
    { x: "20%", y: "49%", name: "Pahang", path: "/states/pahang" },
    { x: "18%", y: "29%", name: "Kelantan", path: "/states/kelantan" },
    { x: "27%", y: "34%", name: "Terengganu", path: "/states/terengganu" },
    { x: "17%", y: "61%", name: "Negeri Sembilan", path: "/states/negeri-sembilan" },
    { x: "18%", y: "67%", name: "Melaka", path: "/states/melaka" },
    { x: "29%", y: "71%", name: "Johor", path: "/overview-map/johor" },
    { x: "65%", y: "60%", name: "Sabah", path: "/states/sabah" },
    { x: "85%", y: "34%", name: "Sarawak", path: "/states/sarawak" },
  ];

  return (
    <>
      {/* Fixed background image that covers the entire viewport */}
      <div 
        className="fixed inset-0 w-full h-full z-[-1]"
        style={{
          backgroundImage: "url('/assets/background1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />
      
      <div className="grid grid-rows-[20px_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center w-full">
          <h1 className="text-3xl font-bold bg-white/80 px-4 py-2 rounded">Malaysia Map Overview</h1>
          
          {/* Map container with relative positioning - now transparent */}
          <div className="relative w-full max-w-4xl h-[600px] overflow-hidden bg-transparent">
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
                  <span className="absolute whitespace-nowrap top-full left-1/2 transform -translate-x-1/2 mt-1 text-xs font-semibold bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    {pin.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          
          <p className="text-center max-w-2xl mt-4 bg-white/80 px-4 py-2 rounded">
            Interactive map of Malaysia. Hover over any pin to see the state name, and click to learn more.
          </p>
        </main>
        
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center bg-white/80 px-4 py-2 rounded">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="/"
          >
            Back to Home
          </a>
        </footer>
      </div>
    </>
  );
}