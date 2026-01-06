'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Eye, EyeOff, ArrowRight, ChevronDown, User, Building2, UserCheck, Users } from 'lucide-react';

const demoAccounts = [
    {
        type: 'organizer',
        name: 'Ahmed Al-Rashid',
        email: 'ahmed@supplify.sa',
        password: 'demo123',
        role: 'Event Manager',
        icon: User,
        color: 'primary',
        redirect: '/dashboard',
        description: 'Full access to event management, vendors, staff, and analytics',
    },
    {
        type: 'staff',
        name: 'Faisal Al-Harthi',
        email: 'faisal@supplify.sa',
        password: 'demo123',
        role: 'Security Guard',
        icon: Users,
        color: 'success',
        redirect: '/staff',
        description: 'Clock in/out, view shifts, earnings, and job opportunities',
    },
    {
        type: 'vendor',
        name: 'Saudi Sound Systems',
        email: 'info@saudisound.sa',
        password: 'demo123',
        role: 'Audio Equipment Vendor',
        icon: Building2,
        color: 'accent',
        redirect: '/vendor',
        description: 'Manage RFQs, submit quotes, track orders and payments',
    },
    {
        type: 'guest',
        name: 'Emma Wilson',
        email: 'emma@techventures.uk',
        password: 'demo123',
        role: 'VIP Delegate',
        icon: UserCheck,
        color: 'warning',
        redirect: '/guest',
        description: 'View trip details, event badge, hotel, and agenda',
    },
];

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showDemoAccounts, setShowDemoAccounts] = useState(true);
    const [selectedDemo, setSelectedDemo] = useState<string | null>(null);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Find matching demo account
        const account = demoAccounts.find(a => a.email === email);

        setTimeout(() => {
            if (account) {
                router.push(account.redirect);
            } else {
                router.push('/dashboard'); // Default to organizer
            }
        }, 1000);
    };

    const handleDemoLogin = (account: typeof demoAccounts[0]) => {
        setEmail(account.email);
        setPassword(account.password);
        setSelectedDemo(account.type);
        setIsLoading(true);

        setTimeout(() => {
            router.push(account.redirect);
        }, 800);
    };

    return (
        <div className="min-h-screen bg-secondary-light flex">
            {/* Left Panel - Branding */}
            <div className="hidden lg:flex lg:w-1/2 gradient-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

                <div className="relative z-10 flex flex-col justify-between p-12 text-white">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                            <span className="text-2xl font-bold">S</span>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">Supplify</h1>
                            <p className="text-xs text-white/60 uppercase tracking-wider">Events OS</p>
                        </div>
                    </div>

                    {/* Hero Content */}
                    <div>
                        <h2 className="text-4xl font-bold leading-tight mb-4">
                            The National Events<br />Operating System
                        </h2>
                        <p className="text-white/70 text-lg max-w-md">
                            One platform to plan, source, manage, and execute world-class events aligned with Vision 2030.
                        </p>

                        <div className="mt-8 grid grid-cols-2 gap-4">
                            {[
                                { label: 'Events Managed', value: '500+' },
                                { label: 'Vendors Connected', value: '2,000+' },
                                { label: 'Staff Deployed', value: '50,000+' },
                                { label: 'Cost Savings', value: '25%' },
                            ].map((stat, idx) => (
                                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                                    <p className="text-2xl font-bold">{stat.value}</p>
                                    <p className="text-sm text-white/60">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Footer */}
                    <p className="text-white/40 text-sm">
                        © 2026 Supplify. Powering Saudi Arabia&apos;s Event Industry.
                    </p>
                </div>
            </div>

            {/* Right Panel - Login Form */}
            <div className="flex-1 flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                    {/* Mobile Logo */}
                    <div className="lg:hidden flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                            <span className="text-xl font-bold text-white">S</span>
                        </div>
                        <div>
                            <h1 className="text-lg font-bold text-primary">Supplify</h1>
                            <p className="text-xs text-muted-foreground">Events OS</p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-primary">Welcome back</h2>
                        <p className="text-muted-foreground mt-2">Sign in to access your portal</p>
                    </div>

                    {/* Demo Accounts Selector */}
                    <div className="mb-6">
                        <button
                            onClick={() => setShowDemoAccounts(!showDemoAccounts)}
                            className="w-full flex items-center justify-between p-4 bg-accent/5 border border-accent/20 rounded-xl text-left hover:bg-accent/10 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center">
                                    <span className="text-lg">🎯</span>
                                </div>
                                <div>
                                    <p className="font-medium text-primary">Demo Accounts</p>
                                    <p className="text-sm text-muted-foreground">Quick access to explore each portal</p>
                                </div>
                            </div>
                            <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${showDemoAccounts ? 'rotate-180' : ''}`} />
                        </button>

                        {showDemoAccounts && (
                            <div className="mt-3 space-y-2 animate-fade-in">
                                {demoAccounts.map((account) => {
                                    const IconComponent = account.icon;
                                    return (
                                        <button
                                            key={account.type}
                                            onClick={() => handleDemoLogin(account)}
                                            disabled={isLoading}
                                            className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all text-left ${selectedDemo === account.type
                                                    ? `border-${account.color} bg-${account.color}/5`
                                                    : 'border-border hover:border-primary/30 hover:bg-secondary'
                                                } ${isLoading && selectedDemo === account.type ? 'opacity-70' : ''}`}
                                        >
                                            <div className={`w-12 h-12 rounded-xl bg-${account.color}/10 flex items-center justify-center`}>
                                                <IconComponent className={`w-6 h-6 text-${account.color}`} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="font-medium text-primary">{account.name}</p>
                                                <p className="text-sm text-muted-foreground">{account.role}</p>
                                                <p className="text-xs text-muted-foreground mt-1 truncate">{account.description}</p>
                                            </div>
                                            {isLoading && selectedDemo === account.type ? (
                                                <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                                            ) : (
                                                <ArrowRight className="w-5 h-5 text-muted-foreground" />
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-4 my-6">
                        <div className="flex-1 h-px bg-border"></div>
                        <span className="text-sm text-muted-foreground">or sign in manually</span>
                        <div className="flex-1 h-px bg-border"></div>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-primary mb-2">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="input"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-primary mb-2">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    className="input pr-12"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 rounded border-border accent-primary" />
                                <span className="text-sm text-muted-foreground">Remember me</span>
                            </label>
                            <Link href="#" className="text-sm text-accent hover:underline">
                                Forgot password?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full btn btn-primary py-3 mt-2"
                        >
                            {isLoading ? (
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                                <>
                                    Sign In
                                    <ArrowRight className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Back to Home */}
                    <p className="text-center text-sm text-muted-foreground mt-8">
                        Don&apos;t have an account?{' '}
                        <Link href="/" className="text-primary font-medium hover:underline">
                            Back to Home
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
