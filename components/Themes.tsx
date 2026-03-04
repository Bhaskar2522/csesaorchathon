'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
import { Download, Orbit, Globe2, Cpu, FileText, ChevronRight } from 'lucide-react';

const themes = [
    {
        id: "PS01",
        name: "Healthcare",
        planet: "Planet Vitae",
        color: "from-rose-500 to-pink-600",
        glow: "shadow-[0_0_50px_rgba(244,63,94,0.3)]",
        border: "border-rose-500/30",
        bgHover: "hover:bg-rose-500/10",
        icon: "🏥",
        statements: [
            { title: "Telemedicine Platform with AI", desc: "Enable remote consultations with AI assistance." },
            { title: "Remote Patient Monitoring Using IoT", desc: "Track patient vitals in real-time." },
            { title: "Secure Health Records Using Blockchain", desc: "Safeguard medical records with encryption." },
            { title: "Open Innovation", desc: "Any innovative solution related to healthcare challenges." }
        ]
    },
    {
        id: "PS02",
        name: "Agriculture",
        planet: "Planet Demeter",
        color: "from-emerald-500 to-green-600",
        glow: "shadow-[0_0_50px_rgba(16,185,129,0.3)]",
        border: "border-emerald-500/30",
        bgHover: "hover:bg-emerald-500/10",
        icon: "🌾",
        statements: [
            { title: "Smart Pest Detection with AI", desc: "Identify and mitigate pests in crops." },
            { title: "IoT-Based Crop Disease Monitoring", desc: "Detect and alert for crop diseases." },
            { title: "Blockchain-Based Supply Chain for Farmers", desc: "Ensure transparency in the supply chain." },
            { title: "Open Innovation", desc: "Any innovative solution to advance agricultural technology." }
        ]
    },
    {
        id: "PS03",
        name: "Education/EdTech",
        planet: "Planet Athena",
        color: "from-blue-500 to-indigo-600",
        glow: "shadow-[0_0_50px_rgba(59,130,246,0.3)]",
        border: "border-blue-500/30",
        bgHover: "hover:bg-blue-500/10",
        icon: "🎓",
        statements: [
            { title: "AI-Powered Virtual Tutor", desc: "Provide personalized learning assistance." },
            { title: "Blockchain-Based Certificate Verification", desc: "Verify certificates securely." },
            { title: "Online Learning Analytics Platform", desc: "Analyze student performance using data." },
            { title: "Open Innovation", desc: "Solutions that revolutionize the education sector." }
        ]
    },
    {
        id: "PS04",
        name: "Finance/FinTech",
        planet: "Planet Aureus",
        color: "from-yellow-400 to-amber-600",
        glow: "shadow-[0_0_50px_rgba(251,191,36,0.3)]",
        border: "border-amber-500/30",
        bgHover: "hover:bg-amber-500/10",
        icon: "💸",
        statements: [
            { title: "AI-Based Fraud Detection", desc: "Identify fraudulent transactions in real time." },
            { title: "Decentralized Payment Gateway", desc: "Secure transactions using blockchain." },
            { title: "Budget Management with AI Insights", desc: "Offer personalized financial advice." },
            { title: "Open Innovation", desc: "Innovative ideas for transforming financial systems." }
        ]
    },
    {
        id: "PS05",
        name: "Smart City & IoT",
        planet: "Planet Nexus",
        color: "from-cyan-400 to-blue-500",
        glow: "shadow-[0_0_50px_rgba(34,211,238,0.3)]",
        border: "border-cyan-500/30",
        bgHover: "hover:bg-cyan-500/10",
        icon: "🌐",
        statements: [
            { title: "Smart Waste Management System", desc: "Optimize waste collection using IoT." },
            { title: "IoT-Based Traffic Management Platform", desc: "Monitor and manage traffic dynamically." },
            { title: "AI-Enabled Public Safety Monitoring", desc: "Enhance city security through AI surveillance." },
            { title: "Open Innovation", desc: "Smart solutions for improving urban infrastructure." }
        ]
    }
];

