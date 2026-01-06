'use client';

import { Bus, MapPin, Clock, CheckCircle, Phone, User, ChevronRight } from 'lucide-react';

const shuttleSchedule = [
    {
        id: 1,
        type: 'Airport Pickup',
        route: 'King Khalid Airport → Four Seasons Riyadh',
        date: '2026-03-13',
        time: '15:00',
        status: 'scheduled',
        driver: 'Mohammed Al-Qahtani',
        vehicle: 'Mercedes V-Class',
        plateNumber: 'RUH 4521',
    },
    {
        id: 2,
        type: 'Event Shuttle',
        route: 'Four Seasons → Riyadh Front Exhibition Center',
        date: '2026-03-14',
        time: '08:00',
        status: 'scheduled',
        driver: 'Ahmed Hassan',
        vehicle: 'Luxury Bus',
        plateNumber: 'RUH 8890',
    },
    {
        id: 3,
        type: 'Event Shuttle',
        route: 'Riyadh Front → Four Seasons',
        date: '2026-03-14',
        time: '18:30',
        status: 'scheduled',
        driver: 'Ahmed Hassan',
        vehicle: 'Luxury Bus',
        plateNumber: 'RUH 8890',
    },
    {
        id: 4,
        type: 'Airport Drop-off',
        route: 'Four Seasons → King Khalid Airport',
        date: '2026-03-17',
        time: '13:00',
        status: 'scheduled',
        driver: 'TBD',
        vehicle: 'Mercedes V-Class',
        plateNumber: 'TBD',
    },
];

export default function GuestTransportPage() {
    return (
        <div className="space-y-6 animate-fade-in">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-primary">Transportation</h1>
                    <p className="text-muted-foreground mt-1">Your shuttle schedule and transportation details</p>
                </div>
                <button className="btn btn-primary">
                    <Phone className="w-4 h-4" />
                    Request Ride
                </button>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="card p-5 bg-gradient-to-br from-success/10 to-success/5 border-success/20">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-success/20 rounded-xl flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-success" />
                        </div>
                        <div>
                            <p className="text-lg font-bold text-primary">All Confirmed</p>
                            <p className="text-sm text-muted-foreground">4 rides scheduled</p>
                        </div>
                    </div>
                </div>
                <div className="card p-5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                            <Bus className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <p className="text-lg font-bold text-primary">Next Pickup</p>
                            <p className="text-sm text-muted-foreground">Mar 13, 15:00</p>
                        </div>
                    </div>
                </div>
                <div className="card p-5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                            <MapPin className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                            <p className="text-lg font-bold text-primary">VIP Service</p>
                            <p className="text-sm text-muted-foreground">Private transfers included</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shuttle Schedule */}
            <div className="card">
                <div className="p-5 border-b border-border-light">
                    <h3 className="font-semibold text-primary">Shuttle Schedule</h3>
                </div>
                <div className="divide-y divide-border-light">
                    {shuttleSchedule.map((shuttle) => (
                        <div key={shuttle.id} className="p-5 hover:bg-secondary-light transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex flex-col items-center justify-center">
                                    <span className="text-xs text-muted-foreground">{new Date(shuttle.date).toLocaleString('default', { month: 'short' })}</span>
                                    <span className="text-lg font-bold text-primary">{new Date(shuttle.date).getDate()}</span>
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                        <h4 className="font-semibold text-primary">{shuttle.type}</h4>
                                        <span className="badge badge-success">
                                            <CheckCircle className="w-3 h-3" />
                                            Confirmed
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
                                        <MapPin className="w-3 h-3" />
                                        {shuttle.route}
                                    </p>
                                    <div className="flex items-center gap-4 mt-2 text-sm text-muted">
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {shuttle.time}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Bus className="w-3 h-3" />
                                            {shuttle.vehicle}
                                        </span>
                                        {shuttle.driver !== 'TBD' && (
                                            <span className="flex items-center gap-1">
                                                <User className="w-3 h-3" />
                                                {shuttle.driver}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <button className="btn btn-ghost">
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Support */}
            <div className="card p-6 bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                        <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-semibold text-primary">Need a different ride?</h3>
                        <p className="text-sm text-muted-foreground">Contact our 24/7 concierge for custom transportation requests</p>
                    </div>
                    <button className="btn btn-primary">Contact Concierge</button>
                </div>
            </div>
        </div>
    );
}
