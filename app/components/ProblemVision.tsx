import React from 'react';
import Image from "next/image";

export default function ProblemVision() {
    return (
        <section className="py-20 px-4 bg-yellow-50 border-y-2 border-black">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold uppercase tracking-wider">Why Cuti-Cuti Explorer?</h2>
                <p className="text-gray-600 mt-2">Bridging the past with the future, one adventure at a time.</p>
            </div>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Problem Section */}
                <div className="text-center md:text-left p-6 border-2 border-black bg-white shadow-[4px_4px_0px_0px_#000]">
                    <h2 className="text-2xl font-bold mb-4 uppercase tracking-wider">The Disconnect</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Many Malaysians, especially the younger generation, are losing touch with their rich cultural heritage. Traditional games, stories, and historical sites are becoming forgotten relics of the past.
                    </p>
                </div>

                {/* Vision Section */}
                <div className="text-center md:text-left p-6 border-2 border-black bg-white shadow-[4px_4px_0px_0px_#000]">
                    <h2 className="text-2xl font-bold mb-4 uppercase tracking-wider">Our Vision</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Cuti-Cuti Explorer aims to bridge this gap by transforming cultural education into an exciting adventure. We want to make discovering Malaysia's heritage as engaging as playing a game.
                    </p>
                </div>
            </div>
        </section>
    );
} 