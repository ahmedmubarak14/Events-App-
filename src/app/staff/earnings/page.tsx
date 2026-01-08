'use client';

import { useState } from 'react';
import { Wallet, TrendingUp, Calendar, Download, DollarSign, Clock, ChevronRight, X, CheckCircle, FileText } from 'lucide-react';

// Mock earnings data
const earningsHistory = [
    { id: 'earn-001', event: 'Riyadh Tech Expo', date: '2026-01-04', hours: 8, rate: 75, earnings: 600, status: 'pending' },
    { id: 'earn-002', event: 'Riyadh Tech Expo', date: '2026-01-03', hours: 8, rate: 75, earnings: 600, status: 'pending' },
    { id: 'earn-003', event: 'Riyadh Tech Expo', date: '2026-01-02', hours: 8, rate: 75, earnings: 600, status: 'paid' },
    { id: 'earn-004', event: 'New Year Gala', date: '2025-12-31', hours: 10, rate: 95, earnings: 950, status: 'paid' },
    { id: 'earn-005', event: 'Christmas Market', date: '2025-12-24', hours: 8, rate: 75, earnings: 600, status: 'paid' },
    { id: 'earn-006', event: 'Winter Festival', date: '2025-12-20', hours: 8, rate: 75, earnings: 600, status: 'paid' },
];

const monthlyStats = {
    totalEarnings: 4800,
    hoursWorked: 64,
    avgHourlyRate: 75,
    pendingPayment: 1200,
    eventsCompleted: 8,
};

