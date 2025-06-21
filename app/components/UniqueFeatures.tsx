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
    <div className="bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto text-center py-20 px-4">
            <h2 className="text-3xl font-bold mb-12">More Than Just a Game</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10">
            {features.map((feature, index) => (
                <Feature key={feature.title} {...feature} index={index} />
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
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
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