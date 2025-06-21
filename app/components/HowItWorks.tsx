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
                <h2 className="text-3xl font-bold mb-12">Your Adventure Awaits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10">
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
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 3) && "lg:border-l dark:border-neutral-800",
        index < 3 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
}; 