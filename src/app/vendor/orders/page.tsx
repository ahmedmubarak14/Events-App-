'use client';

import { useState } from 'react';
import { Package, Truck, Clock, CheckCircle, MapPin, Phone, Calendar, ChevronRight, AlertCircle } from 'lucide-react';

const orders = [
    {
        id: 'ORD-2026-001',
        title: 'LED Screens - Exhibition Hall',
        event: 'Riyadh Tech Expo 2026',
        client: 'Saudi Events Co.',
        deliveryDate: '2026-03-10',
        value: 125000,
        status: 'in_progress',
        progress: 65,
        items: ['50x LED Panels 4K', '10x Control Units', 'Installation Service'],
    },
    {
        id: 'ORD-2025-089',
        title: 'Wireless Microphones Package',
        event: 'Riyadh Season Opening',
        client: 'GEA Entertainment',
        deliveryDate: '2025-12-28',
        value: 32000,
        status: 'delivered',
        progress: 100,
        items: ['20x Wireless Mics', '4x Receivers', '2x Mixing Consoles'],
    },
    {
        id: 'ORD-2025-088',
        title: 'Sound System for Conference',
        event: 'Saudi Future Forum',
        client: 'MiSK Foundation',
        deliveryDate: '2025-12-20',
        value: 45000,
        status: 'delivered',
        progress: 100,
        items: ['8x Line Array Speakers', '4x Subwoofers', 'Complete Setup'],
    },
];

const statusConfig: { [key: string]: { label: string; color: string; icon: React.ElementType } } = {
    pending: { label: 'Pending', color: 'warning', icon: Clock },
    in_progress: { label: 'In Progress', color: 'info', icon: Package },
    shipped: { label: 'Shipped', color: 'accent', icon: Truck },
    delivered: { label: 'Delivered', color: 'success', icon: CheckCircle },
};

export default function VendorOrdersPage() {
    const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-primary">Active Orders</h1>
                    <p className="text-muted-foreground mt-1">Track and manage your current orders</p>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="card p-4">
                    <p className="text-2xl font-bold text-primary">{orders.length}</p>
                    <p className="text-sm text-muted-foreground">Total Orders</p>
                </div>
                <div className="card p-4">
                    <p className="text-2xl font-bold text-info">{orders.filter(o => o.status === 'in_progress').length}</p>
                    <p className="text-sm text-muted-foreground">In Progress</p>
                </div>
                <div className="card p-4">
                    <p className="text-2xl font-bold text-success">{orders.filter(o => o.status === 'delivered').length}</p>
                    <p className="text-sm text-muted-foreground">Delivered</p>
                </div>
                <div className="card p-4">
                    <p className="text-2xl font-bold text-primary">SAR {(orders.reduce((sum, o) => sum + o.value, 0) / 1000).toFixed(0)}K</p>
                    <p className="text-sm text-muted-foreground">Total Value</p>
                </div>
            </div>

            {/* Orders List */}
            <div className="space-y-4">
                {orders.map((order) => {
                    const config = statusConfig[order.status];
                    const StatusIcon = config.icon;

                    return (
                        <div key={order.id} className="card overflow-hidden">
                            <div className="p-5">
                                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 flex-wrap">
                                            <h3 className="font-semibold text-primary">{order.title}</h3>
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium bg-${config.color}/10 text-${config.color} flex items-center gap-1`}>
                                                <StatusIcon className="w-3 h-3" />
                                                {config.label}
                                            </span>
                                        </div>
                                        <p className="text-sm text-muted-foreground mt-1">{order.event} • {order.client}</p>
                                        <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                                            <span className="flex items-center gap-1">
                                                <Package className="w-4 h-4" />
                                                {order.id}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                Delivery: {new Date(order.deliveryDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xl font-bold text-primary">SAR {order.value.toLocaleString()}</p>
                                        <p className="text-sm text-muted-foreground">Order Value</p>
                                    </div>
                                </div>

                                {/* Progress Bar */}
                                {order.status !== 'delivered' && (
                                    <div className="mt-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm text-muted-foreground">Progress</span>
                                            <span className="text-sm font-medium text-primary">{order.progress}%</span>
                                        </div>
                                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-info rounded-full transition-all"
                                                style={{ width: `${order.progress}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                )}

                                {/* Order Items */}
                                <div className="mt-4 pt-4 border-t border-border-light">
                                    <p className="text-sm font-medium text-primary mb-2">Order Items</p>
                                    <div className="flex flex-wrap gap-2">
                                        {order.items.map((item, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-secondary rounded-full text-xs text-muted-foreground">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="px-5 py-3 bg-secondary-light border-t border-border-light flex items-center justify-between">
                                <button className="text-sm text-primary font-medium hover:text-accent transition-colors flex items-center gap-1">
                                    View Details
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                                {order.status === 'in_progress' && (
                                    <button className="btn btn-primary btn-sm">
                                        Update Status
                                    </button>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
