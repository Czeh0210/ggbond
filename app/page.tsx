"use client";

import React from 'react';
import { useState } from 'react';

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
        <div className="bg-white">
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
