'use client';

import { useState } from 'react';
import { AlertTriangle, Shield, Phone, Users, Thermometer, MapPin, Activity, Radio, AlertCircle, CheckCircle } from 'lucide-react';

// Mock incident data
const incidents = [
    { id: 'inc-001', type: 'crowd', severity: 'warning', location: 'Gate A - North Entrance', description: 'Crowd Density Warning - 85% capacity', time: '2 mins ago', status: 'active' },
    { id: 'inc-002', type: 'medical', severity: 'critical', location: 'Exhibition Hall B', description: 'Medical Emergency - First aid dispatched', time: '5 mins ago', status: 'responding' },
    { id: 'inc-003', type: 'security', severity: 'low', location: 'VIP Lounge', description: 'Unauthorized access attempt - Resolved', time: '12 mins ago', status: 'resolved' },
    { id: 'inc-004', type: 'crowd', severity: 'warning', location: 'Food Court Area', description: 'High foot traffic detected', time: '15 mins ago', status: 'monitoring' },
];

const zones = [
    { name: 'Main Stage', capacity: 78, status: 'normal' },
    { name: 'Exhibition Hall A', capacity: 62, status: 'normal' },
    { name: 'Exhibition Hall B', capacity: 91, status: 'warning' },
    { name: 'Food Court', capacity: 85, status: 'warning' },
    { name: 'VIP Lounge', capacity: 45, status: 'normal' },
    { name: 'Outdoor Area', capacity: 34, status: 'normal' },
];

