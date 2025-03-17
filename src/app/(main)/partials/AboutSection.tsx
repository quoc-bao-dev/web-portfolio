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
                            className="w-full p-8 bg-primary-100 dark:bg-card text-primary/60 dark:text-primary/75 dark:border border-border rounded-lg"
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
                            <p className="leading-6">
                                My name is Quoc Bao, a Front-end Developer with
                                a deep passion for technology. One of my most
                                inspiring achievements is building Qyber, a
                                custom library designed to simplify workflows
                                and automate processes. This project reflects my
                                commitment to creating efficient and streamlined
                                solutions that make development easier and more
                                productive.
                            </p>

                            <p className="mt-6 font-medium text-lg">
                                My Strengths:
                            </p>
                            <ul className="mt-1">
                                <li>• ReactJS, Next.js, TypeScript.</li>
                                <li>
                                    • State management (Redux, Context API).
                                </li>
                                <li>• Responsive Design and UI/UX.</li>
                                <li>
                                    • Logical thinking and problem-solving
                                    skills
                                </li>
                                <li>
                                    • Passionate about simplifying complex
                                    workflows
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