export default function StaffEarningsPage() {
    const [showExport, setShowExport] = useState(false);
    const [showPaymentUpdate, setShowPaymentUpdate] = useState(false);
    const [showDocument, setShowDocument] = useState<string | null>(null);
    const [showInstantPayout, setShowInstantPayout] = useState(false);
    const [exported, setExported] = useState(false);

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-SA', {
            style: 'currency',
            currency: 'SAR',
            minimumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <div className="space-y-6">
            {/* Export Modal */}
            {showExport && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-sm w-full p-6 animate-scale-in">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-primary">Export Payslips</h3>
                            <button onClick={() => setShowExport(false)} className="p-2 hover:bg-secondary rounded-lg">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="space-y-2">
                            {['All Payslips (PDF)', 'This Month (PDF)', 'Tax Summary (CSV)'].map((format, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => { setExported(true); setTimeout(() => { setExported(false); setShowExport(false); }, 1500); }}
                                    className="w-full flex items-center gap-3 p-4 border border-border rounded-xl hover:bg-secondary transition-colors"
                                >
                                    <Download className="w-5 h-5 text-primary" />
                                    <span className="flex-1 text-left font-medium">{format}</span>
                                    {exported && <CheckCircle className="w-5 h-5 text-success" />}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Payment Update Modal */}
            {showPaymentUpdate && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-md w-full p-6 animate-scale-in">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-primary">Update Payment Info</h3>
                            <button onClick={() => setShowPaymentUpdate(false)} className="p-2 hover:bg-secondary rounded-lg">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-primary mb-2">Bank Name</label>
                                <select className="input">
                                    <option>Al Rajhi Bank</option>
                                    <option>Riyad Bank</option>
                                    <option>Saudi National Bank</option>
                                    <option>Alinma Bank</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-primary mb-2">IBAN</label>
                                <input type="text" className="input" placeholder="SA44 0000 0000 0000 0000 0000" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-primary mb-2">Account Holder Name</label>
                                <input type="text" className="input" defaultValue="Faisal Al-Rashid" />
                            </div>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button onClick={() => setShowPaymentUpdate(false)} className="flex-1 btn btn-secondary">Cancel</button>
                            <button onClick={() => setShowPaymentUpdate(false)} className="flex-1 btn btn-primary">Save Changes</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Document View Modal */}
            {showDocument && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-md w-full p-6 animate-scale-in">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-primary">{showDocument}</h3>
                            <button onClick={() => setShowDocument(null)} className="p-2 hover:bg-secondary rounded-lg">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-8 bg-secondary rounded-xl text-center">
                            <FileText className="w-16 h-16 text-primary mx-auto mb-4" />
                            <p className="text-muted-foreground">Document Preview</p>
                            <p className="text-sm text-muted-foreground mt-2">{showDocument}</p>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button onClick={() => setShowDocument(null)} className="flex-1 btn btn-secondary">Close</button>
                            <button onClick={() => setShowDocument(null)} className="flex-1 btn btn-primary">
                                <Download className="w-4 h-4" />
                                Download
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Instant Payout Modal */}
            {showInstantPayout && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-md w-full p-6 animate-scale-in">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-success/20 rounded-xl flex items-center justify-center">
                                <Wallet className="w-6 h-6 text-success" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-primary">Instant Payout</h3>
                                <p className="text-sm text-muted-foreground">Get your earnings now</p>
                            </div>
                        </div>
                        <div className="p-4 bg-secondary rounded-xl mb-4">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-muted-foreground">Pending Amount</span>
                                <span className="font-bold text-primary">{formatCurrency(monthlyStats.pendingPayment)}</span>
                            </div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-muted-foreground">Processing Fee (1.5%)</span>
                                <span className="text-danger">- {formatCurrency(monthlyStats.pendingPayment * 0.015)}</span>
                            </div>
                            <div className="border-t border-border-light pt-2 mt-2">
                                <div className="flex items-center justify-between">
                                    <span className="font-medium text-primary">You&apos;ll Receive</span>
                                    <span className="text-xl font-bold text-success">{formatCurrency(monthlyStats.pendingPayment * 0.985)}</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground mb-4">
                            Funds will be transferred to your Al Rajhi Bank account within 30 minutes.
                        </p>
                        <div className="flex gap-3">
                            <button onClick={() => setShowInstantPayout(false)} className="flex-1 btn btn-secondary">Cancel</button>
                            <button onClick={() => setShowInstantPayout(false)} className="flex-1 btn btn-primary">Confirm Payout</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-primary">My Earnings</h1>
                    <p className="text-muted-foreground mt-1">Track your income and payment history</p>
                </div>
                <button
                    onClick={() => setShowExport(true)}
                    className="btn btn-secondary"
                >
                    <Download className="w-4 h-4" />
                    Export Payslips
                </button>
            </div>

            {/* Earnings Overview */}
            <div className="bg-gradient-to-br from-primary via-primary-dark to-primary rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-4">
                        <Wallet className="w-5 h-5" />
                        <span className="text-white/70">January 2026</span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div>
                            <p className="text-white/60 text-sm mb-1">Total Earnings</p>
                            <p className="text-3xl font-bold">{formatCurrency(monthlyStats.totalEarnings)}</p>
                        </div>
                        <div>
                            <p className="text-white/60 text-sm mb-1">Hours Worked</p>
                            <p className="text-3xl font-bold">{monthlyStats.hoursWorked} hrs</p>
                        </div>
                        <div>
                            <p className="text-white/60 text-sm mb-1">Avg Hourly Rate</p>
                            <p className="text-3xl font-bold">{formatCurrency(monthlyStats.avgHourlyRate)}</p>
                        </div>
                        <div>
                            <p className="text-white/60 text-sm mb-1">Pending Payment</p>
                            <p className="text-3xl font-bold text-warning">{formatCurrency(monthlyStats.pendingPayment)}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="card p-5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-success/10 rounded-xl flex items-center justify-center">
                            <TrendingUp className="w-5 h-5 text-success" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">vs Last Month</p>
                            <p className="text-xl font-bold text-success">+12%</p>
                        </div>
                    </div>
                </div>
                <div className="card p-5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                            <Calendar className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Events Completed</p>
                            <p className="text-xl font-bold text-primary">{monthlyStats.eventsCompleted}</p>
                        </div>
                    </div>
                </div>
                <div className="card p-5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                            <Clock className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Next Payout</p>
                            <p className="text-xl font-bold text-primary">Jan 10</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {/* Earnings History */}
                <div className="xl:col-span-2 card overflow-hidden">
                    <div className="p-6 border-b border-border-light">
                        <h2 className="text-lg font-semibold text-primary">Earnings History</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-secondary">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase hidden md:table-cell">Event</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Hours</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase hidden md:table-cell">Rate</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Earnings</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border-light">
                                {earningsHistory.map((entry) => (
                                    <tr key={entry.id} className="hover:bg-secondary-light transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="text-sm text-primary">
                                                {new Date(entry.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                                            <span className="text-sm font-medium text-primary">{entry.event}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="text-sm text-muted-foreground">{entry.hours} hrs</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                                            <span className="text-sm text-muted-foreground">{formatCurrency(entry.rate)}/hr</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="text-sm font-semibold text-primary">{formatCurrency(entry.earnings)}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${entry.status === 'paid'
                                                ? 'bg-emerald-100 text-emerald-700'
                                                : 'bg-amber-100 text-amber-700'
                                                }`}>
                                                {entry.status.charAt(0).toUpperCase() + entry.status.slice(1)}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Payment Info */}
                <div className="space-y-4">
                    {/* Bank Account */}
                    <div className="card p-6">
                        <h3 className="font-semibold text-primary mb-4">Payment Method</h3>
                        <div className="p-4 bg-secondary rounded-xl">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                    <DollarSign className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium text-primary">Al Rajhi Bank</p>
                                    <p className="text-sm text-muted-foreground">••••••••5678</p>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => setShowPaymentUpdate(true)}
                            className="w-full mt-4 py-2 text-center text-sm text-primary font-medium hover:underline"
                        >
                            Update Payment Info
                        </button>
                    </div>

                    {/* Tax Documents */}
                    <div className="card p-6">
                        <h3 className="font-semibold text-primary mb-4">Documents</h3>
                        <div className="space-y-2">
                            {['2025 Annual Statement', 'December Payslip', 'November Payslip'].map((doc, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setShowDocument(doc)}
                                    className="w-full flex items-center justify-between p-3 bg-secondary rounded-xl hover:bg-secondary-dark transition-colors"
                                >
                                    <span className="text-sm text-primary">{doc}</span>
                                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quick Payout */}
                    <div className="bg-gradient-to-br from-success/10 to-success/5 rounded-2xl p-6 border border-success/20">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-success/20 rounded-xl flex items-center justify-center">
                                <Wallet className="w-5 h-5 text-success" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-primary">Instant Payout</h3>
                                <p className="text-xs text-muted-foreground">Get paid now (1.5% fee)</p>
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                            Eligible amount: {formatCurrency(monthlyStats.pendingPayment)}
                        </p>
                        <button
                            onClick={() => setShowInstantPayout(true)}
                            className="w-full py-2 bg-success text-white rounded-lg text-sm font-medium hover:bg-success/90 transition-colors"
                        >
                            Request Instant Payout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
