import { AppProvider } from '@/components/AppProvider';
import Header from '@/components/layouts/Header';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ClientOnly from '@/components/ClientOnly';
import Footer from '@/components/layouts/Footer';

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
