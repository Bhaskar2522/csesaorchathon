'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Starfield from './Starfield';

const reviews = [
    {
        id: "1",
        text: "The NKOCET Hackathon completely changed how I approach problem solving. The 36 hours felt like 3 hours. Best coding event of the year!",
        author: "@hacker_01",
        role: "Frontend Developer",
        image: "/Coordinater/hacker_01.png"
    },
    {
        id: "2",
        text: "CSESA organized an incredibly flawless event! From the Wi-Fi to the mentorship, everything was top-tier. Highly recommended.",
        author: "@webdev_guru",
        role: "Full Stack Engineer",
        image: "/Coordinater/webdev_guru.png"
    },
    {
        id: "3",
        text: "Sitting in those NKOCET labs at 4 AM debugging Next.js with my team was an unforgettable experience. The mentors were lifesavers.",
        author: "@nextjs_fan",
        role: "Student",
        image: "/Coordinater/Sampaan Nampelli.png"
    },
    {
        id: "4",
        text: "Best 36 hours of my life! The energy, the people, the code. CSESA really knows how to put together a hacker's paradise.",
        author: "@sleepdeprived",
        role: "Backend Developer",
        image: "/Coordinater/sleepdeprived.png"
    },
    {
        id: "5",
        text: "The prizes and swag were insane, but the community was even better. Massive respect to the CSESA organizing committee.",
        author: "@swaghunter",
        role: "UI/UX Designer",
        image: "/Coordinater/swaghunter.png"
    },
    {
        id: "6",
        text: "Our team built a decentralized space app and actually won best UI! The judging panel was super insightful and gave great feedback.",
        author: "@crypto_king",
        role: "Web3 Developer",
        image: "/Coordinater/Aman Halkude.png"
    },
    {
        id: "7",
        text: "NKOCET College campus is beautiful and the labs are perfectly equipped. Didn't have a single hardware issue during the whole hack.",
        author: "@college_hacker",
        role: "Machine Learning",
        image: "/Coordinater/Omkar Katta.png"
    },
    {
        id: "8",
        text: "Thank you CSESA for organizing such an open, inclusive, and fiercely competitive coding environment. Can't wait for next year!",
        author: "@open_source",
        role: "Open Source Contrib",
        image: "/Coordinater/open_source.png"
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
    const [debris, setDebris] = React.useState<Array<{ top: number, left: number, duration: number }>>([]);

    React.useEffect(() => {
        setMounted(true);
        setDebris(Array.from({ length: 20 }).map(() => ({
            top: Math.random() * 100,
            left: Math.random() * 100,
            duration: 10 + Math.random() * 20
        })));
    }, []);

    return (
        <section id="reviews" className="relative overflow-hidden bg-black py-24 md:py-32 flex flex-col items-center justify-center min-h-[140vh]">

            {/* Extended Space Background with more depth */}
            <div className="absolute inset-0 bg-[#020205] z-0 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,224,255,0.06)_0%,transparent_60%)] animate-pulse" />

                {/* Fixed Starfield for depth */}
                <div className="opacity-40">
                    <Starfield />
                </div>

                {/* Local Floating Debris Elements (Matching the Image) */}
                <div className="absolute inset-0 pointer-events-none">
                    {mounted && debris.map((item, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white/20 rounded-full"
                            style={{
                                top: `${item.top}%`,
                                left: `${item.left}%`,
                            }}
                            animate={{
                                y: [-20, 20],
                                x: [-10, 10],
                                opacity: [0.1, 0.3, 0.1]
                            }}
                            transition={{
                                duration: item.duration,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Header Content - Matching the Image */}

            <div className="relative z-10 mb-16 md:mb-24 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                >
                    <h2 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter uppercase leading-none">
                        HACKER <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D00] via-[#FF6B00] to-[#E63E00] italic drop-shadow-[0_0_20px_rgba(255,77,0,0.4)]">TESTIMONIALS</span>
                    </h2>
                    <div className="flex items-center gap-3 mt-6">
                        <div className="h-[2px] w-8 md:w-16 bg-gradient-to-r from-transparent to-cyan-500/50" />
                        <p className="text-cyan-400 font-mono tracking-[0.3em] uppercase text-[10px] md:text-xs font-semibold whitespace-nowrap">
                            NKOCET COLLEGE &nbsp;•&nbsp; ORGANIZED BY CSESA
                        </p>
                        <div className="h-[2px] w-8 md:w-16 bg-gradient-to-l from-transparent to-cyan-500/50" />
                    </div>
                </motion.div>
            </div>

            {/* Tilted Scroll Container - Further refined for deeper perspective */}
            <div className="relative z-0 w-full overflow-hidden flex justify-center items-center h-[800px] perspective-[1500px] mt-8">
                <div
                    className="flex gap-4 md:gap-8 w-max absolute"
                    style={{
                        transform: "rotateX(25deg) rotateZ(-15deg) skewX(10deg)",
                        transformStyle: "preserve-3d"
                    }}
                >
                    {/* SCROLLING COLUMNS */}
                    <div className="flex flex-col gap-8 animate-tilted-scroll-down w-[280px] md:w-[380px]">
                        {col1.map((review, i) => (
                            <ReviewCard key={`col1-${i}`} review={review} />
                        ))}
                    </div>

                    <div className="flex flex-col gap-8 animate-tilted-scroll-up w-[280px] md:w-[380px] -mt-56">
                        {col2Arr.map((review, i) => (
                            <ReviewCard key={`col2-${i}`} review={review} />
                        ))}
                    </div>

                    <div className="flex flex-col gap-8 animate-tilted-scroll-down w-[280px] md:w-[380px] -mt-28">
                        {col3Arr.map((review, i) => (
                            <ReviewCard key={`col3-${i}`} review={review} />
                        ))}
                    </div>

                    <div className="hidden lg:flex flex-col gap-8 animate-tilted-scroll-up w-[280px] md:w-[380px] mt-28">
                        {col4Arr.map((review, i) => (
                            <ReviewCard key={`col4-${i}`} review={review} />
                        ))}
                    </div>
                </div>

                {/* Blending Masks - More dramatic for the depth look */}
                <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-black via-black/80 to-transparent z-20 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none" />
                <div className="absolute top-0 left-0 w-32 md:w-[25%] h-full bg-gradient-to-r from-black via-black/40 to-transparent z-20 pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 md:w-[25%] h-full bg-gradient-to-l from-black via-black/40 to-transparent z-20 pointer-events-none" />
            </div>
        </section>
    );
};

const ReviewCard = ({ review }: { review: any }) => (
    <div className="flex flex-col p-8 rounded-3xl bg-[#0F121A]/80 border border-white/10 backdrop-blur-xl shadow-[20px_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:bg-[#161B29] hover:border-[#FF4D00]/40 group cursor-default">
        {/* Stars */}
        <div className="flex gap-1.5 mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-4 h-4 text-[#FF4D00] drop-shadow-[0_0_5px_rgba(255,77,0,0.5)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>

        {/* Testimonial Text */}
        <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-10 font-medium tracking-tight">
            "{review.text}"
        </p>

        {/* Author Info */}
        <div className="flex items-center gap-4 mt-auto overflow-hidden">
            <div className="relative shrink-0">
                <div className="absolute inset-0 bg-cyan-500 blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative w-11 h-11 rounded-full bg-gradient-to-tr from-[#0F172A] to-[#1E293B] border border-cyan-500/30 flex items-center justify-center font-bold text-cyan-400 text-lg shadow-[0_0_15px_rgba(0,224,255,0.2)] overflow-hidden">
                    {review.image ? (
                        <img src={review.image} alt={review.author} className="w-full h-full object-cover" />
                    ) : (
                        review.author.charAt(1).toUpperCase()
                    )}
                </div>
            </div>

            {/* Added Horizontal Motion to name container */}
            <motion.div
                className="flex flex-col min-w-0"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <span className="text-white font-bold text-sm tracking-wide truncate">{review.author}</span>
                <span className="text-cyan-500 font-mono text-[9px] tracking-[0.2em] uppercase font-bold opacity-80 truncate">{review.role}</span>
            </motion.div>
        </div>
    </div>
);


export default Reviews;
