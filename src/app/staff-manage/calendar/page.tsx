'use client';

import { ChevronLeft, ChevronRight, Calendar, Users, Clock } from 'lucide-react';
import { useState } from 'react';

export default function CalendarPage() {
    const [currentDate, setCurrentDate] = useState(new Date(2026, 0, 4)); // Jan 4, 2026

    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const blanks = Array.from({ length: firstDayOfMonth }, (_, i) => i);

    // Sample shift data
    const shiftData: Record<number, { morning: number; day: number; evening: number }> = {
        5: { morning: 4, day: 6, evening: 5 },
        6: { morning: 5, day: 7, evening: 6 },
        7: { morning: 4, day: 5, evening: 4 },
        8: { morning: 6, day: 8, evening: 7 },
        9: { morning: 5, day: 6, evening: 5 },
        10: { morning: 8, day: 10, evening: 8 },
        11: { morning: 4, day: 5, evening: 4 },
        12: { morning: 5, day: 6, evening: 5 },
        15: { morning: 10, day: 15, evening: 12 },
    };

    const navigateMonth = (direction: 'prev' | 'next') => {
        setCurrentDate((prev) => {
            const newDate = new Date(prev);
            if (direction === 'prev') {
                newDate.setMonth(prev.getMonth() - 1);
            } else {
                newDate.setMonth(prev.getMonth() + 1);
            }
            return newDate;
        });
    };

    const monthName = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-primary">Shift Calendar</h1>
                    <p className="text-muted-foreground mt-1">Manage and view staff shift schedules</p>
                </div>
                <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-light transition-colors flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Create Shift
                </button>
            </div>

            {/* Calendar Navigation */}
            <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
                <div className="p-6 border-b border-border">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={() => navigateMonth('prev')}
                            className="p-2 hover:bg-secondary rounded-lg transition-colors"
                        >
                            <ChevronLeft className="w-5 h-5 text-muted-foreground" />
                        </button>
                        <h2 className="text-xl font-semibold text-primary">{monthName}</h2>
                        <button
                            onClick={() => navigateMonth('next')}
                            className="p-2 hover:bg-secondary rounded-lg transition-colors"
                        >
                            <ChevronRight className="w-5 h-5 text-muted-foreground" />
                        </button>
                    </div>
                </div>

                {/* Calendar Grid */}
                <div className="p-4">
                    {/* Day Headers */}
                    <div className="grid grid-cols-7 gap-2 mb-2">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                            <div key={day} className="text-center text-sm font-medium text-muted-foreground py-2">
                                {day}
                            </div>
                        ))}
                    </div>

                    {/* Calendar Days */}
                    <div className="grid grid-cols-7 gap-2">
                        {blanks.map((blank) => (
                            <div key={`blank-${blank}`} className="aspect-square"></div>
                        ))}
                        {days.map((day) => {
                            const shifts = shiftData[day];
                            const isToday = day === 4;
                            const hasEvent = day === 10 || day === 15;

                            return (
                                <div
                                    key={day}
                                    className={`aspect-square p-2 rounded-xl border transition-all cursor-pointer hover:shadow-md ${isToday
                                            ? 'bg-primary text-white border-primary'
                                            : hasEvent
                                                ? 'bg-accent/10 border-accent/30'
                                                : 'bg-white border-border hover:border-primary/30'
                                        }`}
                                >
                                    <div className="h-full flex flex-col">
                                        <span className={`text-sm font-medium ${isToday ? 'text-white' : 'text-primary'}`}>
                                            {day}
                                        </span>
                                        {shifts && (
                                            <div className="flex-1 mt-1 space-y-1">
                                                <div className="flex items-center gap-1">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-success"></div>
                                                    <span className={`text-xs ${isToday ? 'text-white/80' : 'text-muted-foreground'}`}>
                                                        {shifts.morning + shifts.day + shifts.evening}
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                        {hasEvent && (
                                            <div className="mt-auto">
                                                <span className="text-xs font-medium text-accent">
                                                    {day === 10 ? 'Inspection' : 'Event'}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-6 px-2">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <span className="text-sm text-muted-foreground">Today</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-success"></div>
                    <span className="text-sm text-muted-foreground">Staff Scheduled</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-accent"></div>
                    <span className="text-sm text-muted-foreground">Event/Milestone</span>
                </div>
            </div>

            {/* Upcoming Shifts */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
                <h2 className="text-lg font-semibold text-primary mb-4">Upcoming Shifts</h2>
                <div className="space-y-3">
                    {[5, 6, 7].map((day) => (
                        <div key={day} className="flex items-center gap-4 p-3 bg-secondary rounded-xl">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex flex-col items-center justify-center">
                                <span className="text-xs text-primary font-medium">Jan</span>
                                <span className="text-lg font-bold text-primary">{day}</span>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-4 text-sm">
                                    <span className="flex items-center gap-1 text-muted-foreground">
                                        <Clock className="w-3 h-3" />
                                        3 shifts
                                    </span>
                                    <span className="flex items-center gap-1 text-muted-foreground">
                                        <Users className="w-3 h-3" />
                                        {shiftData[day]?.morning + shiftData[day]?.day + shiftData[day]?.evening || 15} staff
                                    </span>
                                </div>
                            </div>
                            <button className="px-3 py-1.5 text-sm text-primary font-medium hover:bg-primary/10 rounded-lg transition-colors">
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
