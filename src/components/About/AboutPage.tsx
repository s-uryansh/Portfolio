'use client';
import { motion } from 'framer-motion';
import ExpJourneyCert from './expJourneyCert';
import { timelineData } from './timelineData';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#ff3366]">
            <section className="pt-40 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                        initial={{ y: 60, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <h1 className="text-[12vw] font-black uppercase leading-[0.8] tracking-tighter relative z-10">
                            Suryansh
                        </h1>
                        <h1 className="text-[12vw] font-black uppercase leading-[0.8] tracking-tighter text-outline mt-[-2vw] relative z-0">
                            Rohil.
                        </h1>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24 items-end border-t border-white/10 pt-12">
                        <div className="space-y-6">
                            <p className="text-3xl leading-tight font-light">
                                <span className="text-[#ff3366] font-bold uppercase">Software Developer</span> & Security Analyst.
                            </p>
                            <p className="text-lg text-white/50 leading-relaxed max-w-lg">
                                Building tomorrow&apos;s web through secure architectures. Currently researching MorphDAG blockchains at SNU.
                            </p>
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="text-xs font-mono text-[#ff3366] uppercase tracking-widest">Location</span>
                            <span className="text-xl font-medium text-white/60">Noida, India</span>
                        </div>
                    </div>
                </div>
            </section>
            <ExpJourneyCert timelineData={timelineData} />
        </div>
    );
}