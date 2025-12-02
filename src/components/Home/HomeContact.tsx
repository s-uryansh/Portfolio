'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import toast from "react-hot-toast";

export default function HomeContact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Basic validation
        if (!formData.email || !formData.name || !formData.message) {
            toast.error("Please fill in all fields");
            return;
        }

        setSubmitting(true);

        try {
            const response = await fetch('https://formspree.io/f/manbylro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: `New Quick Contact from ${formData.name}`,
                    _replyto: formData.email,
                    _source: 'Home Page Quick Contact',
                }),
            });

            if (response.ok) {
                toast.success("Message sent successfully! I'll get back to you soon.");
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            toast.error("Error sending message. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section className="relative py-responsive">
            <div className="container-responsive max-2xl">
                <div className="p-8 md:p-12 rounded-3xl text-center">
                    <h2 className="text-responsive-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                        Get In Touch
                    </h2>
                    
                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"
                        initial={{ width: 0 }}
                        whileInView={{ width: '6rem' }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                    />
                    
                    <motion.p
                        className="text-white/70 text-responsive-base mb-8 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Ready to collaborate or have a question? Let&apos;s connect and build something amazing together.
                    </motion.p>
                    
                    {/* Contact Form - Quick Contact */}
                    <motion.form 
                        onSubmit={handleSubmit}
                        className="max-w-md mx-auto space-y-4 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <motion.div 
                            className="p-4 rounded-xl border border-white/20 hover:border-white/30 transition-colors"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your.email@example.com"
                                className="w-full h-10 bg-transparent rounded-md px-3 text-white placeholder-white/40 border-none outline-none focus:bg-white/5 transition-colors"
                                required
                            />
                            <p className="text-white/60 text-sm mt-2">Email</p>
                        </motion.div>
                        
                        <motion.div 
                            className="p-4 rounded-xl border border-white/20 hover:border-white/30 transition-colors"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="w-full h-10 bg-transparent rounded-md px-3 text-white placeholder-white/40 border-none outline-none focus:bg-white/5 transition-colors"
                                required
                            />
                            <p className="text-white/60 text-sm mt-2">Name</p>
                        </motion.div>
                        
                        <motion.div 
                            className="p-4 rounded-xl border border-white/20 hover:border-white/30 transition-colors"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your message here..."
                                rows={3}
                                className="w-full bg-transparent rounded-md p-3 text-white placeholder-white/40 border-none outline-none focus:bg-white/5 transition-colors resize-none"
                                required
                            />
                            <p className="text-white/60 text-sm mt-2">Message</p>
                        </motion.div>

                        {/* Submit Button - Functional */}
                        <motion.button
                            type="submit"
                            disabled={submitting}
                            className={`w-full px-8 py-4 rounded-full transition-all duration-300 ${
                                submitting
                                    ? "bg-white/10 cursor-not-allowed border border-white/20"
                                    : "border border-purple-400/50 hover:border-purple-400 bg-gradient-to-r from-purple-400/10 to-pink-400/10 backdrop-blur-sm hover:from-purple-400/20 hover:to-pink-400/20"
                            }`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                            viewport={{ once: true }}
                            whileHover={!submitting ? { 
                                scale: 1.02,
                                boxShadow: "0 10px 30px rgba(168, 85, 247, 0.3)"
                            } : {}}
                            whileTap={!submitting ? { scale: 0.98 } : {}}
                        >
                            {submitting ? (
                                <div className="flex items-center justify-center gap-2">
                                    <div className="w-5 h-5 border-2 border-purple-300/30 border-t-purple-300 rounded-full animate-spin"></div>
                                    <span className="text-purple-300/60 font-medium text-lg">Sending...</span>
                                </div>
                            ) : (
                                <span className="text-purple-300 font-medium text-lg">Send Quick Message →</span>
                            )}
                        </motion.button>
                    </motion.form>
                    
                    {/* Full Contact Page Link */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <p className="text-white/40 text-sm mb-4">Need more options?</p>
                        <Link href="/contact">
                            <motion.span
                                className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer underline decoration-blue-400/30 hover:decoration-blue-300/50"
                                whileHover={{ scale: 1.05 }}
                            >
                                Visit full contact page
                            </motion.span>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}