const Themes = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeTheme = themes[activeIndex];

    return (
        <section id="themes" className="py-32 relative overflow-hidden bg-black min-h-[90vh] flex flex-col justify-center">
            {/* Ambient Background Glow based on active theme */}
            <div className="absolute inset-0 z-0 transition-colors duration-1000">
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] blur-[150px] rounded-full opacity-10 bg-gradient-to-tr ${activeTheme.color}`} />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-4 overflow-hidden relative group">
                        <div className="w-1 h-1 rounded-full bg-cyan-400 animate-pulse" />
                        <span className="text-[10px] font-mono tracking-[0.3em] text-cyan-400 uppercase font-bold">Innovation Sectors</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-light tracking-[0.2em] text-white uppercase italic text-center">
                        Our <span className="text-cyan-500 font-bold drop-shadow-[0_0_15px_rgba(0,255,255,0.4)]">Themes</span>
                    </h2>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Left Panel: Planet Selectors */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-4">
                        {themes.map((theme, idx) => {
                            const isActive = activeIndex === idx;
                            return (
                                <button
                                    key={theme.id}
                                    onClick={() => setActiveIndex(idx)}
                                    className={`group relative w-full text-left p-6 rounded-2xl transition-all duration-500 border backdrop-blur-md overflow-hidden
                                        ${isActive
                                            ? `bg-white/[0.08] ${theme.border} ${theme.glow} scale-[1.02] z-10`
                                            : `bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-white/20`}
                                    `}
                                >
                                    {/* Active Highlight Scanline */}
                                    {isActive && <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${theme.color} shadow-[0_0_10px_currentColor]`} />}

                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="flex items-center gap-3 mb-1">
                                                <span className={`text-[10px] font-mono tracking-widest ${isActive ? 'text-white' : 'text-gray-500'}`}>{theme.id}</span>
                                                {isActive && (
                                                    <span className={`px-2 py-0.5 rounded text-[8px] font-mono font-bold tracking-widest uppercase bg-gradient-to-r ${theme.color} text-white`}>
                                                        {theme.planet}
                                                    </span>
                                                )}
                                            </div>
                                            <h3 className={`text-xl font-bold uppercase tracking-wider transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                                                {theme.icon} {theme.name}
                                            </h3>
                                        </div>
                                        <Globe2 className={`w-8 h-8 transition-all duration-500 ${isActive ? 'text-white opacity-100 rotate-180' : 'text-gray-600 opacity-30'} group-hover:scale-110`} />
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Right Panel: Theme Details Board */}
                    <div className="w-full lg:w-2/3 min-h-[500px]">
                        <AnimatePresence mode="popLayout">
                            <motion.div
                                key={activeTheme.id}
                                initial={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
                                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
                                transition={{ duration: 0.4, ease: "circOut" }}
                                className={`relative h-full rounded-3xl border ${activeTheme.border} bg-white/[0.02] backdrop-blur-xl p-8 md:p-12 overflow-hidden flex flex-col`}
                            >
                                {/* Holographic Grid Background inside card */}
                                <div className="absolute inset-0 opacity-10"
                                    style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

                                {/* Top Badges */}
                                <div className="flex justify-between items-start mb-8 relative z-10 border-b border-white/10 pb-6">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <Orbit className={`w-5 h-5 animate-spin-slow`} style={{ color: 'var(--tw-gradient-from)' }} />
                                            <span className={`text-xs font-mono font-bold tracking-[0.3em] uppercase bg-clip-text text-transparent bg-gradient-to-r ${activeTheme.color}`}>
                                                Target Destination: {activeTheme.planet}
                                            </span>
                                        </div>
                                        <h3 className="text-3xl md:text-5xl font-black text-white italic tracking-tight">
                                            {activeTheme.name}
                                        </h3>
                                    </div>
                                    <div className={`hidden md:flex w-16 h-16 rounded-2xl items-center justify-center bg-gradient-to-br ${activeTheme.color} opacity-20`}>
                                        <span className="text-4xl">{activeTheme.icon}</span>
                                    </div>
                                </div>

                                {/* Problem Statements List */}
                                <div className="flex-1 relative z-10 mb-10 overflow-hidden">
                                    <h4 className="text-[10px] font-mono text-gray-400 tracking-widest uppercase mb-4">Available Mission Objectives</h4>
                                    <ul className="space-y-4">
                                        {activeTheme.statements.map((stmt, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: 10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1 + 0.2 }}
                                                className={`group flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-black/40 transition-colors ${activeTheme.bgHover}`}
                                            >
                                                <div className={`mt-1 p-1 rounded-sm bg-gradient-to-r ${activeTheme.color} opacity-80 shadow-[0_0_10px_currentColor]`}>
                                                    <ChevronRight className="w-3 h-3 text-white" />
                                                </div>
                                                <div>
                                                    <h5 className="text-white text-sm md:text-base font-bold tracking-wide mb-1 group-hover:text-white transition-colors">
                                                        {stmt.title}
                                                    </h5>
                                                    <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed">
                                                        {stmt.desc}
                                                    </p>
                                                </div>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Action Button */}
                                <div className="relative z-10 mt-auto pt-6 border-t border-white/10 flex justify-end">
                                    <Button
                                        variant="primary"
                                        className={`gap-3 uppercase font-bold tracking-widest text-xs px-8 py-4 rounded-full border-0 transition-all hover:scale-105 ${activeTheme.glow} bg-gradient-to-r ${activeTheme.color} text-white`}
                                    >
                                        <FileText className="w-4 h-4" />
                                        Get Brochure
                                    </Button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Themes;