export default function RiskCommandPage() {
    const [civilDefenseConnected, setCivilDefenseConnected] = useState(false);

    const handleCivilDefenseLink = () => {
        setCivilDefenseConnected(true);
        setTimeout(() => setCivilDefenseConnected(false), 3000);
    };

    const activeIncidents = incidents.filter(i => i.status !== 'resolved').length;
    const criticalIncidents = incidents.filter(i => i.severity === 'critical').length;

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-primary">Risk Command Center</h1>
                    <p className="text-muted-foreground mt-1">Enterprise-grade incident monitoring and response</p>
                </div>
                <button
                    onClick={handleCivilDefenseLink}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${civilDefenseConnected
                            ? 'bg-success text-white'
                            : 'bg-danger text-white hover:bg-danger/90'
                        }`}
                >
                    <Phone className="w-4 h-4" />
                    {civilDefenseConnected ? 'Connected to Civil Defense' : 'Civil Defense Direct Link'}
                </button>
            </div>

            {/* Alert Banner */}
            {criticalIncidents > 0 && (
                <div className="bg-danger/10 border border-danger/30 rounded-2xl p-4 flex items-center gap-4">
                    <div className="w-10 h-10 bg-danger rounded-xl flex items-center justify-center animate-pulse">
                        <AlertCircle className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                        <p className="font-semibold text-danger">Critical Alert Active</p>
                        <p className="text-sm text-danger/80">{criticalIncidents} critical incident(s) require immediate attention</p>
                    </div>
                    <button className="px-4 py-2 bg-danger text-white rounded-lg text-sm font-medium hover:bg-danger/90 transition-colors">
                        View Details
                    </button>
                </div>
            )}

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-danger/10 rounded-xl flex items-center justify-center">
                            <AlertTriangle className="w-5 h-5 text-danger" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Active Incidents</p>
                            <p className="text-xl font-bold text-primary">{activeIncidents}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-success/10 rounded-xl flex items-center justify-center">
                            <Shield className="w-5 h-5 text-success" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Security Personnel</p>
                            <p className="text-xl font-bold text-primary">24 on duty</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                            <Users className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Venue Capacity</p>
                            <p className="text-xl font-bold text-primary">68%</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                            <Activity className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Response Time</p>
                            <p className="text-xl font-bold text-primary">2.3 min</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {/* Live Incident Map */}
                <div className="xl:col-span-2 bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
                    <div className="p-6 border-b border-border">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-primary">Live Incident Map</h2>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
                                <span className="text-xs text-muted-foreground">Real-time monitoring</span>
                            </div>
                        </div>
                    </div>

                    {/* Venue Map Visualization */}
                    <div className="p-6">
                        <div className="relative bg-secondary rounded-xl h-80 overflow-hidden">
                            {/* Simplified Venue Layout */}
                            <div className="absolute inset-4 border-2 border-dashed border-primary/20 rounded-lg">
                                {/* Zones */}
                                <div className="absolute top-4 left-4 w-32 h-24 bg-primary/10 rounded-lg flex flex-col items-center justify-center">
                                    <span className="text-xs font-medium text-primary">Main Stage</span>
                                    <span className="text-xs text-muted-foreground">78%</span>
                                </div>

                                <div className="absolute top-4 right-4 w-32 h-24 bg-warning/20 rounded-lg flex flex-col items-center justify-center border-2 border-warning">
                                    <span className="text-xs font-medium text-warning">Exhibition B</span>
                                    <span className="text-xs text-warning">91% ⚠️</span>
                                </div>

                                <div className="absolute bottom-4 left-4 w-32 h-24 bg-primary/10 rounded-lg flex flex-col items-center justify-center">
                                    <span className="text-xs font-medium text-primary">Exhibition A</span>
                                    <span className="text-xs text-muted-foreground">62%</span>
                                </div>

                                <div className="absolute bottom-4 right-4 w-32 h-24 bg-warning/20 rounded-lg flex flex-col items-center justify-center border-2 border-warning">
                                    <span className="text-xs font-medium text-warning">Food Court</span>
                                    <span className="text-xs text-warning">85% ⚠️</span>
                                </div>

                                {/* Incident Pins */}
                                <div className="absolute top-16 right-20 animate-pulse">
                                    <div className="relative">
                                        <div className="w-6 h-6 bg-danger rounded-full flex items-center justify-center">
                                            <Thermometer className="w-3 h-3 text-white" />
                                        </div>
                                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-danger rounded-full animate-ping"></div>
                                    </div>
                                </div>

                                <div className="absolute top-8 left-44 animate-pulse">
                                    <div className="relative">
                                        <div className="w-6 h-6 bg-warning rounded-full flex items-center justify-center">
                                            <Users className="w-3 h-3 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Legend */}
                            <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center gap-4 text-xs">
                                <div className="flex items-center gap-1">
                                    <div className="w-3 h-3 bg-danger rounded-full"></div>
                                    <span>Critical</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="w-3 h-3 bg-warning rounded-full"></div>
                                    <span>Warning</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="w-3 h-3 bg-success rounded-full"></div>
                                    <span>Normal</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Zone Capacity */}
                <div className="bg-white rounded-2xl shadow-sm border border-border">
                    <div className="p-6 border-b border-border">
                        <h2 className="text-lg font-semibold text-primary">Zone Capacity</h2>
                    </div>
                    <div className="p-4 space-y-3">
                        {zones.map((zone) => (
                            <div key={zone.name} className="p-3 bg-secondary rounded-xl">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium text-primary">{zone.name}</span>
                                    <span className={`text-sm font-bold ${zone.capacity > 80 ? 'text-warning' : 'text-success'
                                        }`}>
                                        {zone.capacity}%
                                    </span>
                                </div>
                                <div className="w-full bg-white rounded-full h-2">
                                    <div
                                        className={`h-2 rounded-full transition-all ${zone.capacity > 80 ? 'bg-warning' : 'bg-success'
                                            }`}
                                        style={{ width: `${zone.capacity}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Incident Log */}
            <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
                <div className="p-6 border-b border-border">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-primary">Incident Log</h2>
                        <div className="flex gap-2">
                            <button className="px-3 py-1.5 text-sm font-medium text-white bg-primary rounded-lg">All</button>
                            <button className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:bg-secondary rounded-lg">Active</button>
                            <button className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:bg-secondary rounded-lg">Resolved</button>
                        </div>
                    </div>
                </div>
                <div className="divide-y divide-border">
                    {incidents.map((incident) => (
                        <div key={incident.id} className="p-4 hover:bg-secondary transition-colors">
                            <div className="flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${incident.severity === 'critical' ? 'bg-danger/10' :
                                        incident.severity === 'warning' ? 'bg-warning/10' : 'bg-success/10'
                                    }`}>
                                    {incident.type === 'crowd' && <Users className={`w-5 h-5 ${incident.severity === 'critical' ? 'text-danger' :
                                            incident.severity === 'warning' ? 'text-warning' : 'text-success'
                                        }`} />}
                                    {incident.type === 'medical' && <Thermometer className="w-5 h-5 text-danger" />}
                                    {incident.type === 'security' && <Shield className="w-5 h-5 text-success" />}
                                </div>
                                <div className="flex-1">
                                    <p className="font-medium text-primary">{incident.description}</p>
                                    <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                                        <span className="flex items-center gap-1">
                                            <MapPin className="w-3 h-3" />
                                            {incident.location}
                                        </span>
                                        <span>•</span>
                                        <span>{incident.time}</span>
                                    </div>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${incident.status === 'resolved' ? 'bg-emerald-100 text-emerald-700' :
                                        incident.status === 'responding' ? 'bg-amber-100 text-amber-700' :
                                            incident.status === 'active' ? 'bg-red-100 text-red-700' :
                                                'bg-violet-100 text-violet-700'
                                    }`}>
                                    {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
