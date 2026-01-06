'use client';

import { Users, MessageCircle, Calendar, MapPin, Linkedin, Globe, Search, CheckCircle, UserPlus } from 'lucide-react';
import { useState } from 'react';

const attendees = [
    {
        id: 1,
        name: 'Sarah Al-Rashid',
        title: 'CEO',
        company: 'InnovateTech Saudi',
        location: 'Riyadh, KSA',
        interests: ['AI/ML', 'Startups', 'Investment'],
        matchScore: 95,
        connected: false,
    },
    {
        id: 2,
        name: 'James Chen',
        title: 'VP of Engineering',
        company: 'TechCorp Asia',
        location: 'Singapore',
        interests: ['Cloud', 'DevOps', 'Fintech'],
        matchScore: 88,
        connected: true,
    },
    {
        id: 3,
        name: 'Fatima Al-Saud',
        title: 'Investment Director',
        company: 'Vision Fund',
        location: 'Riyadh, KSA',
        interests: ['VC', 'Deep Tech', 'Sustainability'],
        matchScore: 82,
        connected: false,
    },
    {
        id: 4,
        name: 'Michael Brown',
        title: 'CTO',
        company: 'CloudScale Inc',
        location: 'London, UK',
        interests: ['Infrastructure', 'Security', 'Scale'],
        matchScore: 78,
        connected: true,
    },
];

const scheduledMeetings = [
    { id: 1, with: 'Sarah Al-Rashid', time: '11:00 AM', date: 'Mar 14', location: 'VIP Lounge' },
    { id: 2, with: 'James Chen', time: '2:30 PM', date: 'Mar 14', location: 'Meeting Room 3' },
    { id: 3, with: 'Vision Fund Team', time: '10:00 AM', date: 'Mar 15', location: 'Investor Zone' },
];

export default function GuestNetworkingPage() {
    const [connectedUsers, setConnectedUsers] = useState<number[]>([2, 4]);

    const handleConnect = (id: number) => {
        setConnectedUsers(prev => [...prev, id]);
    };

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-primary">Networking</h1>
                    <p className="text-muted-foreground mt-1">Connect with fellow attendees and schedule meetings</p>
                </div>
                <button className="btn btn-primary">
                    <Calendar className="w-4 h-4" />
                    Schedule Meeting
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="card p-5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                            <Users className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-primary">2,450</p>
                            <p className="text-sm text-muted-foreground">Attendees</p>
                        </div>
                    </div>
                </div>
                <div className="card p-5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-success/10 rounded-xl flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-success" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-primary">{connectedUsers.length}</p>
                            <p className="text-sm text-muted-foreground">Connections</p>
                        </div>
                    </div>
                </div>
                <div className="card p-5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                            <Calendar className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-primary">{scheduledMeetings.length}</p>
                            <p className="text-sm text-muted-foreground">Meetings Scheduled</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recommended Connections */}
                <div className="lg:col-span-2">
                    <div className="card">
                        <div className="p-5 border-b border-border-light flex items-center justify-between">
                            <h3 className="font-semibold text-primary">Recommended for You</h3>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                <input
                                    type="text"
                                    placeholder="Search attendees..."
                                    className="pl-9 pr-4 py-2 bg-secondary rounded-lg text-sm w-48"
                                />
                            </div>
                        </div>
                        <div className="divide-y divide-border-light">
                            {attendees.map((person) => (
                                <div key={person.id} className="p-5 hover:bg-secondary-light transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center text-xl font-bold text-primary">
                                            {person.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">
                                                <h4 className="font-semibold text-primary">{person.name}</h4>
                                                <span className="badge badge-accent">{person.matchScore}% match</span>
                                            </div>
                                            <p className="text-sm text-muted-foreground">{person.title} at {person.company}</p>
                                            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                                                <MapPin className="w-3 h-3" />
                                                {person.location}
                                            </p>
                                            <div className="flex gap-2 mt-2">
                                                {person.interests.map((interest, idx) => (
                                                    <span key={idx} className="px-2 py-0.5 bg-secondary rounded-full text-xs text-muted">
                                                        {interest}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            {connectedUsers.includes(person.id) ? (
                                                <button className="btn btn-secondary" disabled>
                                                    <CheckCircle className="w-4 h-4" />
                                                    Connected
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={() => handleConnect(person.id)}
                                                    className="btn btn-primary"
                                                >
                                                    <UserPlus className="w-4 h-4" />
                                                    Connect
                                                </button>
                                            )}
                                            <button className="btn btn-ghost">
                                                <MessageCircle className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Scheduled Meetings */}
                <div className="card h-fit">
                    <div className="p-5 border-b border-border-light">
                        <h3 className="font-semibold text-primary">Upcoming Meetings</h3>
                    </div>
                    <div className="divide-y divide-border-light">
                        {scheduledMeetings.map((meeting) => (
                            <div key={meeting.id} className="p-4 hover:bg-secondary-light transition-colors">
                                <p className="font-medium text-primary">{meeting.with}</p>
                                <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                                    <span>{meeting.date}, {meeting.time}</span>
                                </div>
                                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                                    <MapPin className="w-3 h-3" />
                                    {meeting.location}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="p-4 border-t border-border-light">
                        <button className="w-full btn btn-secondary">View All Meetings</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
