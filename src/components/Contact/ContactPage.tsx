'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useMouseParallax } from '@/hooks/useMouseParallax';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import ContactForm from './ContactForm';
import SocialLinks from '@/components/skeleton/SocialLinks';

const FloatingIcons = dynamic(() => import('@/components/Global/FloatingIcons'), {
    ssr: false,
});

export default function ContactPage() {
    const starsRef = useMouseParallax(0.01);

    // Contact icons for floating animation - reduced for mobile
    const contactIcons = [
        { icon: FaEnvelope, delay: 0.1, color: 'text-blue-400' },
        { icon: FaPhone, delay: 0.2, color: 'text-green-400' },
        { icon: FaMapMarkerAlt, delay: 0.3, color: 'text-purple-400' },
        { icon: FaPaperPlane, delay: 0.4, color: 'text-pink-400' },
    ];

    return (
        <div className="min-h-screen bg-animate-gradient relative overflow-hidden">
            {/* Background layers */}
            <div 
                className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 pointer-events-none"
                aria-hidden="true"
            />
            
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }} // Faster: 1s → 0.3s
                className="relative z-10"
            >
                <div ref={starsRef} className="stars-layer" aria-hidden="true" />
                
                {/* Hero Section */}
                <section className="relative min-h-screen flex items-center justify-center px-4">
                    <div className="max-w-6xl mx-auto text-center">
                        <FloatingIcons />
                        
                        {/* Floating Contact Icons - hidden on small mobile */}
                        <div className="absolute inset-0 pointer-events-none hidden sm:block">
                            {contactIcons.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={`absolute ${item.color}`}
                                    style={{
                                        top: `${20 + index * 15}%`,
                                        left: `${10 + index * 20}%`,
                                    }}
                                    initial={{ opacity: 0, y: 10 }} // Reduced movement
                                    animate={{ 
                                        opacity: [0.3, 0.8, 0.3],
                                        y: [0, -10, 0], // Reduced movement
                                        rotate: [0, 5, -5, 0] // Reduced rotation
                                    }}
                                    transition={{
                                        duration: 2, // Faster: 4s → 2s
                                        delay: item.delay,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <item.icon size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />
                                </motion.div>
                            ))}
                        </div>

                        {/* Main Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} // Reduced movement
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }} // Faster: 1s → 0.4s, delay 0.2s → 0.1s
                            className="relative z-10"
                        >
                            <motion.h1
                                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                                initial={{ opacity: 0, scale: 0.9 }} // Less scaling
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.2 }} // Faster: 1s → 0.4s, delay 0.5s → 0.2s
                            >
                                Contact
                            </motion.h1>
                            
                            <motion.div
                                className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"
                                initial={{ width: 0 }}
                                animate={{ width: 96 }}
                                transition={{ duration: 0.5, delay: 0.3 }} // Faster: 1s → 0.5s, delay 1s → 0.3s
                            />
                            
                            <motion.p
                                className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed"
                                initial={{ opacity: 0, y: 15 }} // Reduced movement
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.4 }} // Faster: 1s → 0.4s, delay 1.2s → 0.4s
                            >
                                Let's{' '}
                                <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text font-semibold">
                                    collaborate
                                </span>{' '}
                                and create something{' '}
                                <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold">
                                    amazing
                                </span>{' '}
                                together. Reach out and let's start the conversation!
                            </motion.p>
                        </motion.div>

                        {/* Scroll Indicator */}
                        <motion.div
                            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                            initial={{ opacity: 0, y: -10 }} // Reduced movement
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.6 }} // Faster: 1s → 0.3s, delay 2s → 0.6s
                        >
                            <motion.div
                                className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
                                animate={{ y: [0, 3, 0] }} // Reduced movement
                                transition={{ duration: 1.5, repeat: Infinity }} // Faster: 2s → 1.5s
                            >
                                <motion.div
                                    className="w-1 h-3 bg-white/50 rounded-full mt-2"
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 1.5, repeat: Infinity }} // Faster: 2s → 1.5s
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Background effects for rest of content */}
                <div ref={starsRef} className="stars-layer" aria-hidden="true" />

                {/* Contact Content Section */}
                <section className="relative w-full text-white flex items-center justify-center px-4 pb-16">
                    <div className="z-10 flex flex-col items-center gap-6 w-[90%] max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }} // Reduced movement
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }} // Faster: 0.6s → 0.4s
                            viewport={{ once: true }}
                        >
                            <SocialLinks />
                        </motion.div>

                        {/* Contact Form Box */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 30 }} // Reduced movement
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }} // Faster: 0.6s → 0.4s, delay 0.2s → 0.1s
                            viewport={{ once: true }}
                            className="glass-box p-8 md:p-12 w-full shadow-xl"
                        >
                            <ContactForm />
                        </motion.div>
                    </div>
                </section>
            </motion.div>
        </div>
    );
}