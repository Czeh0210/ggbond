"use client";

import React from 'react';
import Image from "next/image";
import { useState } from 'react';

// Helper components for icons (placeholders)
const PlayIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 17.152V6.84803C7.5 5.86175 8.44372 5.1691 9.33987 5.54714L18.4359 9.24714C19.2997 9.60835 19.3193 10.7813 18.4682 11.168L9.37222 15.468C8.46393 15.8824 7.5 15.1917 7.5 14.152V14.152" fill="currentColor" />
  </svg>
);

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

// Placeholder for Feature Icons
const FeatureIcon = () => (
    <div className="w-16 h-16 bg-green-200 rounded-lg mb-4 flex items-center justify-center">
        <span className="text-2xl text-green-700">?</span>
    </div>
);

// --- Reusable Icon Components (Placeholders) ---
const ChevronDownIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
);

// --- FAQ Item Component ---
// A simple stateful component for the accordion functionality
const FaqItem = ({ q, a }: { q: string, a: string }) => {
    const [isOpen, setIsOpen] = React.useState(false);
  return (
        <div className="border-b border-gray-200 py-4">
            <button
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{q}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDownIcon />
                </span>
            </button>
            {isOpen && (
                <div className="mt-4 text-gray-600">
                    <p>{a}</p>
                </div>
            )}
        </div>
    );
};

import Hero from './components/Hero';
import ProblemVision from './components/ProblemVision';
import HowItWorks from './components/HowItWorks';
import UniqueFeatures from './components/UniqueFeatures';
import SocialProof from './components/SocialProof';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Login from './components/Login';

export default function CutiCutiExplorerPage() {
    const [showLogin, setShowLogin] = useState(false);

    const handleJoinJourney = () => {
        setShowLogin(true);
    };

    if (showLogin) {
        return <Login />;
    }

    return (
        <div className="bg-white font-[family-name:var(--font-geist-sans)]">
            <Hero onJoinJourneyClick={handleJoinJourney} />
            <ProblemVision />
            <HowItWorks />
            <UniqueFeatures />
            <SocialProof />
            <Faq />
            <Footer />
    </div>
  );
}
