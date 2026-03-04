'use client';

import React from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Prizes from "@/components/Prizes";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";
import SpaceHero from "@/components/SpaceHero";
import Reviews from "@/components/Reviews";
import SocialLoop from "@/components/SocialLoop";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black relative overflow-x-hidden">
      {/* Global Navbar */}
      <Navbar />

      {/* Global Social Loop Sidebar */}
      <SocialLoop />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <SpaceHero />
        <About />
        <Mission />
        <Prizes />
        <Timeline />
        <Reviews />
        <Contact />
        <Footer />
      </motion.div>
    </main>
  );
}

