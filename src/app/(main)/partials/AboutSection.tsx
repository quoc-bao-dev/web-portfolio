import Container from '@/components/layouts/Container';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
};

const textVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
};
const AboutSection = () => {
    const imageRef = useRef(null);
    const textRef = useRef(null);

    const imageInView = useInView(imageRef, { once: true });
    const textInView = useInView(textRef, { once: true });

    const aboutRef = useRef(null);
    const aboutInView = useInView(aboutRef, { once: true });

    return (
        <section id="About" className="w-full">
            <Container>
                <div className="py-24 min-h-screen">
                    <h2 className="text-primary text-3xl text-center">
                        About Me
                    </h2>
                    <motion.div
                        className="pt-16 grid grid-cols-2 gap-5"
                        animate={aboutInView ? 'visible' : 'hidden'}
                    >
                        <motion.div
                            className="w-full h-full"
                            initial="hidden"
                            ref={imageRef}
                            animate={imageInView ? 'visible' : 'hidden'}
                            variants={imageVariants}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                        >
                            <Image
                                src="/image/banner-1.jpg"
                                alt="about"
                                width={500}
                                height={500}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </motion.div>
                        <motion.div
                            className="w-full p-8 bg-primary-100 dark:bg-card text-primary dark:text-primary dark:border border-border rounded-lg"
                            initial="hidden"
                            ref={textRef}
                            animate={textInView ? 'visible' : 'hidden'}
                            variants={textVariants}
                            transition={{
                                duration: 1,
                                ease: 'easeInOut',
                                delay: 0.2,
                            }}
                        >
                            <p className="text-lg">
                                My name is Quoc Bao, a Front-end Developer with
                                a deep passion for technology. One of my most
                                inspiring achievements is building Qyber, a
                                JavaScript library written in TypeScript for
                                building Single Page Applications (SPA). This
                                project reflects my commitment to creating
                                efficient and streamlined solutions that make
                                development easier and more productive.
                            </p>

                            <p className="mt-6 font-medium text-lg">
                                My Strengths:
                            </p>
                            <ul className="mt-1">
                                <li>
                                    • Proficient in ReactJS, Next.js, and
                                    TypeScript, delivering robust and scalable
                                    web applications.
                                </li>
                                <li>
                                    • Expertise in state management solutions
                                    such as Redux and Context API for seamless
                                    application performance.
                                </li>
                                <li>
                                    • Skilled in crafting responsive designs
                                    with a strong focus on intuitive UI/UX
                                    experiences.
                                </li>
                                <li>
                                    • Strong analytical and problem-solving
                                    abilities to tackle complex challenges
                                    effectively.
                                </li>
                                <li>
                                    • Dedicated to optimizing workflows and
                                    simplifying intricate processes with
                                    innovative solutions.
                                </li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};

export default AboutSection;
