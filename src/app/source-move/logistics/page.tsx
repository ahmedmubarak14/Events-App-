'use client';

import { Truck, Package, Leaf, MapPin, Calendar, TrendingDown } from 'lucide-react';
import StatusBadge from '@/components/StatusBadge';
import { shipments } from '@/data/data';

export default function LogisticsPage() {
    const totalCO2Saved = shipments.reduce((acc, s) => acc + s.co2Saved, 0);

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-primary">Green Logistics</h1>
                    <p className="text-muted-foreground mt-1">Track shipments and monitor environmental impact</p>
                </div>
                <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-light transition-colors flex items-center gap-2">
                    <Truck className="w-4 h-4" />
                    New Shipment
                </button>
            </div>

            {/* Green Impact Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-success to-success/80 rounded-2xl p-6 text-white">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                            <Leaf className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-white/70 text-sm">Total CO₂ Saved</p>
                            <p className="text-2xl font-bold">{totalCO2Saved} kg</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                            <Package className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <p className="text-muted-foreground text-sm">Active Shipments</p>
                            <p className="text-2xl font-bold text-primary">{shipments.filter(s => s.status !== 'delivered').length}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                            <TrendingDown className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                            <p className="text-muted-foreground text-sm">Emissions Reduction</p>
                            <p className="text-2xl font-bold text-primary">23%</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shipment Tracking Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
                <div className="p-6 border-b border-border">
                    <h2 className="text-lg font-semibold text-primary">Shipment Tracking</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-secondary">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                    Shipment ID
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                    Vendor
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                    Items
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                    Route
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                    ETA
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                    CO₂ Saved
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {shipments.map((shipment) => (
                                <tr key={shipment.id} className="hover:bg-secondary transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="text-sm font-medium text-primary">{shipment.id.toUpperCase()}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="text-sm text-primary">{shipment.vendor}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-sm text-muted-foreground">{shipment.items}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <MapPin className="w-3 h-3" />
                                            {shipment.origin} → {shipment.destination}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <StatusBadge status={shipment.status} size="sm" />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                            <Calendar className="w-3 h-3" />
                                            {new Date(shipment.estimatedArrival).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-success/10 text-success text-sm font-medium rounded-full">
                                            <Leaf className="w-3 h-3" />
                                            {shipment.co2Saved} kg
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Green Initiative Banner */}
            <div className="bg-gradient-to-r from-success/10 to-primary/10 rounded-2xl p-6 border border-success/20">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-success/20 rounded-2xl flex items-center justify-center">
                        <span className="text-3xl">🌱</span>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold text-primary">Vision 2030 Green Initiative</h3>
                        <p className="text-muted-foreground mt-1">
                            This event is committed to Saudi Arabia&apos;s sustainability goals. All logistics partners are vetted for
                            eco-friendly practices and carbon offset programs.
                        </p>
                    </div>
                    <button className="px-4 py-2 bg-success text-white rounded-lg text-sm font-medium hover:bg-success/90 transition-colors">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
}
