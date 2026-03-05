'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';


const Contact = () => {
    const [mode, setMode] = useState<'signal' | 'identity'>('signal');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return (
        <section id="contact" className="relative py-24 md:py-32 bg-black overflow-hidden border-t border-white/5 min-h-screen">
            <div className="container mx-auto px-6 relative z-10 max-w-6xl flex items-center justify-center">
                <div className="text-orange-500 font-mono text-xs animate-pulse tracking-[0.4em]">INITIALIZING COMMS...</div>
            </div>
        </section>
    );

    return (
        <section id="contact" className="relative py-24 md:py-32 bg-black overflow-hidden border-t border-white/5">
            {/* Background Aesthetic */}
            <div className="absolute inset-0 z-0">
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-900/10 blur-[150px] rounded-full pointer-events-none" />
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-6xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 mb-6">
                        <MessageSquare className="w-3 h-3 text-orange-400" />
                        <span className="text-[10px] font-mono tracking-[0.3em] text-orange-400 uppercase font-bold">Signal: Comm-Link</span>
                    </div>
                    <h2 className="text-4xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-none">
                        Establish <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Contact</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info Cards */}
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md group hover:border-orange-500/40 transition-all"
                        >
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-2 uppercase tracking-wider">Mission Base</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        N.K. Orchid College of Engineering & Technology,<br />
                                        Solapur-Pune Highway, Solapur, Maharashtra 413002
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md group hover:border-cyan-500/40 transition-all"
                        >
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-2 uppercase tracking-wider">Direct Channel</h4>
                                    <p className="text-gray-400 text-sm">orchathon@orchidengg.ac.in</p>
                                    <p className="text-gray-400 text-sm mt-1">csesa.nkocet@gmail.com</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md group hover:border-blue-500/40 transition-all"
                        >
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-white font-bold mb-2 uppercase tracking-wider">Emergency Comms</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Main Office: +91 98902 9245 <br />
                                        CSESA Coordinator: +91 86688 54293
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* WhatsApp Group Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="p-8 rounded-3xl bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 backdrop-blur-md group hover:border-green-500/50 transition-all relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <MessageSquare className="w-24 h-24 text-green-500" />
                            </div>
                            <div className="flex items-center gap-6 relative z-10">
                                <div className="w-12 h-12 rounded-2xl bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h4 className="text-white font-bold uppercase tracking-wider">Hacker Community</h4>
                                        <span className="bg-green-500/20 text-green-400 text-[8px] font-mono px-2 py-0.5 rounded-full border border-green-500/30">LIVE</span>
                                    </div>
                                    <p className="text-gray-400 text-sm mb-4">Join our official WhatsApp group for real-time mission updates.</p>
                                    <a
                                        href="https://chat.whatsapp.com/JoKZEl9KLNIJEAG5YANaAx"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-xs font-mono text-green-400 hover:text-green-300 transition-colors group/link"
                                    >
                                        JOIN CHANNEL
                                        <div className="w-10 h-[1px] bg-green-500/30 group-hover/link:w-16 transition-all" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Event Coordinators Panel */}
                    <div className="space-y-6">
                        <div className="text-left mb-8">
                            <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">Mission Control: <span className="text-orange-500">Event Leads</span></h3>
                            <p className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.2em]">Primary contacts for technical and logistical queries.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { name: "Prof.Gulab Shaikh", role: "Faculty Coordinator", phone: "+91 98902 92457", image: "/Coordinater/Gulab Shaikh.png" },
                                { name: "Sampanna Nampalli", role: "CSESA President", phone: "+91 95796 42050", image: "/Coordinater/Sampaan Nampelli.png" },
                                { name: "Omkar Katta ", role: "CSESA Vice-President", phone: "+91 99609 98080", image: "/Coordinater/Omkar Katta.png" },
                                { name: "Bhaskar Sanam", role: "Treasurer", phone: "+91 86688 54293", image: "/Coordinater/swaghunter.png" },
                                { name: "Aman Halkude", role: "Technical Head", phone: "+91 92849 19304", image: "/Coordinater/Aman Halkude.png" },
                                { name: "Athrav Vagare", role: "Event Coordinator", phone: "+91 76200 34644", image: "/Coordinater/Atharav Vagare.png" }
                            ].map((lead, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-5 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-md group hover:border-orange-500/30 transition-all flex items-center gap-4"
                                >
                                    <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-orange-500/50 transition-colors shadow-lg shadow-black">
                                        <img src={lead.image} alt={lead.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm tracking-wide">{lead.name}</h4>
                                        <p className="text-orange-500/80 font-mono text-[9px] uppercase tracking-widest mb-1">{lead.role}</p>
                                        <a href={`tel:${lead.phone}`} className="text-gray-400 text-xs font-mono hover:text-white transition-colors flex items-center gap-2">
                                            <Phone className="w-3 h-3 text-orange-500" />
                                            {lead.phone}
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Contact;
