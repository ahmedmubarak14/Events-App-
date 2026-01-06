'use client';

import { useState } from 'react';
import { Wallet, Clock, CheckCircle, DollarSign, ArrowUpRight, Download, FileText, TrendingUp, CreditCard, Zap, X, Eye } from 'lucide-react';

// Mock invoice data
const invoices = [
    { id: 'INV-2024-001', event: 'Riyadh Tech Expo', amount: 175000, status: 'paid', date: '2025-12-15', paidDate: '2025-12-20' },
    { id: 'INV-2024-002', event: 'Saudi Cup 2026', amount: 85000, status: 'pending', date: '2026-01-02', dueDate: '2026-01-30' },
    { id: 'INV-2024-003', event: 'LEAP Tech 2026', amount: 42000, status: 'approved', date: '2026-01-05', dueDate: '2026-02-05' },
];

const recentPayments = [
    { id: 1, description: 'Payment for INV-2024-001', amount: 175000, date: '2025-12-20', type: 'credit' },
    { id: 2, description: 'Early payout fee', amount: -2625, date: '2025-12-18', type: 'debit' },
    { id: 3, description: 'Payment for INV-2024-098', amount: 65000, date: '2025-12-10', type: 'credit' },
];

export default function VendorPaymentsPage() {
    const [showEarlyPayout, setShowEarlyPayout] = useState(false);
    const [showCreateInvoice, setShowCreateInvoice] = useState(false);
    const [showExport, setShowExport] = useState(false);
    const [showBankDetails, setShowBankDetails] = useState(false);
    const [showInvoice, setShowInvoice] = useState<string | null>(null);
    const [exported, setExported] = useState(false);

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-SA', {
            style: 'currency',
            currency: 'SAR',
            minimumFractionDigits: 0,
        }).format(Math.abs(amount));
    };

    const pendingAmount = invoices
        .filter(inv => inv.status === 'approved' || inv.status === 'pending')
        .reduce((sum, inv) => sum + inv.amount, 0);

    const selectedInvoice = invoices.find(i => i.id === showInvoice);

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Create Invoice Modal */}
            {showCreateInvoice && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-md w-full p-6 animate-scale-in">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-primary">Create Invoice</h3>
                            <button onClick={() => setShowCreateInvoice(false)} className="p-2 hover:bg-secondary rounded-lg">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-primary mb-2">Event</label>
                                <select className="input">
                                    <option>Riyadh Tech Expo 2026</option>
                                    <option>Saudi Cup 2026</option>
                                    <option>LEAP Tech 2026</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-primary mb-2">Amount (SAR)</label>
                                <input type="number" className="input" placeholder="50000" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-primary mb-2">Description</label>
                                <textarea className="input" rows={3} placeholder="Service details..."></textarea>
                            </div>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button onClick={() => setShowCreateInvoice(false)} className="flex-1 btn btn-secondary">Cancel</button>
                            <button onClick={() => setShowCreateInvoice(false)} className="flex-1 btn btn-primary">Create Invoice</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Export Modal */}
            {showExport && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-sm w-full p-6 animate-scale-in">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-primary">Export Statements</h3>
                            <button onClick={() => setShowExport(false)} className="p-2 hover:bg-secondary rounded-lg">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="space-y-2">
                            {['PDF Statement', 'CSV Export', 'Excel Spreadsheet'].map((format, idx) => (
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

            {/* Bank Details Modal */}
            {showBankDetails && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-md w-full p-6 animate-scale-in">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-primary">Bank Account Details</h3>
                            <button onClick={() => setShowBankDetails(false)} className="p-2 hover:bg-secondary rounded-lg">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="space-y-4">
                            <div className="p-4 bg-secondary rounded-xl">
                                <p className="text-sm text-muted-foreground">Bank Name</p>
                                <p className="font-medium text-primary">Riyad Bank</p>
                            </div>
                            <div className="p-4 bg-secondary rounded-xl">
                                <p className="text-sm text-muted-foreground">Account Name</p>
                                <p className="font-medium text-primary">Saudi Sound Systems Co.</p>
                            </div>
                            <div className="p-4 bg-secondary rounded-xl">
                                <p className="text-sm text-muted-foreground">IBAN</p>
                                <p className="font-medium text-primary font-mono">SA44 2000 0001 2345 6789 1234</p>
                            </div>
                        </div>
                        <button onClick={() => setShowBankDetails(false)} className="w-full btn btn-primary mt-6">Close</button>
                    </div>
                </div>
            )}

            {/* View Invoice Modal */}
            {showInvoice && selectedInvoice && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-md w-full p-6 animate-scale-in">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-primary">Invoice Details</h3>
                            <button onClick={() => setShowInvoice(null)} className="p-2 hover:bg-secondary rounded-lg">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="space-y-4">
                            <div className="p-4 bg-secondary rounded-xl">
                                <p className="text-sm text-muted-foreground">Invoice Number</p>
                                <p className="font-medium text-primary">{selectedInvoice.id}</p>
                            </div>
                            <div className="p-4 bg-secondary rounded-xl">
                                <p className="text-sm text-muted-foreground">Event</p>
                                <p className="font-medium text-primary">{selectedInvoice.event}</p>
                            </div>
                            <div className="p-4 bg-secondary rounded-xl">
                                <p className="text-sm text-muted-foreground">Amount</p>
                                <p className="font-bold text-xl text-primary">{formatCurrency(selectedInvoice.amount)}</p>
                            </div>
                            <div className="p-4 bg-secondary rounded-xl">
                                <p className="text-sm text-muted-foreground">Status</p>
                                <p className={`font-medium capitalize ${selectedInvoice.status === 'paid' ? 'text-success' : 'text-warning'}`}>
                                    {selectedInvoice.status}
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button onClick={() => setShowInvoice(null)} className="flex-1 btn btn-secondary">
                                <Download className="w-4 h-4" />
                                Download
                            </button>
                            <button onClick={() => setShowInvoice(null)} className="flex-1 btn btn-primary">Close</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-primary">Payments</h1>
                    <p className="text-muted-foreground mt-1">Manage invoices and receive payments</p>
                </div>
                <button onClick={() => setShowCreateInvoice(true)} className="btn btn-primary">
                    <FileText className="w-4 h-4" />
                    Create Invoice
                </button>
            </div>

            {/* Wallet Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Balance Card */}
                <div className="lg:col-span-2 card gradient-primary p-6 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/20 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                                <Wallet className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-white/70 text-sm">Available Balance</p>
                                <p className="text-3xl font-bold">SAR 127,000</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-white/10 rounded-xl p-4">
                                <p className="text-white/70 text-xs uppercase">Pending</p>
                                <p className="text-lg font-bold">{formatCurrency(pendingAmount)}</p>
                            </div>
                            <div className="bg-white/10 rounded-xl p-4">
                                <p className="text-white/70 text-xs uppercase">This Month</p>
                                <p className="text-lg font-bold">SAR 175,000</p>
                            </div>
                            <div className="bg-white/10 rounded-xl p-4">
                                <p className="text-white/70 text-xs uppercase">YTD Total</p>
                                <p className="text-lg font-bold">SAR 1.2M</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="card p-6">
                    <h3 className="font-semibold text-primary mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                        <button
                            onClick={() => setShowEarlyPayout(true)}
                            className="w-full flex items-center gap-3 p-4 bg-success/10 border border-success/20 rounded-xl hover:bg-success/20 transition-colors text-left"
                        >
                            <div className="w-10 h-10 bg-success/20 rounded-xl flex items-center justify-center">
                                <Zap className="w-5 h-5 text-success" />
                            </div>
                            <div className="flex-1">
                                <p className="font-medium text-primary">Early Payout</p>
                                <p className="text-xs text-muted-foreground">Get paid in 24 hours</p>
                            </div>
                            <ArrowUpRight className="w-4 h-4 text-success" />
                        </button>

                        <button
                            onClick={() => setShowExport(true)}
                            className="w-full flex items-center gap-3 p-4 bg-secondary rounded-xl hover:bg-secondary-dark transition-colors text-left"
                        >
                            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                                <Download className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex-1">
                                <p className="font-medium text-primary">Export Statements</p>
                                <p className="text-xs text-muted-foreground">Download PDF/CSV</p>
                            </div>
                        </button>

                        <button
                            onClick={() => setShowBankDetails(true)}
                            className="w-full flex items-center gap-3 p-4 bg-secondary rounded-xl hover:bg-secondary-dark transition-colors text-left"
                        >
                            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                                <CreditCard className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex-1">
                                <p className="font-medium text-primary">Bank Details</p>
                                <p className="text-xs text-muted-foreground">View account info</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Early Payout Modal */}
            {showEarlyPayout && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-md w-full p-6 animate-scale-in">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 gradient-success rounded-xl flex items-center justify-center">
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-primary">Request Early Payout</h3>
                                <p className="text-sm text-muted-foreground">Get your approved invoices paid in 24h</p>
                            </div>
                        </div>

                        <div className="bg-secondary rounded-xl p-4 mb-4">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-muted-foreground">Approved Amount</span>
                                <span className="font-bold text-primary">SAR 42,000</span>
                            </div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-muted-foreground">Fee (1.5%)</span>
                                <span className="text-danger">- SAR 630</span>
                            </div>
                            <div className="border-t border-border-light pt-2 mt-2">
                                <div className="flex items-center justify-between">
                                    <span className="font-medium text-primary">You&apos;ll Receive</span>
                                    <span className="text-xl font-bold text-success">SAR 41,370</span>
                                </div>
                            </div>
                        </div>

                        <p className="text-xs text-muted-foreground mb-4">
                            Funds will be transferred to your registered bank account within 24 hours.
                        </p>

                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowEarlyPayout(false)}
                                className="flex-1 btn btn-secondary"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => setShowEarlyPayout(false)}
                                className="flex-1 btn btn-primary"
                            >
                                Request Payout
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Invoices Table */}
            <div className="card">
                <div className="flex items-center justify-between p-5 border-b border-border-light">
                    <h3 className="font-semibold text-primary">Invoices</h3>
                    <div className="flex gap-2">
                        <select className="input py-2 px-3 text-sm w-auto">
                            <option>All Status</option>
                            <option>Pending</option>
                            <option>Approved</option>
                            <option>Paid</option>
                        </select>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-border-light">
                                <th className="text-left py-3 px-5 text-xs font-semibold text-muted-foreground uppercase">Invoice</th>
                                <th className="text-left py-3 px-5 text-xs font-semibold text-muted-foreground uppercase hidden md:table-cell">Event</th>
                                <th className="text-left py-3 px-5 text-xs font-semibold text-muted-foreground uppercase">Amount</th>
                                <th className="text-left py-3 px-5 text-xs font-semibold text-muted-foreground uppercase hidden md:table-cell">Date</th>
                                <th className="text-left py-3 px-5 text-xs font-semibold text-muted-foreground uppercase">Status</th>
                                <th className="text-right py-3 px-5 text-xs font-semibold text-muted-foreground uppercase">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border-light">
                            {invoices.map((invoice) => (
                                <tr key={invoice.id} className="hover:bg-secondary-light transition-colors">
                                    <td className="py-4 px-5">
                                        <span className="font-medium text-primary">{invoice.id}</span>
                                    </td>
                                    <td className="py-4 px-5 text-muted hidden md:table-cell">{invoice.event}</td>
                                    <td className="py-4 px-5 font-semibold text-primary">{formatCurrency(invoice.amount)}</td>
                                    <td className="py-4 px-5 text-muted hidden md:table-cell">{new Date(invoice.date).toLocaleDateString()}</td>
                                    <td className="py-4 px-5">
                                        <span className={`badge ${invoice.status === 'paid' ? 'badge-success' :
                                            invoice.status === 'approved' ? 'badge-accent' : 'badge-warning'
                                            }`}>
                                            {invoice.status === 'paid' && <CheckCircle className="w-3 h-3" />}
                                            {invoice.status === 'approved' && <CheckCircle className="w-3 h-3" />}
                                            {invoice.status === 'pending' && <Clock className="w-3 h-3" />}
                                            {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                                        </span>
                                    </td>
                                    <td className="py-4 px-5 text-right">
                                        <button
                                            onClick={() => setShowInvoice(invoice.id)}
                                            className="text-sm text-accent hover:underline flex items-center gap-1 ml-auto"
                                        >
                                            <Eye className="w-4 h-4" />
                                            View
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="card">
                <div className="p-5 border-b border-border-light">
                    <h3 className="font-semibold text-primary">Recent Activity</h3>
                </div>
                <div className="divide-y divide-border-light">
                    {recentPayments.map((payment) => (
                        <div key={payment.id} className="flex items-center justify-between p-4 hover:bg-secondary-light transition-colors">
                            <div className="flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${payment.type === 'credit' ? 'bg-success/10' : 'bg-danger/10'
                                    }`}>
                                    {payment.type === 'credit' ? (
                                        <TrendingUp className="w-5 h-5 text-success" />
                                    ) : (
                                        <DollarSign className="w-5 h-5 text-danger" />
                                    )}
                                </div>
                                <div>
                                    <p className="font-medium text-primary">{payment.description}</p>
                                    <p className="text-sm text-muted-foreground">{new Date(payment.date).toLocaleDateString()}</p>
                                </div>
                            </div>
                            <span className={`font-semibold ${payment.type === 'credit' ? 'text-success' : 'text-danger'}`}>
                                {payment.type === 'credit' ? '+' : ''}{formatCurrency(payment.amount)}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
