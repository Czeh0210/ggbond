import React from 'react';
import { cn } from "../../lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export default function UniqueFeatures() {
  const features = [
    {
      title: "Agriculture Module",
      description: "Plant, water, and harvest local crops. Sell your produce in a virtual market!",
      icon: <IconTerminal2 />,
    },
    {
      title: "Friendly Competition",
      description: "Engage in playful antics by 'stealing' vegetables from your friends' farms up to 3 times a day.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Coin & Reward System",
      description: "Earn coins to redeem real-life Cuti-Cuti Malaysia tickets and vouchers.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Official Collaboration",
      description: "Partnered with local government tourism boards to bring you authentic experiences.",
      icon: <IconCloud />,
    },
    {
      title: "Unlock Heritage",
      description: "Discover both tangible and intangible heritage as you explore.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Daily Exploration",
      description: "Log in daily to light up new routes on the map and expand your journey.",
      icon: <IconHelp />,
    },
    {
      title: "State Transitions",
      description: "Use virtual flight tickets to travel between different states in Malaysia.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "And everything else",
      description: "More features and surprises await you in the world of Cuti-Cuti Explorer!",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="bg-yellow-50 dark:bg-zinc-800 border-y-2 border-black">
        <div className="max-w-7xl mx-auto text-center py-20 px-4">
            <h2 className="text-3xl font-bold mb-12 uppercase tracking-wider">More Than Just a Game</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
                <Feature key={feature.title} {...feature} />
            ))}
            </div>
        </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="text-left p-6 border-2 border-black bg-white shadow-[4px_4px_0px_0px_#000]">
      <div className="mb-4 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2 uppercase text-neutral-800 dark:text-neutral-100">
        {title}
      </h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
}; 