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
        />
        <Inventory
          playerDurian={playerDurian}
          playerPineapple={playerPineapple}
          batuCavesTicket={batuCavesTicket}
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
                <div key={index} className="relative w-[15vw] h-[15vw] min-w-[80px] min-h-[80px] max-w-[120px] max-h-[120px]">
                  <img
                    src="/farmland.png"
                    alt={`Farmland Tile ${index + 1}`}
                    className="w-full h-full object-contain drop-shadow-md"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}