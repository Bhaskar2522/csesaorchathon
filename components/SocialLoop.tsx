'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaFacebook,
    FaWhatsapp,
    FaXTwitter,
    FaYoutube
} from 'react-icons/fa6';

// Individual Icon Component for the Loop
const SocialIconItem = ({ icon: Icon, label, href }: { icon: any, label: string, href: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex flex-col items-center justify-center w-12 h-12 md:w-14 md:h-14 mb-10 cursor-pointer pointer-events-auto"
    >
        {/* Glow behind icon */}
        <div className="absolute inset-x-0 inset-y-0 bg-cyan-500/0 group-hover:bg-cyan-500/20 blur-2xl rounded-full transition-all duration-500" />

        {/* Actual Icon with Glow - Enlarged */}
        <Icon className="w-8 h-8 md:w-10 md:h-10 text-gray-400 group-hover:text-cyan-400 transition-all duration-300 drop-shadow-[0_0_12px_rgba(0,224,255,0.4)] filter" />

        {/* Hover Label Tooltip */}
        <span className="absolute right-full mr-6 px-3 py-1.5 rounded-lg bg-black/90 border border-cyan-500/20 text-xs font-mono text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-2xl scale-90 group-hover:scale-100 origin-right">
            {label}
        </span>
    </a>
);

// Project Logo Icon
const ProjectIcon = () => (
    <img
        src="/college_logo.png"
        alt="Orchathon Logo"
        className="w-8 h-8 md:w-10 md:h-10 object-contain"
    />
);

const SocialLoop = () => {
    const icons = [
        { icon: FaGithub, label: 'GITHUB', href: 'https://github.com/Bhaskar2522/orchathon' },
        { icon: FaInstagram, label: 'INSTAGRAM', href: 'https://www.instagram.com/csesa_nkocet?igsh=MTV2Z3d0MGE0czVmcw==' },
        { icon: FaLinkedin, label: 'LINKEDIN', href: 'https://www.linkedin.com/company/csesa-nkocet/' },
        { icon: ProjectIcon, label: 'ORCHATHON', href: 'https://orchidengg.ac.in/' },
        { icon: FaFacebook, label: 'FACEBOOK', href: 'https://www.facebook.com/share/1AGMLqNb6Z/' },
        { icon: FaWhatsapp, label: 'WHATSAPP', href: 'https://chat.whatsapp.com/JoKZEl9KLNIJEAG5YANaAx' },
        { icon: FaXTwitter, label: 'X (TWITTER)', href: 'https://x.com/nk_orchid' },
        { icon: FaYoutube, label: 'YOUTUBE', href: 'https://www.youtube.com/@CSESA-NKOCET' },
    ];

    // Double/Triple for seamless wrap
    const loopedIcons = [...icons, ...icons, ...icons];

    return (
        <div className="fixed right-3 md:right-8 top-[10%] bottom-[10%] z-[99] w-16 md:w-20 hidden md:flex flex-col items-center pointer-events-none">
            {/* Clipping Container */}
            <div className="relative z-10 w-full h-full overflow-hidden mask-fade-vertical px-1 pb-4">
                <div
                    className="flex flex-col items-center pt-8 animate-social-loop pointer-events-auto"
                >
                    {loopedIcons.map((item, index) => (
                        <SocialIconItem key={index} icon={item.icon} label={item.label} href={item.href} />
                    ))}
                </div>
            </div>

            {/* Custom mask replacement */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/40 to-transparent pointer-events-none z-20" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none z-20" />
        </div>
    );
};

export default SocialLoop;