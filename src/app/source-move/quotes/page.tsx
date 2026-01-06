'use client';

import { useState } from 'react';
import { FileText, CheckCircle, X, Star, Clock, DollarSign, Building2, ChevronDown, Filter, ArrowUpDown, Check, Award } from 'lucide-react';

// Mock quotes data
const quotes = [
    {
        id: 'quote-001',
        rfqTitle: 'Professional Sound System for 5,000 pax',
        vendor: {
            name: 'Saudi Sound Systems',
            rating: 4.8,
            completedProjects: 47,
            responseTime: '2 hours',
        },
        price: 175000,
        deliveryDays: 3,
        warranty: '2 years',
        submitted: '2026-01-03',
        validUntil: '2026-01-15',
        status: 'pending',
        items: [
            { name: 'Line Array System (L-Acoustics)', qty: 1, price: 85000 },
            { name: 'Subwoofers x8', qty: 8, price: 32000 },
            { name: 'Digital Mixer (DiGiCo)', qty: 1, price: 28000 },
            { name: 'Stage Monitors x12', qty: 12, price: 18000 },
            { name: 'Wireless Mics x10', qty: 10, price: 12000 },
        ],
        notes: 'Includes free setup and 24/7 on-site technician for the duration of the event.',
        recommended: true,
    },
    {
        id: 'quote-002',
        rfqTitle: 'Professional Sound System for 5,000 pax',
        vendor: {
            name: 'Pro Audio KSA',
            rating: 4.5,
            completedProjects: 32,
            responseTime: '4 hours',
        },
        price: 158000,
        deliveryDays: 4,
        warranty: '1 year',
        submitted: '2026-01-03',
        validUntil: '2026-01-12',
        status: 'pending',
        items: [
            { name: 'Line Array System (JBL VTX)', qty: 1, price: 72000 },
            { name: 'Subwoofers x6', qty: 6, price: 24000 },
            { name: 'Digital Mixer (Yamaha)', qty: 1, price: 22000 },
            { name: 'Stage Monitors x10', qty: 10, price: 15000 },
            { name: 'Wireless Mics x10', qty: 10, price: 10000 },
            { name: 'Setup & Technician', qty: 1, price: 15000 },
        ],
        notes: 'Additional technician available at SAR 1,500/day.',
        recommended: false,
    },
    {
        id: 'quote-003',
        rfqTitle: 'Professional Sound System for 5,000 pax',
        vendor: {
            name: 'Gulf Events Tech',
            rating: 4.2,
            completedProjects: 18,
            responseTime: '6 hours',
        },
        price: 142000,
        deliveryDays: 5,
        warranty: '1 year',
        submitted: '2026-01-04',
        validUntil: '2026-01-10',
        status: 'pending',
        items: [
            { name: 'Line Array System (QSC)', qty: 1, price: 65000 },
            { name: 'Subwoofers x8', qty: 8, price: 28000 },
            { name: 'Digital Mixer (Allen & Heath)', qty: 1, price: 18000 },
            { name: 'Stage Monitors x12', qty: 12, price: 16000 },
            { name: 'Wireless Mics x8', qty: 8, price: 8000 },
            { name: 'Setup Fee', qty: 1, price: 7000 },
        ],
        notes: 'Competitive pricing, on-site support available.',
        recommended: false,
    },
];

