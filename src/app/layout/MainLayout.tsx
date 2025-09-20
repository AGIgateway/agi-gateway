// src/app/layout/MainLayout.tsx
'use client'; // 👈 Add this if not already present — because WhatsAppButton uses onClick + window

import React from 'react';
import Header from '@/features/layouts/Header/Header';
import Footer from '@/features/layouts/Footer/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton'; // ✅ Import here

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main className="flex-1">
                {children}
            </main>
            <Footer />

            {/* ✅ WhatsApp Button — appears on every page */}
            <WhatsAppButton />
        </>
    );
};

export default MainLayout;