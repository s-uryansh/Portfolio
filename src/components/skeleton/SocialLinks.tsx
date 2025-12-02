'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord } from 'react-icons/fa';

function SocialCard({
    name,
    href,
    icon,
}: {
    name: string;
    href: string;
    icon: React.ReactNode;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-3 px-4 py-3 rounded-2xl border border-white/20 transition-all duration-300 group hover:bg-gradient-to-r hover:from-white/10 hover:to-white/5 backdrop-blur-sm`}
        >
            <span className={`text-xl`}>{icon}</span>
            <span className="font-medium group-hover:text-white/90 text-white/80 text-sm md:text-base">{name}</span>
        </a>
    );
}

export default function SocialLinks() {
    return (
        <motion.div
            initial={{opacity:0, y:-30}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.6, ease:"easeOut", delay:0.2}}
            className="flex flex-row gap-4 flex-wrap justify-center"
        >
            <div className="hover:bg-black/30 rounded-2xl transition duration-300">
                <SocialCard
                    name="s-uryansh"
                    href="https://github.com/s-uryansh"
                    icon={<FaGithub className="text-2xl" />}
                />
            </div>
            <div className="hover:bg-blue-600/30 rounded-2xl transition duration-300">
                <SocialCard
                    name="Suryansh Rohil"
                    href="https://www.linkedin.com/in/suryansh-rohil-982a21270/"
                    icon={<FaLinkedin className="text-2xl" />}
                />
            </div>
            <div className="hover:bg-gradient-to-r from-pink-500/30 via-red-500/30 to-yellow-400/30 rounded-2xl transition-all duration-300">
                <SocialCard
                    name="suryansh.rohil"
                    href="https://www.instagram.com/suryansh.rohil/"
                    icon={<FaInstagram className="text-2xl" />}
                />
            </div>
            <div className="hover:bg-[#5865F2]/30 rounded-2xl transition-all duration-300">
                <SocialCard
                    name="gladflashislive"
                    href="#"
                    icon={<FaDiscord className="text-2xl" />}
                />
            </div>
        </motion.div>
    );
}