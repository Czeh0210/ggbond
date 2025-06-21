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
    <section className="py-32 bg-gray-50">
      <div className="container">
        <div className="text-center">
          <Badge className="text-xs font-medium">FAQ</Badge>
          <h1 className="mt-4 text-4xl font-semibold">Common Questions & Answers</h1>
          <p className="mt-6 font-medium text-muted-foreground">
            Find out all the essential details about our platform and how you can start your journey.
          </p>
        </div>
        <div className="mx-auto mt-14 max-w-screen-sm">
          {projectFaqs.map((faq, index) => (
            <div key={index} className="mb-8 flex gap-4">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-sm bg-secondary font-mono text-xs text-primary">
                {index + 1}
              </span>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-medium">{faq.question}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 