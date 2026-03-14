'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
    {
        question: "Who is eligible to participate?",
        answer: "Students from all engineering and diploma disciplines are eligible to participate."
    },
    {
        question: "What is the allowed team size?",
        answer: "Each team must consist of a minimum of 3 members and a maximum of 4 members."
    },
    {
        question: "Is there any registration or participation fee?",
        answer: "The first round is completely free. The second round has a registration fee of ₹1500 per team."
    },
    {
        question: "Do participants need to bring their own laptops?",
        answer: "Yes. Participants are required to bring their own laptops for development during the hackathon."
    },
    {
        question: "What are the domains/categories for the first round?",
        answer: "The first round is an open innovation round. There is no dependance on domains in this round."
    },
    {
        question: "What are the domains/categories for the second round?",
        answer: "The domains will be revealed a week prior to the 2nd round."
    },
    {
        question: "Will we get to work on our own idea in the second round?",
        answer: "No. The problem statements will be provided on the spot to the shortlisted participants depending on their selected domains."
    },
    {
        question: "When and where will the domain selection happen?",
        answer: "The selection of 3 favorite domains will occur through a google form provided only to the shortlisted participants and will occur on 25th and 26th March, 2026."
    },
    {
        question: "What is the duration of Orchathon 2K26?",
        answer: "The hackathon will run for a total of 36 hours."
    },
    {
        question: "Will there be accommodation and food?",
        answer: "Yes, food and accommodation will be provided for all the participants during the event."
    }
];

const FAQItem = ({ question, answer, isOpen, onClick, index }: { question: string, answer: string, isOpen: boolean, onClick: () => void, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className={`group mb-4 rounded-[2rem] border transition-all duration-500 overflow-hidden ${isOpen ? 'border-cyan-500/50 bg-[#0a0a0a] shadow-[0_0_30px_rgba(0,224,255,0.1)]' : 'border-white/5 bg-[#0a0a0a] hover:border-white/20'}`}
        >
            <button
                onClick={onClick}
                className="flex w-full items-center justify-between p-6 md:p-8 text-left transition-all"
            >
                <span className={`text-base md:text-lg font-bold tracking-tight transition-colors duration-300 ${isOpen ? 'text-cyan-400' : 'text-white'}`}>
                    {question}
                </span>
                <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/10 transition-all duration-500 ${isOpen ? 'bg-cyan-500/20 text-cyan-400 rotate-180 border-cyan-500/30' : 'text-gray-500 group-hover:text-white group-hover:border-white/20'}`}>
                    <ChevronDown className="h-5 w-5" />
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <div className="px-6 md:px-8 pb-8 pt-0">
                            <div className="h-px w-full bg-gradient-to-r from-cyan-500/30 to-transparent mb-6" />
                            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                {answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="relative py-24 md:py-32 bg-black overflow-hidden">
            {/* Geometric Constellation Background - CSS implementation */}
            <div className="absolute inset-0 z-0">
                {/* Dots */}
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{ backgroundImage: 'radial-gradient(circle, #00E0FF 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                {/* Ambient Glows */}
                <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

                {/* Constantines - Simple SVG triangles */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 200 L300 150 L250 400 Z" fill="none" stroke="#00E0FF" strokeWidth="1" />
                    <path d="M800 100 L950 300 L700 450 Z" fill="none" stroke="#00E0FF" strokeWidth="1" />
                    <path d="M400 600 L600 700 L350 850 Z" fill="none" stroke="#00E0FF" strokeWidth="1" />
                    <path d="M1200 500 L1400 400 L1300 700 Z" fill="none" stroke="#00E0FF" strokeWidth="1" />
                    <circle cx="100" cy="200" r="2" fill="#00E0FF" />
                    <circle cx="300" cy="150" r="2" fill="#00E0FF" />
                    <circle cx="250" cy="400" r="2" fill="#00E0FF" />
                    <circle cx="800" cy="100" r="2" fill="#00E0FF" />
                    <circle cx="950" cy="300" r="2" fill="#00E0FF" />
                    <circle cx="700" cy="450" r="2" fill="#00E0FF" />
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-5xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-12 md:mb-20 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-6">
                        <HelpCircle className="w-3 h-3 text-cyan-400" />
                        <span className="text-[10px] font-mono tracking-[0.3em] text-cyan-400 uppercase font-bold">Inquiry Protocol</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-tight mb-4">
                        Frequently Asked <span className="text-cyan-500 drop-shadow-[0_0_15px_rgba(0,224,255,0.3)]">Questions</span>
                    </h2>
                    <div className="w-16 md:w-24 h-1 bg-cyan-500/50 rounded-full" />
                </motion.div>

                {/* FAQ List */}
                <div className="mx-auto max-w-4xl">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            index={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
