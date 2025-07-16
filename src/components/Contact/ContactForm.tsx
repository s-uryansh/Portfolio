"use client";

import React, { useState } from 'react';
import toast from "react-hot-toast";
import { motion } from 'framer-motion';

export default function ContactForm() {
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
                    _subject: `New Contact Form Message from ${formData.name}`,
                    _replyto: formData.email,
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

    return(
        <div className="w-full">
            <motion.h2 
                initial={{ opacity: 0, y: -10 }} // Reduced movement distance
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15, ease: [0.25, 0.1, 0.25, 1] }} // Ultra fast with custom cubic-bezier
                className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
                Get in touch
            </motion.h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="bg-gradient-to-r from-white/10 to-white/5 border border-white/20 placeholder-white/70 text-white p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-purple-400/50 transition-all duration-100 backdrop-blur-sm" // Ultra fast: duration-100
                    initial={{ opacity: 0, x: -10 }} // Reduced movement
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.15, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
                    required
                />
                <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="bg-gradient-to-r from-white/10 to-white/5 border border-white/20 placeholder-white/70 text-white p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-purple-400/50 transition-all duration-100 backdrop-blur-sm" // Ultra fast: duration-100
                    initial={{ opacity: 0, x: 10 }} // Reduced movement
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.15, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                    required
                />
                <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={5}
                    className="bg-gradient-to-r from-white/10 to-white/5 border border-white/20 placeholder-white/70 text-white p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-purple-400/50 transition-all duration-100 backdrop-blur-sm resize-none" // Ultra fast: duration-100
                    initial={{ opacity: 0, y: 10 }} // Reduced movement
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                    required
                />
                <motion.button
                    type="submit"
                    disabled={submitting}
                    className={`${
                        submitting 
                            ? "bg-white/10 cursor-not-allowed border border-white/20" 
                            : "bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 hover:from-blue-500/40 hover:via-purple-500/40 hover:to-pink-500/40 border border-white/30 hover:border-white/60"
                    } backdrop-filter backdrop-blur-lg text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-100 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/25 text-lg disabled:transform-none`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                    whileHover={!submitting ? { scale: 1.02, transition: { duration: 0.05 } } : {}}
                    whileTap={!submitting ? { scale: 0.98, transition: { duration: 0.02 } } : {}}
                >
                    {submitting ? (
                        <div className="flex items-center justify-center gap-2">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin-fast"></div> {/* Use faster spinner */}
                            Sending...
                        </div>
                    ) : (
                        'Send Message'
                    )}
                </motion.button>
            </form>
        </div>
    )
}
