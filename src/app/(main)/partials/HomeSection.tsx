import Container from '@/components/layouts/Container';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HomeSection = () => {
    return (
        <section
            id="Home"
            className="relative  w-full min-h-screen bg-gradient-to-r from-[#f0f9ff] to-[#dff3ff] dark:from-[#001c3a] dark:to-[#000a25] flex items-center justify-center overflow-hidden"
        >
            {/* Brush Gradient */}
            <motion.div
                className="absolute w-[800px] h-[800px] bg-gradient-to-tr from-[#cfe6ff] via-[#a3d8ff] to-[#e0f3ff] dark:from-[#021b33] dark:via-[#063a5a] dark:to-[#092d44] rounded-full blur-[150px] opacity-80"
                style={{
                    top: '0%',
                    left: '0%',
                    transform: 'translate(-50%, -50%)',
                }}
                // animation
                initial={{ scale: 0.9, top: '-20%', left: '-20%' }} // Dời lên trên và sang trái
                animate={{
                    scale: [1, 1.1, 1.1, 1],
                    top: ['-20%', '0%', '20%', '-20%'], // Di chuyển lên trên
                    left: ['-20%', '20%', '40%', '-20%'], // Giữ dời ngang sang trái
                    rotate: [0, 45, 90, 0],
                }}
                transition={{
                    duration: 12,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    delay: 0,
                }}
            ></motion.div>
            {/* Brush Gradient */}
            <div
                className="absolute w-[800px] h-[800px] bg-gradient-to-tr from-[#cfe6ff] via-[#bde1ff] to-[#e0f3ff]  dark:from-[#021937]  dark:via-[#051d3d]  dark:to-[#072648] rounded-full blur-3xl opacity-70"
                style={{
                    top: '90%',
                    left: '90%',
                    transform: 'translate(-50%, -50%) rotate(45deg)',
                }}
            ></div>
            <div className="w-full h-full z-20">
                <Container className="h-full">
                    <div className=" pt-24 pb-16 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                        <div className="flex items-center h-full">
                            <div>
                                <h1 className="text-[64px] leading-[72px] font-bold text-primary dark:text-white">
                                    Hello,
                                    <br />
                                    I&#39;m{' '}
                                    <span className="text-primary truncate">
                                        Quoc Bao!
                                    </span>
                                </h1>
                                <p className="text-lg font-medium text-gray-400 mt-6 leading-[28px]">
                                    I’m a Front-end Developer passionate about
                                    creating innovative and optimized web
                                    applications. With a strong foundation in
                                    React.js, TypeScript, and API development, I
                                    am ready to turn your ideas into reality.
                                </p>
                                <div className="mt-10">
                                    <button className="px-8 py-2 bg-primary font-bold text-white border-none outline-none rounded-lg">
                                        Portfolio
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="h-full w-full flex items-center justify-center pt-6">
                            <div className="relative h-full aspect-[5/6] ">
                                <div className="pt-10 h-full">
                                    <Image
                                        src="/image/person.png"
                                        width={500}
                                        height={500}
                                        alt="me"
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                                <div className="w-full h-full border-8 dark:border-primary-900 border-primary-50  rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                                <div className="w-full h-full border-8 dark:border-primary-900 border-primary-50  rounded-lg absolute top-6 left-6"></div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
};

export default HomeSection;
