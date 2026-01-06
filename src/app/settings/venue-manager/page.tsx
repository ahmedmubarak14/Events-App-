'use client';

import { useState } from 'react';
import { Building2, Calendar, Users, DollarSign, TrendingUp, CheckCircle, Clock, XCircle, Eye } from 'lucide-react';

// Mock venue booking data
const bookingRequests = [
    { id: 'bk-001', event: 'Tech Summit 2026', organizer: 'Saudi Tech Association', dates: 'Mar 10-12', attendees: 3000, status: 'pending', revenue: 120000 },
    { id: 'bk-002', event: 'Music Festival', organizer: 'Rotana Events', dates: 'Mar 20-21', attendees: 15000, status: 'confirmed', revenue: 450000 },
    { id: 'bk-003', event: 'Corporate Gala', organizer: 'Aramco', dates: 'Mar 25', attendees: 500, status: 'pending', revenue: 75000 },
    { id: 'bk-004', event: 'Wedding Expo', organizer: 'Bridal Co.', dates: 'Apr 5-7', attendees: 2000, status: 'declined', revenue: 0 },
];

const venueStats = {
    totalBookings: 24,
    utilizationRate: 78,
    monthlyRevenue: 1250000,
    upcomingEvents: 8,
};

// Mock calendar data for utilization
const calendarData = [
    { date: 1, booked: false }, { date: 2, booked: false }, { date: 3, booked: true },
    { date: 4, booked: true }, { date: 5, booked: true }, { date: 6, booked: false },
    { date: 7, booked: false }, { date: 8, booked: false }, { date: 9, booked: false },
    { date: 10, booked: true }, { date: 11, booked: true }, { date: 12, booked: true },
    { date: 13, booked: false }, { date: 14, booked: false }, { date: 15, booked: true },
    { date: 16, booked: true }, { date: 17, booked: false }, { date: 18, booked: false },
    { date: 19, booked: false }, { date: 20, booked: true }, { date: 21, booked: true },
    { date: 22, booked: false }, { date: 23, booked: false }, { date: 24, booked: false },
    { date: 25, booked: true }, { date: 26, booked: false }, { date: 27, booked: false },
    { date: 28, booked: false }, { date: 29, booked: false }, { date: 30, booked: false },
    { date: 31, booked: false },
];

