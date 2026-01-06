'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    Inbox,
    FileText,
    Package,
    Wallet,
    Building2,
    Shield,
    BarChart3,
    Bell,
    LogOut,
    Search,
    Star,
    CheckCircle,
    DollarSign,
    Menu,
    X
} from 'lucide-react';
import { useState } from 'react';

const navigation = [
    { name: 'Dashboard', href: '/vendor', icon: LayoutDashboard },
    { name: 'RFQ Inbox', href: '/vendor/rfq', icon: Inbox, badge: 3 },
    { name: 'My Quotes', href: '/vendor/quotes', icon: FileText },
    { name: 'Active Orders', href: '/vendor/orders', icon: Package },
    { name: 'Payments', href: '/vendor/payments', icon: DollarSign },
    { name: 'Invoices', href: '/vendor/invoices', icon: Wallet },
    { name: 'Company Profile', href: '/vendor/profile', icon: Building2 },
    { name: 'Compliance', href: '/vendor/compliance', icon: Shield },
    { name: 'Analytics', href: '/vendor/analytics', icon: BarChart3 },
];

export default function VendorPortalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [showNotifications, setShowNotifications] = useState(false);
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

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-xl border-b border-border-light z-50">
                <div className="h-full px-4 lg:px-6 flex items-center justify-between">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="lg:hidden p-2 -ml-2 rounded-xl hover:bg-secondary transition-colors"
                    >
                        <Menu className="w-6 h-6 text-primary" />
                    </button>

                    {/* Logo */}
                    <Link href="/vendor" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-lg">
                            <span className="text-xl font-bold text-white">S</span>
                        </div>
                        <div className="hidden sm:block">
                            <h1 className="text-lg font-bold text-primary">Supplify</h1>
                            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Vendor Portal</p>
                        </div>
                    </Link>

                    {/* Search - Hidden on mobile */}
                    <div className="hidden md:flex flex-1 max-w-md mx-8">
                        <div className="relative group w-full">
                            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            <input
                                type="text"
                                placeholder="Search RFQs, orders..."
                                className="w-full pl-10 pr-4 py-2.5 bg-secondary rounded-xl text-sm border border-transparent focus:border-primary/20 focus:bg-white focus:shadow-sm transition-all outline-none"
                            />
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        {/* Portal Badge - Hidden on small mobile */}
                        <div className="hidden sm:flex items-center gap-2 px-3 py-2 bg-accent/10 rounded-xl text-sm font-medium text-accent border border-accent/20">
                            <Building2 className="w-4 h-4" />
                            <span className="hidden md:inline">Vendor View</span>
                        </div>

                        {/* Notifications */}
                        <button
                            onClick={() => setShowNotifications(!showNotifications)}
                            className="relative p-2.5 rounded-xl hover:bg-secondary transition-colors"
                        >
                            <Bell className="w-5 h-5 text-muted-foreground" />
                            <span className="absolute top-1 right-1 min-w-[18px] h-[18px] bg-danger rounded-full text-white text-xs flex items-center justify-center font-medium">3</span>
                        </button>

                        {/* Profile */}
                        <div className="flex items-center gap-3 pl-2 sm:pl-4 border-l border-border">
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-white text-sm font-bold shadow-md">
                                SS
                            </div>
                            <div className="hidden lg:block">
                                <p className="text-sm font-medium text-primary">Saudi Sound Systems</p>
                                <p className="text-xs text-muted-foreground">Audio Equipment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Sidebar */}
            <aside className={`fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-border-light overflow-y-auto z-50 transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
                }`}>
                {/* Close button for mobile */}
                <button
                    onClick={() => setSidebarOpen(false)}
                    className="lg:hidden absolute top-4 right-4 p-2 rounded-xl hover:bg-secondary transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Company Status Card */}
                <div className="p-4 m-4 bg-gradient-to-br from-success/10 to-success/5 rounded-2xl border border-success/20">
                    <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-4 h-4 text-success" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-success">Verified Vendor</span>
                    </div>
                    <p className="font-bold text-primary">Saudi Sound Systems</p>
                    <div className="flex items-center gap-3 mt-3 text-sm">
                        <div className="flex items-center gap-1 text-warning">
                            <Star className="w-4 h-4 fill-warning" />
                            <span className="font-semibold">4.8</span>
                        </div>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground">47 projects</span>
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
                                    <span className="flex-1">{item.name}</span>
                                    {item.badge && (
                                        <span className="px-2 py-0.5 bg-danger text-white text-xs rounded-full font-medium">
                                            {item.badge}
                                        </span>
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Footer */}
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border-light bg-white">
                    <Link
                        href="/login"
                        onClick={() => setSidebarOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 w-full rounded-xl text-sm text-muted-foreground hover:bg-danger/10 hover:text-danger transition-colors"
                    >
                        <LogOut className="w-5 h-5" />
                        Sign Out
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="lg:ml-64 pt-16 p-4 lg:p-6">
                <div className="animate-fade-in">
                    {children}
                </div>
            </main>
        </div>
    );
}
