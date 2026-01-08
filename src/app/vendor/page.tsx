'use client';

import { Inbox, FileText, Package, DollarSign, TrendingUp, Clock, Star, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const stats = {
    newRfqs: 3,
    pendingQuotes: 5,
    activeOrders: 2,
    monthlyRevenue: 485000,
    winRate: 67,
};

const recentRfqs = [
    { id: 'rfq-001', title: 'Sound System for 5,000 pax', event: 'Riyadh Tech Expo', budget: '150K-200K', deadline: '2 days', urgent: true },
    { id: 'rfq-002', title: 'LED Wall 20x10m', event: 'Saudi Cup 2026', budget: '80K-120K', deadline: '5 days', urgent: false },
    { id: 'rfq-003', title: 'Stage Monitors x20', event: 'Jeddah Music Fest', budget: '50K-70K', deadline: '3 days', urgent: true },
];

const activeOrders = [
    { id: 'ord-001', event: 'New Year Gala', value: 95000, status: 'In Progress', progress: 75 },
    { id: 'ord-002', event: 'Winter Festival', value: 45000, status: 'Delivered', progress: 100 },
];

export default function VendorDashboard() {
    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-SA', {
            style: 'currency',
            currency: 'SAR',
            minimumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <div className="space-y-6">
            {/* Welcome Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-primary">Welcome back, Saudi Sound Systems 👋</h1>
                    <p className="text-muted-foreground mt-1">Here&apos;s your business overview for today</p>
                </div>
                <Link
                    href="/vendor/rfq"
                    className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-light transition-colors flex items-center gap-2"
                >
                    <Inbox className="w-4 h-4" />
                    View New RFQs ({stats.newRfqs})
                </Link>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-danger/10 rounded-xl flex items-center justify-center">
                            <Inbox className="w-5 h-5 text-danger" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">New RFQs</p>
                            <p className="text-xl font-bold text-primary">{stats.newRfqs}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-warning/10 rounded-xl flex items-center justify-center">
                            <FileText className="w-5 h-5 text-warning" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Pending Quotes</p>
                            <p className="text-xl font-bold text-primary">{stats.pendingQuotes}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                            <Package className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Active Orders</p>
                            <p className="text-xl font-bold text-primary">{stats.activeOrders}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-success/10 rounded-xl flex items-center justify-center">
                            <DollarSign className="w-5 h-5 text-success" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">This Month</p>
                            <p className="text-xl font-bold text-primary">{formatCurrency(stats.monthlyRevenue)}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                            <TrendingUp className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Win Rate</p>
                            <p className="text-xl font-bold text-primary">{stats.winRate}%</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {/* New RFQs */}
                <div className="xl:col-span-2 bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
                    <div className="p-6 border-b border-border flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-primary">New RFQ Opportunities</h2>
                        <Link href="/vendor/rfq" className="text-sm text-primary font-medium hover:underline">
                            View All
                        </Link>
                    </div>
                    <div className="divide-y divide-border">
                        {recentRfqs.map((rfq) => (
                            <div key={rfq.id} className="p-4 hover:bg-secondary transition-colors">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                                        <Inbox className="w-5 h-5 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-medium text-primary">{rfq.title}</h3>
                                            {rfq.urgent && (
                                                <span className="px-2 py-0.5 bg-danger/10 text-danger text-xs font-medium rounded-full">
                                                    Urgent
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-sm text-muted-foreground mt-0.5">{rfq.event}</p>
                                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                                            <span className="flex items-center gap-1">
                                                <DollarSign className="w-3 h-3" />
                                                SAR {rfq.budget}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {rfq.deadline} left
                                            </span>
                                        </div>
                                    </div>
                                    <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-light transition-colors">
                                        Submit Quote
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Active Orders & Performance */}
                <div className="space-y-4">
                    {/* Active Orders */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold text-primary">Active Orders</h3>
                            <Link href="/vendor/orders" className="text-sm text-primary font-medium hover:underline">
                                View All
                            </Link>
                        </div>
                        <div className="space-y-3">
                            {activeOrders.map((order) => (
                                <div key={order.id} className="p-3 bg-secondary rounded-xl">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-medium text-primary">{order.event}</span>
                                        <span className="text-sm font-semibold text-primary">{formatCurrency(order.value)}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex-1 bg-white rounded-full h-2">
                                            <div
                                                className={`h-2 rounded-full ${order.progress === 100 ? 'bg-success' : 'bg-primary'}`}
                                                style={{ width: `${order.progress}%` }}
                                            ></div>
                                        </div>
                                        <span className="text-xs text-muted-foreground">{order.progress}%</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Performance Summary */}
                    <div className="bg-gradient-to-br from-success/10 to-success/5 rounded-2xl p-6 border border-success/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-success/20 rounded-xl flex items-center justify-center">
                                <Star className="w-5 h-5 text-success fill-success" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-primary">Vendor Rating</h3>
                                <p className="text-2xl font-bold text-primary">4.8 / 5.0</p>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">On-time Delivery</span>
                                <span className="font-medium text-success">98%</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">Quality Score</span>
                                <span className="font-medium text-success">4.9</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">Response Time</span>
                                <span className="font-medium text-success">&lt; 2 hrs</span>
                            </div>
                        </div>
                    </div>

                    {/* Compliance Status */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
                        <h3 className="font-semibold text-primary mb-4">Compliance Status</h3>
                        <div className="space-y-2">
                            {[
                                { name: 'Commercial Registration', status: 'valid' },
                                { name: 'VAT Certificate', status: 'valid' },
                                { name: 'Saudization Certificate', status: 'valid' },
                                { name: 'Insurance', status: 'expiring' },
                            ].map((doc, idx) => (
                                <div key={idx} className="flex items-center justify-between p-2">
                                    <span className="text-sm text-muted-foreground">{doc.name}</span>
                                    <span className={`flex items-center gap-1 text-xs font-medium ${doc.status === 'valid' ? 'text-success' : 'text-warning'
                                        }`}>
                                        {doc.status === 'valid' ? (
                                            <><CheckCircle className="w-3 h-3" /> Valid</>
                                        ) : (
                                            <><Clock className="w-3 h-3" /> Expiring Soon</>
                                        )}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
