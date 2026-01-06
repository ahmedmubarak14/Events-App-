'use client';

import { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Star, ChevronRight, Plus, Check, Filter } from 'lucide-react';

const agendaItems = [
    {
        id: 1,
        day: 'Day 1 - March 14',
        date: '2026-03-14',
        events: [
            { id: 1, time: '09:00', duration: '1h', title: 'Opening Ceremony', location: 'Main Hall', type: 'keynote', isAttending: true },
            { id: 2, time: '10:30', duration: '45m', title: 'The Future of AI in Events', location: 'Tech Stage', type: 'talk', speaker: 'Dr. Sarah Chen', isAttending: true },
            { id: 3, time: '12:00', duration: '1h', title: 'Networking Lunch', location: 'Exhibition Hall', type: 'networking', isAttending: false },
            { id: 4, time: '14:00', duration: '2h', title: 'Exhibition Tour', location: 'Hall A-C', type: 'tour', isAttending: true },
            { id: 5, time: '16:30', duration: '1h', title: 'Investment Panel', location: 'Investor Lounge', type: 'panel', isAttending: true },
        ]
    },
    {
        id: 2,
        day: 'Day 2 - March 15',
        date: '2026-03-15',
        events: [
            { id: 6, time: '09:30', duration: '1h', title: 'Startup Showcase', location: 'Innovation Zone', type: 'showcase', isAttending: true },
            { id: 7, time: '11:00', duration: '45m', title: 'Vision 2030 Tech Update', location: 'Main Hall', type: 'keynote', isAttending: true },
            { id: 8, time: '13:00', duration: '1h 30m', title: 'VIP Lunch Meeting', location: 'Executive Lounge', type: 'meeting', isAttending: true },
            { id: 9, time: '15:00', duration: '2h', title: 'Workshops', location: 'Workshop Rooms', type: 'workshop', isAttending: false },
        ]
    },
    {
        id: 3,
        day: 'Day 3 - March 16',
        date: '2026-03-16',
        events: [
            { id: 10, time: '10:00', duration: '2h', title: 'Partner Meetings', location: 'Meeting Rooms', type: 'meeting', isAttending: true },
            { id: 11, time: '14:00', duration: '1h', title: 'Closing Ceremony', location: 'Main Hall', type: 'keynote', isAttending: true },
            { id: 12, time: '16:00', duration: '3h', title: 'Farewell Reception', location: 'Rooftop Terrace', type: 'networking', isAttending: true },
        ]
    }
];

const typeColors: { [key: string]: string } = {
    keynote: 'bg-primary/10 text-primary',
    talk: 'bg-accent/10 text-accent',
    networking: 'bg-success/10 text-success',
    tour: 'bg-warning/10 text-warning',
    panel: 'bg-info/10 text-info',
    meeting: 'bg-danger/10 text-danger',
    workshop: 'bg-purple-100 text-purple-600',
    showcase: 'bg-pink-100 text-pink-600',
};

export default function GuestAgendaPage() {
    const [attending, setAttending] = useState<number[]>([1, 2, 4, 5, 6, 7, 8, 10, 11, 12]);
    const [filter, setFilter] = useState('all');

    const toggleAttending = (eventId: number) => {
        setAttending(prev =>
            prev.includes(eventId)
                ? prev.filter(id => id !== eventId)
                : [...prev, eventId]
        );
    };

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-primary">My Agenda</h1>
                    <p className="text-muted-foreground mt-1">Your personalized event schedule</p>
                </div>
                <div className="flex gap-2">
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="input py-2 px-3 text-sm w-auto"
                    >
                        <option value="all">All Events</option>
                        <option value="attending">Attending Only</option>
                        <option value="keynote">Keynotes</option>
                        <option value="networking">Networking</option>
                    </select>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="card p-4">
                    <p className="text-2xl font-bold text-primary">{attending.length}</p>
                    <p className="text-sm text-muted-foreground">Events Attending</p>
                </div>
                <div className="card p-4">
                    <p className="text-2xl font-bold text-primary">3</p>
                    <p className="text-sm text-muted-foreground">Days</p>
                </div>
                <div className="card p-4">
                    <p className="text-2xl font-bold text-primary">2</p>
                    <p className="text-sm text-muted-foreground">VIP Meetings</p>
                </div>
                <div className="card p-4">
                    <p className="text-2xl font-bold text-primary">5</p>
                    <p className="text-sm text-muted-foreground">Keynotes</p>
                </div>
            </div>

            {/* Agenda */}
            <div className="space-y-6">
                {agendaItems.map((day) => (
                    <div key={day.id} className="card overflow-hidden">
                        <div className="p-4 bg-primary/5 border-b border-border-light">
                            <h3 className="font-semibold text-primary flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {day.day}
                            </h3>
                        </div>
                        <div className="divide-y divide-border-light">
                            {day.events
                                .filter(event => {
                                    if (filter === 'all') return true;
                                    if (filter === 'attending') return attending.includes(event.id);
                                    return event.type === filter;
                                })
                                .map((event) => (
                                    <div key={event.id} className="p-4 hover:bg-secondary-light transition-colors">
                                        <div className="flex items-start gap-4">
                                            <div className="text-center min-w-[60px]">
                                                <p className="text-lg font-bold text-primary">{event.time}</p>
                                                <p className="text-xs text-muted-foreground">{event.duration}</p>
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 flex-wrap">
                                                    <h4 className="font-medium text-primary">{event.title}</h4>
                                                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${typeColors[event.type]}`}>
                                                        {event.type}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                                                    <MapPin className="w-3 h-3" />
                                                    {event.location}
                                                </p>
                                                {event.speaker && (
                                                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                                                        <Users className="w-3 h-3" />
                                                        {event.speaker}
                                                    </p>
                                                )}
                                            </div>
                                            <button
                                                onClick={() => toggleAttending(event.id)}
                                                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${attending.includes(event.id)
                                                        ? 'bg-success text-white'
                                                        : 'bg-secondary text-muted-foreground hover:bg-primary hover:text-white'
                                                    }`}
                                            >
                                                {attending.includes(event.id) ? (
                                                    <span className="flex items-center gap-1"><Check className="w-4 h-4" /> Going</span>
                                                ) : (
                                                    <span className="flex items-center gap-1"><Plus className="w-4 h-4" /> Add</span>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
