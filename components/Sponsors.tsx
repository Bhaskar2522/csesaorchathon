'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Sponsors = () => {
    const sponsors = [
        {
            name: "ASPERA",
            logo: "/3.png",
            color: "cyan",
            delay: 0.1
        },
        {
            name: "CONSISTENT",
            logo: "/5.png",
            color: "orange",
            scale: "lg:scale-110 z-20",
            delay: 0.2
        },
        {
            name: "Giri's Tech HUB",
            logo: "/4.png",
            color: "cyan",
            delay: 0.3
        }
    ];

    return (
        <section id="sponsors" className="py-32 relative overflow-hidden bg-[#020205] min-h-screen flex flex-col justify-center">
            {/* --- ADAPTIVE BACKGROUND --- */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03)_0%,transparent_70%)]" />

                {/* Technical Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

                {/* Horizontal Scanlines */}
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 3px, rgba(255,255,255,0.1) 3px)' }} />
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                {/* --- HEADER --- */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-32 text-center"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-cyan-500/50" />
                        <span className="text-[10px] font-mono tracking-[0.5em] text-cyan-400 uppercase font-bold px-4 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5">
                            Collaborative Core
                        </span>
                        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-cyan-500/50" />
                    </div>

                    <h2 className="text-6xl md:text-8xl font-black text-white italic tracking-tighter uppercase leading-none">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-600 drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]">Sponsors</span>
                    </h2>
                </motion.div>

                {/* --- SPONSOR CARDS --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center">
                    {sponsors.map((sponsor, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: sponsor.delay, duration: 0.8, ease: "easeOut" }}
                            className={`group relative ${sponsor.scale || ""}`}
                        >


                            {/* Card Body */}
                            <div className={`relative aspect-[4/5] md:aspect-[3/4] lg:aspect-square overflow-hidden rounded-[2.5rem] border transition-all duration-700 bg-[#05050a] ${sponsor.color === 'orange'
                                    ? 'border-orange-500/20 group-hover:border-orange-500/60 shadow-[0_0_40px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_80px_rgba(255,100,0,0.15)]'
                                    : 'border-white/10 group-hover:border-cyan-500/40 shadow-[0_0_40px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_80px_rgba(0,255,255,0.1)]'
                                }`}>
                                {/* Animated Glow Gradient Overlay */}
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-gradient-to-br ${sponsor.color === 'orange' ? 'from-orange-500 via-transparent' : 'from-cyan-400 via-transparent'
                                    } to-transparent`} />

                                {/* Internal Grid Decoration */}
                                <div className="absolute inset-0 opacity-[0.03] rotate-44 translate-y-12 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:15px_15px]" />

                                <div className={`absolute inset-0 flex items-center justify-center ${sponsor.color === 'orange' ? 'p-2' : 'p-6 lg:p-8'}`}>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className={`w-full h-full bg-white rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.3)] group-hover:shadow-[0_0_50px_rgba(255,255,255,0.1)] transition-all duration-500 relative overflow-hidden ${sponsor.color === 'orange' ? 'p-1' : 'p-4'}`}
                                    >
                                        {/* Subtle Shine Effect on Badge */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-700 -rotate-45 translate-x-[-100%] group-hover:translate-x-[100%]" />

                                        <img
                                            src={sponsor.logo}
                                            alt={sponsor.name}
                                            className="w-full h-full object-contain"
                                        />
                                    </motion.div>
                                </div>

                                {/* Technical UI Ornaments - Corners */}
                                <div className={`absolute top-0 left-0 w-8 h-8 border-t border-l rounded-tl-[2.5rem] p-2 transition-colors duration-500 ${sponsor.color === 'orange' ? 'border-orange-500/30' : 'border-white/20'
                                    }`}>
                                    <div className={`w-1 h-1 rounded-full ${sponsor.color === 'orange' ? 'bg-orange-500' : 'bg-cyan-500'}`} />
                                </div>
                                <div className={`absolute bottom-0 right-0 w-8 h-8 border-b border-r rounded-br-[2.5rem] transition-colors duration-500 ${sponsor.color === 'orange' ? 'border-orange-500/30' : 'border-white/20'
                                    }`} />


                            </div>

                            {/* Sponsor Name below card */}
                            <div className="mt-8 text-center opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                                <h4 className="text-sm font-bold text-white tracking-widest uppercase italic">{sponsor.name}</h4>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* --- CTA FOOTER --- */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-32 text-center"
                >
                    <p className="text-gray-500 text-xs font-mono tracking-[0.3em] uppercase">Join the Orbit</p>
                    <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mx-auto mt-4" />
                </motion.div>
            </div>
        </section>
    );
};

export default Sponsors;
