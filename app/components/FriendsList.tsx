'use client';
import Link from 'next/link';

// NOTE: Please add avatar1.png, avatar2.png, avatar3.png to your /public folder.
// Also, ensure the 'pixel-font' and 'pixelated' classes are defined in your global styles.

const friends = [
  { id: 1, name: 'Pixel Pete', avatar: '/Avatar1.png' },
  { id: 2, name: '8-Bit Betty', avatar: '/Avatar2.png' },
  { id: 3, name: 'Glitchy Gus', avatar: '/Avatar3.png' },
];

export default function FriendsList({ open, setOpen }: { open: boolean, setOpen: (open: boolean) => void }) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60" onClick={() => setOpen(false)}>
      <div className="relative w-[500px] h-[500px] bg-[#f7e0a3] shadow-xl pixel-font p-0 overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="relative h-full w-full rounded-lg border-4 border-[#7c5a3a] p-0 overflow-hidden flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between bg-[#bfa46a] border-b-4 border-[#7c5a3a] px-4 py-2 flex-shrink-0">
              <div className="flex items-center gap-2">
              </div>
              <span className="text-2xl font-bold text-[#7c5a3a] tracking-widest">FRIENDS</span>
              <button onClick={() => setOpen(false)} className="text-[#7c5a3a] hover:text-red-600 text-xl font-bold px-2">✕</button>
            </div>
            {/* Body */}
            <div className="flex-grow overflow-y-auto">
              {friends.map(friend => (
                <div key={friend.id} className="flex items-center justify-between gap-4 p-4 border-b-2 border-[#d3b880]">
                  <div className="flex items-center gap-4">
                    <img src={friend.avatar} alt={friend.name} className="w-16 h-16 rounded-lg border-2 border-[#7c5a3a] pixelated" />
                    <span className="text-xl font-bold text-[#7c5a3a]">{friend.name}</span>
                  </div>
                  <Link href="/friendfarm">
                    <button className="px-3 py-2 bg-[#a86c3c] text-white font-bold text-base rounded shadow-md border-b-4 border-[#7c5a3a] hover:bg-[#c4884a] transition-all pixel-font tracking-wider">
                      VISIT FARM
                    </button>
                  </Link>
                </div>
              ))}
            </div>
            {/* Footer */}
            <div className="flex-shrink-0 p-4 bg-[#bfa46a] border-t-4 border-[#7c5a3a]">
              <button className="w-full px-3 py-3 bg-[#a86c3c] text-white font-bold text-lg rounded shadow-md border-b-4 border-[#7c5a3a] hover:bg-[#c4884a] transition-all pixel-font tracking-wider">
                ADD FRIEND
              </button>
            </div>
            {/* Pixel-art style border */}
            <div className="absolute inset-0 pointer-events-none border-4 border-[#fff7c2] rounded-lg" style={{boxShadow:'0 0 0 4px #7c5a3a'}}></div>
        </div>
      </div>
    </div>
  );
} 