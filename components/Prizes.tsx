'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Medal, Award, Target, Users, Zap, ShieldCheck } from 'lucide-react';


const mainPrizes = [
    {
        rank: 1,
        title: "Grand Champion",
        amount: "RS. 25,000",
        currency: "INR",
        perks: "1 Trophy + Medals + Certificates",
        color: "from-yellow-300 to-yellow-600",
        glow: "shadow-[0_0_60px_rgba(234,179,8,0.4)]",
        border: "border-yellow-500/50",
        icon: <Trophy className="w-20 h-20 text-yellow-400" strokeWidth={1.5} />,
        scale: "scale-110 z-10",
        delay: 0.2
    },
    {
        rank: 2,
        title: "First Runner-Up",
        amount: "RS. 15,000",
        currency: "INR",
        perks: "1 Trophy + Medals + Certificates",
        color: "from-gray-300 to-gray-500",
        glow: "shadow-[0_0_40px_rgba(156,163,175,0.3)]",
        border: "border-gray-400/50",
        icon: <Medal className="w-16 h-16 text-gray-300" strokeWidth={1.5} />,
        scale: "scale-100",
        delay: 0.4
    },
    {
        rank: 3,
        title: "Second Runner-Up",
        amount: "RS. 10,000",
        currency: "INR",
        perks: "1 Trophy + Medals + Certificates",
        color: "from-amber-600 to-amber-800",
        glow: "shadow-[0_0_40px_rgba(180,83,9,0.3)]",
        border: "border-amber-700/50",
        icon: <Award className="w-16 h-16 text-amber-600" strokeWidth={1.5} />,
        scale: "scale-100",
        delay: 0.6
    }
];

const specialPrizes = [
    {
        title: "Best Innovative Idea + Performance",
        subtitle: "Girl's Team",
        desc: "Medals + Certificates",
        icon: <Users className="w-12 h-12" strokeWidth={1.5} />,
        colSpan: "md:col-span-1",
        theme: "pink",
        accent: "text-pink-400",
        bg: "bg-pink-500/5",
        border: "border-pink-500/20",
        hoverBorder: "group-hover:border-pink-500/50",
        glow: "shadow-[0_0_50px_rgba(236,72,153,0.15)]"
    },
    {
        title: "Best Innovative Idea + Performance",
        subtitle: "Boy's Team",
        desc: "Medals + Certificates",
        icon: <Zap className="w-12 h-12" strokeWidth={1.5} />,
        colSpan: "md:col-span-1",
        theme: "blue",
        accent: "text-blue-400",
        bg: "bg-blue-500/5",
        border: "border-blue-500/20",
        hoverBorder: "group-hover:border-blue-500/50",
        glow: "shadow-[0_0_50px_rgba(59,130,246,0.15)]"
    }
];

