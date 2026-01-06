'use client';

import { useState } from 'react';
import { FileText, Download, Eye, Clock, CheckCircle, AlertCircle, DollarSign, Filter, Send, X } from 'lucide-react';

const invoices = [
    {
        id: 'INV-2026-001',
        order: 'LED Screens - Exhibition Hall',
        client: 'Saudi Events Co.',
        issueDate: '2026-01-05',
        dueDate: '2026-01-20',
        amount: 125000,
        status: 'pending',
    },
    {
        id: 'INV-2025-045',
        order: 'Wireless Microphones Package',
        client: 'GEA Entertainment',
        issueDate: '2025-12-28',
        dueDate: '2026-01-12',
        amount: 32000,
        status: 'paid',
        paidDate: '2026-01-05',
    },
    {
        id: 'INV-2025-044',
        order: 'Sound System for Conference',
        client: 'MiSK Foundation',
        issueDate: '2025-12-20',
        dueDate: '2026-01-04',
        amount: 45000,
        status: 'paid',
        paidDate: '2025-12-30',
    },
    {
        id: 'INV-2025-040',
        order: 'Concert Audio Package',
        client: 'Riyadh Season',
        issueDate: '2025-12-10',
        dueDate: '2025-12-25',
        amount: 78000,
        status: 'overdue',
    },
];

const statusColors: { [key: string]: { bg: string; text: string; icon: React.ElementType } } = {
    pending: { bg: 'bg-warning/10', text: 'text-warning', icon: Clock },
    paid: { bg: 'bg-success/10', text: 'text-success', icon: CheckCircle },
    overdue: { bg: 'bg-danger/10', text: 'text-danger', icon: AlertCircle },
};

