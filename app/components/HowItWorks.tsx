import React from 'react';

export default function HowItWorks() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-2">Your Adventure Awaits</h2>
                <p className="text-gray-600 mb-12">A simple path to discovery.</p>
                <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center"><div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-800 mb-2">1</div><p className="font-semibold">Register & Verify</p></div>
                    {/* Step 2 */}
                    <div className="flex flex-col items-center"><div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-800 mb-2">2</div><p className="font-semibold">Choose Your Origin</p></div>
                    {/* Step 3 */}
                    <div className="flex flex-col items-center"><div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-800 mb-2">3</div><p className="font-semibold">Daily Exploration</p></div>
                    {/* Step 4 */}
                    <div className="flex flex-col items-center"><div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-2xl font-bold text-yellow-800 mb-2">4</div><p className="font-semibold">Unlock Heritage</p></div>
                    {/* Step 5 */}
                    <div className="flex flex-col items-center"><div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-2xl font-bold text-yellow-800 mb-2">5</div><p className="font-semibold">State Transition</p></div>
                    {/* Step 6 */}
                    <div className="flex flex-col items-center"><div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-2xl font-bold text-yellow-800 mb-2">6</div><p className="font-semibold">Explore More!</p></div>
                </div>
            </div>
        </section>
    );
} 