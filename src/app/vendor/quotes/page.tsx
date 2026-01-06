'use client';

import { useState } from 'react';
import { FileText, Clock, DollarSign, CheckCircle, AlertCircle, Download, Eye, Send, Filter, X } from 'lucide-react';

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
    const [showQuote, setShowQuote] = useState<string | null>(null);

    const filteredQuotes = quotes.filter(q => filter === 'all' || q.status === filter);
    const selectedQuote = quotes.find(q => q.id === showQuote);

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Quote Details Modal */}
            {showQuote && selectedQuote && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-md w-full p-6 animate-scale-in">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-primary">Quote Details</h3>
                            <button onClick={() => setShowQuote(null)} className="p-2 hover:bg-secondary rounded-lg">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="space-y-4">
                            <div className="p-4 bg-secondary rounded-xl">
                                <p className="text-sm text-muted-foreground">Quote ID</p>
                                <p className="font-bold text-primary">{selectedQuote.id}</p>
                            </div>
                            <div className="p-4 bg-secondary rounded-xl">
                                <p className="text-sm text-muted-foreground">RFQ Title</p>
                                <p className="font-medium text-primary">{selectedQuote.rfqTitle}</p>
                            </div>
                            <div className="p-4 bg-secondary rounded-xl">
                                <p className="text-sm text-muted-foreground">Event</p>
                                <p className="font-medium text-primary">{selectedQuote.event}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-secondary rounded-xl">
                                    <p className="text-sm text-muted-foreground">Amount</p>
                                    <p className="font-bold text-xl text-primary">SAR {selectedQuote.amount.toLocaleString()}</p>
                                </div>
                                <div className="p-4 bg-secondary rounded-xl">
                                    <p className="text-sm text-muted-foreground">Status</p>
                                    <p className={`font-medium capitalize ${selectedQuote.status === 'accepted' ? 'text-success' : selectedQuote.status === 'declined' ? 'text-danger' : 'text-warning'}`}>
                                        {selectedQuote.status}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button onClick={() => setShowQuote(null)} className="flex-1 btn btn-secondary">
                                <Download className="w-4 h-4" />
                                Download
                            </button>
                            <button onClick={() => setShowQuote(null)} className="flex-1 btn btn-primary">Close</button>
                        </div>
                    </div>
                </div>
            )}

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
                    <p className="text-2xl font-bold text-danger">{quotes.filter(q => q.status === 'declined').length}</p>
                    <p className="text-sm text-muted-foreground">Declined</p>
                </div>
            </div>

            {/* Quotes List */}
            <div className="card">
                <div className="p-5 border-b border-border-light">
                    <h3 className="font-semibold text-primary">Submitted Quotes</h3>
                </div>
                <div className="divide-y divide-border-light">
                    {filteredQuotes.map((quote) => (
                        <div key={quote.id} className="p-5 hover:bg-secondary-light transition-colors">
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <h4 className="font-semibold text-primary">{quote.rfqTitle}</h4>
                                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium capitalize ${statusColors[quote.status]}`}>
                                            {quote.status}
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">{quote.event}</p>
                                    <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground flex-wrap">
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
                                        <button
                                            onClick={() => setShowQuote(quote.id)}
                                            className="p-2 hover:bg-secondary rounded-lg transition-colors"
                                            title="View"
                                        >
                                            <Eye className="w-5 h-5 text-muted-foreground" />
                                        </button>
                                        <button
                                            onClick={() => alert('Downloading quote...')}
                                            className="p-2 hover:bg-secondary rounded-lg transition-colors"
                                            title="Download"
                                        >
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
