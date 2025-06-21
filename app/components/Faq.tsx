'use client'; // This component uses state, so it must be a client component

import React from 'react';
import { Badge } from "./ui/badge";

export interface FaqItem {
  question: string;
  answer: string;
}

const projectFaqs: FaqItem[] = [
    {
      question: "Who can play Cuti-Cuti Explorer?",
      answer: "The game is open to everyone! We have specific registration paths for Malaysian citizens and international tourists to tailor the experience."
    },
    {
      question: "Is it free to play?",
      answer: "Yes, the game is completely free to download and play. Optional in-app purchases may be available for cosmetic items, but the core experience is accessible to all."
    },
    {
      question: "How does the coin system work?",
      answer: "You earn coins by completing exploration routes, unlocking heritage sites, and participating in events. These coins can be accumulated and redeemed for real-world tourism vouchers and tickets through our partnerships."
    },
    {
      question: "What destinations can I explore?",
      answer: "We are constantly expanding! We launched with routes in 5 states and are working with local tourism boards to add new heritage sites and adventures across all of Malaysia."
    },
];

export default function Faq() {
  return (
    <section className="py-20 px-4 bg-yellow-50 border-y-2 border-black">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 uppercase tracking-wider">Frequently Asked Questions</h2>
            <div className="space-y-6">
                {projectFaqs.map((faq, index) => (
                    <div key={index} className="p-6 border-2 border-black bg-white shadow-[4px_4px_0px_0px_#000] text-left">
                        <h3 className="font-bold text-lg mb-2 uppercase">{faq.question}</h3>
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}; 