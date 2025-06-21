import Image from "next/image";
import Link from "next/link";
import { CSSProperties } from "react";

type Pin = {
  x: string;
  y: string;
  name: string;
  path: string;
};

type MapWithPinsProps = {
  pins: Pin[];
  mapSrc: string;
  mapAlt?: string;
  containerClassName?: string;
};

export default function MapWithPins({
  pins,
  mapSrc,
  mapAlt = "Map",
  containerClassName = "",
}: MapWithPinsProps) {
  return (
    <div className={`relative ${containerClassName}`}>
      {/* Map image */}
      <Image
        src={mapSrc}
        alt={mapAlt}
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
  );
}