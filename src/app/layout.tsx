import { AppProvider } from '@/components/AppProvider';
import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Quoc Bao Dev | Portfolio',
    description:
        "Welcome to Quoc Bao's portfolio website showcasing projects, skills, and experiences in web development.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="icon" href="/image/favicon.png" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />
                <meta name="author" content="Quoc Bao" />
                <meta
                    name="keywords"
                    content="Quoc Bao, portfolio, web development, projects, skills, experiences"
                />
                <meta name="theme-color" content="#ffffff" />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen overflow-x-hidden `}
            >
                <AppProvider>
                    <Header />
                    {children}
                    <Footer />
                </AppProvider>
            </body>
        </html>
    );
}
