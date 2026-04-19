'use client';

export interface ProjectType {
    id: number;
    title: string;
    description: string;
    techStack?: string[];
    category: string;
    githubUrl?: string;
    liveUrl?: string;
    video?: string;
    paper?: string;
    featured?: boolean;
    projectName?: string;
}

export default function ProjectCard({ project, index }: { project: ProjectType, index: number }) {
    return (
        <div className="group border-b border-white/10 py-12 px-4 hover:bg-white text-white hover:text-black transition-colors duration-300 cursor-pointer">
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
                        {project.githubUrl && <span className="text-sm font-bold uppercase underline">Source</span>}
                        {project.video && <span className="text-sm font-bold uppercase underline">Demo</span>}
                    </div>
                </div>
            </div>
            
            <div className="max-w-7xl mx-auto overflow-hidden h-0 group-hover:h-auto transition-all duration-500">
                <p className="pt-8 text-xl max-w-2xl font-medium leading-tight">
                    {project.description}
                </p>
            </div>
        </div>
    );
}