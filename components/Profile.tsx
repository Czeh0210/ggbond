'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ProfileProps {
  className?: string;
}

const Profile = ({ className = '' }: ProfileProps) => {
  const [tab, setTab] = useState<'STATS' | 'INVENTORY' | 'ACHIEVEMENTS'>('STATS');
  
  // Mock user data
  const userData = {
    name: 'Explorer123',
    level: 5,
    experience: 1250,
    nextLevel: 2000,
    coins: 750,
    tickets: 2,
    joinDate: '15 June 2025',
    visitedLocations: ['Johor Bahru', 'Kuala Lumpur'],
    inventory: [
      { id: 1, name: 'Flight Ticket', quantity: 2, image: '/assets/ticket.png' },
      { id: 2, name: 'Souvenir', quantity: 3, image: '/assets/souvenir.png' },
      { id: 3, name: 'Map', quantity: 1, image: '/assets/map.png' },
    ],
    achievements: [
      { id: 1, name: 'First Flight', description: 'Travel to your first destination', completed: true },
      { id: 2, name: 'Collector', description: 'Collect 5 souvenirs', completed: false },
      { id: 3, name: 'Explorer', description: 'Visit 3 different locations', completed: false },
    ]
  };

  // Calculate experience percentage
  const experiencePercentage = (userData.experience / userData.nextLevel) * 100;

  return (
    <div className={`${className}`}>
      <div className="relative w-[500px] rounded-lg border-4 ml-24 border-[#7c5a3a] bg-[#f7e0a3] shadow-xl pixel-font p-0 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between bg-[#bfa46a] border-b-4 border-[#7c5a3a] px-3 py-1.5">
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 bg-[#e2c290] rounded-full border-2 border-[#7c5a3a] flex items-center justify-center">
              <span className="text-[#7c5a3a] font-bold text-xs">👤</span>
            </div>
            <span className="font-bold text-base text-[#fff7c2] drop-shadow">Profile</span>
          </div>
          <span className="text-lg font-bold text-[#7c5a3a] tracking-widest">EXPLORER</span>
        </div>

        {/* User Info Bar */}
        <div className="bg-[#e2c290] p-2 border-b-4 border-[#7c5a3a]">
          <div className="flex items-center gap-3">
            <div className="p-1 border-2 border-[#a86c3c] bg-[#f7e0a3] rounded-lg" style={{boxShadow:'0 0 0 1px #bfa46a'}}>
              <div className="w-12 h-12 bg-[#bfa46a] flex items-center justify-center">
                <span className="text-2xl">🧑‍🌾</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-0.5">
                <h3 className="font-bold text-sm text-[#7c5a3a]">{userData.name}</h3>
                <div className="flex items-center gap-1">
                  <div className="flex items-center bg-[#a86c3c] px-1.5 py-0.5 rounded text-xs">
                    <span className="text-yellow-300 mr-0.5">💰</span>
                    <span className="text-white font-bold">{userData.coins}</span>
                  </div>
                  <div className="flex items-center bg-[#a86c3c] px-1.5 py-0.5 rounded text-xs">
                    <span className="text-white mr-0.5">🎟</span>
                    <span className="text-white font-bold">{userData.tickets}</span>
                  </div>
                </div>
              </div>
              <div className="mb-0.5">
                <div className="flex justify-between text-xs text-[#7c5a3a] mb-0.5">
                  <span className="text-xs">Level {userData.level}</span>
                  <span className="text-xs">{userData.experience}/{userData.nextLevel} XP</span>
                </div>
                <div className="w-full h-2 bg-[#f7e0a3] rounded-full border-2 border-[#7c5a3a]">
                  <div 
                    className="h-full bg-[#a86c3c] rounded-full" 
                    style={{ width: `${experiencePercentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex bg-[#e2c290] border-b-4 border-[#7c5a3a]">
          {['STATS', 'INVENTORY', 'ACHIEVEMENTS'].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t as any)}
              className={`flex-1 py-1 font-bold text-xs border-r-2 border-[#7c5a3a] last:border-r-0 ${tab === t ? 'bg-[#f7e0a3] text-[#7c5a3a]' : 'bg-[#e2c290] text-[#7c5a3a] hover:bg-[#f7e0a3]'}`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-3 bg-[#f7e0a3] min-h-[200px]">
          {tab === 'STATS' && (
            <div className="w-full border-4 border-[#a86c3c] rounded-lg bg-[#f7e0a3] p-4 shadow-inner" style={{boxShadow:'0 0 0 4px #bfa46a'}}>
              <h3 className="font-bold text-xl text-[#7c5a3a] tracking-widest pixel-font mb-3">PLAYER STATISTICS</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#e2c290] p-3 rounded-lg border-2 border-[#a86c3c]">
                  <h4 className="text-[#7c5a3a] font-bold mb-2">Account Info</h4>
                  <div className="flex justify-between mb-1">
                    <span className="text-[#7c5a3a]">Join Date:</span>
                    <span className="text-[#7c5a3a] font-bold">{userData.joinDate}</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span className="text-[#7c5a3a]">Player Level:</span>
                    <span className="text-[#7c5a3a] font-bold">{userData.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#7c5a3a]">Total XP:</span>
                    <span className="text-[#7c5a3a] font-bold">{userData.experience}</span>
                  </div>
                </div>
                
                <div className="bg-[#e2c290] p-3 rounded-lg border-2 border-[#a86c3c]">
                  <h4 className="text-[#7c5a3a] font-bold mb-2">Travel Stats</h4>
                  <div className="flex justify-between mb-1">
                    <span className="text-[#7c5a3a]">Locations Visited:</span>
                    <span className="text-[#7c5a3a] font-bold">{userData.visitedLocations.length}</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span className="text-[#7c5a3a]">Flights Taken:</span>
                    <span className="text-[#7c5a3a] font-bold">1</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#7c5a3a]">Landmarks Found:</span>
                    <span className="text-[#7c5a3a] font-bold">3</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="text-[#7c5a3a] font-bold mb-2">Visited Locations</h4>
                <div className="bg-[#e2c290] p-3 rounded-lg border-2 border-[#a86c3c]">
                  <div className="flex flex-wrap gap-2">
                    {userData.visitedLocations.map((location, index) => (
                      <span key={index} className="bg-[#a86c3c] text-white px-3 py-1 rounded-full text-sm">
                        {location}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {tab === 'INVENTORY' && (
            <div className="w-full border-4 border-[#a86c3c] rounded-lg bg-[#f7e0a3] p-4 shadow-inner" style={{boxShadow:'0 0 0 4px #bfa46a'}}>
              <h3 className="font-bold text-xl text-[#7c5a3a] tracking-widest pixel-font mb-3">INVENTORY ITEMS</h3>
              
              <div className="grid grid-cols-2 gap-3">
                {userData.inventory.map((item) => (
                  <div key={item.id} className="bg-[#e2c290] p-3 rounded-lg border-2 border-[#a86c3c] flex items-center gap-3">
                    <div className="p-1 border-2 border-[#a86c3c] bg-[#f7e0a3] rounded-lg">
                      <div className="w-12 h-12 bg-[#bfa46a] flex items-center justify-center">
                        <span className="text-2xl">{item.name === 'Flight Ticket' ? '🎫' : item.name === 'Souvenir' ? '🏮' : '🗺️'}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[#7c5a3a] font-bold">{item.name}</h4>
                      <div className="flex justify-between items-center">
                        <span className="text-[#7c5a3a] text-sm">Quantity:</span>
                        <span className="bg-[#a86c3c] text-white px-2 py-0.5 rounded text-xs">
                          x{item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === 'ACHIEVEMENTS' && (
            <div className="w-full border-4 border-[#a86c3c] rounded-lg bg-[#f7e0a3] p-4 shadow-inner" style={{boxShadow:'0 0 0 4px #bfa46a'}}>
              <h3 className="font-bold text-xl text-[#7c5a3a] tracking-widest pixel-font mb-3">ACHIEVEMENTS</h3>
              
              <div className="space-y-3">
                {userData.achievements.map((achievement) => (
                  <div 
                    key={achievement.id} 
                    className={`p-3 rounded-lg border-2 ${achievement.completed ? 'bg-[#e2c290] border-[#a86c3c]' : 'bg-[#d9d9d9] border-[#a0a0a0]'}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${achievement.completed ? 'bg-[#a86c3c] text-white' : 'bg-[#a0a0a0] text-[#d9d9d9]'}`}>
                          {achievement.completed ? '✓' : '?'}
                        </div>
                        <h4 className={`font-bold ${achievement.completed ? 'text-[#7c5a3a]' : 'text-[#707070]'}`}>
                          {achievement.name}
                        </h4>
                      </div>
                      {achievement.completed && (
                        <span className="bg-[#a86c3c] text-white px-2 py-0.5 rounded text-xs">
                          +100 XP
                        </span>
                      )}
                    </div>
                    <p className={`ml-10 text-sm ${achievement.completed ? 'text-[#7c5a3a]' : 'text-[#707070]'}`}>
                      {achievement.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Pixel-art style border */}
        <div className="absolute inset-0 pointer-events-none border-4 border-[#fff7c2] rounded-lg" style={{boxShadow:'0 0 0 4px #7c5a3a'}}></div>
      </div>
    </div>
  );
};

export default Profile;
