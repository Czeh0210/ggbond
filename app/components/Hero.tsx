'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { InfiniteSlider } from './ui/infinite-slider'
import { ProgressiveBlur } from './ui/progressive-blur'
import { cn } from '../../lib/utils'
import { Menu, X, Facebook, Twitter, Instagram } from 'lucide-react'

export default function Hero({ onJoinJourneyClick }: { onJoinJourneyClick: () => void }) {
    return (
        <div className="bg-background">
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section>
                    <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
                        <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                                <h1 className="mt-8 max-w-2xl text-balance text-4xl font-bold md:text-5xl lg:mt-16 xl:text-6xl uppercase tracking-wider">Explore Malaysia, One Route at a Time</h1>
                                <p className="mt-8 max-w-2xl text-pretty text-base text-muted-foreground leading-relaxed">
                                    Light up your journey, unlock heritage, and discover the soul of Malaysia through an immersive map-based game.
                                </p>
                                <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                                    <Button asChild size="lg" className="px-5 text-base !rounded-none border-2 border-black !shadow-[4px_4px_0px_0px_#000]">
                                        <Link href="/login">
                                            <span className="text-nowrap">Start Exploring</span>
                                        </Link>
                                    </Button>
                                    <Button asChild size="lg" variant="ghost" className="px-5 text-base !rounded-none border-2 border-transparent hover:border-black">
                                        <Link href="#features">
                                            <span className="text-nowrap">See Features</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-background pb-16 md:pb-32">
                    <div className="group relative m-auto max-w-6xl px-6">
                        <div className="flex flex-col items-center md:flex-row border-y-2 border-black">
                            <div className="md:max-w-44 md:border-r-2 md:border-black md:pr-6 py-4 md:py-0">
                                <p className="text-end text-sm uppercase">Join the Community</p>
                            </div>
                            <div className="relative py-6 md:w-[calc(100%-11rem)]">
                                <InfiniteSlider duration={40} gap={112}>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Facebook className="h-6 w-6" /> Facebook
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Twitter className="h-6 w-6" /> Twitter
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Instagram className="h-6 w-6" /> Instagram
                                    </div>
                                </InfiniteSlider>
                                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                                <ProgressiveBlur
                                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                    direction="left"
                                    blurIntensity={1}
                                />
                                <ProgressiveBlur
                                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                    direction="right"
                                    blurIntensity={1}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Community', href: '#community' },
    { name: 'FAQ', href: '#faq' },
]

const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    return (
        <header>
            <nav
                data-state={menuState ? 'active' : 'inactive'}
                className="group bg-background/80 fixed z-20 w-full border-b-2 border-black backdrop-blur-sm">
                <div className="mx-auto max-w-6xl px-6 transition-all duration-300">
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                            <Link href="/" aria-label="home" className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden border-2 border-transparent focus:border-black">
                                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>

                            <div className="hidden lg:block">
                                <ul className="flex gap-8 text-sm uppercase">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-lg border-2 border-black p-6 shadow-[4px_4px_0px_0px_#000] md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base uppercase">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

const Logo = ({ className }: { className?: string }) => {
    return (
        <span className={cn('text-lg font-bold uppercase tracking-wider', className)}>
            Cuti-Cuti Explorer
        </span>
    )
}

const HeroSection = ({ onJoinJourneyClick }: { onJoinJourneyClick: () => void }) => {
    return (
        <section className="relative min-h-screen flex items-center justify-center text-white text-center px-4">
            {/* Placeholder for background image/video */}
            <div className="absolute inset-0 bg-blue-900 z-0">
                <div 
                    className="absolute inset-0 bg-cover bg-center opacity-30" 
                    style={{backgroundImage: "url('/placeholder-malaysia.jpg')"}}
                ></div>
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Explore Malaysia, One Route at a Time</h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
                    Light up your journey, unlock heritage, and discover the soul of Malaysia through an immersive map-based game.
                </p>
                <button 
                    onClick={onJoinJourneyClick}
                    className="mt-8 bg-yellow-400 text-blue-900 font-bold px-8 py-3 rounded-full text-lg hover:bg-yellow-300 transition-transform transform hover:scale-105"
                >
                    Join the Journey
                </button>
            </div>
        </section>
    );
} 