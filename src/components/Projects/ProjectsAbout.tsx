'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaCode, FaVideo, FaLayerGroup } from 'react-icons/fa';

export default function ProjectsAbout() {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <section className="py-20 px-4 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    style={{ y }}
                    className="glass-box p-8 md:p-16 rounded-3xl"
                >
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        About Projects
                    </motion.h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Description */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                        </motion.div>

                        {/* Right Side - Interactive Elements */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            {/* Image/Icon Placeholder */}
                            <div className="glass-box p-8 rounded-2xl border-2 border-dashed border-white/30 flex items-center justify-center h-48">
                                <div className="text-center">
                                    <FaCode className="text-6xl text-white/50 mx-auto mb-4" />
                                    <p className="text-white/60">Image or Icon</p>
                                </div>
                            </div>

                            {/* Video Placeholder */}
                            <div className="glass-box p-8 rounded-2xl border-2 border-dashed border-white/30 flex items-center justify-center h-48">
                                <div className="text-center">
                                    <FaVideo className="text-6xl text-white/50 mx-auto mb-4" />
                                    <p className="text-white/60">Video of project running</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Tech Stack Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="mt-16"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="glass-box p-6 rounded-2xl border-2 border-dashed border-white/30 flex items-center justify-center h-32">
                                <div className="text-center">
                                    <FaLayerGroup className="text-4xl text-white/50 mx-auto mb-2" />
                                    <p className="text-white/60">Tech Stack</p>
                                    <div className="flex justify-center gap-2 mt-2">
                                        {[1, 2, 3, 4, 5, 6].map((dot) => (
                                            <div key={dot} className="w-2 h-2 bg-white/30 rounded-full" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-white">Interactive Features:</h3>
                                <ul className="space-y-2 text-white/70">
                                    <li>• Hover effects reveal project themes</li>
                                    <li>• Dynamic backgrounds for different tech stacks</li>
                                    <li>• Live demo videos and screenshots</li>
                                    <li>• GitHub integration with live stats</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Dots Pattern */}
                    <motion.div
                        className="flex justify-center mt-16 space-x-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {[1, 2, 3, 4, 5].map((dot) => (
                            <motion.div
                                key={dot}
                                className="w-3 h-3 bg-white/40 rounded-full"
                                animate={{ 
                                    scale: [1, 1.2, 1],
                                    opacity: [0.4, 0.8, 0.4] 
                                }}
                                transition={{ 
                                    duration: 2, 
                                    delay: dot * 0.2, 
                                    repeat: Infinity 
                                }}
                            />
                        ))}
                    </motion.div>

                    <motion.p
                        className="text-center text-2xl font-bold text-white mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                        viewport={{ once: true }}
                    >
                        Repeat for all the projects
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}