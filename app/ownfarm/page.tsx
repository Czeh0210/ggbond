"use client";
import React, { useState } from "react";
import ReturnMap from "../components/ReturnMap";
import Shop from "../components/Shop";
import Inventory from "../components/Inventory";

export default function Page3() {
  // Shared inventory state
  const [playerDurian, setPlayerDurian] = useState<number>(3);
  const [playerPineapple, setPlayerPineapple] = useState<number>(3);
  const [batuCavesTicket, setBatuCavesTicket] = useState<number>(1);
  const [sapling, setSapling] = useState<number>(0);
  const [coins, setCoins] = useState<number>(52);
  const [aeroplane, setAeroplane] = useState<number>(0);
  const [planted, setPlanted] = useState(Array(9).fill('empty'));
  const handleSickleClick = (index: number) => {
    if (sapling > 0 && planted[index] === 'empty') {
      const newPlanted = [...planted];
      newPlanted[index] = 'sapling';
      setPlanted(newPlanted);
      setSapling(sapling - 1);
      // After 10 seconds, randomly become durian or pineapple
      setTimeout(() => {
        setPlanted(current => {
          const updated = [...current];
          if (updated[index] === 'sapling') {
            updated[index] = Math.random() < 0.5 ? 'durian' : 'pineapple';
          }
          return updated;
        });
      }, 10000);
    }
  };
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const items = [
    { name: "DURIAN", img: "/DURIAN.png", count: playerDurian },
    { name: "PINEAPPLE", img: "/PINEAPPLE.png", count: playerPineapple },
    { name: "BATU CAVES TICKET", img: "/BATUCAVES.png", count: batuCavesTicket },
    { name: "SAPLING", img: "/sapling.png", count: sapling },
  ];

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/greenfield.png"
          alt="Green Field Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Return Map Button - Top Left Corner */}
      <div className="absolute top-4 left-4 z-20">
        <ReturnMap />
      </div>

      {/* Shop Icon - Top Right Corner */}
      <div className="absolute top-4 right-4 z-20 flex flex-col items-center">
        <Shop
          playerDurian={playerDurian}
          setPlayerDurian={setPlayerDurian}
          playerPineapple={playerPineapple}
          setPlayerPineapple={setPlayerPineapple}
          batuCavesTicket={batuCavesTicket}
          setBatuCavesTicket={setBatuCavesTicket}
          sapling={sapling}
          setSapling={setSapling}
          coins={coins}
          setCoins={setCoins}
          aeroplane={aeroplane}
          setAeroplane={setAeroplane}
        />
        <Inventory
          playerDurian={playerDurian}
          playerPineapple={playerPineapple}
          batuCavesTicket={batuCavesTicket}
          sapling={sapling}
          aeroplane={aeroplane}
          setPlayerDurian={setPlayerDurian}
        />
      </div>

      {/* Farm Title */}
      <div className="relative z-10 w-full text-center pt-8">
        <h1 className="text-3xl font-bold bg-amber-100/80 inline-block px-6 py-2 rounded-lg shadow-md">
          Your Farm
        </h1>
      </div>

      {/* Main container for centering the farm */}
      <div className="relative z-10 flex items-center justify-center h-[calc(100vh-120px)] py-4">
        {/* Farm Container - Wraps farmland grid and all decorative elements */}
        <div className="farm-container relative w-fit mx-auto my-auto">
          {/* Wooden Plank - Top Left */}
          <div className="relative -top-[3rem] -left-[3rem] w-[12vw] h-[12vw] max-w-[100px] max-h-[100px] z-20 float-left">
            <img
              src="/woodenplank.png"
              alt="Wooden Plank"
              className="w-full h-full object-contain transform scale-90"
            />
          </div>

          {/* House - Top Right */}
          <div className="relative -top-[3rem] -right-[3rem] w-[12vw] h-[12vw] max-w-[100px] max-h-[100px] z-20 float-right">
            <img
              src="/house.png"
              alt="Farm House"
              className="w-full h-full object-contain transform scale-90"
            />
          </div>

          {/* Farmland Grid Container */}
          <div className="clear-both relative grid grid-cols-3 grid-rows-3 gap-2 md:gap-4">
            {/* 3x3 Grid of Farmland Tiles */}
            {Array(9)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="relative w-[15vw] h-[15vw] min-w-[80px] min-h-[80px] max-w-[120px] max-h-[120px]"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img
                    src="/farmland.png"
                    alt={`Farmland Tile ${index + 1}`}
                    className="w-full h-full object-contain drop-shadow-md"
                  />
                  {planted[index] === 'sapling' && (
                    <img
                      src="/landsapling.png"
                      alt="Planted Sapling"
                      className="absolute left-1/2 top-1/2 w-4/5 h-4/5 -translate-x-1/2 -translate-y-1/2 pointer-events-none pixelated"
                    />
                  )}
                  {planted[index] === 'durian' && (
                    <img
                      src="/RMBDURIAN.png"
                      alt="Durian"
                      className="absolute left-1/2 top-1/2 w-4/5 h-4/5 -translate-x-1/2 -translate-y-1/2 pointer-events-none pixelated"
                    />
                  )}
                  {planted[index] === 'pineapple' && (
                    <img
                      src="/RMBPINEAPPLE.png"
                      alt="Pineapple"
                      className="absolute left-1/2 top-1/2 w-4/5 h-4/5 -translate-x-1/2 -translate-y-1/2 pointer-events-none pixelated"
                    />
                  )}
                  {/* Collect button for fruit */}
                  {(planted[index] === 'durian' || planted[index] === 'pineapple') && (
                    <div
                      className="absolute top-0 left-0 z-20 cursor-pointer"
                      style={{ pointerEvents: 'auto' }}
                      onClick={() => {
                        if (planted[index] === 'durian') setPlayerDurian(d => d + 1);
                        if (planted[index] === 'pineapple') setPlayerPineapple(p => p + 1);
                        const newPlanted = [...planted];
                        newPlanted[index] = 'empty';
                        setPlanted(newPlanted);
                      }}
                    >
                      <div className="bg-amber-100 rounded-full p-1 shadow-md transform -translate-x-1/4 -translate-y-1/4 border-4" style={{ borderColor: '#a86c3c' }}>
                        <img
                          src="/sickle.png"
                          alt="Collect Fruit"
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                    </div>
                  )}
                  {/* Sickle icon for planting */}
                  {planted[index] === 'empty' && hoveredIndex === index && sapling > 0 && (
                    <div
                      className="absolute top-0 left-0 z-10"
                      style={{ pointerEvents: 'auto' }}
                      onClick={() => handleSickleClick(index)}
                    >
                      <div className="bg-amber-100 rounded-full p-1 shadow-md transform -translate-x-1/4 -translate-y-1/4 border-4" style={{ borderColor: '#a86c3c' }}>
                        <img
                          src="/landsapling.png"
                          alt="Plant Sapling"
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}