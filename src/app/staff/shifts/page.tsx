'use client';

import { Calendar, MapPin, Clock, DollarSign, ChevronLeft, ChevronRight, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';

// Mock shifts data
const shifts = [
    {
        id: 1,
        event: 'Riyadh Tech Expo 2026',
        role: 'Security Guard',
        location: 'Gate A, Main Entrance',
        date: '2026-03-14',
        startTime: '08:00',
        endTime: '16:00',
        hours: 8,
        rate: 65,
        status: 'confirmed',
    },
    {
        id: 2,
        event: 'Riyadh Tech Expo 2026',
        role: 'Security Guard',
        location: 'VIP Lounge',
        date: '2026-03-15',
        startTime: '10:00',
        endTime: '18:00',
        hours: 8,
        rate: 65,
        status: 'confirmed',
    },
    {
        id: 3,
        event: 'Riyadh Tech Expo 2026',
        role: 'Security Supervisor',
        location: 'Main Hall',
        date: '2026-03-16',
        startTime: '07:00',
        endTime: '19:00',
        hours: 12,
        rate: 85,
        status: 'pending',
    },
    {
        id: 4,
        event: 'Saudi Cup 2026',
        role: 'Crowd Control',
        location: 'North Stand',
        date: '2026-02-25',
        startTime: '12:00',
        endTime: '22:00',
        hours: 10,
        rate: 70,
        status: 'confirmed',
    },
];

export default function StaffShiftsPage() {
    const [currentMonth, setCurrentMonth] = useState(new Date(2026, 2, 1)); // March 2026

    const getDaysInMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const monthName = currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' });

    const shiftDates = shifts.map(s => new Date(s.date).getDate());

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-primary">My Shifts</h1>
                    <p className="text-muted-foreground mt-1">View and manage your upcoming shifts</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Calendar */}
                <div className="lg:col-span-2 card p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="font-semibold text-primary">{monthName}</h2>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))}
                                className="p-2 rounded-lg hover:bg-secondary transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))}
                                className="p-2 rounded-lg hover:bg-secondary transition-colors"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-7 gap-1">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                            <div key={day} className="text-center text-xs font-medium text-muted-foreground py-2">
                                {day}
                            </div>
                        ))}
                        {Array.from({ length: firstDay }).map((_, i) => (
                            <div key={`empty-${i}`} className="aspect-square"></div>
                        ))}
                        {Array.from({ length: daysInMonth }).map((_, i) => {
                            const day = i + 1;
                            const hasShift = shiftDates.includes(day);
                            return (
                                <div
                                    key={day}
                                    className={`aspect-square p-1 rounded-xl flex flex-col items-center justify-center text-sm transition-colors ${hasShift
                                            ? 'bg-primary text-white cursor-pointer hover:bg-primary-light'
                                            : 'hover:bg-secondary'
                                        }`}
                                >
                                    <span className="font-medium">{day}</span>
                                    {hasShift && <div className="w-1 h-1 bg-white rounded-full mt-0.5"></div>}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Stats Summary */}
                <div className="space-y-4">
                    <div className="card p-5">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                                <Calendar className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-primary">{shifts.length}</p>
                                <p className="text-sm text-muted-foreground">Upcoming Shifts</p>
                            </div>
                        </div>
                    </div>

                    <div className="card p-5">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-success/10 rounded-xl flex items-center justify-center">
                                <Clock className="w-5 h-5 text-success" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-primary">{shifts.reduce((sum, s) => sum + s.hours, 0)}h</p>
                                <p className="text-sm text-muted-foreground">Total Hours</p>
                            </div>
                        </div>
                    </div>

                    <div className="card p-5">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                                <DollarSign className="w-5 h-5 text-accent" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-primary">
                                    SAR {shifts.reduce((sum, s) => sum + (s.hours * s.rate), 0).toLocaleString()}
                                </p>
                                <p className="text-sm text-muted-foreground">Estimated Earnings</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shifts List */}
            <div className="card">
                <div className="p-5 border-b border-border-light">
                    <h3 className="font-semibold text-primary">Upcoming Shifts</h3>
                </div>
                <div className="divide-y divide-border-light">
                    {shifts.map((shift) => (
                        <div key={shift.id} className="p-5 hover:bg-secondary-light transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex flex-col items-center justify-center">
                                    <span className="text-xs text-muted-foreground">{new Date(shift.date).toLocaleString('default', { month: 'short' })}</span>
                                    <span className="text-lg font-bold text-primary">{new Date(shift.date).getDate()}</span>
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                        <h4 className="font-semibold text-primary">{shift.event}</h4>
                                        <span className={`badge ${shift.status === 'confirmed' ? 'badge-success' : 'badge-warning'}`}>
                                            {shift.status === 'confirmed' ? <CheckCircle className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                                            {shift.status.charAt(0).toUpperCase() + shift.status.slice(1)}
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">{shift.role}</p>
                                    <div className="flex items-center gap-4 mt-2 text-sm text-muted">
                                        <span className="flex items-center gap-1">
                                            <MapPin className="w-3 h-3" />
                                            {shift.location}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {shift.startTime} - {shift.endTime}
                                        </span>
                                    </div>
                                </div>

                                <div className="text-right">
                                    <p className="text-lg font-bold text-primary">SAR {(shift.hours * shift.rate).toLocaleString()}</p>
                                    <p className="text-sm text-muted-foreground">{shift.hours}h × SAR {shift.rate}/h</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
