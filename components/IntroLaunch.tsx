'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SplineModel from './SplineModel';
// removed Button import since it's no longer used
import RocketShip from './ui/RocketShip'; // Keeping this as a fallback or for specific parts if needed, but primarily using image

interface IntroLaunchProps {
    onLaunchComplete: () => void;
}

const IntroLaunch = ({ onLaunchComplete }: IntroLaunchProps) => {
    // Stages: 'countdown-3' -> 'countdown-2' -> 'countdown-1' -> 'igniting' -> 'launched'
    const [status, setStatus] = useState<'countdown-3' | 'countdown-2' | 'countdown-1' | 'igniting' | 'launched'>('countdown-3');
    const [warpLines, setWarpLines] = useState<Array<{ left: number, height: number, duration: number, delay: number }>>([]);
    const [particles, setParticles] = useState<Array<{ y: number, xStart: number, xEnd: number, duration: number, delay: number, width: number, height: number, colorId: number }>>([]);
    const sequenceStarted = React.useRef(false);

    useEffect(() => {
        // Hydration fix: Generate random values only on client
        setWarpLines(Array.from({ length: 20 }).map(() => ({
            left: Math.random() * 100,
            height: Math.random() * 20 + 10,
            duration: 0.2 + Math.random() * 0.5,
            delay: Math.random() * 0.5
        })));

        setParticles(Array.from({ length: 40 }).map(() => ({
            y: 200 + Math.random() * 100,
            xStart: (Math.random() - 0.5) * 60,
            xEnd: (Math.random() - 0.5) * 200,
            duration: 0.4 + Math.random() * 0.4,
            delay: Math.random() * 0.2,
            width: 10 + Math.random() * 20,
            height: 10 + Math.random() * 20,
            colorId: Math.floor(Math.random() * 3)
        })));

        // Double launch fix: Ensure sequence runs only once
        if (sequenceStarted.current) return;
        sequenceStarted.current = true;

        // Auto-start sequence
        const timer1 = setTimeout(() => setStatus('countdown-2'), 1000);
        const timer2 = setTimeout(() => setStatus('countdown-1'), 2000);
        const timer3 = setTimeout(() => setStatus('igniting'), 3000);

        // Ignition to Launch
        const timer4 = setTimeout(() => {
            setStatus('launched');
            // Notify parent completion after launch animation
            setTimeout(() => {
                onLaunchComplete();
            }, 1000);
        }, 5500); // 3000 + 2500ms ignition time

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
        };
    }, [onLaunchComplete]);

    return (
        <AnimatePresence>
            {status !== 'launched' && (
                <motion.div
                    className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                >
                    {/* Warp Speed Effect (Lines) - Always visible during intro */}
                    <div className="absolute inset-0 z-0">
                        {warpLines.map((line, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: '100vh', opacity: [0, 1, 0] }}
                                transition={{
                                    duration: line.duration,
                                    repeat: Infinity,
                                    delay: line.delay,
                                    ease: "linear"
                                }}
                                className="absolute w-[2px] bg-white/50"
                                style={{
                                    left: `${line.left}%`,
                                    height: `${line.height}%`
                                }}
                            />
                        ))}
                    </div>

                    {/* Rocket Container */}
                    <motion.div
                        animate={
                            status === 'igniting' ? {
                                x: [0, -2, 2, -1, 1, 0],
                                y: [0, 1, -1, 0.5, -0.5, 0]
                            } : {}
                        }
                        transition={{ duration: 0.05, repeat: Infinity }}
                        className="relative z-10 flex flex-col items-center"
                    >
                        <div className="relative w-64 h-64 md:w-96 md:h-96">
                            {/* Spline 3D Rocket - Hidden on mobile for performance */}
                            <div className="hidden md:block w-full h-full">
                                <motion.div
                                    className="w-full h-full transform origin-bottom"
                                    variants={{
                                        'countdown-3': { x: 0, y: 0 },
                                        'countdown-2': { x: [0, -1, 1, 0], y: [0, 1, 0], transition: { duration: 0.1, repeat: Infinity } },
                                        'countdown-1': { x: [0, -3, 3, -2, 2, 0], y: [0, 2, -2, 0], transition: { duration: 0.1, repeat: Infinity } },
                                        'igniting': {
                                            x: [0, -5, 5, -5, 5, 0],
                                            y: [0, 3, -3, 3, -3, 0],
                                            filter: 'brightness(1.2)',
                                            transition: { duration: 0.1, repeat: Infinity }
                                        },
                                        'launched': {
                                            y: -2000,
                                            scale: 0.8,
                                            filter: 'blur(5px) brightness(1.5)',
                                            transition: { duration: 1.5, ease: "easeIn" }
                                        }
                                    }}
                                    animate={status}
                                    style={{
                                        filter: 'drop-shadow(0 0 25px rgba(0,224,255,0.4))'
                                    }}
                                >
                                    <div className="w-full h-full relative">
                                        <SplineModel
                                            scene="https://my.spline.design/launchartemisrocket-bErNgiDJlc9oCwK82bRLTAXC/"
                                            className="w-full h-full"
                                        />
                                        {/* Overlay to block potential watermark interaction */}
                                        <div className="absolute bottom-0 right-0 w-32 h-12 bg-black z-20 pointer-events-none" />
                                    </div>
                                </motion.div>
                            </div>

                            {/* Mobile Rocket Fallback (SVG) */}
                            <div className="md:hidden w-full h-full">
                                <motion.div
                                    className="w-full h-full"
                                    variants={{
                                        'countdown-3': { x: 0, y: 0 },
                                        'countdown-2': { x: [0, -1, 1, 0], y: [0, 1, 0], transition: { duration: 0.1, repeat: Infinity } },
                                        'countdown-1': { x: [0, -3, 3, -2, 2, 0], y: [0, 2, -2, 0], transition: { duration: 0.1, repeat: Infinity } },
                                        'igniting': {
                                            x: [0, -2, 2, -2, 2, 0],
                                            y: [0, 1, -1, 1, -1, 0],
                                            transition: { duration: 0.1, repeat: Infinity }
                                        },
                                        'launched': {
                                            y: -1500,
                                            scale: 0.6,
                                            transition: { duration: 1.2, ease: "easeIn" }
                                        }
                                    }}
                                    animate={status}
                                >
                                    <RocketShip
                                        active={status === 'igniting' || status === 'countdown-1'}
                                        variant="cyberpunk"
                                        className="w-full h-full"
                                    />
                                </motion.div>
                            </div>

                            {/* Particle System for Smoke/Fire - Intensify during countdown-1 and Igniting */}
                            <AnimatePresence>
                                {(status === 'countdown-1' || status === 'igniting') && (
                                    <div className="absolute top-[85%] left-1/2 -translate-x-1/2 w-full flex justify-center z-0">
                                        {/* Main Thrust Core */}
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: [100, 150, 120], opacity: 0.8 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="absolute top-0 w-8 bg-blue-500 blur-md rounded-full"
                                            style={{ boxShadow: '0 0 20px #00E0FF' }}
                                        />

                                        {/* Particles */}
                                        {particles.map((p, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 0, scale: 0.2 }}
                                                animate={{
                                                    opacity: [0, 1, 0],
                                                    y: [0, p.y],
                                                    x: [p.xStart, p.xEnd],
                                                    scale: [0.2, 1.5, 3]
                                                }}
                                                transition={{
                                                    duration: p.duration,
                                                    repeat: Infinity,
                                                    delay: p.delay,
                                                    ease: "easeOut"
                                                }}
                                                className="absolute rounded-full blur-sm"
                                                style={{
                                                    backgroundColor: p.colorId === 0 ? '#00E0FF' : p.colorId === 1 ? '#FF0055' : '#FFFFFF',
                                                    width: `${p.width}px`,
                                                    height: `${p.height}px`,
                                                    zIndex: -1
                                                }}
                                            />
                                        ))}
                                    </div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Countdown / Status Text */}
                        <div className="mt-12 h-24 flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                {status === 'countdown-3' && (
                                    <motion.h1
                                        key="3"
                                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                                        animate={{ opacity: 1, scale: 1.2, y: 0 }}
                                        exit={{ opacity: 0, scale: 2, filter: 'blur(10px)' }}
                                        className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-purple-600 drop-shadow-[0_0_15px_rgba(0,224,255,0.8)]"
                                    >
                                        3
                                    </motion.h1>
                                )}
                                {status === 'countdown-2' && (
                                    <motion.h1
                                        key="2"
                                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                                        animate={{ opacity: 1, scale: 1.2, y: 0 }}
                                        exit={{ opacity: 0, scale: 2, filter: 'blur(10px)' }}
                                        className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-purple-600 drop-shadow-[0_0_15px_rgba(0,224,255,0.8)]"
                                    >
                                        2
                                    </motion.h1>
                                )}
                                {status === 'countdown-1' && (
                                    <motion.h1
                                        key="1"
                                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                                        animate={{ opacity: 1, scale: 1.2, y: 0 }}
                                        exit={{ opacity: 0, scale: 2, filter: 'blur(10px)' }}
                                        className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-purple-600 drop-shadow-[0_0_15px_rgba(0,224,255,0.8)]"
                                    >
                                        1
                                    </motion.h1>
                                )}
                                {status === 'igniting' && (
                                    <motion.div
                                        key="launch"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-center"
                                    >
                                        <p className="text-cyan-400 font-mono text-xl animate-pulse tracking-widest mb-2">ENGINES IGNITED</p>
                                        <h2 className="text-6xl font-black text-white tracking-[0.2em] uppercase drop-shadow-[0_0_30px_rgba(255,0,85,0.8)]">
                                            LAUNCH
                                        </h2>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default IntroLaunch;
