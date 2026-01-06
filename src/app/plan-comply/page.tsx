'use client';

import { useState } from 'react';
import { CheckCircle, Circle, AlertTriangle, ExternalLink, FileText, Building2, Calendar } from 'lucide-react';
import StatusBadge from '@/components/StatusBadge';
import { permits } from '@/data/data';

export default function PlanComplyPage() {
    const [permitList, setPermitList] = useState(permits);

    const togglePermitStatus = (id: string) => {
        setPermitList((prev) =>
            prev.map((permit) =>
                permit.id === id
                    ? {
                        ...permit,
                        status: permit.status === 'approved' ? 'pending' : 'approved',
                    }
                    : permit
            )
        );
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'approved':
                return <CheckCircle className="w-5 h-5 text-success" />;
            case 'action_required':
                return <AlertTriangle className="w-5 h-5 text-danger" />;
            default:
                return <Circle className="w-5 h-5 text-muted-foreground" />;
        }
    };

    const approvedCount = permitList.filter((p) => p.status === 'approved').length;
    const progressPercent = (approvedCount / permitList.length) * 100;

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-primary">Regulatory Concierge</h1>
                    <p className="text-muted-foreground mt-1">Manage permits and compliance for your event</p>
                </div>
                <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-light transition-colors">
                    + Add New Permit
                </button>
            </div>

            {/* Progress Overview */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-primary">Compliance Progress</h2>
                    <span className="text-2xl font-bold text-primary">{Math.round(progressPercent)}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-3">
                    <div
                        className="bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-all duration-500"
                        style={{ width: `${progressPercent}%` }}
                    ></div>
                </div>
                <div className="flex items-center justify-between mt-4 text-sm">
                    <span className="text-muted-foreground">
                        <span className="font-semibold text-success">{approvedCount}</span> of {permitList.length} permits approved
                    </span>
                    <span className="text-muted-foreground">
                        <span className="font-semibold text-danger">
                            {permitList.filter((p) => p.status === 'action_required').length}
                        </span>{' '}
                        require action
                    </span>
                </div>
            </div>

            {/* Permits Checklist */}
            <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
                <div className="p-6 border-b border-border">
                    <h2 className="text-lg font-semibold text-primary">Required Permits & Licenses</h2>
                </div>
                <div className="divide-y divide-border">
                    {permitList.map((permit) => (
                        <div
                            key={permit.id}
                            className="p-6 hover:bg-secondary transition-colors cursor-pointer"
                            onClick={() => togglePermitStatus(permit.id)}
                        >
                            <div className="flex items-start gap-4">
                                <div className="mt-1">{getStatusIcon(permit.status)}</div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3">
                                        <h3 className="font-medium text-primary">{permit.name}</h3>
                                        <StatusBadge status={permit.status as 'pending' | 'approved' | 'action_required'} size="sm" />
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">{permit.description}</p>
                                    <div className="flex items-center gap-4 mt-3 text-sm">
                                        <span className="flex items-center gap-1 text-muted-foreground">
                                            <Building2 className="w-4 h-4" />
                                            {permit.authority}
                                        </span>
                                        <span className="flex items-center gap-1 text-muted-foreground">
                                            <Calendar className="w-4 h-4" />
                                            Due: {new Date(permit.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        className="p-2 hover:bg-secondary-dark rounded-lg transition-colors"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <FileText className="w-4 h-4 text-muted-foreground" />
                                    </button>
                                    <button
                                        className="p-2 hover:bg-secondary-dark rounded-lg transition-colors"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <ExternalLink className="w-4 h-4 text-muted-foreground" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a
                    href="#"
                    className="p-4 bg-white rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all group"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center group-hover:bg-success/20 transition-colors">
                            <ExternalLink className="w-5 h-5 text-success" />
                        </div>
                        <div>
                            <p className="font-medium text-primary">GEA Portal</p>
                            <p className="text-xs text-muted-foreground">Apply for entertainment licenses</p>
                        </div>
                    </div>
                </a>
                <a
                    href="#"
                    className="p-4 bg-white rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all group"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <ExternalLink className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <p className="font-medium text-primary">Balady Services</p>
                            <p className="text-xs text-muted-foreground">Municipal permits & approvals</p>
                        </div>
                    </div>
                </a>
                <a
                    href="#"
                    className="p-4 bg-white rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all group"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                            <ExternalLink className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                            <p className="font-medium text-primary">Civil Defense</p>
                            <p className="text-xs text-muted-foreground">Safety certifications</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}
