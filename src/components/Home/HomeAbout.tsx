'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import AboutImages from '../About/AboutImages';

export default function HomeAbout() {
    return (
        <section className="relative py-responsive">
            <div className="container-responsive max-2xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="glass-box p-8 md:p-12 rounded-3xl"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - AboutImages Component */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="flex justify-center"
                        >
                            <AboutImages />
                        </motion.div>

                        {/* Right Side - About Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-responsive-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                About Me
                            </h2>
                            
                            <motion.div
                                className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400"
                                initial={{ width: 0 }}
                                whileInView={{ width: '4rem' }}
                                transition={{ duration: 1, delay: 0.6 }}
                                viewport={{ once: true }}
                            />
                            
                            <div className="space-y-4 text-white/80">
                                <p className="text-responsive-lg font-semibold">
                                    Passionate Full-Stack Developer & Cybersecurity Enthusiast
                                </p>
                                
                                <p className="text-responsive-base leading-relaxed">
                                    I'm Suryansh Rohil, an enthusiastic full-stack developer who can create scalable web apps and has a keen interest in cybersecurity.
                                </p>

                                <p className="text-responsive-base leading-relaxed">
                                    With practical experience and increasing skills in cloud platforms, React, and Next.js, I build creative solutions that strike a balance between functionality and user experience.
                                </p>
                                
                                <div className="pt-4">
                                    <motion.a
                                        href="/assets/Resume/resume.pdf"
                                        download
                                        className="glass-box px-6 py-2 rounded-full border border-white/30 hover:border-white/50 transition-all duration-300 inline-block"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span className="text-white text-sm">Download CV</span>
                                    </motion.a>
                                </div>
                            </div>
                            
                            <Link href="/about">
                                <motion.button
                                    className="glass-box px-8 py-3 rounded-full border border-blue-400/50 hover:border-blue-400 transition-all duration-300 bg-gradient-to-r from-blue-400/10 to-purple-400/10"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="text-blue-300 font-medium">Learn More About Me</span>
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}