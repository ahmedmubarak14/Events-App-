'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    Clock,
    Wallet,
    GraduationCap,
    FileText,
    Briefcase,
    Calendar,
    User,
    Bell,
    LogOut,
    Search,
    ChevronDown,
    ChevronRight,
    MapPin
} from 'lucide-react';
import { useState } from 'react';

const navigation = [
    { name: 'My Dashboard', href: '/staff', icon: LayoutDashboard },
    { name: 'My Shifts', href: '/staff/shifts', icon: Clock },
    { name: 'Earnings', href: '/staff/earnings', icon: Wallet },
    { name: 'Academy', href: '/staff/academy', icon: GraduationCap },
    { name: 'Contracts', href: '/staff/contracts', icon: FileText },
    { name: 'Job Search', href: '/staff/jobs', icon: Briefcase },
    { name: 'Availability', href: '/staff/availability', icon: Calendar },
    { name: 'My Profile', href: '/staff/profile', icon: User },
];

export default function StaffPortalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [showNotifications, setShowNotifications] = useState(false);

    return (
        <div className="min-h-screen bg-secondary-light">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-xl border-b border-border-light z-50">
                <div className="h-full px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/staff" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-lg">
                            <span className="text-xl font-bold text-white">S</span>
                        </div>
                        <div>
                            <h1 className="text-lg font-bold text-primary">Supplify</h1>
                            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Staff Portal</p>
                        </div>
                    </Link>

                    {/* Search */}
                    <div className="flex-1 max-w-md mx-8">
                        <div className="relative group">
                            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            <input
                                type="text"
                                placeholder="Search jobs, courses..."
                                className="w-full pl-10 pr-4 py-2.5 bg-secondary rounded-xl text-sm border border-transparent focus:border-primary/20 focus:bg-white focus:shadow-sm transition-all outline-none"
                            />
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="flex items-center gap-3">
                        {/* Portal Switcher */}
                        <button className="flex items-center gap-2 px-3 py-2 bg-success/10 rounded-xl text-sm font-medium text-success border border-success/20">
                            <User className="w-4 h-4" />
                            Staff View
                        </button>

                        {/* Notifications */}
                        <button
                            onClick={() => setShowNotifications(!showNotifications)}
                            className="relative p-2.5 rounded-xl hover:bg-secondary transition-colors"
                        >
                            <Bell className="w-5 h-5 text-muted-foreground" />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-danger rounded-full ring-2 ring-white" />
                        </button>

                        {/* Profile */}
                        <div className="flex items-center gap-3 pl-4 border-l border-border">
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-white text-sm font-bold shadow-md">
                                FA
                            </div>
                            <div className="hidden md:block">
                                <p className="text-sm font-medium text-primary">Faisal Al-Harthi</p>
                                <p className="text-xs text-muted-foreground">Security Guard</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Sidebar */}
            <aside className="fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-border-light overflow-y-auto">
                {/* Active Shift Banner */}
                <div className="p-4 m-4 gradient-success rounded-2xl text-white shadow-lg">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse-soft"></div>
                        <span className="text-xs font-semibold uppercase tracking-wider opacity-90">On Shift</span>
                    </div>
                    <p className="font-bold text-lg">Riyadh Tech Expo</p>
                    <p className="text-sm text-white/80 mt-1 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        Gate A • Security
                    </p>
                    <div className="mt-4 pt-3 border-t border-white/20">
                        <p className="text-xs text-white/70">Time remaining</p>
                        <p className="text-2xl font-bold mt-0.5">4h 32m</p>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="px-4 pb-4">
                    <ul className="space-y-1">
                        {navigation.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
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

                {/* Footer */}
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border-light bg-white">
                    <button className="flex items-center gap-3 px-4 py-2.5 w-full rounded-xl text-sm text-muted-foreground hover:bg-danger/10 hover:text-danger transition-colors">
                        <LogOut className="w-5 h-5" />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="ml-64 pt-16 p-6">
                <div className="animate-fade-in">
                    {children}
                </div>
            </main>
        </div>
    );
}
