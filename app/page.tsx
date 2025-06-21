"use client";

import React from 'react';
import Image from "next/image";

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

// --- Reusable Motif Component (Placeholder) ---
const EthnicMotif = () => (
    <div className="w-full flex justify-center py-8">
        <div className="w-24 h-1 bg-yellow-400 rounded-full" />
    </div>
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

export default function CutiCutiExplorerPage() {
    return (
        <div className="bg-white font-[family-name:var(--font-geist-sans)]">
            {/* 1. Hero Section */}
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

            {/* 2. Problem & Vision Section */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-bold text-gray-800">Bridging Cultures, Uncovering Treasures</h2>
                        <p className="mt-4 text-gray-600">
                            In a nation as diverse as Malaysia, a cultural disconnect often exists, with many traditions and stories remaining within their own communities. Tourism often concentrates on popular spots, leaving rich indigenous cultures and hidden gems undiscovered.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                        <h3 className="text-xl font-bold text-blue-800">Our Vision</h3>
                        <p className="mt-2 text-gray-600">To foster empathy and education through the joy of exploration. We believe that by gamifying the discovery of our shared heritage, we can build a deeper appreciation for every culture that makes Malaysia unique.</p>
                        {/* Placeholder for stats */}
                        <div className="mt-4 pt-4 border-t">
                            <p className="text-sm text-gray-500">Only <span className="font-bold">15%</span> of tourists explore heritage sites outside major cities.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. How It Works Section */}
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
            
            <EthnicMotif />

            {/* 4. Unique Features Section */}
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

            {/* 5. Social Proof & Engagement Section */}
            <section className="py-20 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Trusted by Educators and Cultural Enthusiasts</h2>
                    <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-800 p-6 rounded-r-lg my-8 max-w-2xl mx-auto">
                        <p className="text-4xl font-bold">3.84</p>
                        <p className="text-lg">average appreciation score for culture among youth participants in our pilot program.</p>
                    </div>
                    <h3 className="font-semibold text-gray-500 uppercase tracking-widest mt-12">Our Partners</h3>
                    <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-gray-400 mt-6">
                        {/* Placeholder logos */}
                        <p className="font-bold text-xl">EduSains</p>
                        <p className="font-bold text-xl">MyHeritage</p>
                        <p className="font-bold text-xl">Tourism Board A</p>
                        <p className="font-bold text-xl">University B</p>
                    </div>
                </div>
            </section>
            
            <EthnicMotif />

            {/* 6. FAQ Section */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                    <FaqItem q="Who can play Cuti-Cuti Explorer?" a="The game is open to everyone! We have specific registration paths for Malaysian citizens and international tourists to tailor the experience." />
                    <FaqItem q="Is it free to play?" a="Yes, the game is completely free to download and play. Optional in-app purchases may be available for cosmetic items, but the core experience is accessible to all." />
                    <FaqItem q="How does the coin system work?" a="You earn coins by completing exploration routes, unlocking heritage sites, and participating in events. These coins can be accumulated and redeemed for real-world tourism vouchers and tickets through our partnerships." />
                    <FaqItem q="What destinations can I explore?" a="We are constantly expanding! We launched with routes in 5 states and are working with local tourism boards to add new heritage sites and adventures across all of Malaysia." />
                </div>
            </section>

            {/* 7. Footer Section */}
            <footer className="bg-blue-900 text-gray-200 py-12 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h3 className="text-2xl font-bold mb-2 text-white">Stay in the loop!</h3>
                    <p className="mb-6">Sign up for our newsletter to get the latest updates on new routes and features.</p>
                    <form className="flex flex-col sm:flex-row items-center gap-2 max-w-md mx-auto">
                        <input type="email" placeholder="your.email@example.com" className="w-full px-4 py-2 rounded-md text-gray-800" />
                        <button type="submit" className="w-full sm:w-auto bg-yellow-400 text-blue-900 font-bold px-6 py-2 rounded-md hover:bg-yellow-300">Subscribe</button>
                    </form>
                    <div className="flex justify-center gap-6 my-8">
                        <a href="#" className="hover:text-white">Twitter</a>
                        <a href="#" className="hover:text-white">Instagram</a>
                        <a href="#" className="hover:text-white">Facebook</a>
                    </div>
                    <div className="border-t border-blue-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm">
                        <p>&copy; 2024 Cuti-Cuti Explorer. All Rights Reserved.</p>
                        <div className="flex gap-4 mt-4 sm:mt-0">
                            <a href="#" className="hover:text-white">Privacy Policy</a>
                            <a href="#" className="hover:text-white">Terms of Use</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
