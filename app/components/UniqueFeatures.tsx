import React from 'react';

export default function UniqueFeatures() {
    return (
        <section className="py-20 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-12">More Than Just a Game</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md"><h3 className="font-bold text-xl mb-2">Agriculture Module</h3><p className="text-gray-600">Plant, water, and harvest local crops. Sell your produce in a virtual market!</p></div>
                    <div className="bg-white p-6 rounded-lg shadow-md"><h3 className="font-bold text-xl mb-2">Friendly Competition</h3><p className="text-gray-600">Engage in playful antics by "stealing" vegetables from your friends' farms up to 3 times a day.</p></div>
                    <div className="bg-white p-6 rounded-lg shadow-md"><h3 className="font-bold text-xl mb-2">Coin & Reward System</h3><p className="text-gray-600">Earn coins to redeem real-life Cuti-Cuti Malaysia tickets and vouchers.</p></div>
                    <div className="bg-white p-6 rounded-lg shadow-md"><h3 className="font-bold text-xl mb-2">Official Collaboration</h3><p className="text-gray-600">Partnered with local government tourism boards to bring you authentic experiences.</p></div>
                </div>
            </div>
        </section>
    );
} 