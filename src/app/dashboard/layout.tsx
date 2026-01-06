'use client';

import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { useState } from 'react';
import { Menu } from 'lucide-react';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-secondary-light">
            {/* Mobile Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Mobile Menu Button - Floating */}
            <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden fixed top-4 left-4 z-40 p-3 bg-primary text-white rounded-xl shadow-lg"
            >
                <Menu className="w-5 h-5" />
            </button>

            {/* Sidebar - Hidden on mobile by default */}
            <div className={`lg:block ${sidebarOpen ? 'block' : 'hidden'}`}>
                <Sidebar isOpen={sidebarOpen || true} onClose={() => setSidebarOpen(false)} />
            </div>

            {/* Desktop Sidebar - Always visible */}
            <div className="hidden lg:block">
                <Sidebar />
            </div>

            <Header />
            <main className="lg:ml-64 pt-20 lg:pt-16 p-4 lg:p-6">
                {children}
            </main>
        </div>
    );
}