const Prizes = () => {
    return (
        <section id="prizes" className="py-32 relative overflow-hidden bg-black min-h-screen flex flex-col justify-center">
            {/* 3D Spline Astronaut Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* CSS gradient background - replaces 3D astronaut */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_50%,rgba(0,200,255,0.1)_0%,transparent_60%)]" />
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[700px] rounded-full opacity-10"
                    style={{ background: 'radial-gradient(ellipse, rgba(0,200,255,0.4) 0%, transparent 70%)' }} />

                {/* Floating Binary Overlay */}
                <div className="absolute inset-0 overflow-hidden opacity-[0.06] select-none pointer-events-none font-mono text-2xl" style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>
                    <div className="absolute top-[15%] left-[10%]">01001</div>
                    <div className="absolute top-[35%] right-[15%]">11001</div>
                    <div className="absolute bottom-[25%] left-[20%]">01011</div>
                    <div className="absolute top-[65%] right-[25%]">00001</div>
                    <div className="absolute bottom-[15%] right-[10%]">01111</div>
                </div>

                {/* Centered Ambient Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-cyan-500/10 blur-[160px] rounded-full pointer-events-none" />
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                {/* Headers */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-24"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 mb-4">
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400 animate-pulse" />
                        <span className="text-[10px] font-mono tracking-[0.3em] text-yellow-500 uppercase font-bold">Rewards Protocol</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-black tracking-tight text-white uppercase italic drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                        Prizes
                    </h2>
                </motion.div>

                {/* Main Prizes Tier (1, 2, 3) */}
                <div className="flex flex-col md:flex-row justify-center items-end gap-8 mb-32 h-auto md:h-[500px]">
                    {/* Responsive ordering: 1-2-3 on Mobile, 2-1-3 on Desktop */}
                    {mainPrizes.map((prize, idx) => (
                        <motion.div
                            key={prize.rank}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: prize.delay, duration: 0.6, type: "spring" }}
                            className={`relative group w-full md:w-[350px] ${prize.rank === 1 ? 'md:scale-110 z-10 md:order-2' : prize.rank === 2 ? 'md:order-1' : 'md:order-3'} transition-all duration-500`}
                        >
                            {/* Card Body */}
                            <div className={`relative rounded-3xl bg-[#0a0a0a] border ${prize.border} overflow-hidden backdrop-blur-xl flex flex-col items-center text-center p-8 hover:-translate-y-4 hover:${prize.glow} transition-all duration-500`}>

                                {/* Top Aesthetic Curve/Highlight */}
                                <div className="absolute top-0 left-0 right-0 h-32 opacity-20 bg-gradient-to-b from-white/20 to-transparent pointer-events-none rounded-b-[100%] border-b border-white/10" />

                                {/* Icon / Trophy Graphic */}
                                <div className="relative mb-8 mt-4">
                                    <div className={`absolute inset-0 blur-2xl opacity-50 bg-gradient-to-tr ${prize.color}`} />
                                    <div className="relative z-10 flex flex-col items-center">
                                        {prize.icon}
                                        {/* Rank Badge inside/near trophy */}
                                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[80%] w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center font-black text-xl text-white shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
                                            {prize.rank}
                                        </div>
                                    </div>
                                </div>

                                {/* Prize Money Content */}
                                <div className="mt-4 flex flex-col items-center gap-2">
                                    <span className="text-sm font-bold text-gray-400 tracking-[0.2em]">{prize.currency}</span>
                                    <h3 className={`text-4xl md:text-5xl font-black italic tracking-tighter ${prize.rank === 1 ? 'text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]' : 'text-white'}`}>
                                        {prize.amount}
                                    </h3>
                                    <p className="text-sm font-medium text-gray-400 mt-2 tracking-wide font-light">
                                        {prize.perks}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Special Prizes Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold text-white tracking-widest uppercase">Special Prizes</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {specialPrizes.map((special, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`relative py-12 px-8 rounded-3xl bg-black/40 border ${special.border} ${special.hoverBorder} backdrop-blur-xl group transition-all duration-500 ${special.colSpan} flex flex-col items-center justify-center text-center overflow-hidden hover:${special.glow} hover:-translate-y-2`}
                            >
                                {/* Decorative Ornaments */}
                                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/10 to-transparent opacity-10 group-hover:opacity-20 transition-opacity`} />
                                <div className={`absolute top-4 right-4 w-12 h-[1px] ${special.accent} opacity-40`} />
                                <div className={`absolute top-4 right-4 w-[1px] h-12 ${special.accent} opacity-40`} />

                                <div className={`absolute bottom-4 left-4 w-12 h-[1px] ${special.accent} opacity-40`} />
                                <div className={`absolute bottom-4 left-4 w-[1px] h-12 ${special.accent} opacity-40`} />

                                {/* Internal Grid Pattern */}
                                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

                                {/* Hover Scanline Effect */}
                                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-full group-hover:animate-[scanline_3s_linear_infinite] pointer-events-none`} />

                                <div className={`w-24 h-24 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-700 ${special.bg} border border-white/5 relative`}>
                                    <div className={`absolute inset-0 blur-xl opacity-20 ${special.accent}`} />
                                    <div className={`relative z-10 ${special.accent}`}>
                                        {special.icon}
                                    </div>
                                </div>

                                <div className="space-y-4 relative z-10">
                                    <h4 className="text-2xl md:text-3xl font-black text-white tracking-tight uppercase italic group-hover:scale-105 transition-transform duration-500">
                                        {special.title}
                                    </h4>

                                    {special.subtitle && (
                                        <div className={`inline-block px-4 py-1.5 rounded-full ${special.bg} border border-white/10`}>
                                            <h5 className={`text-sm font-black uppercase tracking-widest ${special.accent}`}>
                                                {special.subtitle}
                                            </h5>
                                        </div>
                                    )}

                                    <p className="text-gray-400 text-sm md:text-base font-light tracking-wide max-w-md leading-relaxed">
                                        {special.desc}
                                    </p>

                                    <div className={`h-[1px] w-12 mx-auto bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:w-32 transition-all duration-700`} />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Participation Certificate Banner */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-36 relative py-12 px-12 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col md:flex-row items-center justify-center gap-6 overflow-hidden group hover:border-white/10 transition-colors"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white-[0.02] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                        <div className="flex items-center gap-4">
                            <ShieldCheck className="w-6 h-6 text-cyan-500 animate-pulse" />
                            <span className="text-lg md:text-xl font-medium text-gray-200 tracking-tight">
                                Participation certificates for all the participants.
                            </span>
                        </div>

                        <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                        <div className="flex -space-x-4">
                            {[
                                "/Coordinater/IMG_0609.png",
                                "/Coordinater/WhatsApp Image 2026-03-04 at 3.42.12 PM.png",
                                "/Coordinater/01.png",
                                "/Coordinater/0.png"
                            ].map((url, i) => (
                                <div key={i} className="w-12 h-12 rounded-full border-2 border-black bg-gray-800 flex items-center justify-center overflow-hidden shadow-2xl relative" style={{ zIndex: 10 - i }}>
                                    <img src={url} alt="" className="w-full h-full object-cover" />
                                </div>
                            ))}
                            <div className="w-12 h-12 rounded-full border-2 border-black bg-gray-900 flex items-center justify-center text-xs text-cyan-400 font-extrabold shadow-2xl z-10 backdrop-blur-md relative">
                                +1K
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Prizes;