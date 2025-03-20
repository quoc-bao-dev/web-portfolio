'use client';

import { NAV_ITEMS } from '@/constants/navbar';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { signify } from 'react-signify';

export const sNavActive = signify('Home');
interface NavBarItemProps {
    label: string;
}
const NavBarItem = ({ label }: NavBarItemProps) => {
    return (
        <li
            className="relative px-6 py-1 cursor-pointer"
            onClick={() => {
                sNavActive.set(label);
                document.getElementById(label)!.scrollIntoView({
                    behavior: 'smooth',
                });
            }}
        >
            <sNavActive.Wrap>
                {(value) => {
                    const isActive = value === label;
                    return (
                        <>
                            <a
                                className={cn(
                                    'text-primary dark:text-white font-medium text-base  relative z-10 transition-all duration-300',
                                    {
                                        'text-white dark:text-white': isActive,
                                    }
                                )}
                            >
                                {label}
                            </a>
                            {isActive && (
                                <motion.div
                                    layoutId="active"
                                    className="absolute top-0 left-0 w-full h-full rounded-full bg-primary"
                                />
                            )}
                        </>
                    );
                }}
            </sNavActive.Wrap>
        </li>
    );
};
const NavBar = () => {
    return (
        <nav>
            <ul className="flex items-center gap-5">
                {NAV_ITEMS.map((item) => {
                    return <NavBarItem key={item.label} label={item.label} />;
                })}
            </ul>
        </nav>
    );
};

export default NavBar;
