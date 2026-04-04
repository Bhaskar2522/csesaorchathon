'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import Starfield from './Starfield';
import RocketShip from './ui/RocketShip';
import { ArrowRight, Rocket } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
            <Starfield />

            {/* Ambient Glow */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent/20 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow delay-1000"></div>

            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-center lg:text-left"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="inline-block mb-4 px-4 py-1 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm"
                    >
                        <span className="text-primary text-xs font-bold tracking-widest uppercase">CodeLaunch 36 • National Hackathon</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                        Igniting <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Innovation</span>. <br />
                        Launching <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Code</span>.
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        Join the elite 36-hour hackathon where future tech meets infinite possibilities. Build, deploy, and launch your ideas into orbit.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a href="https://orchathon2k26.web.app/dashboard" target="_blank" rel="noopener noreferrer">
                            <Button variant="primary" size="lg" className="group">
                                DASHBOARD <Rocket className="ml-2 w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                            </Button>
                        </a>
                        <Button variant="secondary" size="lg" className="group">
                            Explore Mission <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </motion.div>

                {/* Rocket / Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                    className="relative flex justify-center lg:justify-end"
                >
                    <motion.div
                        animate={{
                            y: [0, -30, 0],
                            x: [0, -15, 0],
                            rotate: [0, 2, 0, -1, 0]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative w-80 h-80 md:w-[500px] md:h-[500px]"
                    >
                        {/* Rocket Body Glow */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/20 rounded-full blur-[80px]"></div>

                        <div className="w-full h-full transform -rotate-12">
                            <RocketShip active={true} />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
