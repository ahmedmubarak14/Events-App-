'use client';

import { useState } from 'react';
import { Inbox, Clock, DollarSign, MapPin, Calendar, CheckCircle, Send, Filter, Eye, Building2 } from 'lucide-react';

// Mock RFQ data
const rfqs = [
    {
        id: 'rfq-001',
        title: 'Professional Sound System for 5,000 pax venue',
        event: 'Riyadh Tech Expo 2026',
        organizer: 'Saudi Tech Association',
        location: 'Riyadh Front Exhibition Center',
        eventDates: 'Mar 14-16, 2026',
        budget: { min: 150000, max: 200000 },
        deadline: '2026-01-07',
        daysLeft: 2,
        category: 'Audio',
        requirements: ['Line Array System', 'Subwoofers x8', 'Digital Mixer', 'Stage Monitors x12', 'Wireless Mics x10'],
        status: 'new',
        urgent: true,
    },
    {
        id: 'rfq-002',
        title: 'LED Video Wall 20m x 10m',
        event: 'Saudi Cup 2026',
        organizer: 'Jockey Club KSA',
        location: 'King Abdulaziz Racecourse',
        eventDates: 'Feb 25-27, 2026',
        budget: { min: 80000, max: 120000 },
        deadline: '2026-01-10',
        daysLeft: 5,
        category: 'Visual',
        requirements: ['4mm Pixel Pitch', 'Outdoor Rated', 'Include Rigging', '24/7 On-site Tech'],
        status: 'new',
        urgent: false,
    },
    {
        id: 'rfq-003',
        title: 'Stage Monitors and In-Ear Systems',
        event: 'Jeddah Music Festival',
        organizer: 'Rotana Events',
        location: 'Jeddah Corniche',
        eventDates: 'Mar 20-22, 2026',
        budget: { min: 50000, max: 70000 },
        deadline: '2026-01-08',
        daysLeft: 3,
        category: 'Audio',
        requirements: ['Floor Monitors x20', 'In-Ear Systems x8', 'Personal Monitor Mixer'],
        status: 'new',
        urgent: true,
    },
    {
        id: 'rfq-004',
        title: 'Complete PA System for Corporate Conference',
        event: 'LEAP Tech 2026',
        organizer: 'Tahaluf',
        location: 'Riyadh International Convention Center',
        eventDates: 'Feb 10-13, 2026',
        budget: { min: 40000, max: 60000 },
        deadline: '2026-01-05',
        daysLeft: 0,
        category: 'Audio',
        requirements: ['Ceiling Speakers', 'Podium Mics', 'Q&A System', 'Simultaneous Translation'],
        status: 'quoted',
        urgent: false,
    },
];

