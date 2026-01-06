'use client';

import { useState, useEffect } from 'react';
import { Clock, MapPin, CheckCircle, Calendar, Wallet, Award, Briefcase, TrendingUp, Play, Square } from 'lucide-react';
import Link from 'next/link';

export default function StaffDashboard() {
    const [isClockedIn, setIsClockedIn] = useState(true);
    const [shiftTimer, setShiftTimer] = useState({ hours: 4, minutes: 32, seconds: 15 });
    const [hoursWorked, setHoursWorked] = useState({ hours: 3, minutes: 27, seconds: 45 });

    // Simulate timer countdown
    useEffect(() => {
        const interval = setInterval(() => {
            setShiftTimer(prev => {
                let { hours, minutes, seconds } = prev;
                if (seconds > 0) {
                    seconds--;
                } else if (minutes > 0) {
                    minutes--;
                    seconds = 59;
                } else if (hours > 0) {
                    hours--;
                    minutes = 59;
                    seconds = 59;
                }
                return { hours, minutes, seconds };
            });

            setHoursWorked(prev => {
                let { hours, minutes, seconds } = prev;
                seconds++;
                if (seconds >= 60) {
                    seconds = 0;
                    minutes++;
                }
                if (minutes >= 60) {
                    minutes = 0;
                    hours++;
                }
                return { hours, minutes, seconds };
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleClockOut = () => {
        setIsClockedIn(false);
    };

    const formatTime = (time: { hours: number; minutes: number; seconds: number }) => {
        return `${time.hours.toString().padStart(2, '0')}:${time.minutes.toString().padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}`;
    };

    const todayEarnings = 285; // SAR

    return (
        <div className="space-y-6">
            {/* Welcome Header */}
            <div>
                <h1 className="text-2xl font-bold text-primary">Good Evening, Faisal 👋</h1>
                <p className="text-muted-foreground mt-1">Here&apos;s your shift overview for today</p>
            </div>

            {/* Active Shift Card */}
            {isClockedIn && (
                <div className="bg-gradient-to-br from-primary via-primary-dark to-primary rounded-2xl p-6 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                                <span className="text-sm font-medium text-white/80">ACTIVE SHIFT</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/70 text-sm">
                                <MapPin className="w-4 h-4" />
                                In Geo-Zone ✓
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Time Remaining */}
                            <div className="text-center">
                                <p className="text-white/60 text-sm mb-2">Time Remaining</p>
                                <p className="text-4xl font-bold font-mono">{formatTime(shiftTimer)}</p>
                                <p className="text-xs text-white/50 mt-1">Ends at 10:00 PM</p>
                            </div>

                            {/* Hours Worked */}
                            <div className="text-center">
                                <p className="text-white/60 text-sm mb-2">Hours Worked Today</p>
                                <p className="text-4xl font-bold font-mono">{formatTime(hoursWorked)}</p>
                                <p className="text-xs text-white/50 mt-1">Started 2:00 PM</p>
                            </div>

                            {/* Today's Earnings */}
                            <div className="text-center">
                                <p className="text-white/60 text-sm mb-2">Today&apos;s Earnings</p>
                                <p className="text-4xl font-bold">SAR {todayEarnings}</p>
                                <p className="text-xs text-white/50 mt-1">@ SAR 75/hr</p>
                            </div>
                        </div>

                        {/* Clock Out Button */}
                        <div className="flex justify-center mt-6">
                            <button
                                onClick={handleClockOut}
                                className="flex items-center gap-2 px-6 py-3 bg-white text-danger rounded-xl font-semibold hover:bg-white/90 transition-colors"
                            >
                                <Square className="w-5 h-5" />
                                Clock Out
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Clock In Card (when not clocked in) */}
            {!isClockedIn && (
                <div className="bg-white rounded-2xl p-6 border border-border">
                    <div className="text-center py-8">
                        <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Clock className="w-10 h-10 text-success" />
                        </div>
                        <h2 className="text-xl font-bold text-primary">Ready to Start Your Shift?</h2>
                        <p className="text-muted-foreground mt-2">Your next shift: Gate A Security at 2:00 PM</p>
                        <button
                            onClick={() => setIsClockedIn(true)}
                            className="mt-4 flex items-center gap-2 px-6 py-3 bg-success text-white rounded-xl font-semibold hover:bg-success/90 transition-colors mx-auto"
                        >
                            <Play className="w-5 h-5" />
                            Clock In
                        </button>
                    </div>
                </div>
            )}

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                            <Calendar className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">This Week</p>
                            <p className="text-xl font-bold text-primary">32 hrs</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-success/10 rounded-xl flex items-center justify-center">
                            <Wallet className="w-5 h-5 text-success" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Week Earnings</p>
                            <p className="text-xl font-bold text-primary">SAR 2,400</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                            <Award className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Reliability Score</p>
                            <p className="text-xl font-bold text-primary">98%</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-warning/10 rounded-xl flex items-center justify-center">
                            <Briefcase className="w-5 h-5 text-warning" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Active Contract</p>
                            <p className="text-xl font-bold text-primary">1 Event</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Upcoming Shifts */}
                <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
                    <div className="p-6 border-b border-border flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-primary">Upcoming Shifts</h2>
                        <Link href="/staff/shifts" className="text-sm text-primary font-medium hover:underline">
                            View All
                        </Link>
                    </div>
                    <div className="divide-y divide-border">
                        {[
                            { date: 'Tomorrow', event: 'Riyadh Tech Expo', time: '10:00 AM - 6:00 PM', location: 'Gate B', rate: 75 },
                            { date: 'Jan 7', event: 'Riyadh Tech Expo', time: '2:00 PM - 10:00 PM', location: 'Gate A', rate: 75 },
                            { date: 'Jan 8', event: 'Riyadh Tech Expo', time: '10:00 AM - 6:00 PM', location: 'VIP Area', rate: 85 },
                        ].map((shift, idx) => (
                            <div key={idx} className="p-4 hover:bg-secondary transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex flex-col items-center justify-center">
                                        <span className="text-xs text-primary font-medium">{shift.date.split(' ')[0]}</span>
                                        <span className="text-sm font-bold text-primary">{shift.date.split(' ')[1] || shift.date}</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-medium text-primary">{shift.event}</h3>
                                        <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {shift.time}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin className="w-3 h-3" />
                                                {shift.location}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold text-primary">SAR {shift.rate}/hr</p>
                                        <p className="text-xs text-muted-foreground">8 hrs</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-4">
                    {/* Job Opportunities */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-success/10 rounded-xl flex items-center justify-center">
                                <Briefcase className="w-5 h-5 text-success" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-primary">Job Opportunities</h3>
                                <p className="text-xs text-muted-foreground">3 new matches</p>
                            </div>
                        </div>
                        <Link href="/staff/jobs" className="block w-full py-2 text-center border border-primary text-primary rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors">
                            Browse Jobs
                        </Link>
                    </div>

                    {/* Pending Courses */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-warning/10 rounded-xl flex items-center justify-center">
                                <Award className="w-5 h-5 text-warning" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-primary">Required Training</h3>
                                <p className="text-xs text-muted-foreground">1 course pending</p>
                            </div>
                        </div>
                        <div className="p-3 bg-warning/10 rounded-xl border border-warning/20 mb-3">
                            <p className="text-sm font-medium text-warning">Event Safety Certification</p>
                            <p className="text-xs text-muted-foreground">Due in 5 days</p>
                        </div>
                        <Link href="/staff/academy" className="block w-full py-2 text-center bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-light transition-colors">
                            Start Course
                        </Link>
                    </div>

                    {/* Earnings Summary */}
                    <div className="bg-gradient-to-br from-success/10 to-success/5 rounded-2xl p-6 border border-success/20">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold text-primary">January Earnings</h3>
                            <TrendingUp className="w-5 h-5 text-success" />
                        </div>
                        <p className="text-3xl font-bold text-primary">SAR 4,800</p>
                        <p className="text-sm text-muted-foreground mt-1">12% higher than December</p>
                        <Link href="/staff/earnings" className="block w-full mt-4 py-2 text-center border border-success text-success rounded-lg text-sm font-medium hover:bg-success hover:text-white transition-colors">
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
