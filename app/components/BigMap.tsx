'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Shop from './FriendsList';

export default function BigMap() {
  const [isShopOpen, setIsShopOpen] = useState(false);

  return (
    <div className="h-screen bg-gray-100 relative">
      <div className="absolute top-4 left-4">
        <button onClick={() => setIsShopOpen(true)} className="focus:outline-none">
          <Image 
            src="/Friends.jpg" 
            alt="User Icon" 
            width={64} 
            height={64} 
            className="rounded-full cursor-pointer"
          />
        </button>
      </div>
      <Shop open={isShopOpen} setOpen={setIsShopOpen} />
    </div>
  );
}
