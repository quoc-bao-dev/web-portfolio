'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

type ProjectCardProps = {
    name: string;
    image: string;
    link: string;
    techStack: string[];
    title: string;
    description: string;
    feature: string[];
    className?: string;
};

export default function ProjectCard(props: ProjectCardProps) {
    const [flipped, setFlipped] = useState(false);

    return (
        <motion.article
            className={cn(
                'relative h-auto cursor-pointer perspective-1000',
                props.className
            )}
            onHoverStart={() => setFlipped(true)}
            onHoverEnd={() => setFlipped(false)}
        >
            <a href={props.link} target="_blank">
                <motion.div
                    className="relative w-full h-auto rounded-lg"
                    animate={{ rotateY: flipped ? 180 : 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {/* Mặt trước */}
                    <div
                        className="w-full h-auto bg-primary-100 p-4 rounded-lg"
                        style={{ backfaceVisibility: 'hidden' }}
                    >
                        <div className="w-full aspect-video bg-primary-900 rounded-lg">
                            <Image
                                className="w-full h-full object-cover rounded-lg"
                                width={300}
                                height={300}
                                src={props.image}
                                alt={props.title}
                            />
                        </div>
                        <div className="pt-4">
                            <h3 className="text-xl font-semibold text-primary-950">
                                {props.name}
                            </h3>
                            <p className="pt-2 pb-1 text-primary-700">
                                Tech Stack:
                            </p>
                            <ul className="flex gap-2 flex-wrap">
                                {props.techStack.map((tech, index) => (
                                    <li
                                        key={index}
                                        className="py-1 px-3 bg-primary-200 text-primary-600 font-semibold text-sm rounded-full"
                                    >
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Mặt sau */}
                    <div
                        className="w-full h-full absolute top-0 left-0 bg-primary-900 text-primary-100 text-center px-4 rounded-lg flex flex-col justify-center"
                        style={{
                            backfaceVisibility: 'hidden',
                            transform: 'rotateY(180deg)',
                        }}
                    >
                        <h3 className="text-xl font-semibold">{props.title}</h3>
                        <p className="text-sm mt-2">{props.description}</p>
                        <p className="text-sm mt-2">Feature: </p>
                        <ul className="text-sm ">
                            {props.feature.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </a>
        </motion.article>
    );
}
