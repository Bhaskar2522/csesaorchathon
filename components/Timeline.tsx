'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
    const events = [
        { time: "March 4, 2026", title: "Theme Reveal & Registration", sub: "PHASE 01", desc: "Theme is unveiled and Unstop registration goes live. Start forming your teams!", icon: "🚀" },
        { time: "March 4, 2026", title: "Round 1 & PPT Submission", sub: "PHASE 02", desc: "Round 1 begins with Open Innovations. Submit your project PPT for evaluation.", icon: "📄" },
        { time: "March 20, 2026", title: "Google Meet Interaction", sub: "SYNC", desc: "Online interaction session with mentors and evaluators via Google Meet.", icon: "💬" },
        { time: "March 25, 2026", title: "Round 1 Results", sub: "RESULTS", desc: "Shortlisted teams are announced and notified for the next phase.", icon: "📢" },
        { time: "March 26, 2026", title: "Meeting 2", sub: "PHASE 03", desc: "Second interaction meeting exclusively for selected teams.", icon: "🤝" },
        { time: "April 4–6, 2026", title: "Offline Hackathon (36 Hrs)", sub: "FINAL", desc: "The main event! 36-hour offline hackathon at NKOCET campus. Build, hack, win!", icon: "🏆" },
    ];

    return (
        <section id="timeline" className="relative py-24 md:py-32 bg-black overflow-hidden">
            {/* Clean dark background */}
            <div className="absolute inset-0 z-0 bg-[#020205]" />

            <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 mb-4">
                        <div className="w-1 h-1 rounded-full bg-orange-400 animate-pulse" />
                        <span className="text-[10px] font-mono tracking-[0.3em] text-orange-400 uppercase font-bold">Sector Analysis</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-light tracking-[0.15em] text-white uppercase">
                        Mission <span className="text-orange-500 font-bold drop-shadow-[0_0_15px_rgba(255,100,0,0.5)]">Timeline</span>
                    </h2>
                </motion.div>

                {/* Timeline Events */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-orange-500/40 to-transparent md:-translate-x-1/2" />

                    <div className="space-y-8 md:space-y-0">
                        {events.map((event, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.08 }}
                                className={`flex items-start md:items-center w-full relative ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-8 md:mb-16`}
                            >
                                {/* Card */}
                                <div className={`w-full md:w-1/2 flex ${i % 2 === 0 ? 'justify-start pl-12 md:pl-0 md:pr-12' : 'justify-start pl-12 md:pl-12 md:pr-0'}`}>
                                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-orange-500/30 transition-all group max-w-sm w-full">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-xl">{event.icon}</span>
                                            <span className="text-[9px] font-mono text-orange-500/70 tracking-widest uppercase">{event.sub}</span>
                                        </div>
                                        <div className="text-[10px] font-mono text-cyan-500/60 tracking-wider mb-1">{event.time}</div>
                                        <h4 className="text-base font-black text-white uppercase italic tracking-wide mb-1 group-hover:text-orange-400 transition-colors">{event.title}</h4>
                                        <p className="text-gray-500 text-xs leading-relaxed">{event.desc}</p>
                                    </div>
                                </div>

                                {/* Centre Dot */}
                                <div className="absolute left-[18px] md:left-1/2 top-6 md:top-auto w-4 h-4 rounded-full bg-black border-2 border-orange-500 shadow-[0_0_12px_#FF4D00] z-20 md:-translate-x-1/2" />

                                {/* Spacer */}
                                <div className="hidden md:block w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
