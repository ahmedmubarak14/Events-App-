'use client';

import { useState } from 'react';
import { Handshake, Star, Users, DollarSign, Heart, X, Check, Filter, Building2 } from 'lucide-react';

// Mock sponsorship data
const sponsorshipPackages = [
    { id: 'pkg-001', name: 'Platinum Partner', price: 500000, benefits: ['Main Stage Naming Rights', 'VIP Lounge Access', 'Full Brand Integration', '50 Event Passes'], available: true },
    { id: 'pkg-002', name: 'Gold Sponsor', price: 250000, benefits: ['Exhibition Booth (10x10)', 'Logo on Banners', 'Social Media Features', '25 Event Passes'], available: true },
    { id: 'pkg-003', name: 'Silver Sponsor', price: 100000, benefits: ['Exhibition Booth (5x5)', 'Program Listing', '10 Event Passes'], available: true },
    { id: 'pkg-004', name: 'Bronze Sponsor', price: 50000, benefits: ['Logo on Website', 'Digital Recognition', '5 Event Passes'], available: true },
];

const brands = [
    { id: 'brand-001', name: 'Saudi Telecom Company', industry: 'Telecommunications', matchScore: 94, logo: '📱', interested: true },
    { id: 'brand-002', name: 'Al Marai', industry: 'Food & Beverage', matchScore: 87, logo: '🥛', interested: false },
    { id: 'brand-003', name: 'SABIC', industry: 'Petrochemical', matchScore: 76, logo: '⚗️', interested: true },
    { id: 'brand-004', name: 'Saudi National Bank', industry: 'Finance', matchScore: 91, logo: '💳', interested: false },
    { id: 'brand-005', name: 'Red Bull', industry: 'Beverages', matchScore: 82, logo: '🥤', interested: true },
    { id: 'brand-006', name: 'Toyota Saudi', industry: 'Automotive', matchScore: 79, logo: '🚙', interested: false },
];

