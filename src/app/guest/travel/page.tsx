'use client';

import { Plane, FileCheck, Calendar, Clock, MapPin, CheckCircle, Download, AlertCircle, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const travelDetails = {
    visa: {
        status: 'approved',
        type: 'Event Visa',
        number: 'SAU-2026-0041247',
        issuedDate: '2025-12-28',
        validFrom: '2026-03-10',
        validUntil: '2026-03-25',
        entries: 'Single Entry',
    },
    outboundFlight: {
        airline: 'Saudi Airlines',
        flightNumber: 'SV104',
        departure: {
            airport: 'London Heathrow (LHR)',
            date: '2026-03-13',
            time: '08:45',
            terminal: 'Terminal 4',
        },
        arrival: {
            airport: 'King Khalid Intl (RUH)',
            date: '2026-03-13',
            time: '14:30',
            terminal: 'Terminal 1',
        },
        duration: '5h 45m',
        class: 'Business Class',
        seat: '4A',
        status: 'confirmed',
    },
    returnFlight: {
        airline: 'Saudi Airlines',
        flightNumber: 'SV105',
        departure: {
            airport: 'King Khalid Intl (RUH)',
            date: '2026-03-17',
            time: '16:00',
            terminal: 'Terminal 1',
        },
        arrival: {
            airport: 'London Heathrow (LHR)',
            date: '2026-03-17',
            time: '20:15',
            terminal: 'Terminal 4',
        },
        duration: '6h 15m',
        class: 'Business Class',
        seat: '4A',
        status: 'confirmed',
    },
};

export default function GuestTravelPage() {
    return (
        <div className="space-y-6 animate-fade-in">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-primary">Visa & Travel</h1>
                    <p className="text-muted-foreground mt-1">Your travel documents and flight details</p>
                </div>
                <button className="btn btn-primary">
                    <Download className="w-4 h-4" />
                    Download Itinerary
                </button>
            </div>

            {/* Visa Status Card */}
            <div className="card p-6">
                <div className="flex items-start gap-6">
                    <div className="w-20 h-20 gradient-success rounded-2xl flex items-center justify-center text-white text-4xl">
                        🇸🇦
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center gap-3">
                            <h2 className="text-xl font-bold text-primary">Saudi Arabia {travelDetails.visa.type}</h2>
                            <span className="badge badge-success">
                                <CheckCircle className="w-3 h-3" />
                                Approved
                            </span>
                        </div>
                        <p className="text-muted-foreground mt-1">Visa Number: {travelDetails.visa.number}</p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                            <div>
                                <p className="text-xs text-muted-foreground uppercase">Issue Date</p>
                                <p className="font-medium text-primary">{new Date(travelDetails.visa.issuedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground uppercase">Valid From</p>
                                <p className="font-medium text-primary">{new Date(travelDetails.visa.validFrom).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground uppercase">Valid Until</p>
                                <p className="font-medium text-primary">{new Date(travelDetails.visa.validUntil).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground uppercase">Entry Type</p>
                                <p className="font-medium text-primary">{travelDetails.visa.entries}</p>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-secondary">
                        <FileCheck className="w-4 h-4" />
                        View Document
                    </button>
                </div>
            </div>

            {/* Flights */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Outbound Flight */}
                <div className="card p-6">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                <Plane className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-primary">Outbound Flight</h3>
                                <p className="text-sm text-muted-foreground">{travelDetails.outboundFlight.airline} {travelDetails.outboundFlight.flightNumber}</p>
                            </div>
                        </div>
                        <span className="badge badge-success">
                            <CheckCircle className="w-3 h-3" />
                            Confirmed
                        </span>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                        <div className="text-center">
                            <p className="text-3xl font-bold text-primary">{travelDetails.outboundFlight.departure.time}</p>
                            <p className="text-lg font-medium text-primary">LHR</p>
                            <p className="text-sm text-muted-foreground">London</p>
                        </div>

                        <div className="flex-1 px-4">
                            <div className="relative">
                                <div className="h-0.5 bg-border w-full"></div>
                                <Plane className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 text-primary rotate-90 bg-white" />
                            </div>
                            <p className="text-xs text-muted-foreground text-center mt-2">{travelDetails.outboundFlight.duration} • Direct</p>
                        </div>

                        <div className="text-center">
                            <p className="text-3xl font-bold text-primary">{travelDetails.outboundFlight.arrival.time}</p>
                            <p className="text-lg font-medium text-primary">RUH</p>
                            <p className="text-sm text-muted-foreground">Riyadh</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 p-4 bg-secondary rounded-xl">
                        <div>
                            <p className="text-xs text-muted-foreground uppercase">Date</p>
                            <p className="font-medium text-primary">{new Date(travelDetails.outboundFlight.departure.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground uppercase">Class</p>
                            <p className="font-medium text-primary">{travelDetails.outboundFlight.class}</p>
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground uppercase">Seat</p>
                            <p className="font-medium text-primary">{travelDetails.outboundFlight.seat}</p>
                        </div>
                    </div>

                    <button className="w-full mt-4 btn btn-secondary">
                        View Boarding Pass
                    </button>
                </div>

                {/* Return Flight */}
                <div className="card p-6">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                <Plane className="w-6 h-6 text-primary transform rotate-180" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-primary">Return Flight</h3>
                                <p className="text-sm text-muted-foreground">{travelDetails.returnFlight.airline} {travelDetails.returnFlight.flightNumber}</p>
                            </div>
                        </div>
                        <span className="badge badge-success">
                            <CheckCircle className="w-3 h-3" />
                            Confirmed
                        </span>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                        <div className="text-center">
                            <p className="text-3xl font-bold text-primary">{travelDetails.returnFlight.departure.time}</p>
                            <p className="text-lg font-medium text-primary">RUH</p>
                            <p className="text-sm text-muted-foreground">Riyadh</p>
                        </div>

                        <div className="flex-1 px-4">
                            <div className="relative">
                                <div className="h-0.5 bg-border w-full"></div>
                                <Plane className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 text-primary rotate-90 bg-white" />
                            </div>
                            <p className="text-xs text-muted-foreground text-center mt-2">{travelDetails.returnFlight.duration} • Direct</p>
                        </div>

                        <div className="text-center">
                            <p className="text-3xl font-bold text-primary">{travelDetails.returnFlight.arrival.time}</p>
                            <p className="text-lg font-medium text-primary">LHR</p>
                            <p className="text-sm text-muted-foreground">London</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 p-4 bg-secondary rounded-xl">
                        <div>
                            <p className="text-xs text-muted-foreground uppercase">Date</p>
                            <p className="font-medium text-primary">{new Date(travelDetails.returnFlight.departure.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground uppercase">Class</p>
                            <p className="font-medium text-primary">{travelDetails.returnFlight.class}</p>
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground uppercase">Seat</p>
                            <p className="font-medium text-primary">{travelDetails.returnFlight.seat}</p>
                        </div>
                    </div>

                    <button className="w-full mt-4 btn btn-secondary">
                        View Boarding Pass
                    </button>
                </div>
            </div>

            {/* Important Notes */}
            <div className="card p-6 bg-warning/5 border-warning/20">
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-warning/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <AlertCircle className="w-5 h-5 text-warning" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-primary">Travel Reminders</h3>
                        <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-success" />
                                Ensure your passport is valid for at least 6 months
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-success" />
                                Download the SAUDIA app for mobile boarding pass
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-muted-foreground" />
                                Arrive at the airport 3 hours before departure
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
