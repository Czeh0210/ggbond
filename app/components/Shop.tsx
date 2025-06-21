"use client";
import { useState } from 'react';

type ShopProps = {
  playerDurian: number;
  setPlayerDurian: React.Dispatch<React.SetStateAction<number>>;
  playerPineapple: number;
  setPlayerPineapple: React.Dispatch<React.SetStateAction<number>>;
  batuCavesTicket: number;
  setBatuCavesTicket: React.Dispatch<React.SetStateAction<number>>;
};

export default function Shop({
  playerDurian,
  setPlayerDurian,
  playerPineapple,
  setPlayerPineapple,
  batuCavesTicket,
  setBatuCavesTicket,
}: ShopProps) {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState('BUY');
  const [coins, setCoins] = useState(52);
  const [sellDurian, setSellDurian] = useState(0);
  const [sellPineapple, setSellPineapple] = useState(0);

  return (
    <div className="shop-container relative group">
      {/* Shop Icon */}
      <img 
        src="/shop.png" 
        alt="Shop" 
        className="w-[8vw] h-[8vw] min-w-[60px] min-h-[60px] max-w-[120px] max-h-[120px] object-contain cursor-pointer hover:scale-110 transition-transform duration-200"
        onClick={() => setOpen(true)}
      />
      <div className="tooltip absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-amber-100 px-2 py-1 rounded text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        Open Shop
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="relative w-[410px] rounded-lg border-4 border-[#7c5a3a] bg-[#f7e0a3] shadow-xl pixel-font p-0 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between bg-[#bfa46a] border-b-4 border-[#7c5a3a] px-4 py-2">
              <div className="flex items-center gap-2">
                <img src="/coin.png" alt="coin" className="w-6 h-6 inline-block" />
                <span className="font-bold text-lg text-[#fff7c2] drop-shadow">{coins}</span>
              </div>
              <span className="text-2xl font-bold text-[#7c5a3a] tracking-widest">SHOP</span>
              <button onClick={() => setOpen(false)} className="text-[#7c5a3a] hover:text-red-600 text-xl font-bold px-2">✕</button>
            </div>
            {/* Tabs */}
            <div className="flex bg-[#e2c290] border-b-4 border-[#7c5a3a]">
              {['SELL', 'BUY', 'REDEEM'].map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`flex-1 py-2 font-bold text-lg border-r-2 border-[#7c5a3a] last:border-r-0 ${tab === t ? 'bg-[#f7e0a3] text-[#7c5a3a]' : 'bg-[#e2c290] text-[#7c5a3a] hover:bg-[#f7e0a3]'}`}
                >
                  {t}
                </button>
              ))}
            </div>
            {/* Content */}
            <div className="p-5 bg-[#f7e0a3] min-h-[200px] flex flex-col items-center justify-center">
              {tab === 'BUY' && (
                <>
                  <div className="w-full flex items-center justify-between border-4 border-[#a86c3c] rounded-lg bg-[#f7e0a3] p-4 shadow-inner mb-4" style={{boxShadow:'0 0 0 4px #bfa46a'}}>
                    {/* Left: Text, Price, Button */}
                    <div className="flex flex-col items-start gap-3 flex-1">
                      <span className="font-bold text-2xl text-[#7c5a3a] tracking-widest pixel-font">SAPLING</span>
                      <div className="flex items-center gap-2">
                        <img src="/coin.png" alt="coin" className="w-7 h-7 inline-block" />
                        <span className="font-bold text-xl text-[#e6b800] drop-shadow pixel-font">20 COINS</span>
                      </div>
                      <button className="mt-2 w-[120px] py-2 bg-[#a86c3c] text-white font-bold text-xl rounded shadow-md border-b-4 border-[#7c5a3a] hover:bg-[#c4884a] transition-all pixel-font tracking-widest">BUY</button>
                    </div>
                    {/* Right: Sapling Image in pixel-art border */}
                    <div className="ml-6 p-2 border-4 border-[#a86c3c] bg-[#f7e0a3] rounded-lg flex items-center justify-center" style={{boxShadow:'0 0 0 3px #bfa46a'}}>
                      <img src="/sapling.png" alt="sapling" className="w-16 h-16 pixelated" />
                    </div>
                  </div>
                </>
              )}
              {tab === 'REDEEM' && (
                <div className="w-full flex items-center justify-between border-4 border-[#a86c3c] rounded-lg bg-[#f7e0a3] p-4 shadow-inner" style={{boxShadow:'0 0 0 4px #bfa46a'}}>
                  {/* Left: Text, Price, Button */}
                  <div className="flex flex-col items-start gap-4 flex-1">
                    <span className="font-bold text-3xl text-[#7c5a3a] tracking-widest pixel-font">BATU CAVES<br/>TICKET</span>
                    <div className="flex items-center gap-2">
                      <img src="/coin.png" alt="coin" className="w-7 h-7 inline-block" />
                      <span className="font-bold text-2xl text-[#e6b800] drop-shadow pixel-font whitespace-nowrap">
                        5000 COINS
                      </span>
                    </div>
                    <button
                      className="mt-2 w-[160px] px-4 py-3 bg-[#a86c3c] text-white font-extrabold text-2xl rounded shadow-md border-4 border-[#7c5a3a] border-b-[8px] hover:bg-[#c4884a] transition-all pixel-font tracking-widest leading-tight"
                    >
                      REDEEM
                    </button>
                  </div>
                  {/* Right: Ticket Image in pixel-art border */}
                  <div className="ml-8 p-2 border-4 border-[#a86c3c] bg-[#e2c290] rounded-lg flex items-center justify-center" style={{boxShadow:'0 0 0 3px #bfa46a'}}>
                    <img src="/BATUCAVES.png" alt="Batu Caves Ticket" className="w-24 h-32 pixelated" />
                  </div>
                </div>
              )}
              {tab === 'SELL' && (
                <div className="flex flex-col gap-6 w-full">
                  {/* Durian Box */}
                  <div className="w-full flex items-center justify-between border-4 border-[#a86c3c] rounded-lg bg-[#f7e0a3] p-4 shadow-inner" style={{boxShadow:'0 0 0 4px #bfa46a'}}>
                    {/* Left: Text, Price, Button */}
                    <div className="flex flex-col items-start gap-4 flex-1">
                      <span className="font-bold text-2xl text-[#7c5a3a] tracking-widest pixel-font">DURIAN</span>
                      <div className="flex items-center gap-2">
                        <img src="/coin.png" alt="coin" className="w-7 h-7 inline-block" />
                        <span className="font-bold text-xl text-[#e6b800] drop-shadow pixel-font whitespace-nowrap">100 COINS</span>
                      </div>
                      <button
                        className="mt-2 w-[120px] px-4 py-2 bg-[#a86c3c] text-white font-extrabold text-xl rounded shadow-md border-4 border-[#7c5a3a] border-b-[8px] hover:bg-[#c4884a] transition-all pixel-font tracking-widest leading-tight disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={sellDurian === 0}
                        onClick={() => {
                          setPlayerDurian(playerDurian - sellDurian);
                          setCoins(coins + sellDurian * 100);
                          setSellDurian(0);
                        }}
                      >
                        SELL
                      </button>
                    </div>
                    {/* Right: Durian Image and Count */}
                    <div className="ml-8 flex flex-col items-center">
                      <div className="p-2 border-4 border-[#a86c3c] bg-[#e2c290] rounded-lg flex items-center justify-center mb-2" style={{boxShadow:'0 0 0 3px #bfa46a'}}>
                        <img src="/DURIAN.png" alt="Durian" className="w-16 h-16 pixelated" />
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <button
                          className="w-7 h-7 bg-[#a86c3c] text-white font-bold rounded hover:bg-[#c4884a] border-2 border-[#7c5a3a]"
                          onClick={() => setSellDurian(Math.max(0, sellDurian - 1))}
                          disabled={sellDurian === 0}
                        >-</button>
                        <span className="font-bold text-lg text-[#7c5a3a] pixel-font min-w-[24px] text-center">{sellDurian}</span>
                        <button
                          className="w-7 h-7 bg-[#a86c3c] text-white font-bold rounded hover:bg-[#c4884a] border-2 border-[#7c5a3a]"
                          onClick={() => setSellDurian(Math.min(playerDurian, sellDurian + 1))}
                          disabled={sellDurian === playerDurian}
                        >+</button>
                      </div>
                      <span className="font-bold text-xs text-[#7c5a3a] pixel-font mt-1">You have: {playerDurian}</span>
                    </div>
                  </div>
                  {/* Pineapple Box */}
                  <div className="w-full flex items-center justify-between border-4 border-[#a86c3c] rounded-lg bg-[#f7e0a3] p-4 shadow-inner" style={{boxShadow:'0 0 0 4px #bfa46a'}}>
                    {/* Left: Text, Price, Button */}
                    <div className="flex flex-col items-start gap-4 flex-1">
                      <span className="font-bold text-2xl text-[#7c5a3a] tracking-widest pixel-font">PINEAPPLE</span>
                      <div className="flex items-center gap-2">
                        <img src="/coin.png" alt="coin" className="w-7 h-7 inline-block" />
                        <span className="font-bold text-xl text-[#e6b800] drop-shadow pixel-font whitespace-nowrap">50 COINS</span>
                      </div>
                      <button
                        className="mt-2 w-[120px] px-4 py-2 bg-[#a86c3c] text-white font-extrabold text-xl rounded shadow-md border-4 border-[#7c5a3a] border-b-[8px] hover:bg-[#c4884a] transition-all pixel-font tracking-widest leading-tight disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={sellPineapple === 0}
                        onClick={() => {
                          setPlayerPineapple(playerPineapple - sellPineapple);
                          setCoins(coins + sellPineapple * 50);
                          setSellPineapple(0);
                        }}
                      >
                        SELL
                      </button>
                    </div>
                    {/* Right: Pineapple Image and Count */}
                    <div className="ml-8 flex flex-col items-center">
                      <div className="p-2 border-4 border-[#a86c3c] bg-[#e2c290] rounded-lg flex items-center justify-center mb-2" style={{boxShadow:'0 0 0 3px #bfa46a'}}>
                        <img src="/PINEAPPLE.png" alt="Pineapple" className="w-16 h-16 pixelated" />
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <button
                          className="w-7 h-7 bg-[#a86c3c] text-white font-bold rounded hover:bg-[#c4884a] border-2 border-[#7c5a3a]"
                          onClick={() => setSellPineapple(Math.max(0, sellPineapple - 1))}
                          disabled={sellPineapple === 0}
                        >-</button>
                        <span className="font-bold text-lg text-[#7c5a3a] pixel-font min-w-[24px] text-center">{sellPineapple}</span>
                        <button
                          className="w-7 h-7 bg-[#a86c3c] text-white font-bold rounded hover:bg-[#c4884a] border-2 border-[#7c5a3a]"
                          onClick={() => setSellPineapple(Math.min(playerPineapple, sellPineapple + 1))}
                          disabled={sellPineapple === playerPineapple}
                        >+</button>
                      </div>
                      <span className="font-bold text-xs text-[#7c5a3a] pixel-font mt-1">You have: {playerPineapple}</span>
                    </div>
                  </div>
                </div>
              )}
              {tab !== 'BUY' && tab !== 'REDEEM' && tab !== 'SELL' && (
                <div className="text-[#7c5a3a] font-bold text-lg opacity-60 mt-10">Coming Soon...</div>
              )}
            </div>
            {/* Pixel-art style border */}
            <div className="absolute inset-0 pointer-events-none border-4 border-[#fff7c2] rounded-lg" style={{boxShadow:'0 0 0 4px #7c5a3a'}}></div>
          </div>
        </div>
      )}
    </div>
  );
}

// Add this to your globals.css for pixelated images:
// .pixelated { image-rendering: pixelated; }
// .pixel-font { font-family: 'Press Start 2P', 'VT323', 'Courier New', monospace; }