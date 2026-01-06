'use client';

import { Wallet, TrendingUp, Calendar, Download, DollarSign, Clock, ChevronRight } from 'lucide-react';

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
    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-SA', {
            style: 'currency',
            currency: 'SAR',
            minimumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-primary">My Earnings</h1>
                    <p className="text-muted-foreground mt-1">Track your income and payment history</p>
                </div>
                <button className="px-4 py-2 border border-border rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-secondary transition-colors">
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

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-border">
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
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-border">
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
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-border">
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Earnings History */}
                <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
                    <div className="p-6 border-b border-border">
                        <h2 className="text-lg font-semibold text-primary">Earnings History</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-secondary">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Event</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Hours</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Rate</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Earnings</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                {earningsHistory.map((entry) => (
                                    <tr key={entry.id} className="hover:bg-secondary transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="text-sm text-primary">
                                                {new Date(entry.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="text-sm font-medium text-primary">{entry.event}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="text-sm text-muted-foreground">{entry.hours} hrs</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
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
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
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
                        <button className="w-full mt-4 py-2 text-center text-sm text-primary font-medium hover:underline">
                            Update Payment Info
                        </button>
                    </div>

                    {/* Tax Documents */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
                        <h3 className="font-semibold text-primary mb-4">Documents</h3>
                        <div className="space-y-2">
                            {['2025 Annual Statement', 'December Payslip', 'November Payslip'].map((doc, idx) => (
                                <button key={idx} className="w-full flex items-center justify-between p-3 bg-secondary rounded-xl hover:bg-secondary-dark transition-colors">
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
                        <button className="w-full py-2 bg-success text-white rounded-lg text-sm font-medium hover:bg-success/90 transition-colors">
                            Request Instant Payout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
