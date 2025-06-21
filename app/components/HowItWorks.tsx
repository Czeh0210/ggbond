import React from 'react';
import { BentoCard, BentoGrid } from "./ui/bento-grid";
import {
    PersonIcon,
    DrawingPinIcon,
    RocketIcon,
    LockOpen1Icon,
    EnterIcon,
    MixIcon
} from "@radix-ui/react-icons";

const features = [
  {
    Icon: PersonIcon,
    name: "Register & Verify",
    description: "Sign up as a Malaysian or tourist and verify your identity to begin.",
    href: "#",
    cta: "Learn more",
    background: <img alt="person" className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-span-1",
  },
  {
    Icon: DrawingPinIcon,
    name: "Choose Your Origin",
    description: "Select your starting state to begin your cultural exploration.",
    href: "#",
    cta: "Learn more",
    background: <img alt="map pin" className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-span-1",
  },
  {
    Icon: RocketIcon,
    name: "Daily Exploration",
    description: "Embark on daily quests and challenges to discover new places.",
    href: "#",
    cta: "Learn more",
    background: <img alt="people exploring" className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-span-1",
  },
  {
    Icon: LockOpen1Icon,
    name: "Unlock Heritage",
    description: "Collect points and unlock information about historical sites.",
    href: "#",
    cta: "Learn more",
    background: <img alt="old building" className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-span-1",
  },
  {
    Icon: EnterIcon,
    name: "State Transition",
    description: "Complete a state's route to unlock travel to the next one.",
    href: "#",
    cta: "Learn more",
    background: <img alt="travel" className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-span-1",
  },
    {
    Icon: MixIcon,
    name: "Explore More!",
    description: "Continue your journey across all of Malaysia, one state at a time.",
    href: "#",
    cta: "Learn more",
    background: <img alt="adventure" className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-span-1",
  },
];


export default function HowItWorks() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-2">Your Adventure Awaits</h2>
                <p className="text-gray-600 mb-12">A simple path to discovery.</p>
                 <BentoGrid className="lg:grid-cols-3">
                    {features.map((feature) => (
                        <BentoCard key={feature.name} {...feature} />
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
}