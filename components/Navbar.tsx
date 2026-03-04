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
                        src="/college_logo.png"
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
                    <a href="https://unstop.com/hackathons/orchathon-n-k-orchid-college-of-engineering-technologysolapur-1652140" target="_blank" rel="noopener noreferrer">
                        <Button variant="secondary" size="sm">
                            Register
                        </Button>
                    </a>
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
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black fixed inset-0 z-[1001] flex flex-col pt-20"
                    >
                        <div className="flex flex-col space-y-8 px-8 py-10">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-gray-300 hover:text-primary transition-colors uppercase tracking-widest"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a href="https://unstop.com/hackathons/orchathon-n-k-orchid-college-of-engineering-technologysolapur-1652140" target="_blank" rel="noopener noreferrer" className="w-full mt-4">
                                <Button variant="primary" size="md" className="w-full" onClick={() => setIsOpen(false)}>
                                    Register Now
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
