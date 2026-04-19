'use client';
import Link from 'next/link';

export default function HomeContact() {
    return (
        <section className="py-32 bg-black text-white px-6 border-t border-white/10">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                <h2 className="text-[10vw] font-black uppercase tracking-tighter leading-none mb-12">
                    Let&apos;s <span className="text-[#ff3366]">Work.</span>
                </h2>
                <Link href="/contact" className="group flex items-center gap-6 text-3xl font-bold uppercase tracking-widest border-b-2 border-white pb-2 hover:text-[#ff3366] hover:border-[#ff3366] transition-all">
                    Start a project
                    <span className="group-hover:translate-x-4 transition-transform duration-300">→</span>
                </Link>
            </div>
        </section>
    );
}