'use client';

import { FileText, Download, Calendar, CheckCircle, Clock, AlertCircle, Eye, Pen } from 'lucide-react';

const contracts = [
    {
        id: 'CTR-2024-001',
        title: 'Event Staff Agreement',
        company: 'Saudi Events Co.',
        type: 'Part-time',
        startDate: '2025-11-01',
        endDate: '2026-04-30',
        status: 'active',
        hourlyRate: 65,
        minHours: 20,
        maxHours: 40,
    },
    {
        id: 'CTR-2024-002',
        title: 'Security Personnel Contract',
        company: 'Riyadh Tech Expo',
        type: 'Event-based',
        startDate: '2026-03-14',
        endDate: '2026-03-16',
        status: 'pending_signature',
        hourlyRate: 85,
        minHours: 36,
        maxHours: 36,
    },
];

export default function StaffContractsPage() {
    return (
        <div className="space-y-6 animate-fade-in">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-primary">My Contracts</h1>
                    <p className="text-muted-foreground mt-1">View and manage your employment contracts</p>
                </div>
            </div>

            {/* Contract Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="card p-5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-success/10 rounded-xl flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-success" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-primary">1</p>
                            <p className="text-sm text-muted-foreground">Active Contract</p>
                        </div>
                    </div>
                </div>
                <div className="card p-5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-warning/10 rounded-xl flex items-center justify-center">
                            <Clock className="w-5 h-5 text-warning" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-primary">1</p>
                            <p className="text-sm text-muted-foreground">Pending Signature</p>
                        </div>
                    </div>
                </div>
                <div className="card p-5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                            <Calendar className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-primary">113</p>
                            <p className="text-sm text-muted-foreground">Days Until Renewal</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contracts List */}
            <div className="space-y-4">
                {contracts.map((contract) => (
                    <div key={contract.id} className="card p-6">
                        <div className="flex items-start gap-6">
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                                <FileText className="w-7 h-7 text-primary" />
                            </div>

                            <div className="flex-1">
                                <div className="flex items-center gap-3">
                                    <h3 className="text-lg font-semibold text-primary">{contract.title}</h3>
                                    <span className={`badge ${contract.status === 'active' ? 'badge-success' : 'badge-warning'
                                        }`}>
                                        {contract.status === 'active' ? (
                                            <><CheckCircle className="w-3 h-3" /> Active</>
                                        ) : (
                                            <><AlertCircle className="w-3 h-3" /> Pending Signature</>
                                        )}
                                    </span>
                                </div>
                                <p className="text-muted-foreground mt-1">{contract.company}</p>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 p-4 bg-secondary rounded-xl">
                                    <div>
                                        <p className="text-xs text-muted-foreground uppercase">Type</p>
                                        <p className="font-medium text-primary">{contract.type}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground uppercase">Duration</p>
                                        <p className="font-medium text-primary">
                                            {new Date(contract.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - {new Date(contract.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground uppercase">Rate</p>
                                        <p className="font-medium text-primary">SAR {contract.hourlyRate}/hr</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground uppercase">Weekly Hours</p>
                                        <p className="font-medium text-primary">{contract.minHours}-{contract.maxHours}h</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-2">
                                {contract.status === 'pending_signature' ? (
                                    <button className="btn btn-primary">
                                        <Pen className="w-4 h-4" />
                                        Sign Now
                                    </button>
                                ) : (
                                    <>
                                        <button className="btn btn-secondary">
                                            <Eye className="w-4 h-4" />
                                            View
                                        </button>
                                        <button className="btn btn-ghost">
                                            <Download className="w-4 h-4" />
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
