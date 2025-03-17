'use client';

import { useTheme } from 'next-themes';
import { FaMoon, FaSun } from 'react-icons/fa6';

export function ModeToggle() {
    const { theme, setTheme } = useTheme();
    const handleSetTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    return (
        <>
            <button
                onClick={handleSetTheme}
                className="flex items-center justify-center rounded-md bg-card p-2 "
            >
                {theme === 'dark' ? (
                    <FaSun />
                ) : (
                    <FaMoon className="text-primary" />
                )}
                <span className="sr-only">Toggle theme</span>
            </button>
        </>
    );
}
