'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Info, Code, Rocket, PlayCircle } from 'lucide-react';


const About = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    return (
        <section id="about" className="relative py-24 md:py-32 bg-black overflow-hidden">
            {/* Background Aesthetic */}
            <div className="absolute inset-0 z-0">
                <motion.img
                    src="/layer-1-bg.png"
                    alt="Background"
                    className="absolute inset-0 w-full h-[120%] object-cover opacity-10 mix-blend-screen pointer-events-none"
                    style={{ y }}
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute inset-0 opacity-[0.02]"
                    style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-6xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-20 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-6">
                        <Info className="w-3 h-3 text-cyan-400" />
                        <span className="text-[10px] font-mono tracking-[0.3em] text-cyan-400 uppercase font-bold text-center">Protocol: Discovery</span>
                    </div>
                    <h2 className="text-4xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-none">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">The Mission</span>
                    </h2>
                </motion.div>

                {/* Content Blocks */}
                <div className="space-y-16">
                    {/* NKOCET Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
                    >
                        <div className="md:col-span-8 p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md hover:border-cyan-500/30 transition-all group">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-1 group-hover:scale-110 transition-transform overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                                    <img
                                        src="/college_logo.png"
                                        alt="Logo"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                N. K. Orchid College of Engineering & Technology
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                N. K. Orchid College of Engineering & Technology, Solapur is an autonomous institute 🏫 accredited with an A+ grade by NAAC with a remarkable CGPA of 3.32, the highest in Solapur. The institute is renowned for its state-of-the-art infrastructure, industry-oriented curriculum, and exceptional faculty, fostering a culture of innovation, research, and holistic development. With strong industry tie-ups and a focus on practical learning, the college consistently empowers students to excel in academics and build successful careers.
                            </p>
                        </div>
                    </motion.div>

                    {/* CSESA & ORCHATHON Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
                    >
                        <div className="md:col-start-5 md:col-span-8 p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md hover:border-orange-500/30 transition-all group" style={{ direction: 'ltr' }}>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-1 group-hover:scale-110 transition-transform overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                                    <img
                                        src="/csesa.jpeg"
                                        alt="CSESA Logo"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                CSESA & ORCHATHON 2K26
                            </h3>
                            <div className="space-y-6">
                                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                    The Computer Science and Engineering Students’ Association (CSESA) at N.K. Orchid College of Engineering & Technology, Solapur, is a student-driven body that fosters innovation, technical excellence, and leadership. Our goal is to empower students with technical knowledge, promote team spirit, and encourage problem-solving skills through a variety of technical events, workshops, and hackathons.
                                </p>
                                <div className="h-[1px] w-1/2 bg-gradient-to-r from-orange-500/30 to-transparent" />
                                <p className="text-gray-200 leading-relaxed font-medium text-sm md:text-base">
                                    ORCHATHON 2K26 is the premier 24-hour hackathon organized by CSESA at N.K. Orchid College of Engineering & Technology, Solapur. It is a platform for young innovators and tech enthusiasts to solve real-world problems and develop cutting-edge solutions. Our mission is to nurture innovation, critical thinking, and teamwork while providing participants with hands-on experience in solving industry-specific challenges. We are proud to host Orchathon 2K26 and look forward to encouraging a culture of technological advancement and entrepreneurship.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* --- LAST YEAR HIGHLIGHTS: VIDEO & 3D GALLERY --- */}
                <motion.div
                    id="2k25"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 w-full"
                >
                    <div className="flex flex-col items-center mb-12 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-white uppercase italic tracking-wider mb-2">
                            Last Year <span className="text-cyan-500">Highlights</span>
                        </h2>
                        <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.4em]">Archive: Orchathon 2K25</p>
                    </div>

                    <div className="relative group max-w-5xl mx-auto rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
                        <div className="aspect-video w-full bg-slate-900 flex items-center justify-center overflow-hidden relative group">
                            {/* VIDEO CONTAINER */}
                            <video
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                                controls
                                playsInline
                            >
                                <source src="/videoplayback.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>


                </motion.div>
            </div>
        </section>
    );
};

export default About;