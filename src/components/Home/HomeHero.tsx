'use client';

import React from 'react';
import { motion } from 'framer-motion';
import FloatingIcons from '../Global/FloatingIcons';

export default function HomeHero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-responsive overflow-hidden">
            {/* Planet Background - Half planet from left bottom to right bottom */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Main Planet (Half visible from bottom - spanning full width) */}
                <motion.div
                    className="absolute -bottom-1/2 left-0 w-full"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                >
                    
                    <div className="w-full h-[100vh] bg-gradient-to-t from-slate-800/30 via-purple-900/20 to-transparent border-t-2 border-white/10" style={{
                        borderRadius: '50% 50% 0 0',
                        transform: 'scaleX(2)'
                    }}>
                        {/* Planet Surface Details */}
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/5 to-purple-500/10" style={{
                            borderRadius: '50% 50% 0 0'
                        }} />
                    </div>
                    
                </motion.div>

                {/* Smaller Planets/Moons */}
                <motion.div
                    className="absolute top-1/4 right-1/4 w-20 h-20 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/30 blur-sm"
                    animate={{ 
                        x: [0, 30, 0],
                        y: [0, -20, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                
                <motion.div
                    className="absolute top-2/3 left-1/4 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400/15 to-blue-400/25 blur-sm"
                    animate={{ 
                        x: [0, -25, 0],
                        y: [0, 15, 0]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
            </div>

            {/* Floating Interactive Icons */}
            <FloatingIcons />
 
            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2 }}
            >
                <div className="flex flex-col items-center">
                    <motion.div
                        className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-white/30 rounded-full flex justify-center"
                        animate={{ y: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <motion.div
                            className="w-1 h-2 sm:h-3 bg-white/50 rounded-full mt-2"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </motion.div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative z-10"
            >
                <div className="container-responsive max-2xl text-center">
                    {/* Main Quote Section - No Background */}
                    <motion.div
                        className="p-8 md:p-12 rounded-3xl mb-16"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                    >
                        <motion.h1
                            className="text-responsive-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                        >
                            "Code. Secure. Create."
                        </motion.h1>
                        
                        <motion.p
                            className="text-responsive-base text-white/60 mb-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                        >
                            Building tomorrow's web, one secure line at a time
                        </motion.p>
                        
                        <motion.div
                            className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6 sm:mb-8"
                            initial={{ width: 0 }}
                            animate={{ width: '6rem' }}
                            transition={{ duration: 1, delay: 1.4 }}
                        />
                        
                        <motion.p
                            className="text-responsive-lg text-white/80 max-w-3xl mx-auto leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.6 }}
                        >
                            Passionate{' '}
                            <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text font-semibold">
                                full-stack developer
                            </span>{' '}
                            with a keen interest in{' '}
                            <span className="text-transparent bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text font-semibold">
                                cybersecurity
                            </span>
                        </motion.p>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}