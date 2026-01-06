'use client';

import { useState } from 'react';
import { Wallet, CreditCard, ArrowUpRight, ArrowDownLeft, Clock, CheckCircle, Zap, TrendingUp } from 'lucide-react';
import StatusBadge from '@/components/StatusBadge';
import { invoices, dashboardStats, Invoice } from '@/data/data';

export default function SupplifyPayPage() {
    const [walletBalance, setWalletBalance] = useState(dashboardStats.walletBalance);
    const [invoiceList, setInvoiceList] = useState<Invoice[]>(invoices);

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-SA', {
            style: 'currency',
            currency: 'SAR',
            minimumFractionDigits: 0,
        }).format(amount);
    };

    const handleFactoring = (id: string) => {
        const invoice = invoiceList.find((i) => i.id === id);
        if (!invoice || invoice.status === 'paid') return;

        const feeAmount = invoice.amount * (invoice.factoringFee / 100);
        const netAmount = invoice.amount - feeAmount;

        setWalletBalance((prev) => prev + netAmount);
        setInvoiceList((prev) =>
            prev.map((i) => (i.id === id ? { ...i, status: 'paid' } : i))
        );
    };

    const pendingInvoices = invoiceList.filter((i) => i.status !== 'paid');
    const totalPending = pendingInvoices.reduce((acc, i) => acc + i.amount, 0);

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-primary">Supplify Pay</h1>
                    <p className="text-muted-foreground mt-1">Manage payments, invoices, and vendor financing</p>
                </div>
                <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-light transition-colors flex items-center gap-2">
                    <CreditCard className="w-4 h-4" />
                    Add Funds
                </button>
            </div>

            {/* Wallet Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Main Wallet Card */}
                <div className="md:col-span-2 bg-gradient-to-br from-primary via-primary-dark to-primary rounded-2xl p-6 text-white relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/20 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-6">
                            <Wallet className="w-6 h-6" />
                            <span className="text-white/70">Supplify Wallet</span>
                        </div>

                        <p className="text-sm text-white/60 mb-1">Available Balance</p>
                        <p className="text-4xl font-bold mb-6">{formatCurrency(walletBalance)}</p>

                        <div className="flex gap-4">
                            <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors">
                                <ArrowUpRight className="w-4 h-4" />
                                Send
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors">
                                <ArrowDownLeft className="w-4 h-4" />
                                Request
                            </button>
                        </div>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="space-y-4">
                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-border">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-warning/10 rounded-xl flex items-center justify-center">
                                <Clock className="w-5 h-5 text-warning" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Pending Invoices</p>
                                <p className="text-xl font-bold text-primary">{formatCurrency(totalPending)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-border">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-success/10 rounded-xl flex items-center justify-center">
                                <TrendingUp className="w-5 h-5 text-success" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">This Month</p>
                                <p className="text-xl font-bold text-primary">{formatCurrency(950000)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Vendor Factoring Section */}
            <div className="bg-gradient-to-r from-success/5 to-accent/5 rounded-2xl p-6 border border-success/20">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-success rounded-xl flex items-center justify-center">
                        <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-primary">Vendor Factoring</h2>
                        <p className="text-sm text-muted-foreground">Get paid instantly on pending invoices</p>
                    </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                    Don&apos;t wait 30-60 days for payment. Use Supplify Factoring to receive funds immediately with a small processing fee.
                </p>
            </div>

            {/* Invoices Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
                <div className="p-6 border-b border-border">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-primary">Invoices</h2>
                        <div className="flex gap-2">
                            <button className="px-3 py-1.5 text-sm font-medium text-white bg-primary rounded-lg">All</button>
                            <button className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:bg-secondary rounded-lg">Pending</button>
                            <button className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:bg-secondary rounded-lg">Paid</button>
                        </div>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-secondary">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                    Invoice ID
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                    Vendor
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                    Amount
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                    Due Date
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {invoiceList.map((invoice) => (
                                <tr key={invoice.id} className="hover:bg-secondary transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="text-sm font-medium text-primary">{invoice.id.toUpperCase()}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="text-sm text-primary">{invoice.vendor}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="text-sm font-semibold text-primary">{formatCurrency(invoice.amount)}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="text-sm text-muted-foreground">
                                            {new Date(invoice.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <StatusBadge status={invoice.status as 'pending' | 'paid' | 'overdue'} size="sm" />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {invoice.status !== 'paid' ? (
                                            <button
                                                onClick={() => handleFactoring(invoice.id)}
                                                className="flex items-center gap-2 px-4 py-2 bg-success text-white rounded-lg text-sm font-medium hover:bg-success/90 transition-colors group"
                                            >
                                                <Zap className="w-4 h-4 group-hover:animate-pulse" />
                                                Get Paid Now
                                                <span className="text-xs opacity-80">({invoice.factoringFee}% fee)</span>
                                            </button>
                                        ) : (
                                            <span className="flex items-center gap-1 text-sm text-success">
                                                <CheckCircle className="w-4 h-4" />
                                                Paid
                                            </span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Transaction History Preview */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-primary">Recent Transactions</h2>
                    <button className="text-sm text-primary font-medium hover:underline">View All</button>
                </div>
                <div className="space-y-3">
                    {[
                        { type: 'out', vendor: 'Saudi Sound Systems', amount: 150000, date: 'Jan 3' },
                        { type: 'in', vendor: 'Factoring Payment', amount: 92625, date: 'Jan 2' },
                        { type: 'out', vendor: 'Desert Logistics Co.', amount: 45000, date: 'Jan 1' },
                    ].map((tx, idx) => (
                        <div key={idx} className="flex items-center gap-4 p-3 bg-secondary rounded-xl">
                            <div
                                className={`w-10 h-10 rounded-xl flex items-center justify-center ${tx.type === 'in' ? 'bg-success/10' : 'bg-primary/10'
                                    }`}
                            >
                                {tx.type === 'in' ? (
                                    <ArrowDownLeft className="w-5 h-5 text-success" />
                                ) : (
                                    <ArrowUpRight className="w-5 h-5 text-primary" />
                                )}
                            </div>
                            <div className="flex-1">
                                <p className="font-medium text-primary">{tx.vendor}</p>
                                <p className="text-xs text-muted-foreground">{tx.date}</p>
                            </div>
                            <span
                                className={`font-semibold ${tx.type === 'in' ? 'text-success' : 'text-primary'}`}
                            >
                                {tx.type === 'in' ? '+' : '-'}{formatCurrency(tx.amount)}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
