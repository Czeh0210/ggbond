import React from 'react';
import { cn } from "../../lib/utils";
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
  },
  {
    Icon: DrawingPinIcon,
    name: "Choose Your Origin",
    description: "Select your starting state to begin your cultural exploration.",
  },
  {
    Icon: RocketIcon,
    name: "Daily Exploration",
    description: "Embark on daily quests and challenges to discover new places.",
  },
  {
    Icon: LockOpen1Icon,
    name: "Unlock Heritage",
    description: "Collect points and unlock information about historical sites.",
  },
  {
    Icon: EnterIcon,
    name: "State Transition",
    description: "Complete a state's route to unlock travel to the next one.",
  },
    {
    Icon: MixIcon,
    name: "Explore More!",
    description: "Continue your journey across all of Malaysia, one state at a time.",
  },
];


export default function HowItWorks() {
    return (
        <section className="bg-white dark:bg-zinc-900 py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-12 uppercase tracking-wider">Your Adventure Awaits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 gap-4">
                {features.map((feature, index) => (
                    <Feature key={feature.name} title={feature.name} description={feature.description} icon={<feature.Icon className="h-8 w-8" />} index={index} />
                ))}
                </div>
            </div>
        </section>
    );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col p-6 relative group/feature border-2 border-black bg-white shadow-[4px_4px_0px_0px_#000]"
      )}
    >
      <div className="mb-4 relative z-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 uppercase">
        <span className="inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 leading-relaxed">
        {description}
      </p>
    </div>
  );
}; 