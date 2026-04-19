'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ProjectType } from './ProjectCard';

export default function ProjectsGrid({ projects }: { projects: ProjectType[] }) {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    return (
        <>
        <div className="flex flex-col border-t border-white/10">
            {projects.map((project, index) => (
                <motion.div 
                    key={project.id}
                    className="group relative border-b border-white/10 py-12 px-4 hover:bg-white text-white hover:text-black transition-colors duration-300"
                >
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                        <div className="flex items-center gap-10">
                            <span className="font-mono text-sm opacity-40">0{index + 1}</span>
                            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                                {project.projectName || project.title}
                            </h3>
                        </div>
                        
                        <div className="flex flex-col items-start md:items-end gap-2">
                            <span className="text-xs font-mono uppercase tracking-widest opacity-60">
                                {project.category}
                            </span>
                            <div className="flex gap-4">
                                {project.githubUrl && (
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase underline hover:text-[#ff3366] transition-colors relative z-20">
                                        Source
                                    </a>
                                )}
                                {project.video ? (
                                    <button onClick={() => setActiveVideo(project.video || null)} className="text-sm font-bold uppercase underline hover:text-[#ff3366] transition-colors relative z-20 cursor-pointer">
                                        Video
                                    </button>
                                ) : project.liveUrl ? (
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase underline hover:text-[#ff3366] transition-colors relative z-20">
                                        Live
                                    </a>
                                ) : null}
                                {project.paper && (
                                    <a href={project.paper} target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase underline hover:text-[#ff3366] transition-colors relative z-20">
                                        Paper
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                    
                    <div className="max-w-7xl mx-auto overflow-hidden h-0 group-hover:h-auto transition-all duration-500">
                        <p className="pt-8 text-xl max-w-2xl font-medium leading-tight">
                            {project.description}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>

        <AnimatePresence>
            {activeVideo && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4 md:p-12 backdrop-blur-md"
                    onClick={() => setActiveVideo(null)}
                >
                    <button
                        className="absolute top-6 right-6 md:top-10 md:right-10 text-white font-mono text-sm tracking-widest hover:text-[#ff3366] transition-colors z-50"
                        onClick={() => setActiveVideo(null)}
                    >
                        [ CLOSE ]
                    </button>
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-6xl aspect-video border border-white/20 bg-black shadow-2xl"
                    >
                        <video
                            src={activeVideo}
                            controls
                            autoPlay
                            className="w-full h-full object-contain outline-none"
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
        </>
    );
}