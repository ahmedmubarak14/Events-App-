'use client';

import { useState } from 'react';
import { Search, Bell, Globe, ChevronDown, X, User, Settings, LogOut, ExternalLink } from 'lucide-react';

const notifications = [
    { id: 1, title: 'Venue booking confirmed', message: 'Riyadh Front Exhibition Center', time: '5 min ago', type: 'success' },
    { id: 2, title: 'New RFQ received', message: 'Audio equipment request from Event Pro', time: '1 hour ago', type: 'info' },
    { id: 3, title: 'Staff alert', message: '3 check-ins pending verification', time: '2 hours ago', type: 'warning' },
];

const portalSwitcher = [
    { name: 'Organizer Dashboard', href: '/dashboard', current: true },
    { name: 'Staff Portal', href: '/staff', current: false },
    { name: 'Vendor Portal', href: '/vendor', current: false },
    { name: 'Guest Portal', href: '/guest', current: false },
];

export default function Header() {
    const [showNotifications, setShowNotifications] = useState(false);
    const [showPortalMenu, setShowPortalMenu] = useState(false);
    const [isArabic, setIsArabic] = useState(false);

    const toggleLanguage = () => {
        setIsArabic(!isArabic);
    };

    return (
        <header className="fixed top-0 left-64 right-0 h-16 bg-white/80 backdrop-blur-xl border-b border-border-light z-40">
            <div className="h-full px-6 flex items-center justify-between">
                {/* Search */}
                <div className="flex-1 max-w-xl">
                    <div className="relative group">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <input
                            type="text"
                            placeholder="Search events, vendors, staff..."
                            className="w-full pl-10 pr-4 py-2.5 bg-secondary rounded-xl text-sm border border-transparent focus:border-primary/20 focus:bg-white focus:shadow-sm transition-all outline-none"
                        />
                        <kbd className="absolute right-3 top-1/2 -translate-y-1/2 hidden md:inline-flex items-center gap-0.5 px-2 py-1 text-[10px] font-medium text-muted-foreground bg-white border border-border rounded-md">
                            ⌘K
                        </kbd>
                    </div>
                </div>

                {/* Right side */}
                <div className="flex items-center gap-2">
                    {/* Portal Switcher */}
                    <div className="relative">
                        <button
                            onClick={() => setShowPortalMenu(!showPortalMenu)}
                            className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-secondary transition-colors text-sm font-medium text-primary"
                        >
                            <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center">
                                <User className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <span className="hidden lg:inline">Organizer</span>
                            <ChevronDown className="w-4 h-4 text-muted-foreground" />
                        </button>

                        {showPortalMenu && (
                            <>
                                <div className="fixed inset-0 z-40" onClick={() => setShowPortalMenu(false)} />
                                <div className="absolute right-0 top-12 w-56 bg-white rounded-xl shadow-xl border border-border-light z-50 py-2 animate-scale-in">
                                    <div className="px-3 py-2 border-b border-border-light">
                                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Switch Portal</p>
                                    </div>
                                    {portalSwitcher.map((portal) => (
                                        <a
                                            key={portal.name}
                                            href={portal.href}
                                            className={`flex items-center gap-3 px-3 py-2.5 text-sm hover:bg-secondary transition-colors ${portal.current ? 'text-primary font-medium bg-secondary' : 'text-muted'
                                                }`}
                                        >
                                            <div className={`w-2 h-2 rounded-full ${portal.current ? 'bg-success' : 'bg-border'}`} />
                                            {portal.name}
                                            {!portal.current && <ExternalLink className="w-3 h-3 ml-auto text-muted-foreground" />}
                                        </a>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                    {/* Divider */}
                    <div className="w-px h-8 bg-border mx-1" />

                    {/* Language Toggle */}
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-secondary transition-colors"
                    >
                        <Globe className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium text-muted">
                            {isArabic ? 'عربي' : 'EN'}
                        </span>
                    </button>

                    {/* Notifications */}
                    <div className="relative">
                        <button
                            onClick={() => setShowNotifications(!showNotifications)}
                            className="relative p-2.5 rounded-xl hover:bg-secondary transition-colors"
                        >
                            <Bell className="w-5 h-5 text-muted-foreground" />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-danger rounded-full ring-2 ring-white" />
                        </button>

                        {showNotifications && (
                            <>
                                <div className="fixed inset-0 z-40" onClick={() => setShowNotifications(false)} />
                                <div className="absolute right-0 top-12 w-80 bg-white rounded-xl shadow-xl border border-border-light z-50 animate-scale-in">
                                    <div className="flex items-center justify-between px-4 py-3 border-b border-border-light">
                                        <h3 className="font-semibold text-primary">Notifications</h3>
                                        <button className="text-xs text-accent font-medium hover:underline">Mark all read</button>
                                    </div>
                                    <div className="max-h-80 overflow-y-auto">
                                        {notifications.map((notification) => (
                                            <div
                                                key={notification.id}
                                                className="px-4 py-3 hover:bg-secondary transition-colors border-b border-border-light last:border-0"
                                            >
                                                <div className="flex items-start gap-3">
                                                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${notification.type === 'success' ? 'bg-success' :
                                                            notification.type === 'warning' ? 'bg-warning' : 'bg-info'
                                                        }`} />
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-sm font-medium text-primary">{notification.title}</p>
                                                        <p className="text-xs text-muted-foreground mt-0.5">{notification.message}</p>
                                                        <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="p-3 border-t border-border-light">
                                        <button className="w-full py-2 text-center text-sm font-medium text-primary hover:bg-secondary rounded-lg transition-colors">
                                            View all notifications
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    {/* User Menu */}
                    <button className="flex items-center gap-2 p-1.5 pl-3 rounded-xl hover:bg-secondary transition-colors">
                        <span className="text-sm font-medium text-primary hidden lg:block">Ahmed</span>
                        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold">
                            AM
                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
}