export default function VenueManagerPage() {
    const [requestList, setRequestList] = useState(bookingRequests);

    const handleRequest = (id: string, action: 'confirm' | 'decline') => {
        setRequestList(prev => prev.map(req =>
            req.id === id ? { ...req, status: action === 'confirm' ? 'confirmed' : 'declined' } : req
        ));
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
            {/* Page Header with View Toggle */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-primary">Venue Manager Portal</h1>
                    <p className="text-muted-foreground mt-1">Manage your venue bookings and availability</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex bg-secondary rounded-lg p-1">
                        <button className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground">
                            Organizer View
                        </button>
                        <button className="px-4 py-2 rounded-lg text-sm font-medium bg-primary text-white shadow-sm">
                            Venue Manager View
                        </button>
                    </div>
                </div>
            </div>

            {/* Venue Info Banner */}
            <div className="bg-gradient-to-r from-primary via-primary-dark to-primary rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

                <div className="relative z-10 flex items-center gap-6">
                    <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
                        <Building2 className="w-10 h-10" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold">Riyadh Front Exhibition Center</h3>
                        <p className="text-white/70 text-sm mt-1">King Fahd Road, Riyadh • 15,000 capacity</p>
                    </div>
                    <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors">
                        Edit Venue
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                            <Calendar className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Total Bookings</p>
                            <p className="text-xl font-bold text-primary">{venueStats.totalBookings}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-success/10 rounded-xl flex items-center justify-center">
                            <TrendingUp className="w-5 h-5 text-success" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Utilization Rate</p>
                            <p className="text-xl font-bold text-primary">{venueStats.utilizationRate}%</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                            <DollarSign className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Monthly Revenue</p>
                            <p className="text-xl font-bold text-primary">{formatCurrency(venueStats.monthlyRevenue)}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-warning/10 rounded-xl flex items-center justify-center">
                            <Users className="w-5 h-5 text-warning" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Upcoming Events</p>
                            <p className="text-xl font-bold text-primary">{venueStats.upcomingEvents}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Booking Requests */}
                <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
                    <div className="p-6 border-b border-border">
                        <h2 className="text-lg font-semibold text-primary">Incoming Booking Requests</h2>
                    </div>
                    <div className="divide-y divide-border">
                        {requestList.map((request) => (
                            <div key={request.id} className="p-4 hover:bg-secondary transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-medium text-primary">{request.event}</h3>
                                            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${request.status === 'confirmed' ? 'bg-emerald-100 text-emerald-700' :
                                                    request.status === 'pending' ? 'bg-amber-100 text-amber-700' :
                                                        'bg-red-100 text-red-700'
                                                }`}>
                                                {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                                            <span>{request.organizer}</span>
                                            <span>•</span>
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {request.dates}
                                            </span>
                                            <span>•</span>
                                            <span className="flex items-center gap-1">
                                                <Users className="w-3 h-3" />
                                                {request.attendees.toLocaleString()} attendees
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold text-primary">{formatCurrency(request.revenue)}</p>
                                        <p className="text-xs text-muted-foreground">Estimated</p>
                                    </div>
                                    {request.status === 'pending' && (
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => handleRequest(request.id, 'confirm')}
                                                className="p-2 bg-success text-white rounded-lg hover:bg-success/90 transition-colors"
                                            >
                                                <CheckCircle className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleRequest(request.id, 'decline')}
                                                className="p-2 bg-danger text-white rounded-lg hover:bg-danger/90 transition-colors"
                                            >
                                                <XCircle className="w-4 h-4" />
                                            </button>
                                        </div>
                                    )}
                                    {request.status !== 'pending' && (
                                        <button className="p-2 border border-border rounded-lg hover:bg-secondary transition-colors">
                                            <Eye className="w-4 h-4 text-muted-foreground" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Utilization Calendar */}
                <div className="bg-white rounded-2xl shadow-sm border border-border">
                    <div className="p-6 border-b border-border">
                        <h2 className="text-lg font-semibold text-primary">March 2026 Availability</h2>
                    </div>
                    <div className="p-4">
                        {/* Day Headers */}
                        <div className="grid grid-cols-7 gap-1 mb-2">
                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, idx) => (
                                <div key={idx} className="text-center text-xs font-medium text-muted-foreground py-1">
                                    {day}
                                </div>
                            ))}
                        </div>

                        {/* Calendar Grid */}
                        <div className="grid grid-cols-7 gap-1">
                            {/* First week offset (March 2026 starts on Sunday) */}
                            {calendarData.map((day, idx) => (
                                <div
                                    key={idx}
                                    className={`aspect-square rounded-lg flex items-center justify-center text-sm ${day.booked
                                            ? 'bg-primary text-white font-medium'
                                            : 'bg-secondary text-muted-foreground hover:bg-secondary-dark cursor-pointer'
                                        }`}
                                >
                                    {day.date}
                                </div>
                            ))}
                        </div>

                        {/* Legend */}
                        <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-border">
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded bg-primary"></div>
                                <span className="text-xs text-muted-foreground">Booked</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded bg-secondary"></div>
                                <span className="text-xs text-muted-foreground">Available</span>
                            </div>
                        </div>

                        {/* Utilization Stats */}
                        <div className="mt-4 p-3 bg-secondary rounded-xl">
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Monthly Utilization</span>
                                <span className="font-medium text-primary">
                                    {calendarData.filter(d => d.booked).length}/{calendarData.length} days
                                </span>
                            </div>
                            <div className="w-full bg-white rounded-full h-2 mt-2">
                                <div
                                    className="h-2 rounded-full bg-primary"
                                    style={{ width: `${(calendarData.filter(d => d.booked).length / calendarData.length) * 100}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
