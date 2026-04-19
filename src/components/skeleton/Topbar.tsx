'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Topbar() {
    const pathname = usePathname();
    const links = [
        { name: 'INDEX', href: '/' },
        { name: 'ABOUT', href: '/about' },
        { name: 'WORKS', href: '/projects' },
        { name: 'CONTACT', href: '/contact' }
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-[100] p-6 mix-blend-difference pointer-events-none">
            <nav className="flex justify-between items-center max-w-7xl mx-auto pointer-events-auto">
                <Link href="/" className="font-black text-xl tracking-tighter text-white">S-U.</Link>
                <div className="flex gap-8">
                    {links.map((link) => (
                        <Link 
                            key={link.href} 
                            href={link.href}
                            /* Fixed: Replaced #ff3366 active state with solid white to prevent cyan inversion on white backgrounds */
                            className={`text-xs font-mono tracking-widest transition-all ${
                                pathname === link.href ? 'text-white border-b border-white' : 'text-white/60 hover:text-white'
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
}