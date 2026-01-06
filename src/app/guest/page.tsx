'use client';

import { Plane, Hotel, Bus, CreditCard, Calendar, CheckCircle, Clock, MapPin, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const tripStatus = {
    visa: { status: 'approved', date: '2025-12-28' },
    flight: { status: 'confirmed', departure: 'Mar 13, 08:45', arrival: 'Mar 13, 14:30' },
    hotel: { status: 'confirmed', name: 'Four Seasons Riyadh', checkIn: 'Mar 13', checkOut: 'Mar 17' },
    shuttle: { status: 'scheduled', pickup: 'Mar 13, 15:00' },
    badge: { status: 'ready', type: 'VIP Delegate' },
};

const upcomingAgenda = [
    { time: '09:00', title: 'Opening Ceremony', location: 'Main Hall A', type: 'ceremony' },
    { time: '10:30', title: 'Keynote: Future of AI', location: 'Stage 1', type: 'keynote' },
    { time: '12:00', title: 'Networking Lunch', location: 'VIP Lounge', type: 'networking' },
    { time: '14:00', title: 'Panel: Web3 in Saudi', location: 'Stage 2', type: 'panel' },
];

export default function GuestDashboard() {
    return (
        <div className="space-y-6">
            {/* Welcome Header */}
            <div>
                <h1 className="text-2xl font-bold text-primary">Welcome, Emma! 👋</h1>
                <p className="text-muted-foreground mt-1">Your trip to Riyadh Tech Expo 2026 is all set</p>
            </div>

            {/* Trip Countdown */}
            <div className="bg-gradient-to-br from-primary via-primary-dark to-primary rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/20 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-2xl">🇸🇦</span>
                        <span className="text-white/70">Your trip to Saudi Arabia</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                        <div>
                            <p className="text-5xl font-bold">68</p>
                            <p className="text-white/70 text-sm mt-1">Days to Go</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold">5</p>
                            <p className="text-white/70 text-sm mt-1">Nights</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold">12</p>
                            <p className="text-white/70 text-sm mt-1">Sessions Booked</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold">8</p>
                            <p className="text-white/70 text-sm mt-1">Meetings Scheduled</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trip Status Cards */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {/* Visa */}
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-success/10 rounded-xl flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-success" />
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">Visa Status</p>
                            <p className="text-sm font-semibold text-success">Approved</p>
                        </div>
                    </div>
                </div>

                {/* Flight */}
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                            <Plane className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">Flight</p>
                            <p className="text-sm font-semibold text-primary">Confirmed</p>
                        </div>
                    </div>
                </div>

                {/* Hotel */}
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                            <Hotel className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">Hotel</p>
                            <p className="text-sm font-semibold text-primary">Confirmed</p>
                        </div>
                    </div>
                </div>

                {/* Shuttle */}
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                            <Bus className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">Shuttle</p>
                            <p className="text-sm font-semibold text-primary">Scheduled</p>
                        </div>
                    </div>
                </div>

                {/* Badge */}
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                            <CreditCard className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">Badge</p>
                            <p className="text-sm font-semibold text-accent">Ready</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Travel Summary */}
                <div className="lg:col-span-2 space-y-4">
                    {/* Flight Card */}
                    <Link href="/guest/travel" className="block bg-white rounded-2xl p-6 shadow-sm border border-border hover:border-primary/30 transition-colors">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold text-primary flex items-center gap-2">
                                <Plane className="w-5 h-5" />
                                Outbound Flight
                            </h3>
                            <ChevronRight className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-center">
                                <p className="text-2xl font-bold text-primary">LHR</p>
                                <p className="text-sm text-muted-foreground">London</p>
                                <p className="text-sm font-medium text-primary mt-1">08:45</p>
                            </div>
                            <div className="flex-1 px-6">
                                <div className="relative">
                                    <div className="h-0.5 bg-secondary"></div>
                                    <Plane className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 text-primary rotate-90" />
                                </div>
                                <p className="text-xs text-muted-foreground text-center mt-2">5h 45m • Direct</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl font-bold text-primary">RUH</p>
                                <p className="text-sm text-muted-foreground">Riyadh</p>
                                <p className="text-sm font-medium text-primary mt-1">14:30</p>
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Mar 13, 2026 • Saudi Airlines SV104</span>
                            <span className="px-2 py-0.5 bg-success/10 text-success text-xs font-medium rounded-full">Confirmed</span>
                        </div>
                    </Link>

                    {/* Hotel Card */}
                    <Link href="/guest/hotel" className="block bg-white rounded-2xl p-6 shadow-sm border border-border hover:border-primary/30 transition-colors">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold text-primary flex items-center gap-2">
                                <Hotel className="w-5 h-5" />
                                Hotel Accommodation
                            </h3>
                            <ChevronRight className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-24 h-24 bg-secondary rounded-xl flex items-center justify-center text-4xl">
                                🏨
                            </div>
                            <div className="flex-1">
                                <h4 className="font-semibold text-primary text-lg">Four Seasons Riyadh</h4>
                                <p className="text-sm text-muted-foreground">Kingdom Tower, Al Olaya</p>
                                <div className="flex items-center gap-4 mt-2 text-sm">
                                    <span className="flex items-center gap-1 text-muted-foreground">
                                        <Calendar className="w-3 h-3" />
                                        Mar 13 - 17
                                    </span>
                                    <span className="flex items-center gap-1 text-muted-foreground">
                                        <Clock className="w-3 h-3" />
                                        4 nights
                                    </span>
                                </div>
                                <div className="mt-2">
                                    <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs font-medium rounded-full">
                                        Deluxe King Suite • Room 2401
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Quick Links & Agenda */}
                <div className="space-y-4">
                    {/* Event Badge Preview */}
                    <Link href="/guest/badge" className="block bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-6 border border-accent/20">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold text-primary">Your Event Badge</h3>
                            <span className="px-2 py-0.5 bg-accent text-white text-xs font-medium rounded-full">VIP</span>
                        </div>
                        <div className="bg-white rounded-xl p-4 text-center">
                            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-2xl font-bold text-accent">EM</span>
                            </div>
                            <p className="font-semibold text-primary">Emma Wilson</p>
                            <p className="text-sm text-muted-foreground">Tech Ventures UK</p>
                            <p className="text-xs text-accent mt-2">VIP Delegate</p>
                        </div>
                        <p className="text-xs text-center text-muted-foreground mt-3">
                            Tap to view QR code for entry
                        </p>
                    </Link>

                    {/* Day 1 Agenda */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold text-primary">Day 1 Agenda</h3>
                            <Link href="/guest/agenda" className="text-sm text-primary hover:underline">View All</Link>
                        </div>
                        <div className="space-y-3">
                            {upcomingAgenda.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-2 hover:bg-secondary rounded-lg transition-colors">
                                    <div className="w-12 text-center">
                                        <p className="text-xs font-medium text-primary">{item.time}</p>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-primary">{item.title}</p>
                                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                                            <MapPin className="w-3 h-3" />
                                            {item.location}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
