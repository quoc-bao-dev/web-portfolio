'use client';

import { sNavActive } from '@/components/layouts/NavBar';
import { NAV_ITEMS } from '@/constants/navbar';
import { useEffect } from 'react';
import AboutSection from './partials/AboutSection';
import ContactSection from './partials/ContactSection';
import HomeSection from './partials/HomeSection';
import ProjectSection from './partials/ProjectSection';
import SkillSection from './partials/SkillSection';

export default function Home() {
    const handleScroll = () => {
        NAV_ITEMS.forEach((item) => {
            const element = document.getElementById(item.label)!;
            if (!element) return;
            const rect = element.getBoundingClientRect();

            if (
                (rect.top >= 0 && rect.top <= window.innerHeight / 2) ||
                (window.innerHeight - rect.bottom >= 0 &&
                    window.innerHeight - rect.bottom <=
                        window.innerHeight / 2) ||
                (rect.top <= 0 && rect.bottom >= window.innerHeight)
            ) {
                sNavActive.set(item.label);
                if (rect.top >= -100 && rect.top <= 100) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    };

    useEffect(() => {
        const debounceScroll = debounce(handleScroll, 50);
        window.addEventListener('scroll', debounceScroll);
        return () => {
            window.removeEventListener('scroll', debounceScroll);
        };
    }, []);

    return (
        <main>
            <HomeSection />
            <AboutSection />
            <SkillSection />
            <ProjectSection />
            <ContactSection />
        </main>
    );
}
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
function debounce(func: Function, wait: number) {
    let timeout: ReturnType<typeof setTimeout>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (...args: any[]) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}
