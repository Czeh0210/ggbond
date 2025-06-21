import React from 'react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center text-white text-center px-4">
            {/* Placeholder for background image/video */}
            <div className="absolute inset-0 bg-blue-900 z-0">
                <div 
                    className="absolute inset-0 bg-cover bg-center opacity-30" 
                    style={{backgroundImage: "url('/placeholder-malaysia.jpg')"}} // Replace with your image
                ></div>
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Explore Malaysia, One Route at a Time</h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
                    Light up your journey, unlock heritage, and discover the soul of Malaysia through an immersive map-based game.
                </p>
                <button className="mt-8 bg-yellow-400 text-blue-900 font-bold px-8 py-3 rounded-full text-lg hover:bg-yellow-300 transition-transform transform hover:scale-105">
                    Join the Journey
                </button>
            </div>
        </section>
    );
} 