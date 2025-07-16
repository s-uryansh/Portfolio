'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
    '/assets/profile/1.jpeg'
];

export default function AboutImages() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="relative w-64 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[28rem] lg:w-[28rem] lg:h-[32rem] mx-auto">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 p-0.5 animate-pulse">
                    <div className="w-full h-full rounded-3xl overflow-hidden bg-slate-800" />
                </div>
            </div>
        );
    }

    return (
        <div className="relative w-64 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[28rem] lg:w-[28rem] lg:h-[32rem] mx-auto">
            {/* Professional image container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="relative w-full h-full group"
            >
                {/* Subtle gradient border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-slate-300/50 via-white/30 to-slate-400/50 p-0.5 shadow-2xl">
                    {/* Inner container */}
                    <div className="relative w-full h-full rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/20">
                        {/* Main image */}
                        <Image
                            src={images[0]}
                            alt="Professional Profile"
                            fill
                            className="object-cover transition-all duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 384px, 448px"
                            quality={100}
                            priority
                        />
                        
                        {/* Professional overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-slate-900/10 opacity-60" />
                        
                        {/* Subtle glow effect on hover */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="absolute -inset-1 bg-gradient-to-br from-blue-400/20 via-slate-300/20 to-purple-400/20 rounded-3xl blur-lg -z-10"
                        />
                    </div>
                </div>

                {/* Professional corner accent */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg opacity-80" />
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full shadow-lg opacity-60" />
            </motion.div>

            {/* Floating elements for visual interest */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Subtle floating particles */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={`accent-${i}`}
                        className="absolute w-1 h-1 bg-white/40 rounded-full"
                        style={{
                            top: `${20 + i * 25}%`,
                            left: `${10 + i * 30}%`,
                        }}
                        animate={{
                            y: [0, -8, 0],
                            opacity: [0.4, 0.8, 0.4],
                        }}
                        transition={{
                            duration: 3,
                            delay: i * 0.7,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            {/* Professional frame highlight */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="absolute inset-0 rounded-3xl border-2 border-white/10 pointer-events-none"
            />
        </div>
    );
}