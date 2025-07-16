'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useMouseParallax } from '@/hooks/useMouseParallax';
import HomeHero from './HomeHero';
import HomeAbout from './HomeAbout';
import HomeProjects from './HomeProjects';
import HomeContact from './HomeContact';

export default function HomePage() {
    const starsRef = useMouseParallax(0.01);

    return (
        <div className="min-h-screen bg-animate-gradient relative overflow-hidden">
            <div 
                className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 pointer-events-none"
                aria-hidden="true"
            />
            
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 2 }}
                transition={{ duration: 0.1 }} 
                className="relative z-10"
            >
                <div ref={starsRef} className="stars-layer" aria-hidden="true" />
                
                {/* Hero Section with Planet Style */}
                <HomeHero />
                
                {/* About Section with AboutImages */}
                <HomeAbout />
                
                {/* Projects Section with ProjectCard */}
                <HomeProjects />
                
                {/* Contact Section with ContactForm preview */}
                <HomeContact />
            </motion.div>
        </div>
    );
}