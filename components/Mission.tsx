'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Mission = () => {
    return (
        <section id="mission" className="relative py-32 bg-black overflow-hidden">
            {/* Background Space Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F1A] via-black to-[#050510]" />
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto text-center"
                >
                    {/* HUD-styled Label */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-8 overflow-hidden relative">
                        <div className="w-1 h-1 rounded-full bg-cyan-400 animate-pulse" />
                        <span className="text-[10px] font-mono tracking-[0.3em] text-cyan-400 uppercase">Mission Protocol</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-light tracking-[0.1em] text-white mb-10 uppercase">
                        Mission <span className="text-cyan-500 font-bold drop-shadow-[0_0_15px_rgba(0,224,255,0.4)]">Brief</span>
                    </h2>

                    <p className="text-lg md:text-2xl text-gray-400 leading-relaxed mb-16 font-light">
                        CodeLaunch 36 is an <span className="text-white font-medium">interstellar journey</span> where developers, designers, and innovators converge to solve real-world problems.
                        You have <span className="text-cyan-400">36 hours</span> to build, deploy, and showcase your vision to industry leaders.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "36 Hours", desc: "Non-stop innovation", sub: "TIME ALLOCATION" },
                            { title: "₹50,000+", desc: "Prize Pool & Grants", sub: "REWARD SYSTEM" },
                            { title: "National", desc: "Top talent across India", sub: "DEPLOYMENT SCALE" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                whileHover={{ scale: 1.02, y: -5 }}
                                className="group relative p-8 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-cyan-500/40 transition-all duration-300"
                            >
                                {/* HUD Corner Accents */}
                                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500/20 group-hover:border-cyan-500/60 transition-colors" />
                                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500/20 group-hover:border-cyan-500/60 transition-colors" />

                                <div className="flex flex-col items-center gap-4">
                                    <span className="text-[10px] font-mono tracking-[0.2em] text-cyan-500/50 uppercase">{item.sub}</span>
                                    <h3 className="text-4xl font-bold text-white drop-shadow-[0_0_10px_rgba(0,224,255,0.2)]">{item.title}</h3>
                                    <div className="h-[1px] w-12 bg-white/10 group-hover:w-20 group-hover:bg-cyan-500/30 transition-all" />
                                    <p className="text-gray-400 text-sm tracking-wide">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Footer HUD line */}
                    <div className="mt-20 flex justify-center items-center gap-6 opacity-30">
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/20" />
                        <div className="flex gap-2">
                            {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 bg-white" />)}
                        </div>
                        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/20" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Mission;
