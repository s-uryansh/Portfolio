'use client';
import React from 'react';
import { motion } from 'framer-motion';

export interface TimelineItemData {
    id: number;
    type: 'education' | 'experience' | 'certification' | 'research' | 'project' | 'achievement';
    title: string;
    company: string;
    date: string;
    description: string;
    skills?: string[];
    paper?: string;
    githubUrl?: string;
    liveUrl?: string;
}

export default function ExpJourneyCert({ timelineData }: { timelineData: TimelineItemData[] }) {
    return (
        <section className="py-20 px-6 border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-white/30 mb-10">
                    Experience & Journey
                </h2>
                
                <div className="flex flex-col">
                    {timelineData.map((item, index) => (
                        <motion.div 
                            key={item.id}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="group relative border-b border-white/10 py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start md:items-center hover:bg-white/[0.02] transition-colors"
                        >
                            <div className="md:col-span-1 text-sm font-mono text-white/20">
                                0{index + 1}
                            </div>
                            
                            <div className="md:col-span-5">
                                <h3 className="text-3xl md:text-4xl font-bold tracking-tight uppercase">
                                    {item.title}
                                </h3>
                                <p className="text-[#ff3366] font-mono text-sm mt-2">
                                    {item.company}
                                </p>
                            </div>

                            <div className="md:col-span-4 text-white/50 text-sm leading-relaxed flex flex-col gap-4">
                                <p>{item.description}</p>
                                {/* Fixed: Anchor tags mapped to URLs */}
                                <div className="flex flex-wrap gap-4">
                                    {item.githubUrl && (
                                        <a href={item.githubUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ff3366] uppercase font-bold text-xs tracking-widest underline transition-colors relative z-10">
                                            Source Code
                                        </a>
                                    )}
                                    {item.liveUrl && (
                                        <a href={item.liveUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ff3366] uppercase font-bold text-xs tracking-widest underline transition-colors relative z-10">
                                            Live Demo
                                        </a>
                                    )}
                                    {item.paper && (
                                        <a href={item.paper} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ff3366] uppercase font-bold text-xs tracking-widest underline transition-colors relative z-10">
                                            {item.type === 'research' ? 'Read Paper' : 'View Certificate'}
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="md:col-span-2 text-left md:text-right font-mono text-sm text-white/30 mt-4 md:mt-0">
                                {item.date}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}