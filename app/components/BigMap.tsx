'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FriendsList from './FriendsList';

export default function BigMap() {
  const [isFriendsListOpen, setIsFriendsListOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-4">
        <button onClick={() => setIsFriendsListOpen(true)} className="focus:outline-none">
          <Image 
            src="/Friends.jpg" 
            alt="Friends Icon" 
            width={64} 
            height={64} 
            className="cursor-pointer border-4 border-black"
          />
        </button>
        <Link href="/ownfarm">
          <button className="focus:outline-none">
            <Image 
              src="/Farm.png" 
              alt="Farm Icon" 
              width={64} 
              height={64} 
              className="cursor-pointer border-4 border-black"
            />
          </button>
        </Link>
      </div>
      <FriendsList open={isFriendsListOpen} setOpen={setIsFriendsListOpen} />
    </>
  );
}
