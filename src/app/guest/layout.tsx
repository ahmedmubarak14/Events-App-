'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    Plane,
    CreditCard,
    Hotel,
    Bus,
    Calendar,
    Users,
    MapPin,
    Bell,
    LogOut,
    Globe,
    Menu,
    MessageCircle,
    X
} from 'lucide-react';
import { useState } from 'react';

const navigation = [
    { name: 'My Trip', href: '/guest', icon: LayoutDashboard },
    { name: 'Visa & Travel', href: '/guest/travel', icon: Plane },
    { name: 'Event Badge', href: '/guest/badge', icon: CreditCard },
    { name: 'Hotel & Stay', href: '/guest/hotel', icon: Hotel },
    { name: 'Transportation', href: '/guest/transport', icon: Bus },
    { name: 'My Agenda', href: '/guest/agenda', icon: Calendar },
    { name: 'Networking', href: '/guest/networking', icon: Users },
    { name: 'Venue Map', href: '/guest/map', icon: MapPin },
];

export default function GuestPortalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-secondary-light">
            {/* Mobile Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-xl border-b border-border-light z-50">
                <div className="h-full px-4 lg:px-6 flex items-center justify-between">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="md:hidden p-2 -ml-2 rounded-xl hover:bg-secondary transition-colors"
                    >
                        <Menu className="w-6 h-6 text-primary" />
                    </button>

                    {/* Logo */}
                    <Link href="/guest" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-lg">
                            <span className="text-xl font-bold text-white">S</span>
                        </div>
                        <div className="hidden sm:block">
                            <h1 className="text-lg font-bold text-primary">Supplify</h1>
                            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Guest Portal</p>
                        </div>
                    </Link>

                    {/* Event Selector - Hidden on mobile */}
                    <div className="hidden lg:block">
                        <div className="flex items-center gap-3 px-4 py-2.5 bg-accent/5 rounded-xl border border-accent/10">
                            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                                <Calendar className="w-4 h-4 text-accent" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-primary">Riyadh Tech Expo 2026</p>
                                <p className="text-xs text-muted-foreground">Mar 14-16, 2026</p>
                            </div>
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        {/* Language */}
                        <button className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-secondary transition-colors">
                            <Globe className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm font-medium hidden sm:inline">EN</span>
                        </button>

                        {/* Notifications */}
                        <button className="relative p-2.5 rounded-xl hover:bg-secondary transition-colors">
                            <Bell className="w-5 h-5 text-muted-foreground" />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-success rounded-full ring-2 ring-white" />
                        </button>

                        {/* Profile */}
                        <div className="flex items-center gap-3 pl-2 sm:pl-4 border-l border-border">
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white text-sm font-bold shadow-md">
                                EM
                            </div>
                            <div className="hidden lg:block">
                                <p className="text-sm font-medium text-primary">Emma Wilson</p>
                                <p className="text-xs text-muted-foreground">VIP Delegate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Sidebar */}
            <aside className={`fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-border-light overflow-y-auto z-50 transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
                }`}>
                {/* Close button for mobile */}
                <button
                    onClick={() => setSidebarOpen(false)}
                    className="md:hidden absolute top-4 right-4 p-2 rounded-xl hover:bg-secondary transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Trip Summary */}
                <div className="p-4 m-4 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl border border-accent/10">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">🇸🇦</span>
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Your Trip</span>
                    </div>
                    <p className="font-bold text-primary">Mar 13-17, 2026</p>
                    <p className="text-sm text-muted-foreground mt-1">5 nights, 4 days</p>
                    <div className="mt-3 pt-3 border-t border-primary/10">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-success rounded-full animate-pulse-soft"></div>
                            <span className="text-xs font-medium text-success">All confirmed</span>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="px-4 pb-4">
                    <ul className="space-y-1">
                        {navigation.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    onClick={() => setSidebarOpen(false)}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${pathname === item.href
                                            ? 'bg-primary/10 text-primary shadow-sm'
                                            : 'text-muted hover:bg-secondary hover:text-primary'
                                        }`}
                                >
                                    <item.icon className="w-5 h-5" />
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Help Card */}
                <div className="mx-4 mb-4 p-4 bg-gradient-to-br from-success/10 to-success/5 rounded-2xl border border-success/10">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-success/20 rounded-xl flex items-center justify-center">
                            <MessageCircle className="w-5 h-5 text-success" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-primary">Need Help?</p>
                            <p className="text-xs text-muted-foreground">24/7 Concierge</p>
                        </div>
                    </div>
                    <button className="w-full py-2.5 bg-success text-white rounded-xl text-sm font-medium hover:bg-success/90 transition-colors shadow-sm">
                        Contact Support
                    </button>
                </div>

                {/* Footer */}
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border-light bg-white">
                    <button className="flex items-center gap-3 px-4 py-2.5 w-full rounded-xl text-sm text-muted-foreground hover:bg-danger/10 hover:text-danger transition-colors">
                        <LogOut className="w-5 h-5" />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="md:ml-64 pt-16 p-4 lg:p-6">
                <div className="animate-fade-in">
                    {children}
                </div>
            </main>
        </div>
    );
}
