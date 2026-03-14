'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Rocket } from 'lucide-react';

const Timeline = () => {
    const sectionRef = useRef<HTMLElement>(null);

    // Track scroll progress of the timeline section
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start center', 'end center'],
    });

    // Smooth the raw scroll value for butter-smooth rocket movement
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 20,
        restDelta: 0.001,
    });

    // Map scroll progress 0→1 to vertical position 0%→95%
    const rocketY = useTransform(smoothProgress, [0, 1], ['0%', '95%']);

    // Growing filled line behind rocket as you scroll
    const lineScaleY = useTransform(smoothProgress, [0, 1], [0, 1]);

    // Flame height grows when scroll speed is faster (mid-section)
    const flameHeight = useTransform(smoothProgress, [0, 0.5, 1], [8, 22, 8]);

    const events = [
        { time: "March 4, 2026", title: "Theme Reveal & Registration", sub: "PHASE 01", desc: "Theme is unveiled and Unstop registration goes live. Start forming your teams!", icon: "🚀" },
        { time: "March 4, 2026", title: "Round 1: Idea PPT, Abstract and YouTube Demo link submission", sub: "PHASE 02", desc: "Round 1 begins with Open Innovations. Submit your project PPT for evaluation.", icon: "📄" },
        { time: "March 20, 2026", title: "Google Meet Interaction", sub: "SYNC", desc: "Online interaction session with mentors and evaluators via Google Meet.", icon: "💬" },
        { time: "March 25, 2026", title: "Round 1 Results", sub: "RESULTS", desc: "Shortlisted teams are announced and notified for the next phase.", icon: "📢" },
        { time: "March 25, 2026", title: "Meeting 2", sub: "PHASE 03", desc: "Second interaction meeting exclusively for selected teams.", icon: "🤝" },
        { time: "March 25-26, 2026", title: "Domain Selection", sub: "FINAL", desc: "Shortlisted teams will select three preferred domains through a Google Form. The final hackathon problem statement assigned to each team will be based on one of the selected domains.", icon: "🧭" },
        { time: "April 4–6, 2026", title: "Offline Hackathon (36 Hrs)", sub: "FINAL", desc: "The main event! 36-hour offline hackathon at NKOCET campus. Build, hack, win!", icon: "🏆" },
    ];

    return (
        <section ref={sectionRef} id="timeline" className="relative py-24 md:py-32 bg-black overflow-hidden">
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
                        <Rocket className="w-3 h-3 text-orange-400" />
                        <span className="text-[10px] font-mono tracking-[0.3em] text-orange-400 uppercase font-bold">Sector Analysis</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-[0.1em] text-white uppercase leading-tight">
                        Mission <span className="text-orange-500 font-bold drop-shadow-[0_0_15px_rgba(255,100,0,0.5)]">Timeline</span>
                    </h2>
                </motion.div>

                {/* Timeline Events */}
                <div className="relative">

                    {/* Background guide line (faint) */}
                    <div className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-orange-500/15 to-transparent md:-translate-x-1/2" />

                    {/* Scroll-progress filled line — grows as you scroll */}
                    <motion.div
                        className="absolute left-[18px] md:left-1/2 top-0 w-[2px] md:-translate-x-1/2 origin-top rounded-full"
                        style={{
                            scaleY: lineScaleY,
                            height: '100%',
                            background: 'linear-gradient(to bottom, #f97316, #ea580c, #c2410c)',
                        }}
                    />

                    {/* Scroll-driven Rocket */}
                    <motion.div
                        className="absolute left-[10px] md:left-1/2 z-30 md:-translate-x-1/2 pointer-events-none"
                        style={{ top: rocketY }}
                    >
                        {/* Flame trail — above the rocket since it points downward */}
                        <motion.div
                            className="absolute left-1/2 -translate-x-1/2 bottom-full w-[3px] rounded-full"
                            style={{
                                height: flameHeight,
                                background: 'linear-gradient(to top, #fb923c, rgba(251,146,60,0))',
                            }}
                        />

                        {/* Outer glow */}
                        <div className="absolute w-10 h-10 -top-2 -left-2 rounded-full bg-orange-500/25 blur-lg" />

                        {/* Rocket — rotated 135° to point downward along the line */}
                        <div
                            className="text-2xl select-none drop-shadow-[0_0_12px_rgba(255,100,0,1)] relative z-10"
                            style={{ transform: 'rotate(135deg)' }}
                        >
                            🚀
                        </div>
                    </motion.div>

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
