'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    Shield,
    Truck,
    Users,
    Wallet,
    Building2,
    FileCheck,
    Package,
    Leaf,
    Calendar,
    ChevronDown,
    ChevronRight,
    UserPlus,
    UserCheck,
    AlertTriangle,
    BarChart3,
    Handshake,
    GraduationCap,
    Link2,
    Home,
    Sparkles
} from 'lucide-react';
import { useState } from 'react';

interface NavItem {
    name: string;
    href: string;
    icon: React.ElementType;
    badge?: string;
    children?: { name: string; href: string; icon: React.ElementType }[];
}

const navigation: NavItem[] = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    {
        name: 'Plan & Comply',
        href: '/plan-comply',
        icon: Shield,
        children: [
            { name: 'Regulatory Concierge', href: '/plan-comply', icon: FileCheck },
            { name: 'Venue Marketplace', href: '/plan-comply/venues', icon: Building2 },
            { name: 'Quick-Start Templates', href: '/plan-comply/templates', icon: Sparkles },
        ],
    },
    {
        name: 'Source & Move',
        href: '/source-move',
        icon: Truck,
        children: [
            { name: 'Smart Procurement', href: '/source-move', icon: Package },
            { name: 'Vendor Quotes', href: '/source-move/quotes', icon: FileCheck },
            { name: 'Green Logistics', href: '/source-move/logistics', icon: Leaf },
        ],
    },
    {
        name: 'Staff & Manage',
        href: '/staff-manage',
        icon: Users,
        children: [
            { name: 'Workforce Ops', href: '/staff-manage', icon: Users },
            { name: 'Staff Sourcing', href: '/staff-manage/sourcing', icon: UserPlus },
            { name: 'Shift Calendar', href: '/staff-manage/calendar', icon: Calendar },
        ],
    },
    {
        name: 'Guest Experience',
        href: '/guest-experience',
        icon: UserCheck,
        children: [
            { name: 'Visitor Hub', href: '/guest-experience', icon: UserCheck },
        ],
    },
    {
        name: 'Risk Command',
        href: '/risk-command',
        icon: AlertTriangle,
        badge: 'LIVE',
    },
    { name: 'Supplify Pay', href: '/supplify-pay', icon: Wallet },
    {
        name: 'Growth',
        href: '/growth',
        icon: BarChart3,
        children: [
            { name: 'Analytics & ROI', href: '/growth/analytics', icon: BarChart3 },
            { name: 'Sponsorship Hub', href: '/growth/sponsorship', icon: Handshake },
            { name: 'Supplify Academy', href: '/growth/academy', icon: GraduationCap },
        ],
    },
    {
        name: 'Settings',
        href: '/settings',
        icon: Link2,
        children: [
            { name: 'Supplify Connect', href: '/settings/integrations', icon: Link2 },
            { name: 'Venue Manager', href: '/settings/venue-manager', icon: Home },
        ],
    },
];

export default function Sidebar() {
    const pathname = usePathname();
    const [expandedItems, setExpandedItems] = useState<string[]>(['Plan & Comply', 'Source & Move', 'Staff & Manage', 'Growth']);

    const toggleExpand = (name: string) => {
        setExpandedItems((prev) =>
            prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]
        );
    };

    const isActive = (href: string) => {
        if (href === '/dashboard') return pathname === '/dashboard';
        return pathname.startsWith(href);
    };

    return (
        <aside className="fixed left-0 top-0 h-screen w-64 sidebar text-white flex flex-col z-50">
            {/* Logo */}
            <div className="p-5 border-b border-white/10">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/15 transition-colors">
                        <span className="text-xl font-bold bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent">S</span>
                    </div>
                    <div>
                        <h1 className="text-lg font-bold tracking-tight">Supplify</h1>
                        <p className="text-[10px] uppercase tracking-widest text-white/50">Events OS</p>
                    </div>
                </Link>
            </div>

            {/* Current Event Selector */}
            <div className="p-4">
                <div className="bg-white/5 hover:bg-white/10 rounded-xl p-3.5 cursor-pointer transition-all border border-white/10">
                    <div className="flex items-center gap-2 mb-1.5">
                        <div className="w-1.5 h-1.5 bg-success rounded-full animate-pulse-soft"></div>
                        <span className="text-[10px] uppercase tracking-wider text-white/50 font-medium">Active Event</span>
                    </div>
                    <p className="font-semibold text-sm">Riyadh Tech Expo 2026</p>
                    <p className="text-xs text-success/80 mt-1 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        70 days remaining
                    </p>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 py-2 overflow-y-auto px-3">
                <ul className="space-y-0.5">
                    {navigation.map((item) => (
                        <li key={item.name}>
                            {item.children ? (
                                <div>
                                    <button
                                        onClick={() => toggleExpand(item.name)}
                                        className={`w-full sidebar-item ${isActive(item.href) ? 'active' : ''}`}
                                    >
                                        <item.icon className="icon flex-shrink-0" />
                                        <span className="flex-1 text-left">{item.name}</span>
                                        {expandedItems.includes(item.name) ? (
                                            <ChevronDown className="w-4 h-4 opacity-60" />
                                        ) : (
                                            <ChevronRight className="w-4 h-4 opacity-60" />
                                        )}
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-200 ${expandedItems.includes(item.name) ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                        }`}>
                                        <ul className="mt-1 ml-3 pl-4 border-l border-white/10 space-y-0.5">
                                            {item.children.map((child) => (
                                                <li key={child.name}>
                                                    <Link
                                                        href={child.href}
                                                        className={`sidebar-item py-2 ${pathname === child.href ? 'active text-white' : 'text-white/60'
                                                            }`}
                                                    >
                                                        <child.icon className="w-4 h-4 flex-shrink-0" />
                                                        <span className="text-sm">{child.name}</span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    href={item.href}
                                    className={`sidebar-item ${isActive(item.href) ? 'active' : ''}`}
                                >
                                    <item.icon className="icon flex-shrink-0" />
                                    <span className="flex-1">{item.name}</span>
                                    {item.badge && (
                                        <span className="px-1.5 py-0.5 text-[10px] font-bold bg-danger rounded text-white animate-pulse-soft">
                                            {item.badge}
                                        </span>
                                    )}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* User Profile */}
            <div className="p-4 border-t border-white/10">
                <div className="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-white font-bold text-sm shadow-lg">
                        AM
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">Ahmed M.</p>
                        <p className="text-xs text-white/50 truncate">Event Manager</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-white/40" />
                </div>
            </div>
        </aside>
    );
}