export default function SponsorshipPage() {
    const [viewMode, setViewMode] = useState<'grid' | 'swipe'>('grid');
    const [currentBrandIndex, setCurrentBrandIndex] = useState(0);
    const [matches, setMatches] = useState<string[]>([]);

    const handleSwipe = (direction: 'left' | 'right') => {
        if (direction === 'right') {
            setMatches(prev => [...prev, brands[currentBrandIndex].id]);
        }
        if (currentBrandIndex < brands.length - 1) {
            setCurrentBrandIndex(prev => prev + 1);
        }
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-SA', {
            style: 'currency',
            currency: 'SAR',
            minimumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-primary">Sponsorship Hub</h1>
                    <p className="text-muted-foreground mt-1">Connect with brands and manage sponsorship packages</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex bg-secondary rounded-lg p-1">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${viewMode === 'grid' ? 'bg-white text-primary shadow-sm' : 'text-muted-foreground'
                                }`}
                        >
                            Grid View
                        </button>
                        <button
                            onClick={() => setViewMode('swipe')}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${viewMode === 'swipe' ? 'bg-white text-primary shadow-sm' : 'text-muted-foreground'
                                }`}
                        >
                            Match Mode
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                            <DollarSign className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Revenue Target</p>
                            <p className="text-xl font-bold text-primary">SAR 1.5M</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-success/10 rounded-xl flex items-center justify-center">
                            <Handshake className="w-5 h-5 text-success" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Confirmed Sponsors</p>
                            <p className="text-xl font-bold text-primary">3</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                            <Heart className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Matches</p>
                            <p className="text-xl font-bold text-primary">{matches.length}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-warning/10 rounded-xl flex items-center justify-center">
                            <Building2 className="w-5 h-5 text-warning" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Pending Outreach</p>
                            <p className="text-xl font-bold text-primary">12</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Your Sponsorship Packages */}
            <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
                <div className="p-6 border-b border-border">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-primary">Your Sponsorship Packages</h2>
                        <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-light transition-colors">
                            + Add Package
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
                    {sponsorshipPackages.map((pkg) => (
                        <div key={pkg.id} className="p-6 hover:bg-secondary transition-colors">
                            <div className="text-center">
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${pkg.name.includes('Platinum') ? 'bg-primary/10 text-primary' :
                                        pkg.name.includes('Gold') ? 'bg-amber-100 text-amber-700' :
                                            pkg.name.includes('Silver') ? 'bg-gray-100 text-gray-700' :
                                                'bg-orange-100 text-orange-700'
                                    }`}>
                                    {pkg.name}
                                </span>
                                <p className="text-2xl font-bold text-primary">{formatCurrency(pkg.price)}</p>
                                <ul className="mt-4 space-y-2 text-sm text-muted-foreground text-left">
                                    {pkg.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-center gap-2">
                                            <Check className="w-4 h-4 text-success" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full mt-4 px-4 py-2 border border-primary text-primary rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors">
                                    Edit Package
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Brand Matching Section */}
            {viewMode === 'swipe' ? (
                /* Swipe Mode */
                <div className="bg-white rounded-2xl shadow-sm border border-border p-6">
                    <h2 className="text-lg font-semibold text-primary mb-6 text-center">Brand Match Mode</h2>

                    {currentBrandIndex < brands.length ? (
                        <div className="max-w-md mx-auto">
                            <div className="bg-gradient-to-br from-secondary to-white rounded-2xl p-8 text-center relative">
                                {/* Match Score */}
                                <div className="absolute top-4 right-4 bg-success/10 px-3 py-1 rounded-full">
                                    <span className="text-sm font-medium text-success">{brands[currentBrandIndex].matchScore}% Match</span>
                                </div>

                                <div className="text-6xl mb-4">{brands[currentBrandIndex].logo}</div>
                                <h3 className="text-xl font-bold text-primary">{brands[currentBrandIndex].name}</h3>
                                <p className="text-muted-foreground">{brands[currentBrandIndex].industry}</p>

                                {/* Match Score Bar */}
                                <div className="mt-6">
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-muted-foreground">Audience Alignment</span>
                                        <span className="font-medium text-primary">{brands[currentBrandIndex].matchScore}%</span>
                                    </div>
                                    <div className="w-full bg-secondary rounded-full h-3">
                                        <div
                                            className="h-3 rounded-full bg-gradient-to-r from-primary to-success transition-all"
                                            style={{ width: `${brands[currentBrandIndex].matchScore}%` }}
                                        ></div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex justify-center gap-6 mt-8">
                                    <button
                                        onClick={() => handleSwipe('left')}
                                        className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-500 hover:bg-red-200 transition-colors"
                                    >
                                        <X className="w-8 h-8" />
                                    </button>
                                    <button
                                        onClick={() => handleSwipe('right')}
                                        className="w-16 h-16 bg-success rounded-full flex items-center justify-center text-white hover:bg-success/90 transition-colors"
                                    >
                                        <Heart className="w-8 h-8" />
                                    </button>
                                </div>
                            </div>

                            <p className="text-center text-sm text-muted-foreground mt-4">
                                {brands.length - currentBrandIndex - 1} brands remaining
                            </p>
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <div className="text-6xl mb-4">🎉</div>
                            <h3 className="text-xl font-bold text-primary">All caught up!</h3>
                            <p className="text-muted-foreground mt-2">You&apos;ve reviewed all available brands. Check your matches!</p>
                            <button
                                onClick={() => setCurrentBrandIndex(0)}
                                className="mt-4 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium"
                            >
                                Start Over
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                /* Grid Mode */
                <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
                    <div className="p-6 border-b border-border">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-primary">Potential Brand Partners</h2>
                            <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm hover:bg-secondary transition-colors">
                                <Filter className="w-4 h-4" />
                                Filter
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                        {brands.map((brand) => (
                            <div key={brand.id} className="border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-md transition-all">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center text-2xl">
                                        {brand.logo}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-primary">{brand.name}</h3>
                                        <p className="text-sm text-muted-foreground">{brand.industry}</p>
                                    </div>
                                </div>

                                {/* Match Score */}
                                <div className="mb-4">
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-muted-foreground">Match Score</span>
                                        <span className={`font-medium ${brand.matchScore >= 85 ? 'text-success' : 'text-primary'}`}>
                                            {brand.matchScore}%
                                        </span>
                                    </div>
                                    <div className="w-full bg-secondary rounded-full h-2">
                                        <div
                                            className={`h-2 rounded-full ${brand.matchScore >= 85 ? 'bg-success' : 'bg-primary'}`}
                                            style={{ width: `${brand.matchScore}%` }}
                                        ></div>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <button className="flex-1 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-light transition-colors">
                                        Reach Out
                                    </button>
                                    <button className="px-4 py-2 border border-border rounded-lg text-sm hover:bg-secondary transition-colors">
                                        <Star className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
