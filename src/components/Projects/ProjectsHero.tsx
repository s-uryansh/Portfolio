'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaShieldAlt, FaServer } from 'react-icons/fa';

export default function ProjectsHero() {
    const techIcons = [
        { icon: FaCode, delay: 0.2, color: 'text-blue-400' },
        { icon: FaLaptopCode, delay: 0.4, color: 'text-green-400' },
        { icon: FaShieldAlt, delay: 0.6, color: 'text-red-400' },
        { icon: FaServer, delay: 0.8, color: 'text-purple-400' },
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center px-4">
            <div className="max-w-6xl mx-auto text-center">
                <div className="absolute inset-0 pointer-events-none">
                    {techIcons.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`absolute ${item.color}`}
                            style={{
                                top: `${20 + index * 15}%`,
                                left: `${10 + index * 20}%`,
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ 
                                opacity: [0.3, 0.8, 0.3],
                                y: [0, -20, 0],
                                rotate: [0, 10, -10, 0]
                            }}
                            transition={{
                                duration: 4,
                                delay: item.delay,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <item.icon size={30} />
                        </motion.div>
                    ))}
                </div>

                {/* Main Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative z-10"
                >
                    <motion.h1
                        className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        Projects
                    </motion.h1>
                    
                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"
                        initial={{ width: 0 }}
                        animate={{ width: 96 }}
                        transition={{ duration: 1, delay: 1 }}
                    />
                    
                </motion.div>

                {/* Scroll Indicator - Moved to match AboutPage position */}
                <motion.div
                    className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 2 }}
                >
                    <motion.div
                        className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center"
                        animate={{ y: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <motion.div
                            className="w-1 h-2 sm:h-3 bg-white/50 rounded-full mt-1 sm:mt-2"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}