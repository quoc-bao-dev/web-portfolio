import { PropsWithChildren } from 'react';

import { motion } from 'framer-motion';
const AnimatedCard = ({
    children,
    label,
}: PropsWithChildren & { label?: string }) => {
    return (
        <motion.div
            className="flex"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95, rotate: -5 }}
        >
            <motion.div
                className="m-auto"
                whileHover={{ y: -10 }} // Hiệu ứng nổi lên
            >
                <motion.div
                    className="w-[60px] aspect-square"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {children}
                </motion.div>
                <motion.p
                    className="text-center"
                    whileHover={{
                        color: '#ff0000',
                        letterSpacing: '2px',
                    }} // Thay đổi màu chữ và giãn chữ
                >
                    {label}
                </motion.p>
            </motion.div>
        </motion.div>
    );
};

export default AnimatedCard;
