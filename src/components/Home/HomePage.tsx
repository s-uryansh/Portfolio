'use client';
import HomeHero from './HomeHero';
import HomeAbout from './HomeAbout';
import HomeProjects from './HomeProjects';
import HomeContact from './HomeContact';

export default function HomePage() {
    return (
        <div className="bg-black min-h-screen selection:bg-[#ff3366] selection:text-white">
            <HomeHero />
            <HomeAbout />
            <HomeProjects />
            <HomeContact />
        </div>
    );
}