export default function QuotesPage() {
    const [selectedQuotes, setSelectedQuotes] = useState<string[]>([]);
    const [compareMode, setCompareMode] = useState(false);
    const [acceptedQuote, setAcceptedQuote] = useState<string | null>(null);

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-SA', {
            style: 'currency',
            currency: 'SAR',
            minimumFractionDigits: 0,
        }).format(amount);
    };

    const toggleQuoteSelection = (id: string) => {
        setSelectedQuotes(prev =>
            prev.includes(id) ? prev.filter(q => q !== id) : [...prev, id]
        );
    };

    const handleAccept = (id: string) => {
        setAcceptedQuote(id);
    };

    const selectedQuoteData = quotes.filter(q => selectedQuotes.includes(q.id));

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-primary">Vendor Quotes</h1>
                    <p className="text-muted-foreground mt-1">Compare and select the best quotes for your RFQs</p>
                </div>
                <div className="flex gap-3">
                    {selectedQuotes.length >= 2 && (
                        <button
                            onClick={() => setCompareMode(!compareMode)}
                            className={`btn ${compareMode ? 'btn-primary' : 'btn-secondary'}`}
                        >
                            <ArrowUpDown className="w-4 h-4" />
                            {compareMode ? 'Exit Compare' : `Compare (${selectedQuotes.length})`}
                        </button>
                    )}
                </div>
            </div>

            {/* Compare Mode View */}
            {compareMode && selectedQuoteData.length >= 2 && (
                <div className="card p-6 animate-scale-in">
                    <h2 className="text-lg font-semibold text-primary mb-6">Quote Comparison</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-border">
                                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Criteria</th>
                                    {selectedQuoteData.map(quote => (
                                        <th key={quote.id} className="text-left py-3 px-4">
                                            <div className="flex items-center gap-2">
                                                <span className="font-semibold text-primary">{quote.vendor.name}</span>
                                                {quote.recommended && (
                                                    <span className="badge badge-success">
                                                        <Award className="w-3 h-3" />
                                                        Best Match
                                                    </span>
                                                )}
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border-light">
                                <tr>
                                    <td className="py-3 px-4 text-sm text-muted-foreground">Total Price</td>
                                    {selectedQuoteData.map(quote => (
                                        <td key={quote.id} className="py-3 px-4">
                                            <span className={`text-lg font-bold ${quote.price === Math.min(...selectedQuoteData.map(q => q.price))
                                                    ? 'text-success'
                                                    : 'text-primary'
                                                }`}>
                                                {formatCurrency(quote.price)}
                                            </span>
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="py-3 px-4 text-sm text-muted-foreground">Vendor Rating</td>
                                    {selectedQuoteData.map(quote => (
                                        <td key={quote.id} className="py-3 px-4">
                                            <div className="flex items-center gap-1">
                                                <Star className="w-4 h-4 text-warning fill-warning" />
                                                <span className="font-medium">{quote.vendor.rating}</span>
                                            </div>
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="py-3 px-4 text-sm text-muted-foreground">Delivery Time</td>
                                    {selectedQuoteData.map(quote => (
                                        <td key={quote.id} className="py-3 px-4">
                                            <span className={`font-medium ${quote.deliveryDays === Math.min(...selectedQuoteData.map(q => q.deliveryDays))
                                                    ? 'text-success'
                                                    : 'text-primary'
                                                }`}>
                                                {quote.deliveryDays} days
                                            </span>
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="py-3 px-4 text-sm text-muted-foreground">Warranty</td>
                                    {selectedQuoteData.map(quote => (
                                        <td key={quote.id} className="py-3 px-4 font-medium">{quote.warranty}</td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="py-3 px-4 text-sm text-muted-foreground">Response Time</td>
                                    {selectedQuoteData.map(quote => (
                                        <td key={quote.id} className="py-3 px-4 font-medium">{quote.vendor.responseTime}</td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="py-3 px-4 text-sm text-muted-foreground">Projects Completed</td>
                                    {selectedQuoteData.map(quote => (
                                        <td key={quote.id} className="py-3 px-4 font-medium">{quote.vendor.completedProjects}</td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="py-3 px-4 text-sm text-muted-foreground">Action</td>
                                    {selectedQuoteData.map(quote => (
                                        <td key={quote.id} className="py-3 px-4">
                                            {acceptedQuote === quote.id ? (
                                                <span className="badge badge-success">
                                                    <CheckCircle className="w-3 h-3" />
                                                    Accepted
                                                </span>
                                            ) : (
                                                <button
                                                    onClick={() => handleAccept(quote.id)}
                                                    className="btn btn-primary py-2"
                                                    disabled={!!acceptedQuote}
                                                >
                                                    Accept Quote
                                                </button>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* Quotes List */}
            <div className="space-y-4">
                {quotes.map((quote) => (
                    <div
                        key={quote.id}
                        className={`card p-6 transition-all ${selectedQuotes.includes(quote.id) ? 'ring-2 ring-primary' : ''
                            } ${acceptedQuote === quote.id ? 'ring-2 ring-success bg-success/5' : ''}`}
                    >
                        <div className="flex items-start gap-4">
                            {/* Selection Checkbox */}
                            <button
                                onClick={() => toggleQuoteSelection(quote.id)}
                                className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 mt-1 transition-colors ${selectedQuotes.includes(quote.id)
                                        ? 'bg-primary border-primary text-white'
                                        : 'border-border hover:border-primary'
                                    }`}
                            >
                                {selectedQuotes.includes(quote.id) && <Check className="w-4 h-4" />}
                            </button>

                            {/* Vendor Info */}
                            <div className="flex-1">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                                            <Building2 className="w-7 h-7 text-primary" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h3 className="text-lg font-semibold text-primary">{quote.vendor.name}</h3>
                                                {quote.recommended && (
                                                    <span className="badge badge-success">
                                                        <Award className="w-3 h-3" />
                                                        Recommended
                                                    </span>
                                                )}
                                                {acceptedQuote === quote.id && (
                                                    <span className="badge badge-success">
                                                        <CheckCircle className="w-3 h-3" />
                                                        Accepted
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                                                <span className="flex items-center gap-1">
                                                    <Star className="w-4 h-4 text-warning fill-warning" />
                                                    {quote.vendor.rating}
                                                </span>
                                                <span>{quote.vendor.completedProjects} projects</span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-3 h-3" />
                                                    {quote.vendor.responseTime} response
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-2xl font-bold text-primary">{formatCurrency(quote.price)}</p>
                                        <p className="text-sm text-muted-foreground">Valid until {new Date(quote.validUntil).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                                    </div>
                                </div>

                                {/* Quote Details */}
                                <div className="grid grid-cols-3 gap-4 p-4 bg-secondary rounded-xl mb-4">
                                    <div>
                                        <p className="text-xs text-muted-foreground uppercase">Delivery</p>
                                        <p className="font-semibold text-primary">{quote.deliveryDays} days</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground uppercase">Warranty</p>
                                        <p className="font-semibold text-primary">{quote.warranty}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground uppercase">Items</p>
                                        <p className="font-semibold text-primary">{quote.items.length} line items</p>
                                    </div>
                                </div>

                                {/* Line Items */}
                                <details className="group">
                                    <summary className="flex items-center gap-2 text-sm font-medium text-primary cursor-pointer list-none">
                                        <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                                        View Line Items
                                    </summary>
                                    <div className="mt-3 space-y-2 pl-6">
                                        {quote.items.map((item, idx) => (
                                            <div key={idx} className="flex items-center justify-between py-2 border-b border-border-light last:border-0">
                                                <span className="text-sm text-muted">{item.name}</span>
                                                <span className="text-sm font-medium text-primary">{formatCurrency(item.price)}</span>
                                            </div>
                                        ))}
                                    </div>
                                </details>

                                {/* Notes */}
                                {quote.notes && (
                                    <p className="mt-4 text-sm text-muted-foreground italic">&quot;{quote.notes}&quot;</p>
                                )}

                                {/* Actions */}
                                <div className="flex items-center justify-end gap-3 mt-4 pt-4 border-t border-border-light">
                                    <button className="btn btn-ghost text-muted-foreground">
                                        <X className="w-4 h-4" />
                                        Decline
                                    </button>
                                    <button className="btn btn-secondary">
                                        <FileText className="w-4 h-4" />
                                        Request Revision
                                    </button>
                                    {acceptedQuote === quote.id ? (
                                        <span className="btn bg-success text-white cursor-default">
                                            <CheckCircle className="w-4 h-4" />
                                            Quote Accepted
                                        </span>
                                    ) : (
                                        <button
                                            onClick={() => handleAccept(quote.id)}
                                            className="btn btn-primary"
                                            disabled={!!acceptedQuote}
                                        >
                                            <CheckCircle className="w-4 h-4" />
                                            Accept Quote
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
