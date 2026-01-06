'use client';

import { useState } from 'react';
import { FileText, Clock, DollarSign, CheckCircle, AlertCircle, Download, Eye, Send, Filter } from 'lucide-react';

const quotes = [
    {
        id: 'QT-2026-001',
        rfqTitle: 'Audio Equipment for Main Stage',
        event: 'Riyadh Tech Expo 2026',
        submittedDate: '2026-01-03',
        expiryDate: '2026-01-15',
        amount: 85000,
        status: 'pending',
    },
    {
        id: 'QT-2026-002',
        rfqTitle: 'LED Screens - Exhibition Hall',
        event: 'Riyadh Tech Expo 2026',
        submittedDate: '2026-01-02',
        expiryDate: '2026-01-12',
        amount: 125000,
        status: 'accepted',
    },
    {
        id: 'QT-2025-089',
        rfqTitle: 'Sound System for Conference Rooms',
        event: 'Saudi Future Forum',
        submittedDate: '2025-12-15',
        expiryDate: '2025-12-28',
        amount: 45000,
        status: 'declined',
    },
    {
        id: 'QT-2025-088',
        rfqTitle: 'Wireless Microphones Package',
        event: 'Riyadh Season Opening',
        submittedDate: '2025-12-10',
        expiryDate: '2025-12-20',
        amount: 32000,
        status: 'accepted',
    },
];

const statusColors: { [key: string]: string } = {
    pending: 'bg-warning/10 text-warning',
    accepted: 'bg-success/10 text-success',
    declined: 'bg-danger/10 text-danger',
    expired: 'bg-muted text-muted-foreground',
};

export default function VendorQuotesPage() {
    const [filter, setFilter] = useState('all');
    const [selectedQuote, setSelectedQuote] = useState<string | null>(null);

    const filteredQuotes = quotes.filter(q => filter === 'all' || q.status === filter);

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-primary">My Quotes</h1>
                    <p className="text-muted-foreground mt-1">Track submitted quotes and their status</p>
                </div>
                <div className="flex gap-2">
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="input py-2 px-3 text-sm w-auto"
                    >
                        <option value="all">All Quotes</option>
                        <option value="pending">Pending</option>
                        <option value="accepted">Accepted</option>
                        <option value="declined">Declined</option>
                    </select>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="card p-4">
                    <p className="text-2xl font-bold text-primary">{quotes.length}</p>
                    <p className="text-sm text-muted-foreground">Total Quotes</p>
                </div>
                <div className="card p-4">
                    <p className="text-2xl font-bold text-warning">{quotes.filter(q => q.status === 'pending').length}</p>
                    <p className="text-sm text-muted-foreground">Pending</p>
                </div>
                <div className="card p-4">
                    <p className="text-2xl font-bold text-success">{quotes.filter(q => q.status === 'accepted').length}</p>
                    <p className="text-sm text-muted-foreground">Accepted</p>
                </div>
                <div className="card p-4">
                    <p className="text-2xl font-bold text-primary">SAR {(quotes.filter(q => q.status === 'accepted').reduce((sum, q) => sum + q.amount, 0) / 1000).toFixed(0)}K</p>
                    <p className="text-sm text-muted-foreground">Won Value</p>
                </div>
            </div>

            {/* Quotes List */}
            <div className="card">
                <div className="p-5 border-b border-border-light">
                    <h3 className="font-semibold text-primary">Quote History</h3>
                </div>
                <div className="divide-y divide-border-light">
                    {filteredQuotes.map((quote) => (
                        <div key={quote.id} className="p-5 hover:bg-secondary-light transition-colors">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 flex-wrap">
                                        <h4 className="font-medium text-primary">{quote.rfqTitle}</h4>
                                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium capitalize ${statusColors[quote.status]}`}>
                                            {quote.status}
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">{quote.event}</p>
                                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                                        <span className="flex items-center gap-1">
                                            <FileText className="w-3 h-3" />
                                            {quote.id}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            Submitted {new Date(quote.submittedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="text-right">
                                        <p className="text-lg font-bold text-primary">SAR {quote.amount.toLocaleString()}</p>
                                        <p className="text-xs text-muted-foreground">Quote Amount</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="p-2 hover:bg-secondary rounded-lg transition-colors" title="View">
                                            <Eye className="w-5 h-5 text-muted-foreground" />
                                        </button>
                                        <button className="p-2 hover:bg-secondary rounded-lg transition-colors" title="Download">
                                            <Download className="w-5 h-5 text-muted-foreground" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
