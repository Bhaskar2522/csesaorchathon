'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    // Close menu when resizing to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Mission', href: '#mission' },
        { name: 'Timeline', href: '#timeline' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-4'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <img
                        src="/logo.png"
                        alt="Logo"
                        className="h-10 w-auto"
                    />
                    <div className="text-2xl font-bold tracking-tighter text-white group-hover:text-primary transition-colors">
                        ORCH<span className="text-primary">ATHON</span>
                    </div>
                </Link>

                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-primary transition-colors uppercase tracking-widest"
                        >
                            {link.name}
                        </Link>
                    ))}

                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white p-2 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="fixed inset-0 z-[9999] md:hidden flex flex-col w-full h-full bg-black"
                        style={{ backgroundColor: '#000000' }}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 w-full bg-black">
                            <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                                <img
                                    src="/logo.png"
                                    alt="Orchathon"
                                    className="h-10 w-auto"
                                />
                                <div className="text-xl font-bold tracking-tighter text-white">
                                    ORCH<span className="text-primary">ATHON</span>
                                </div>
                            </Link>
                            <button
                                className="text-white p-2 focus:outline-none"
                                onClick={() => setIsOpen(false)}
                            >
                                <X size={32} />
                            </button>
                        </div>

                        {/* Links */}
                        <div className="flex-1 flex flex-col justify-center items-center gap-8 py-20 px-8 w-full bg-black">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-4xl font-bold text-white hover:text-primary transition-colors uppercase tracking-[0.2em]"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="w-full h-[1px] bg-white/10 my-4" />

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;