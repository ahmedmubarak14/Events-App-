'use client';

import { CreditCard, Download, QrCode, CheckCircle, Calendar, MapPin, Clock, Smartphone } from 'lucide-react';

export default function GuestBadgePage() {
    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-primary">Event Badge</h1>
                    <p className="text-muted-foreground mt-1">Your digital access pass for Riyadh Tech Expo 2026</p>
                </div>
                <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-light transition-colors flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Add to Wallet
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Digital Badge */}
                <div className="bg-gradient-to-br from-primary via-primary-dark to-primary rounded-3xl p-8 text-white relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                                    <span className="text-xl font-bold text-primary">S</span>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="px-3 py-1 bg-accent rounded-full text-sm font-semibold">VIP DELEGATE</span>
                            </div>
                        </div>

                        {/* Event Info */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold">Riyadh Tech Expo 2026</h2>
                            <p className="text-white/70 mt-1">March 14-16, 2026 • Riyadh Front</p>
                        </div>

                        {/* Attendee Info */}
                        <div className="flex items-center gap-6 mb-8">
                            <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center">
                                <span className="text-4xl font-bold text-primary">EM</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">Emma Wilson</h3>
                                <p className="text-white/80 text-lg">Managing Partner</p>
                                <p className="text-white/60">Tech Ventures UK</p>
                            </div>
                        </div>

                        {/* QR Code */}
                        <div className="flex items-center gap-6 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                            <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center">
                                <QrCode className="w-16 h-16 text-primary" />
                            </div>
                            <div>
                                <p className="font-semibold">Scan for Entry</p>
                                <p className="text-sm text-white/70">Badge ID: RTE2026-VIP-001247</p>
                                <p className="text-xs text-white/50 mt-2">Valid for all 3 event days</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Badge Details */}
                <div className="space-y-4">
                    {/* Access Level */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
                        <h3 className="font-semibold text-primary mb-4">Your Access Includes</h3>
                        <div className="space-y-3">
                            {[
                                { name: 'All Exhibition Halls', icon: '🏛️', included: true },
                                { name: 'Main Stage Sessions', icon: '🎤', included: true },
                                { name: 'VIP Lounge Access', icon: '⭐', included: true },
                                { name: 'Networking Events', icon: '🤝', included: true },
                                { name: 'Speaker Meet & Greet', icon: '👋', included: true },
                                { name: 'Welcome Reception', icon: '🥂', included: true },
                                { name: 'Gala Dinner (Day 2)', icon: '🍽️', included: true },
                                { name: 'Startup Pitch Sessions', icon: '🚀', included: true },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-2">
                                    <span className="text-xl">{item.icon}</span>
                                    <span className="flex-1 text-sm text-primary">{item.name}</span>
                                    {item.included && (
                                        <CheckCircle className="w-5 h-5 text-success" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Event Schedule */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
                        <h3 className="font-semibold text-primary mb-4">Event Schedule</h3>
                        <div className="space-y-4">
                            {[
                                { day: 'Day 1', date: 'Mar 14', time: '09:00 - 18:00', highlight: 'Opening Ceremony' },
                                { day: 'Day 2', date: 'Mar 15', time: '09:00 - 22:00', highlight: 'Gala Dinner' },
                                { day: 'Day 3', date: 'Mar 16', time: '09:00 - 17:00', highlight: 'Closing Ceremony' },
                            ].map((day, idx) => (
                                <div key={idx} className="flex items-center gap-4 p-3 bg-secondary rounded-xl">
                                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex flex-col items-center justify-center">
                                        <span className="text-xs text-muted-foreground">{day.day}</span>
                                        <span className="text-sm font-bold text-primary">{day.date.split(' ')[1]}</span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-medium text-primary">{day.day}</p>
                                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {day.time}
                                        </p>
                                    </div>
                                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">
                                        {day.highlight}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Pass */}
                    <div className="bg-gradient-to-r from-secondary to-white rounded-2xl p-6 border border-border">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                                <Smartphone className="w-7 h-7 text-primary" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-primary">Add to Mobile Wallet</h3>
                                <p className="text-sm text-muted-foreground">Quick access from your phone</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="px-4 py-2 bg-black text-white rounded-lg text-sm flex items-center gap-2">
                                    <span>Apple</span>
                                </button>
                                <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm flex items-center gap-2">
                                    <span>Google</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
