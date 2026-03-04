'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Sponsors = () => {
    const sponsors = [
        {
            category: "Powered by",
            name: "techsofya",
            slogan: "Unlocking Efficiency, Elevating Real Estate",
            logo: (
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-xl rotate-3 group-hover:rotate-0 transition-transform duration-500">
                        <span className="text-[#7c28c6] font-black text-4xl font-serif">t</span>
                    </div>
                    <h3 className="text-white font-black text-3xl tracking-tight mb-2">techsofya</h3>
                    <p className="text-white/60 text-[10px] uppercase font-bold tracking-[0.2em] text-center max-w-[150px]">Unlocking Efficiency, Elevating Real Estate</p>
                </div>
            ),
            gradient: "from-[#7c28c6] to-[#5a18a0]",
            border: "border-purple-500/20",
            hoverBorder: "group-hover:border-purple-500/50",
            glow: "shadow-[0_0_50px_rgba(124,40,198,0.2)]",
            delay: 0.1
        },
        {
            category: "Gold Sponsor",
            name: "Giri's Tech Hub",
            slogan: "...Talent Meets Opportunity",
            logo: (
                <div className="flex flex-col items-center">
                    <div className="flex items-center flex-wrap justify-center gap-2 mb-4">
                        <span className="text-[#0077b6] font-black text-3xl tracking-tighter italic">GIRI'S TECH</span>
                        <div className="bg-[#f08a00] text-white px-3 py-1 font-black text-2xl skew-x-[-10deg]">HUB</div>
                    </div>
                    <div className="text-[#0077b6] font-extrabold text-lg mb-4">Pvt Ltd</div>
                    <div className="h-px w-12 bg-black/10 mb-4" />
                    <p className="text-black/60 font-black text-xs tracking-[0.3em] uppercase">Talent Meets Opportunity</p>
                </div>
            ),
            gradient: "from-white to-gray-100",
            border: "border-yellow-500/30",
            hoverBorder: "group-hover:border-yellow-500/60",
            glow: "shadow-[0_0_60px_rgba(234,179,8,0.25)]",
            scale: "lg:scale-110",
            delay: 0.2
        },
        {
            category: "Bronze Sponsor",
            name: "DK Techno's",
            slogan: "DEV KIND TECHNOLOGIES LLP",
            logo: (
                <div className="flex flex-col items-center">
                    <div className="flex gap-3 mb-6">
                        {[1, 2, 3].map(i => (
                            <div key={i} className={`w-4 h-4 rounded-full bg-[#f4a261] shadow-lg ${i === 2 ? '-translate-y-2 animate-bounce' : ''}`} style={{ animationDelay: `${i * 0.2}s` }} />
                        ))}
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-[#d90429] font-black text-4xl tracking-tighter">DK</span>
                        <span className="text-black font-black text-4xl tracking-tighter">Techno's</span>
                    </div>
                    <p className="text-gray-500 font-bold text-[10px] tracking-[0.4em] uppercase">DEV KIND TECHNOLOGIES LLP</p>
                </div>
            ),
            gradient: "from-white to-gray-50",
            border: "border-orange-500/20",
            hoverBorder: "group-hover:border-orange-500/50",
            glow: "shadow-[0_0_40px_rgba(244,162,97,0.15)]",
            delay: 0.3
        }
    ];

    return (
        <section id="sponsors" className="py-32 relative overflow-hidden bg-black min-h-screen flex flex-col justify-center">
            {/* Ambient Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/[0.02] blur-[150px] rounded-full" />

                {/* Floating Binary Background */}
                <div className="absolute inset-0 opacity-[0.05] select-none font-mono text-2xl" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                    <div className="absolute top-[15%] left-[10%] text-white animate-pulse">01001</div>
                    <div className="absolute top-[35%] right-[15%] text-white animate-pulse" style={{ animationDelay: '1s' }}>11001</div>
                    <div className="absolute bottom-[25%] left-[20%] text-white animate-pulse" style={{ animationDelay: '0.5s' }}>01011</div>
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-24 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
                        <div className="w-1 h-1 rounded-full bg-white/40 animate-pulse" />
                        <span className="text-[10px] font-mono tracking-[0.3em] text-white/60 uppercase font-bold">Alliance Protocol</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-none">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Sponsors</span>
                    </h2>
                </motion.div>

                {/* Sponsor Cards Grid */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {sponsors.map((sponsor, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: sponsor.delay }}
                            className={`group relative flex flex-col ${sponsor.scale || ""}`}
                        >
                            <div className="mb-4 flex items-center gap-3">
                                <div className={`h-px flex-1 bg-gradient-to-r from-transparent to-white/10`} />
                                <span className="text-[10px] font-mono tracking-[0.4em] text-white/40 uppercase whitespace-nowrap">{sponsor.category}</span>
                                <div className={`h-px flex-1 bg-gradient-to-l from-transparent to-white/10`} />
                            </div>

                            <div className={`flex-1 rounded-[2.5rem] bg-gradient-to-b ${sponsor.gradient} border ${sponsor.border} ${sponsor.hoverBorder} p-10 flex flex-col items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:${sponsor.glow} group-hover:-translate-y-2`}>
                                {/* Decorative elements */}
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div className="relative z-10">
                                    {sponsor.logo}
                                </div>

                                {/* External card ornaments */}
                                <div className="absolute top-6 right-6 w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2 group-hover:translate-y-0">
                                    <div className={`absolute top-0 right-0 w-full h-[1px] bg-black/10`} />
                                    <div className={`absolute top-0 right-0 h-full w-[1px] bg-black/10`} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
