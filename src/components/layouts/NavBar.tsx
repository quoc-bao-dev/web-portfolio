'use client';

import { NAV_ITEMS } from '@/constants/navbar';
import { cn } from '@/lib/utils';
import { useNavbar } from '@/store/useNavbar';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface NavBarItemProps {
    label: string;
}

const NavBarItem = ({ label }: NavBarItemProps) => {
    const { selectedTab, setTab } = useNavbar((state) => state);
    const isActive = selectedTab === label;
    return (
        <li
            className="relative px-6 py-1 cursor-pointer"
            onClick={() => {
                setTab(label);
                document.getElementById(label)!.scrollIntoView({
                    behavior: 'smooth',
                });
            }}
        >
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
        </li>
    );
};
const NavBar = () => {
    const setTab = useNavbar((state) => state.setTab);
    useEffect(() => {
        setTab(NAV_ITEMS[0].label);
    }, []);
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