export default function VendorInvoicesPage() {
    const [filter, setFilter] = useState('all');
    const [showCreateInvoice, setShowCreateInvoice] = useState(false);
    const [showInvoice, setShowInvoice] = useState<string | null>(null);
    const [reminderSent, setReminderSent] = useState<string | null>(null);

    const filteredInvoices = invoices.filter(inv => filter === 'all' || inv.status === filter);
    const totalPaid = invoices.filter(i => i.status === 'paid').reduce((sum, i) => sum + i.amount, 0);
    const totalPending = invoices.filter(i => i.status === 'pending').reduce((sum, i) => sum + i.amount, 0);
    const totalOverdue = invoices.filter(i => i.status === 'overdue').reduce((sum, i) => sum + i.amount, 0);

    const selectedInvoice = invoices.find(i => i.id === showInvoice);

    const handleSendReminder = (id: string) => {
        setReminderSent(id);
        setTimeout(() => setReminderSent(null), 2000);
    };

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
                                <label className="block text-sm font-medium text-primary mb-2">Client</label>
                                <select className="input">
                                    <option>Saudi Events Co.</option>
                                    <option>GEA Entertainment</option>
                                    <option>MiSK Foundation</option>
                                    <option>Riyadh Season</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-primary mb-2">Order/Service</label>
                                <input type="text" className="input" placeholder="Enter service description" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-primary mb-2">Amount (SAR)</label>
                                    <input type="number" className="input" placeholder="50000" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-primary mb-2">Due Date</label>
                                    <input type="date" className="input" />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button onClick={() => setShowCreateInvoice(false)} className="flex-1 btn btn-secondary">Cancel</button>
                            <button onClick={() => setShowCreateInvoice(false)} className="flex-1 btn btn-primary">Create Invoice</button>
                        </div>
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
                                <p className="font-bold text-primary">{selectedInvoice.id}</p>
                            </div>
                            <div className="p-4 bg-secondary rounded-xl">
                                <p className="text-sm text-muted-foreground">Client</p>
                                <p className="font-medium text-primary">{selectedInvoice.client}</p>
                            </div>
                            <div className="p-4 bg-secondary rounded-xl">
                                <p className="text-sm text-muted-foreground">Order/Service</p>
                                <p className="font-medium text-primary">{selectedInvoice.order}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-secondary rounded-xl">
                                    <p className="text-sm text-muted-foreground">Amount</p>
                                    <p className="font-bold text-xl text-primary">SAR {selectedInvoice.amount.toLocaleString()}</p>
                                </div>
                                <div className="p-4 bg-secondary rounded-xl">
                                    <p className="text-sm text-muted-foreground">Status</p>
                                    <p className={`font-medium capitalize ${selectedInvoice.status === 'paid' ? 'text-success' : selectedInvoice.status === 'overdue' ? 'text-danger' : 'text-warning'}`}>
                                        {selectedInvoice.status}
                                    </p>
                                </div>
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
                    <h1 className="text-2xl font-bold text-primary">Invoices</h1>
                    <p className="text-muted-foreground mt-1">Manage and track your invoices</p>
                </div>
                <button onClick={() => setShowCreateInvoice(true)} className="btn btn-primary">
                    <FileText className="w-4 h-4" />
                    Create Invoice
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="card p-4">
                    <p className="text-2xl font-bold text-primary">{invoices.length}</p>
                    <p className="text-sm text-muted-foreground">Total Invoices</p>
                </div>
                <div className="card p-4">
                    <p className="text-2xl font-bold text-success">SAR {(totalPaid / 1000).toFixed(0)}K</p>
                    <p className="text-sm text-muted-foreground">Paid</p>
                </div>
                <div className="card p-4">
                    <p className="text-2xl font-bold text-warning">SAR {(totalPending / 1000).toFixed(0)}K</p>
                    <p className="text-sm text-muted-foreground">Pending</p>
                </div>
                <div className="card p-4">
                    <p className="text-2xl font-bold text-danger">SAR {(totalOverdue / 1000).toFixed(0)}K</p>
                    <p className="text-sm text-muted-foreground">Overdue</p>
                </div>
            </div>

            {/* Filter */}
            <div className="flex gap-2 flex-wrap">
                {['all', 'pending', 'paid', 'overdue'].map((status) => (
                    <button
                        key={status}
                        onClick={() => setFilter(status)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors capitalize ${filter === status
                            ? 'bg-primary text-white'
                            : 'bg-secondary text-muted-foreground hover:bg-secondary-dark'
                            }`}
                    >
                        {status === 'all' ? 'All' : status}
                    </button>
                ))}
            </div>

            {/* Invoices List */}
            <div className="card">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-border-light">
                                <th className="text-left p-4 text-xs font-semibold uppercase text-muted-foreground">Invoice</th>
                                <th className="text-left p-4 text-xs font-semibold uppercase text-muted-foreground hidden md:table-cell">Client</th>
                                <th className="text-left p-4 text-xs font-semibold uppercase text-muted-foreground hidden md:table-cell">Due Date</th>
                                <th className="text-left p-4 text-xs font-semibold uppercase text-muted-foreground">Amount</th>
                                <th className="text-left p-4 text-xs font-semibold uppercase text-muted-foreground">Status</th>
                                <th className="text-right p-4 text-xs font-semibold uppercase text-muted-foreground">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border-light">
                            {filteredInvoices.map((invoice) => {
                                const config = statusColors[invoice.status];
                                const StatusIcon = config.icon;

                                return (
                                    <tr key={invoice.id} className="hover:bg-secondary-light transition-colors">
                                        <td className="p-4">
                                            <p className="font-medium text-primary">{invoice.id}</p>
                                            <p className="text-sm text-muted-foreground">{invoice.order}</p>
                                        </td>
                                        <td className="p-4 text-sm text-muted-foreground hidden md:table-cell">{invoice.client}</td>
                                        <td className="p-4 text-sm text-muted-foreground hidden md:table-cell">
                                            {new Date(invoice.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </td>
                                        <td className="p-4">
                                            <p className="font-semibold text-primary">SAR {invoice.amount.toLocaleString()}</p>
                                        </td>
                                        <td className="p-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${config.bg} ${config.text} flex items-center gap-1 w-fit`}>
                                                <StatusIcon className="w-3 h-3" />
                                                {invoice.status}
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex items-center justify-end gap-1">
                                                <button
                                                    onClick={() => setShowInvoice(invoice.id)}
                                                    className="p-2 hover:bg-secondary rounded-lg transition-colors"
                                                    title="View"
                                                >
                                                    <Eye className="w-4 h-4 text-muted-foreground" />
                                                </button>
                                                <button
                                                    onClick={() => alert('Downloading invoice...')}
                                                    className="p-2 hover:bg-secondary rounded-lg transition-colors"
                                                    title="Download"
                                                >
                                                    <Download className="w-4 h-4 text-muted-foreground" />
                                                </button>
                                                {invoice.status === 'pending' && (
                                                    <button
                                                        onClick={() => handleSendReminder(invoice.id)}
                                                        className="p-2 hover:bg-secondary rounded-lg transition-colors"
                                                        title="Send Reminder"
                                                    >
                                                        {reminderSent === invoice.id ? (
                                                            <CheckCircle className="w-4 h-4 text-success" />
                                                        ) : (
                                                            <Send className="w-4 h-4 text-muted-foreground" />
                                                        )}
                                                    </button>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
