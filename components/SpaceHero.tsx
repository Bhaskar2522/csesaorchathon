'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './ui/Button';
import RocketShip from './ui/RocketShip'; // Using the SVG component for better animation control
import { Menu, X, Rocket } from 'lucide-react';
import Starfield from './Starfield'; // Reusing efficient starfield


const SpaceHero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]); // Parallax for background

    const [rocketActive, setRocketActive] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [debris, setDebris] = useState<Array<{ top: number, left: number, delay: number }>>([]);
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    // Rocket Ignition Sequence Simulation & Countdown Timer
    useEffect(() => {
        setMounted(true);
        setDebris(Array.from({ length: 5 }).map(() => ({
            top: Math.random() * 100,
            left: Math.random() * 100,
            delay: Math.random() * 5
        })));

        const interval = setInterval(() => {
            setRocketActive(true);
            setTimeout(() => setRocketActive(false), 2000);
        }, 5000);

        // Set fixed target to April 6th, 2026 at 10:00 AM
        const targetDate = new Date('2026-04-06T10:00:00').getTime();

        const countdownInterval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(countdownInterval);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);

        return () => {
            clearInterval(interval);
            clearInterval(countdownInterval);
        };
    }, []);

    return (
        <section className="relative w-full overflow-hidden bg-black text-white" style={{ minHeight: '100dvh' }}>

            {/* --- PARALLAX SPACE BACKGROUND (from newsite-main) --- */}

            {/* Layer 1: Deep Space Image */}
            <div className="absolute inset-0 z-[1] pointer-events-none"
                style={{ backgroundImage: "url('/layer-1-bg.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                {/* Cinematic vignette */}
                <div className="absolute inset-0" style={{ background: 'radial-gradient(circle, rgba(0,0,0,0) 50%, rgba(0,0,0,0.5) 80%, rgba(0,0,0,0.85) 100%)' }} />
            </div>

            {/* Layer 2: Twinkling Stars */}
            <div className="absolute inset-0 z-[2] pointer-events-none animate-[twinkle1_5s_ease-in-out_infinite_alternate]"
                style={{ backgroundImage: "url('/stars.png')", backgroundRepeat: 'repeat', backgroundSize: '600px' }} />

            {/* Layer 3: Planets */}
            <div className="absolute inset-0 z-[3] pointer-events-none">
                {/* Left Planet */}
                <div className="absolute" style={{ width: '100vw', height: '100vw', maxWidth: '1400px', maxHeight: '1400px', left: '-20vw', top: '-10vh' }}>
                    <img src="/layer-3-left-planet.png" alt="Left Planet" className="w-full h-full object-contain" style={{ filter: 'contrast(1.1) brightness(0.9)' }} />
                </div>
                {/* Right Planet */}
                <div className="absolute" style={{ width: '50vw', height: '100vw', maxWidth: '1100px', maxHeight: '1100px', left: '50vw', top: '-250px' }}>
                    <img src="/layer-2-left-planet.png" alt="Right Planet" className="w-full h-full object-contain" style={{ filter: 'contrast(1.1) brightness(0.9)' }} />
                </div>
                {/* Foreground Planet (bottom right) */}
                <motion.div className="absolute pointer-events-none"
                    style={{ width: '100vw', height: '60vw', right: 0, bottom: '-60vh', zIndex: 1, y: y1 }}>
                    <img src="/layer-bottom-right-planet.png" alt="Foreground Planet" className="w-full h-full object-contain object-bottom" style={{ filter: 'contrast(1.15) brightness(0.85)' }} />
                </motion.div>
            </div>

            {/* Layer 4: Space Station */}
            <div className="absolute inset-0 z-[4] pointer-events-none">
                <motion.img
                    src="/layer-4-station.png"
                    alt="Space Station"
                    className="absolute object-contain"
                    style={{
                        right: '20vw', top: '3vh', width: '100vw', maxWidth: '800px', height: '40vw',
                        filter: 'drop-shadow(10px 10px 40px rgba(96,60,226,0.7)) contrast(1.15) brightness(1.05)'
                    }}
                    animate={{ y: ['-20px', '20px'] }}
                    transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                />
            </div>

            {/* Layer 5: Rocket (Animated to fly towards the station) */}
            <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
                <motion.img
                    src="/layer-5-rocket.png"
                    alt="Rocket"
                    className="absolute object-contain"
                    style={{
                        width: '40vw', height: '50vw', maxWidth: '600px', maxHeight: '600px',
                        filter: 'drop-shadow(-15px 15px 20px rgba(0,229,255,0.8)) drop-shadow(-30px 30px 50px rgba(106,0,255,0.6))'
                    }}
                    initial={{ left: '-15vw', bottom: '-20vh', rotate: -5, scale: 1.1 }}
                    animate={{ left: '30vw', bottom: '40vh', rotate: 12, scale: 0.4 }}
                    transition={{ duration: 30, ease: 'easeOut' }}
                />
            </div>

            {/* Atmospheric Glow Overlay */}
            <div className="absolute inset-0 z-[9] pointer-events-none mix-blend-overlay"
                style={{ background: 'radial-gradient(circle at center, rgba(0,229,255,0.03) 0%, rgba(106,0,255,0.05) 40%, rgba(5,5,9,0.6) 100%)' }} />



            {/* --- BACKGROUND OVERLAYS --- */}

            {/* Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-10 pointer-events-none" />


            {/* Stars Overlay */}
            <div className="absolute inset-0 z-20 opacity-40 pointer-events-none">
                <Starfield />
            </div>

            {/* Scanning Grid Line Overlay */}
            <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.03]"
                style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
            <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent h-[5px] w-full animate-scanline" />


            {/* --- UI LAYOUT (High Z-Index) --- */}

            {/* 1. Top Navigation Bar - Removed as we use Global Navbar */}



            {/* --- TOP STATUS BAR --- */}
            <div className="absolute top-24 left-1/2 -translate-x-1/2 z-50 pointer-events-auto hidden md:block">
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="px-6 py-2 rounded-full border border-cyan-500/30 bg-black/40 backdrop-blur-md flex items-center gap-4 shadow-[0_0_20px_rgba(0,255,255,0.1)]"
                >
                    <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                    <span className="text-xs font-mono tracking-[0.3em] text-cyan-400 uppercase">
                        MISSION STATUS: <span className="text-white font-bold">CODELAUNCH 36</span> READY
                    </span>
                    <div className="w-[1px] h-4 bg-white/20" />
                    <span className="text-[10px] font-mono text-gray-400">COORD: 34.0522° N, 118.2437° W</span>
                </motion.div>
            </div>

            {/* --- LEFT HUD --- */}
            <aside className="hidden lg:flex flex-col justify-center absolute left-8 top-0 h-full z-50 pointer-events-none">
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="space-y-12"
                >
                    <div className="space-y-2">
                        <p className="text-[10px] font-mono text-cyan-500/60 uppercase tracking-widest">System Sync</p>
                        <div className="w-32 h-[1px] bg-gradient-to-r from-cyan-500 to-transparent" />
                        <p className="text-xs font-mono text-white">98.4% STABLE</p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-[10px] font-mono text-cyan-500/60 uppercase tracking-widest">Propulsion</p>
                        <div className="w-32 h-[1px] bg-gradient-to-r from-cyan-500 to-transparent" />
                        <p className="text-xs font-mono text-white">IGNITION READY</p>
                    </div>
                </motion.div>
            </aside>

            {/* --- CENTER HERO CONTENT --- */}
            <div className="relative z-[60] flex flex-col justify-center items-center text-center px-4 pointer-events-none" style={{ minHeight: '100dvh' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex flex-col items-center gap-4 mt-16"
                >
                    <h3 className="font-mono text-sm md:text-base tracking-[0.3em] text-cyan-400 uppercase">CSESA PRESENTS</h3>
                    <h1 className="text-4xl sm:text-5xl md:text-8xl lg:text-[120px] font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-cyan-500 drop-shadow-[0_0_30px_rgba(0,229,255,0.4)]">
                        ORCHATHON <br className="md:hidden" /><span className="text-white drop-shadow-[0_0_20px_rgba(255,100,0,0.6)]">2K26</span>
                    </h1>
                    <h2 className="text-lg md:text-2xl font-light tracking-[0.2em] text-cyan-50/80 uppercase max-w-2xl mt-4">
                        Code the Future. <br className="md:hidden" />Step into the Cyberverse.
                    </h2>

                    {/* HACKATHON COUNTDOWN TIMER */}
                    {mounted && (
                        <div className="flex flex-col items-center min-h-[220px] justify-center gap-10">
                            <motion.div
                                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                                className="mt-8 md:mt-12 flex gap-3 md:gap-6 justify-center pointer-events-auto"
                            >
                                {[
                                    { label: "DAYS", value: timeLeft.days },
                                    { label: "HOURS", value: timeLeft.hours },
                                    { label: "MINS", value: timeLeft.minutes },
                                    { label: "SECS", value: timeLeft.seconds }
                                ].map((time, idx) => (
                                    <div key={idx} className="flex flex-col items-center">
                                        <div className="w-[60px] h-[60px] md:w-24 md:h-24 rounded-lg border border-cyan-500/30 bg-black/60 backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(0,255,255,0.15)] mb-3 relative overflow-hidden group">
                                            {/* Scanline hover effect */}
                                            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                            <span className="text-2xl md:text-5xl font-bold text-white font-mono drop-shadow-[0_0_10px_rgba(0,255,255,0.8)] relative z-10">
                                                {time.value.toString().padStart(2, '0')}
                                            </span>
                                        </div>
                                        <span className="text-[10px] md:text-xs font-mono text-cyan-400 tracking-widest uppercase font-bold">{time.label}</span>
                                    </div>
                                ))}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="pointer-events-auto"
                            >
                                <a href="https://unstop.com/hackathons/orchathon-n-k-orchid-college-of-engineering-technologysolapur-1652140" target="_blank" rel="noopener noreferrer">
                                    <Button variant="blue" size="lg" className="w-64 md:w-80 text-xl font-extrabold text-white italic tracking-wider drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                                        REGISTER NOW
                                    </Button>
                                </a>
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            </div>

            {/* Floating Debris / Particles - Foreground Depth */}
            {
                mounted && debris.map((item, i) => (
                    <motion.div
                        key={i}
                        className="absolute z-40 w-1 h-1 bg-white/40 rounded-full blur-[1px]"
                        style={{
                            top: `${item.top}%`,
                            left: `${item.left}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0, 0.5, 0]
                        }}
                        transition={{
                            duration: 10 + item.delay,
                            repeat: Infinity,
                            delay: item.delay,
                            ease: "linear"
                        }}
                    />
                ))
            }

            <style jsx>{`
                .animate-scanline {
                    animation: scanline 8s linear infinite;
                }
                @keyframes scanline {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(100vh); }
                }
                @keyframes shimmer {
                    100% { transform: translateX(100%); }
                }
            `}</style>
        </section >
    );
};

export default SpaceHero;