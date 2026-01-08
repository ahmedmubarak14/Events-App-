'use client';

import { useState } from 'react';
import { Calendar, Clock, Check, X, ChevronLeft, ChevronRight, Sun, Moon, Coffee } from 'lucide-react';

// Generate days for the calendar
const generateDays = (year: number, month: number) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    return { daysInMonth, firstDay };
};

const timeSlots = [
    { id: 'morning', label: 'Morning', time: '06:00 - 12:00', icon: Sun },
    { id: 'afternoon', label: 'Afternoon', time: '12:00 - 18:00', icon: Coffee },
    { id: 'evening', label: 'Evening', time: '18:00 - 00:00', icon: Moon },
];

export default function StaffAvailabilityPage() {
    const [currentMonth, setCurrentMonth] = useState(new Date(2026, 2, 1)); // March 2026
    const [selectedDates, setSelectedDates] = useState<{ [key: string]: string[] }>({
        '2026-03-14': ['morning', 'afternoon', 'evening'],
        '2026-03-15': ['morning', 'afternoon', 'evening'],
        '2026-03-16': ['morning', 'afternoon'],
        '2026-03-17': ['afternoon', 'evening'],
        '2026-03-20': ['morning', 'afternoon', 'evening'],
        '2026-03-21': ['morning', 'afternoon', 'evening'],
    });
    const [selectedDay, setSelectedDay] = useState<string | null>('2026-03-14');
    const [showSaved, setShowSaved] = useState(false);

    const { daysInMonth, firstDay } = generateDays(currentMonth.getFullYear(), currentMonth.getMonth());
    const monthName = currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' });

    const toggleSlot = (slot: string) => {
        if (!selectedDay) return;

        setSelectedDates(prev => {
            const daySlots = prev[selectedDay] || [];
            if (daySlots.includes(slot)) {
                return { ...prev, [selectedDay]: daySlots.filter(s => s !== slot) };
            } else {
                return { ...prev, [selectedDay]: [...daySlots, slot] };
            }
        });
    };

    const handleSave = () => {
        setShowSaved(true);
        setTimeout(() => setShowSaved(false), 2000);
    };

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
    };

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-primary">Availability</h1>
                    <p className="text-muted-foreground mt-1">Set your available hours for upcoming shifts</p>
                </div>
                <button onClick={handleSave} className="btn btn-primary">
                    {showSaved ? <><Check className="w-4 h-4" /> Saved!</> : 'Save Changes'}
                </button>
            </div>

            {/* Success Toast */}
            {showSaved && (
                <div className="fixed top-20 right-4 bg-success text-white px-4 py-3 rounded-xl shadow-lg animate-fade-in flex items-center gap-2 z-50">
                    <Check className="w-5 h-5" />
                    Availability saved successfully!
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {/* Calendar */}
                <div className="xl:col-span-2 card p-6">
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
                            const dateStr = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                            const hasAvailability = selectedDates[dateStr]?.length > 0;
                            const isSelected = selectedDay === dateStr;

                            return (
                                <button
                                    key={day}
                                    onClick={() => setSelectedDay(dateStr)}
                                    className={`aspect-square p-1 rounded-xl flex flex-col items-center justify-center text-sm transition-all ${isSelected
                                            ? 'bg-primary text-white ring-2 ring-primary ring-offset-2'
                                            : hasAvailability
                                                ? 'bg-success/20 text-success hover:bg-success/30'
                                                : 'hover:bg-secondary'
                                        }`}
                                >
                                    <span className="font-medium">{day}</span>
                                    {hasAvailability && !isSelected && (
                                        <div className="w-1.5 h-1.5 bg-success rounded-full mt-0.5"></div>
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Legend */}
                    <div className="flex items-center gap-6 mt-6 pt-4 border-t border-border-light">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-3 h-3 bg-success/20 rounded"></div>
                            Available
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-3 h-3 bg-primary rounded"></div>
                            Selected
                        </div>
                    </div>
                </div>

                {/* Time Slots */}
                <div className="card p-6">
                    <h3 className="font-semibold text-primary mb-2">
                        {selectedDay ? formatDate(selectedDay) : 'Select a Day'}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6">
                        Choose your available time slots
                    </p>

                    {selectedDay ? (
                        <div className="space-y-3">
                            {timeSlots.map((slot) => {
                                const isActive = selectedDates[selectedDay]?.includes(slot.id);
                                const IconComponent = slot.icon;

                                return (
                                    <button
                                        key={slot.id}
                                        onClick={() => toggleSlot(slot.id)}
                                        className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all text-left ${isActive
                                                ? 'bg-success/10 border-success text-success'
                                                : 'border-border hover:border-primary/30 hover:bg-secondary'
                                            }`}
                                    >
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isActive ? 'bg-success/20' : 'bg-secondary'
                                            }`}>
                                            <IconComponent className={`w-5 h-5 ${isActive ? 'text-success' : 'text-muted-foreground'}`} />
                                        </div>
                                        <div className="flex-1">
                                            <p className={`font-medium ${isActive ? 'text-success' : 'text-primary'}`}>{slot.label}</p>
                                            <p className="text-sm text-muted-foreground">{slot.time}</p>
                                        </div>
                                        {isActive ? (
                                            <Check className="w-5 h-5 text-success" />
                                        ) : (
                                            <div className="w-5 h-5 rounded border-2 border-border"></div>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="text-center py-8 text-muted-foreground">
                            <Calendar className="w-12 h-12 mx-auto mb-3 opacity-50" />
                            <p>Click on a date to set availability</p>
                        </div>
                    )}

                    {/* Quick Actions */}
                    <div className="mt-6 pt-4 border-t border-border-light space-y-2">
                        <button
                            onClick={() => {
                                if (selectedDay) {
                                    setSelectedDates(prev => ({
                                        ...prev,
                                        [selectedDay]: ['morning', 'afternoon', 'evening']
                                    }));
                                }
                            }}
                            className="w-full btn btn-secondary text-sm"
                        >
                            Mark Full Day Available
                        </button>
                        <button
                            onClick={() => {
                                if (selectedDay) {
                                    setSelectedDates(prev => ({
                                        ...prev,
                                        [selectedDay]: []
                                    }));
                                }
                            }}
                            className="w-full btn btn-ghost text-sm text-danger"
                        >
                            Clear Day
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
