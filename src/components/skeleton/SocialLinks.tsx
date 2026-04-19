'use client';
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord } from 'react-icons/fa';

export default function SocialLinks() {
    const socials = [
        { name: 'GITHUB', href: 'https://github.com/s-uryansh', icon: <FaGithub /> },
        { name: 'LINKEDIN', href: 'https://www.linkedin.com/in/suryansh-rohil-982a21270/', icon: <FaLinkedin /> },
        { name: 'INSTAGRAM', href: 'https://www.instagram.com/suryansh.rohil/', icon: <FaInstagram /> },
        { name: 'DISCORD', href: '#', icon: <FaDiscord /> }
    ];

    return (
        <div className="flex flex-col gap-4">
            {socials.map((social) => (
                <a 
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    className="flex items-center gap-4 text-sm font-mono tracking-widest text-white/50 hover:text-[#ff3366] transition-colors"
                >
                    <span className="text-xl">{social.icon}</span>
                    {social.name}
                </a>
            ))}
        </div>
    );
}