export default function VendorRFQPage() {
    const [selectedRfq, setSelectedRfq] = useState<string | null>(null);
    const [filter, setFilter] = useState('all');
    const [quoteSubmitted, setQuoteSubmitted] = useState<string[]>(['rfq-004']);

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-SA', {
            style: 'currency',
            currency: 'SAR',
            minimumFractionDigits: 0,
        }).format(amount);
    };

    const handleSubmitQuote = (rfqId: string) => {
        setQuoteSubmitted(prev => [...prev, rfqId]);
    };

    const selectedRfqData = rfqs.find(r => r.id === selectedRfq);

    const filteredRfqs = filter === 'new'
        ? rfqs.filter(r => r.status === 'new')
        : filter === 'quoted'
            ? rfqs.filter(r => r.status === 'quoted')
            : rfqs;

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-primary">RFQ Inbox</h1>
                    <p className="text-muted-foreground mt-1">Review and respond to quote requests</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex bg-secondary rounded-lg p-1">
                        <button
                            onClick={() => setFilter('all')}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === 'all' ? 'bg-white text-primary shadow-sm' : 'text-muted-foreground'
                                }`}
                        >
                            All ({rfqs.length})
                        </button>
                        <button
                            onClick={() => setFilter('new')}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === 'new' ? 'bg-white text-primary shadow-sm' : 'text-muted-foreground'
                                }`}
                        >
                            New ({rfqs.filter(r => r.status === 'new').length})
                        </button>
                        <button
                            onClick={() => setFilter('quoted')}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === 'quoted' ? 'bg-white text-primary shadow-sm' : 'text-muted-foreground'
                                }`}
                        >
                            Quoted ({rfqs.filter(r => r.status === 'quoted').length})
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* RFQ List */}
                <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
                    <div className="p-4 border-b border-border">
                        <input
                            type="text"
                            placeholder="Search RFQs..."
                            className="w-full px-4 py-2 bg-secondary rounded-lg text-sm focus:outline-none"
                        />
                    </div>
                    <div className="divide-y divide-border max-h-[600px] overflow-y-auto">
                        {filteredRfqs.map((rfq) => (
                            <div
                                key={rfq.id}
                                onClick={() => setSelectedRfq(rfq.id)}
                                className={`p-4 cursor-pointer transition-colors ${selectedRfq === rfq.id ? 'bg-primary/5 border-l-4 border-primary' : 'hover:bg-secondary'
                                    }`}
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                            {rfq.status === 'new' && (
                                                <span className="w-2 h-2 bg-danger rounded-full"></span>
                                            )}
                                            <h3 className="font-medium text-primary text-sm">{rfq.title}</h3>
                                        </div>
                                        <p className="text-xs text-muted-foreground mt-1">{rfq.event}</p>
                                        <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                                            <span className="flex items-center gap-1">
                                                <DollarSign className="w-3 h-3" />
                                                {formatCurrency(rfq.budget.min)} - {formatCurrency(rfq.budget.max)}
                                            </span>
                                            <span className={`flex items-center gap-1 ${rfq.daysLeft <= 2 ? 'text-danger' : ''}`}>
                                                <Clock className="w-3 h-3" />
                                                {rfq.daysLeft === 0 ? 'Due today' : `${rfq.daysLeft} days`}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end gap-2">
                                        {rfq.urgent && (
                                            <span className="px-2 py-0.5 bg-danger/10 text-danger text-xs font-medium rounded-full">
                                                Urgent
                                            </span>
                                        )}
                                        {quoteSubmitted.includes(rfq.id) && (
                                            <span className="px-2 py-0.5 bg-success/10 text-success text-xs font-medium rounded-full flex items-center gap-1">
                                                <CheckCircle className="w-3 h-3" />
                                                Quoted
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RFQ Detail View */}
                <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
                    {selectedRfqData ? (
                        <>
                            <div className="p-6 border-b border-border">
                                <div className="flex items-center gap-2 mb-3">
                                    {selectedRfqData.urgent && (
                                        <span className="px-2 py-0.5 bg-danger/10 text-danger text-xs font-medium rounded-full">
                                            Urgent
                                        </span>
                                    )}
                                    <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                                        {selectedRfqData.category}
                                    </span>
                                </div>
                                <h2 className="text-lg font-semibold text-primary">{selectedRfqData.title}</h2>
                                <p className="text-muted-foreground mt-1">{selectedRfqData.event}</p>
                            </div>

                            <div className="p-6 space-y-6">
                                {/* Organizer Info */}
                                <div className="flex items-center gap-4 p-4 bg-secondary rounded-xl">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                        <Building2 className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-primary">{selectedRfqData.organizer}</p>
                                        <p className="text-sm text-muted-foreground">Event Organizer</p>
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-xs text-muted-foreground uppercase">Budget Range</p>
                                        <p className="font-semibold text-primary mt-1">
                                            {formatCurrency(selectedRfqData.budget.min)} - {formatCurrency(selectedRfqData.budget.max)}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground uppercase">Deadline</p>
                                        <p className={`font-semibold mt-1 ${selectedRfqData.daysLeft <= 2 ? 'text-danger' : 'text-primary'}`}>
                                            {new Date(selectedRfqData.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground uppercase">Location</p>
                                        <p className="font-medium text-primary mt-1 flex items-center gap-1">
                                            <MapPin className="w-3 h-3" />
                                            {selectedRfqData.location}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground uppercase">Event Dates</p>
                                        <p className="font-medium text-primary mt-1 flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {selectedRfqData.eventDates}
                                        </p>
                                    </div>
                                </div>

                                {/* Requirements */}
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase mb-3">Requirements</p>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedRfqData.requirements.map((req, idx) => (
                                            <span key={idx} className="px-3 py-1.5 bg-secondary rounded-full text-sm text-primary">
                                                {req}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="pt-4 border-t border-border">
                                    {quoteSubmitted.includes(selectedRfqData.id) ? (
                                        <div className="p-4 bg-success/10 border border-success/20 rounded-xl">
                                            <div className="flex items-center gap-3">
                                                <CheckCircle className="w-5 h-5 text-success" />
                                                <div>
                                                    <p className="font-medium text-success">Quote Submitted</p>
                                                    <p className="text-sm text-muted-foreground">Waiting for organizer response</p>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex gap-3">
                                            <button className="flex-1 py-3 bg-primary text-white rounded-xl text-sm font-medium hover:bg-primary-light transition-colors flex items-center justify-center gap-2">
                                                <Send className="w-4 h-4" />
                                                Submit Quote
                                            </button>
                                            <button className="px-4 py-3 border border-border rounded-xl text-sm font-medium hover:bg-secondary transition-colors">
                                                <Eye className="w-4 h-4" />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="flex items-center justify-center h-full p-12">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <Inbox className="w-8 h-8 text-muted-foreground" />
                                </div>
                                <p className="text-muted-foreground">Select an RFQ to view details</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
