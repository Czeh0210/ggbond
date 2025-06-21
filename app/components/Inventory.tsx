"use client";
import React, { useState } from "react";

type InventoryProps = {
  playerDurian: number;
  playerPineapple: number;
  batuCavesTicket: number;
  sapling: number;
  aeroplane: number;
  setPlayerDurian: React.Dispatch<React.SetStateAction<number>>;
};

export default function Inventory({
  playerDurian,
  playerPineapple,
  batuCavesTicket,
  sapling,
  aeroplane,
  setPlayerDurian,
}: InventoryProps) {
  const [open, setOpen] = useState(false);

  const items = [
    { name: "DURIAN", img: "/DURIAN.png", count: playerDurian },
    { name: "PINEAPPLE", img: "/PINEAPPLE.png", count: playerPineapple },
    { name: "BATU CAVES TICKET", img: "/BATUCAVES.png", count: batuCavesTicket },
    { name: "SAPLING", img: "/sapling.png", count: sapling },
    { name: "AEROPLANE", img: "/aeroplane.png", count: aeroplane },
  ];

  return (
    <>
      <div className="flex justify-center items-center mt-6 relative group">
        <img
          src="/Box.png"
          alt="Inventory Chest"
          className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] pixelated cursor-pointer hover:scale-110 transition-transform duration-200"
          onClick={() => setOpen(true)}
        />
        <div className="tooltip absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-amber-100 px-2 py-1 rounded text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Open Inventory
        </div>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="relative w-[350px] rounded-lg border-4 border-[#7c5a3a] bg-[#f7e0a3] shadow-xl pixel-font p-0 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between bg-[#bfa46a] border-b-4 border-[#7c5a3a] px-4 py-2">
              <span className="text-2xl font-bold text-[#7c5a3a] tracking-widest">INVENTORY</span>
              <button
                onClick={() => setOpen(false)}
                className="text-[#7c5a3a] hover:text-red-600 text-xl font-bold px-2"
              >
                ✕
              </button>
            </div>
            {/* Content */}
            <div className="p-5 bg-[#f7e0a3] flex flex-col gap-4 items-center justify-center">
              {items.map((item) => (
                <div
                  key={item.name}
                  className="w-full flex items-center justify-between border-4 border-[#a86c3c] rounded-lg bg-[#fff7c2] p-3 shadow-inner"
                  style={{ boxShadow: "0 0 0 3px #bfa46a" }}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-12 h-12 pixelated"
                    />
                    <span className="font-bold text-lg text-[#7c5a3a] pixel-font">{item.name}</span>
                  </div>
                  <span className="font-bold text-xl text-[#e6b800] pixel-font">x{item.count}</span>
                </div>
              ))}
            </div>
            {/* Pixel-art style border */}
            <div
              className="absolute inset-0 pointer-events-none border-4 border-[#fff7c2] rounded-lg"
              style={{ boxShadow: "0 0 0 4px #7c5a3a" }}
            ></div>
          </div>
        </div>
      )}
    </>
  );
}
