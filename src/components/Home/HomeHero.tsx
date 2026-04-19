'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function HomeHero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white px-4">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="z-10 text-center"
            >
                <h1 className="text-[12vw] leading-[0.85] font-black tracking-tighter uppercase mt-20">
                    Code.
                    <br />
                    <span className="text-[#ff3366]">Secure.</span>
                    <br />
                    Create.
                </h1>
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute bottom-10 flex flex-col items-center gap-4"
            >
                <p className="text-sm uppercase tracking-widest font-mono text-white/50">Scroll to explore</p>
                <div className="w-[1px] h-16 bg-white/20" />
            </motion.div>
        </section>
    );
}