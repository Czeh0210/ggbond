'use client'; // This component uses state, so it must be a client component

import React from 'react';

// --- Reusable Icon Component ---
const ChevronDownIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
);

// --- FAQ Item Component ---
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

export default function Faq() {
    return (
        <section className="py-20 px-4 bg-gray-50">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                <FaqItem q="Who can play Cuti-Cuti Explorer?" a="The game is open to everyone! We have specific registration paths for Malaysian citizens and international tourists to tailor the experience." />
                <FaqItem q="Is it free to play?" a="Yes, the game is completely free to download and play. Optional in-app purchases may be available for cosmetic items, but the core experience is accessible to all." />
                <FaqItem q="How does the coin system work?" a="You earn coins by completing exploration routes, unlocking heritage sites, and participating in events. These coins can be accumulated and redeemed for real-world tourism vouchers and tickets through our partnerships." />
                <FaqItem q="What destinations can I explore?" a="We are constantly expanding! We launched with routes in 5 states and are working with local tourism boards to add new heritage sites and adventures across all of Malaysia." />
            </div>
        </section>
    );
} 