'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomeAbout() {
    return (
        <section className="min-h-screen bg-white text-black py-24 px-6 flex items-center">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col justify-between"
                >
                    <h2 className="text-[10vw] md:text-[8vw] leading-[0.9] font-black uppercase tracking-tighter">
                        The <br /> Build.
                    </h2>
                    <div className="mt-12 flex flex-col gap-6 items-start">
                        <Link href="/about" className="group flex items-center gap-4 text-2xl font-bold uppercase tracking-widest">
                            Biography 
                            <span className="group-hover:translate-x-3 transition-transform duration-300">→</span>
                        </Link>
                        <motion.a
                            href="/assets/Resume/resume.pdf"
                            download
                            className="text-sm font-mono uppercase tracking-widest border-b border-black pb-1 hover:text-[#ff3366] hover:border-[#ff3366] transition-colors"
                        >
                            Download CV
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-4xl font-medium leading-tight tracking-tight flex flex-col justify-center"
                >
                    <p className="mb-8">
                        I build <span className="italic font-serif">robust</span> digital infrastructures and secure full-stack applications.
                    </p>
                    <p className="text-black/40">
                        I am Suryansh Rohil, a developer focused on Blockchain, Security Analysis, and creating creative solutions that strike a balance between functionality and user experience.
                    </p>
                    <div className="mt-12 pt-12 border-t border-black/10 grid grid-cols-2 gap-8 text-sm font-mono uppercase tracking-widest text-black/60">
                        <div>
                            <p className="text-black mb-2">Focus</p>
                            <p>Software Dev</p>
                            <p>Cybersecurity</p>
                        </div>
                        <div>
                            <p className="text-black mb-2">Location</p>
                            <p>Noida, India</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}