'use client';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import SocialLinks from '@/components/skeleton/SocialLinks';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-40 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.h1 
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-[12vw] font-black uppercase leading-[0.8] tracking-tighter mb-20"
                >
                    Get in<br/>
                    <span className="text-[#ff3366]">Touch.</span>
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-white/10 pt-12">
                    <div className="md:col-span-4 space-y-12">
                        <div>
                            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-white/30 mb-6">Socials</h2>
                            <SocialLinks />
                        </div>
                        <div>
                            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-white/30 mb-6">Location</h2>
                            <p className="text-xl font-medium">Noida, India</p>
                        </div>
                    </div>

                    <div className="md:col-span-8">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}