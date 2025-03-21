'use client';

import ReactJs from '@/components/icons/ReactJs';
import Container from '@/components/layouts/Container';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';

const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const HomeSection = () => {
    const controls = useAnimation();
    const controls2 = useAnimation();
    const startHoverImage = () => {
        controls.start({
            scale: 1.1,
            rotate: 1090,
            transition: { duration: 0.9, type: 'tween' },
            opacity: 0.5,
            boxShadow:
                '0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(59, 130, 246, 0.6)',
        });
        controls2.start({
            boxShadow:
                '0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(59, 130, 246, 0.6)',
        });
    };
    const endHoverImage = () => {
        controls.start({
            scale: 1,
            rotate: 0,
            opacity: 0,
            transition: { duration: 0.3 },
            boxShadow: 'none',
        });
        controls2.start({
            boxShadow: 'none',
        });
    };
    return (
        <section
            id="Home"
            className="relative w-full md:h-screen bg-gradient-to-r from-[#f0f9ff] to-[#dff3ff] dark:from-[#001c3a] dark:to-[#000a25] flex items-center justify-center overflow-hidden"
        >
            <div
                className="absolute w-[800px] h-[800px] bg-gradient-to-tr from-[#cfe6ff] via-[#bde1ff] to-[#e0f3ff] dark:from-[#021937] dark:via-[#051d3d] dark:to-[#072648] rounded-full blur-3xl opacity-70"
                style={{
                    top: '90%',
                    left: '90%',
                    transform: 'translate(-50%, -50%) rotate(45deg)',
                }}
            ></div>
            <div className="w-full h-full z-20">
                <Container className="h-full">
                    <motion.div
                        className="pb-16 pt-[var(--header-height)] grid grid-cols-1 md:grid-cols-2 gap-4 h-full"
                        initial="hidden"
                        animate="visible"
                        variants={fadeInVariants}
                    >
                        <div className="flex items-center h-full pt-16 md:pt-0">
                            <div>
                                <h1 className="text-3xl md:text-[64px] md:leading-[72px] font-bold text-primary dark:text-white">
                                    Hallo,
                                    <br />
                                    I&#39;m <br className="md:hidden" />
                                    <span className="text-primary">
                                        <Typewriter
                                            words={[
                                                'Quoc Bao!',
                                                'a Frontend Developer!',
                                            ]}
                                            loop={true}
                                            cursor
                                            cursorStyle="_"
                                            typeSpeed={100}
                                            deleteSpeed={50}
                                            delaySpeed={2000}
                                        />
                                    </span>
                                </h1>
                                <p className="text-base md:text-lg font-medium text-gray-600 dark:text-gray-400 mt-6 md:leading-[28px]">
                                    I’m a Front-end Developer passionate about
                                    creating innovative and optimized web
                                    applications. With a strong foundation in
                                    React.js, Next.js, TypeScript, and API
                                    development, I am ready to turn your ideas
                                    into reality.
                                </p>
                                <div className="mt-10 ">
                                    <button className="px-4 md:px-8 py-2 md:py-2 bg-primary font-bold text-white border-none outline-none rounded-lg">
                                        Portfolio
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="h-full w-full flex items-center justify-center">
                            <motion.div
                                className="relative h-fit"
                                initial="hidden"
                                animate="visible"
                                variants={fadeInVariants}
                            >
                                <div className="relative z-40 pt-10 h-fit">
                                    <motion.div
                                        className="relative"
                                        onHoverStart={startHoverImage}
                                        onHoverEnd={endHoverImage}
                                    >
                                        <Image
                                            src="/image/person.png"
                                            width={480}
                                            height={480}
                                            alt="me"
                                            className="h-full aspect-[5/6] object-contain relative"
                                        />
                                    </motion.div>
                                </div>
                                <div className="absolute inset-0 rounded-full border-[6px] border-transparent bg-gradient-to-r dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 opacity-50 blur-3xl"></div>
                                <div className="w-[120%] h-[120%] bg-primary/10 rounded-[50px] absolute top-64 left-64 backdrop-blur-lg bg-opacity-20 border border-white/10 shadow-md"></div>
                                <motion.div
                                    animate={controls}
                                    className="w-[100%] h-[75%] bg-primary-600/10 rounded-[50px] backdrop:blur-lg absolute bottom-0 backdrop-blur-md bg-opacity-30 border border-white/20 shadow-lg"
                                ></motion.div>
                                <motion.div
                                    animate={controls2}
                                    className="w-[100%] h-[75%] bg-primary-600/20 rounded-[50px] backdrop:blur-lg absolute bottom-0 left-1/2 transform -translate-x-1/2 backdrop-blur-md bg-opacity-30 border border-white/20 shadow-lg"
                                ></motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </Container>
            </div>
            <motion.div
                className="size-[600px] absolute"
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: 40,
                    ease: 'linear',
                }}
            >
                <div className="relative w-full h-full opacity-20">
                    <ReactJs className="w-full h-full text-primary-200/40 backdrop:blur-sm  drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                    <ReactJs className="absolute top-0 left-0 w-full h-full text-primary-300" />
                </div>
            </motion.div>
        </section>
    );
};

export default HomeSection;
