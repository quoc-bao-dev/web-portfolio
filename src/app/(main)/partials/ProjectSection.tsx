'use client';

import Container from '@/components/layouts/Container';
import { cn } from '@/lib/utils';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const tabs = [
    {
        label: 'All',
        tab: 'all',
    },
    {
        label: 'Web',
        tab: 'web',
    },
    {
        label: 'Game',
        tab: 'game',
    },
    {
        label: 'UI Library',
        tab: 'lib',
    },
];

const projects = [
    {
        thumb: '/image/nglearn.png',
        title: 'Ng Learn',
        techStack: ['React.js', 'Tailwind'],
        detail: {
            description:
                'Ng Learn is a platform for sharing programming knowledge and providing tools for developers, including cloud services and development tools.',
            features: [
                'Interactive tutorials with step-by-step guidance.',
                'Code examples for common use cases.',
                'Community forum for discussions and Q&A.',
                'Cloud services and tools for developers.',
                'Courses and knowledge sharing for developers.',
            ],
        },
        link: 'https://nglearns.dev/',
        tags: ['web'],
    },
    {
        thumb: '/image/qyber.png',
        title: 'Qyber',
        techStack: ['Typescript'],
        detail: {
            description:
                'Qyber is a powerful UI library designed to optimize the development of modern web applications with reusable and efficient components.',
            features: [
                'Core components including components, signals, and routing.',
                'Highly customizable and reusable components.',
                'Performance optimization and scalability.',
                'Detailed documentation and examples.',
            ],
        },
        link: 'https://www.npmjs.com/package/qyber',
        tags: ['lib'],
    },
    {
        thumb: '/image/game.png',
        title: 'Happy Bee',
        techStack: ['Javascript', 'HTML', 'CSS'],
        detail: {
            description:
                'Happy Bee is a simple and entertaining game where players control a bee to collect honey and avoid obstacles.The game is built using vanilla JavaScript, HTML, and CSS without relying on any external libraries or frameworks.',
            features: [
                'Simple and addictive gameplay.',
                'Friendly and cute graphic design.',
                'Suitable for all ages.',
            ],
        },
        link: 'https://happy-bee.quocbaoart.com/',
        tags: ['game'],
    },
];

const ProjectSection = () => {
    const [selectedTab, setSelectedTab] = useState('all');
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        loop: true,
        duration: 25,
    });

    const listProject =
        selectedTab === 'all'
            ? projects
            : projects.filter((proj) => proj.tags.includes(selectedTab));

    const Tab = ({ label, tab }: { label: string; tab: string }) => {
        const handleClick = () => {
            setSelectedTab(tab);
        };
        return (
            <li
                className={cn(
                    'flex items-center px-8 py-2 rounded-full cursor-pointer',
                    {
                        'bg-primary-500 hover:bg-primary-400 text-white':
                            tab === selectedTab,
                        'hover:bg-primary-300 text-primary-600':
                            tab !== selectedTab,
                    }
                )}
                onClick={handleClick}
            >
                <p>{label}</p>
            </li>
        );
    };

    useEffect(() => {
        if (!emblaApi) return;

        let autoplay = setInterval(() => emblaApi.scrollNext(), 3000);

        emblaApi.on('pointerDown', () => clearInterval(autoplay)); // Dừng khi vuốt
        emblaApi.on('pointerUp', () => {
            autoplay = setInterval(() => emblaApi.scrollNext(), 3000); // Chạy lại sau khi vuốt
        });

        return () => clearInterval(autoplay);
    }, [emblaApi]);
    return (
        <section id="Project">
            <Container>
                <div className="py-24 min-h-screen">
                    <h2 className="text-primary text-3xl text-center">
                        Project
                    </h2>
                    <div className="mt-10">
                        <ul className=" p-2 rounded-full bg-primary-100 flex gap-4 w-fit mx-auto">
                            {tabs.map((item, index) => (
                                <Tab
                                    key={index}
                                    label={item.label}
                                    tab={item.tab}
                                />
                            ))}
                        </ul>
                    </div>
                    <div
                        className="mt-10  w-full overflow-hidden"
                        ref={emblaRef}
                    >
                        <div className="flex -mx-4">
                            {listProject.map((proj) => (
                                <div
                                    className="px-4 w-1/3 shrink-0"
                                    key={proj.link}
                                >
                                    <ProjectCard
                                        name={proj.title}
                                        image={proj.thumb}
                                        description={proj.detail.description}
                                        feature={proj.detail.features}
                                        link={proj.link}
                                        techStack={proj.techStack}
                                        title={proj.title}
                                        className="w-full"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ProjectSection;
