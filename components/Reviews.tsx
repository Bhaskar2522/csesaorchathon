'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Starfield from './Starfield';

const reviews = [
    {
        id: "1",
        text: "The NKOCET Hackathon completely changed how I approach problem solving. The 24 hours felt like 3 hours. Best coding event of the year!",
        author: "NovaStrategist",
        role: "Frontend Developer",
        image: "/Coordinater/WhatsApp Image 2026-03-04 at 11.54.15 AM.png"
    },
    {
        id: "2",
        text: "CSESA organized an incredibly flawless event! From the Wi-Fi to the mentorship, everything was top-tier. Highly recommended.",
        author: "UrbanThinker",
        role: "Full Stack Engineer",
        image: "/Coordinater/WhatsApp Image 2026-03-04 at 12.18.19 PM.png"
    },
    {
        id: "3",
        text: "Sitting in those NKOCET labs at 4 AM debugging Next.js with my team was an unforgettable experience. The mentors were lifesavers.",
        author: "PrimeInnovator",
        role: "Student",
        image: "/Coordinater/WhatsApp Image 2026-03-04 at 11.20.25 AM.png"
    },
    {
        id: "4",
        text: "Best 24 hours of my life! The energy, the people, the code. CSESA really knows how to put together a hacker's paradise.",
        author: "NextGenArchitect",
        role: "Backend Developer",
        image: "/Coordinater/WhatsApp Image 2026-03-04 at 11.31.00 AM.png"
    },
    {
        id: "5",
        text: "The prizes and swag were insane, but the community was even better. Massive respect to the CSESA organizing committee.",
        author: "DigitalVisionary",
        role: "UI/UX Designer",
        image: "/Coordinater/WhatsApp Image 2026-03-04 at 12.32.45 PM.png"
    },
    {
        id: "6",
        text: "Our team built a decentralized space app and actually won best UI! The judging panel was super insightful and gave great feedback.",
        author: "CoreIntellect",
        role: "Web3 Developer",
        image: "/Coordinater/WhatsApp Image 2026-03-04 at 12.46.33 PM.png"
    },
    {
        id: "7",
        text: "NKOCET College campus is beautiful and the labs are perfectly equipped. Didn't have a single hardware issue during the whole hack.",
        author: "AlphaCreator",
        role: "Machine Learning",
        image: "/Coordinater/WhatsApp Image 2026-03-04 at 12.47.34 PM.png.png"
    },
    {
        id: "8",
        text: "Thank you CSESA for organizing such an open, inclusive, and fiercely competitive coding environment. Can't wait for next year!",
        author: "ModernTrailblazer",
        role: "Open Source Contrib",
        image: "/Coordinater/WhatsApp Image 2026-03-04 at 1.25.07 PM.png.png"
    },
    {
        id: "9",
        text: "The atmosphere was electric! Meeting so many talented developers in one place was truly inspiring.",
        author: "FutureCrafted",
        role: "DevOps Engineer",
        image: "/Coordinater/WhatsApp Image 2026-03-04 at 11.23.50 AM.png"
    },
    {
        id: "10",
        text: "Incredible organization and world-class mentorship. This hackathon is a must-attend for every student!",
        author: "InsightEngineer",
        role: "App Developer",
        image: "/Coordinater/WhatsApp Image 2026-03-04 at 12.12.33 PM.png"
    }
];

// Duplicate arrays to create a seamless infinite scroll effect
const col1 = [...reviews, ...reviews, ...reviews];
const col2 = [...reviews].reverse();
const col2Arr = [...col2, ...col2, ...col2];
const col3 = [...reviews.slice(4), ...reviews.slice(0, 4)];
const col3Arr = [...col3, ...col3, ...col3];
const col4 = [...reviews.slice(2), ...reviews.slice(0, 2), ...reviews.slice(4)];
const col4Arr = [...col4, ...col4, ...col4];

const Reviews = () => {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    // Split reviews into 3 rows for horizontal scrolling
    const row1 = [...reviews, ...reviews];
    const row2 = [...reviews.slice(4), ...reviews.slice(0, 4), ...reviews.slice(4), ...reviews.slice(0, 4)];
    const row3 = [...reviews.slice(2), ...reviews.slice(6), ...reviews.slice(0, 2), ...reviews.slice(2), ...reviews.slice(6), ...reviews.slice(0, 2)];

    return (
        <section id="reviews" className="relative overflow-hidden bg-black py-24 md:py-32 flex flex-col items-center justify-center min-h-screen">

            {/* Space Background */}
            <div className="absolute inset-0 bg-[#020205] z-0 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,224,255,0.03)_0%,transparent_60%)]" />
                <div className="opacity-20">
                    <Starfield />
                </div>
            </div>

            {/* Header Content */}
            <div className="relative z-10 mb-12 md:mb-16 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                >
                    <h2 className="text-4xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-none">
                        HACKER <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">TESTIMONIALS</span>
                    </h2>
                    <p className="mt-4 text-gray-500 text-sm font-mono tracking-widest uppercase">
                        Real Feedback from the Cyberverse
                    </p>
                </motion.div>
            </div>

            {/* Scrolling Container - Horizontal Marquee Rows */}
            <div className="relative z-10 w-full flex flex-col gap-6 md:gap-8 overflow-hidden py-10">
                {/* Row 1: Right to Left */}
                <div className="flex overflow-hidden">
                    <div className="flex gap-6 md:gap-8 animate-marquee-left whitespace-nowrap">
                        {row1.map((review, i) => (
                            <ReviewCard key={`row1-${i}`} review={review} />
                        ))}
                    </div>
                </div>

                {/* Row 2: Left to Right */}
                <div className="flex overflow-hidden">
                    <div className="flex gap-6 md:gap-8 animate-marquee-right whitespace-nowrap">
                        {row2.map((review, i) => (
                            <ReviewCard key={`row2-${i}`} review={review} />
                        ))}
                    </div>
                </div>

                {/* Row 3: Right to Left */}
                <div className="flex overflow-hidden">
                    <div className="flex gap-6 md:gap-8 animate-marquee-left whitespace-nowrap">
                        {row3.map((review, i) => (
                            <ReviewCard key={`row3-${i}`} review={review} />
                        ))}
                    </div>
                </div>

                {/* Side Gradient Masks for Seamless Look */}
                <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-black via-black/40 to-transparent z-20 pointer-events-none" />
                <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-black via-black/40 to-transparent z-20 pointer-events-none" />
            </div>
        </section>
    );
};

const ReviewCard = ({ review }: { review: any }) => (
    <div className="flex flex-col p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-all duration-300 group cursor-default w-[300px] md:w-[400px] shrink-0 whitespace-normal">
        {/* Testimonial Text on Top */}
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-normal">
            {review.text}
        </p>

        {/* Author Info at Bottom */}
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 shrink-0">
                {review.image ? (
                    <img src={review.image} alt={review.author} className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full bg-gray-800 flex items-center justify-center text-xs font-bold text-gray-400">
                        {review.author.charAt(1).toUpperCase()}
                    </div>
                )}
            </div>
            <div className="flex flex-col min-w-0">
                <span className="text-white font-medium text-sm truncate">{review.author}</span>
                {/* Optional minor detail or handle suffix */}
            </div>
        </div>
    </div>
);


export default Reviews;