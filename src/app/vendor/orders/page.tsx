'use client';

import { useState } from 'react';
import { Package, Truck, Clock, CheckCircle, MapPin, Phone, Calendar, ChevronRight, AlertCircle, X } from 'lucide-react';

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
    const [showOrder, setShowOrder] = useState<string | null>(null);
    const [showStatusUpdate, setShowStatusUpdate] = useState<string | null>(null);

    const selectedOrder = orders.find(o => o.id === showOrder || o.id === showStatusUpdate);

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Order Details Modal */}
            {showOrder && selectedOrder && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-md w-full p-6 animate-scale-in">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-primary">Order Details</h3>
                            <button onClick={() => setShowOrder(null)} className="p-2 hover:bg-secondary rounded-lg">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="space-y-4">
                            <div className="p-4 bg-secondary rounded-xl">
                                <p className="text-sm text-muted-foreground">Order ID</p>
                                <p className="font-bold text-primary">{selectedOrder.id}</p>
                            </div>
                            <div className="p-4 bg-secondary rounded-xl">
                                <p className="text-sm text-muted-foreground">Title</p>
                                <p className="font-medium text-primary">{selectedOrder.title}</p>
                            </div>
                            <div className="p-4 bg-secondary rounded-xl">
                                <p className="text-sm text-muted-foreground">Event / Client</p>
                                <p className="font-medium text-primary">{selectedOrder.event}</p>
                                <p className="text-sm text-muted-foreground">{selectedOrder.client}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-secondary rounded-xl">
                                    <p className="text-sm text-muted-foreground">Value</p>
                                    <p className="font-bold text-xl text-primary">SAR {selectedOrder.value.toLocaleString()}</p>
                                </div>
                                <div className="p-4 bg-secondary rounded-xl">
                                    <p className="text-sm text-muted-foreground">Progress</p>
                                    <p className="font-bold text-xl text-primary">{selectedOrder.progress}%</p>
                                </div>
                            </div>
                            <div className="p-4 bg-secondary rounded-xl">
                                <p className="text-sm text-muted-foreground mb-2">Items</p>
                                <div className="flex flex-wrap gap-2">
                                    {selectedOrder.items.map((item, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-white border border-border rounded-full text-xs">{item}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <button onClick={() => setShowOrder(null)} className="w-full btn btn-primary mt-6">Close</button>
                    </div>
                </div>
            )}

            {/* Status Update Modal */}
            {showStatusUpdate && selectedOrder && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-sm w-full p-6 animate-scale-in">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-primary">Update Status</h3>
                            <button onClick={() => setShowStatusUpdate(null)} className="p-2 hover:bg-secondary rounded-lg">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <p className="text-muted-foreground mb-4">Update the status for {selectedOrder.id}</p>
                        <div className="space-y-2">
                            {['in_progress', 'shipped', 'delivered'].map((status) => {
                                const config = statusConfig[status];
                                const StatusIcon = config.icon;
                                return (
                                    <button
                                        key={status}
                                        onClick={() => setShowStatusUpdate(null)}
                                        className={`w-full flex items-center gap-3 p-4 border border-border rounded-xl hover:bg-secondary transition-colors ${selectedOrder.status === status ? 'bg-primary/5 border-primary' : ''}`}
                                    >
                                        <StatusIcon className={`w-5 h-5 text-${config.color}`} />
                                        <span className="flex-1 text-left font-medium">{config.label}</span>
                                        {selectedOrder.status === status && <CheckCircle className="w-5 h-5 text-success" />}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}

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
                                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <h3 className="font-semibold text-primary">{order.title}</h3>
                                            <span className={`px-2 py-0.5 rounded-full text-xs font-medium bg-${config.color}/10 text-${config.color} flex items-center gap-1`}>
                                                <StatusIcon className="w-3 h-3" />
                                                {config.label}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground flex-wrap">
                                            <span>{order.event}</span>
                                            <span>•</span>
                                            <span>{order.client}</span>
                                        </div>
                                        <div className="flex items-center gap-4 mt-2 text-sm flex-wrap">
                                            <span className="flex items-center gap-1 text-muted-foreground">
                                                <Calendar className="w-4 h-4" />
                                                Delivery: {new Date(order.deliveryDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                            </span>
                                            <span className="font-semibold text-primary">SAR {order.value.toLocaleString()}</span>
                                        </div>
                                    </div>

                                    {/* Progress */}
                                    {order.status === 'in_progress' && (
                                        <div className="w-full lg:w-48">
                                            <div className="flex items-center justify-between text-sm mb-1">
                                                <span className="text-muted-foreground">Progress</span>
                                                <span className="font-medium text-primary">{order.progress}%</span>
                                            </div>
                                            <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-info rounded-full transition-all"
                                                    style={{ width: `${order.progress}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    )}
                                </div>

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
                                <button
                                    onClick={() => setShowOrder(order.id)}
                                    className="text-sm text-primary font-medium hover:text-accent transition-colors flex items-center gap-1"
                                >
                                    View Details
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                                {order.status === 'in_progress' && (
                                    <button
                                        onClick={() => setShowStatusUpdate(order.id)}
                                        className="btn btn-primary btn-sm"
                                    >
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
