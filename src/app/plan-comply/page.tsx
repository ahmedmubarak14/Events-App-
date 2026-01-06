'use client';

import { useState } from 'react';
import { CheckCircle, Circle, AlertTriangle, ExternalLink, FileText, Building2, Calendar, X, Upload, Plus } from 'lucide-react';
import StatusBadge from '@/components/StatusBadge';
import { permits } from '@/data/data';

export default function PlanComplyPage() {
    const [permitList, setPermitList] = useState(permits);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showViewModal, setShowViewModal] = useState<string | null>(null);
    const [newPermit, setNewPermit] = useState({ name: '', authority: '', deadline: '' });

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

    const handleAddPermit = () => {
        if (newPermit.name && newPermit.authority) {
            setPermitList(prev => [...prev, {
                id: `permit-${Date.now()}`,
                name: newPermit.name,
                description: 'Custom permit added',
                authority: newPermit.authority,
                deadline: newPermit.deadline || '2026-03-01',
                status: 'pending'
            }]);
            setShowAddModal(false);
            setNewPermit({ name: '', authority: '', deadline: '' });
        }
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
    const viewingPermit = permitList.find(p => p.id === showViewModal);

    return (
        <div className="space-y-6">
            {/* Add Permit Modal */}
            {showAddModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/50" onClick={() => setShowAddModal(false)}></div>
                    <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md animate-scale-in">
                        <div className="flex items-center justify-between p-5 border-b border-border-light">
                            <h2 className="text-lg font-semibold text-primary">Add New Permit</h2>
                            <button onClick={() => setShowAddModal(false)} className="p-2 hover:bg-secondary rounded-lg">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-5 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-primary mb-2">Permit Name</label>
                                <input
                                    type="text"
                                    value={newPermit.name}
                                    onChange={(e) => setNewPermit({ ...newPermit, name: e.target.value })}
                                    placeholder="e.g., Fire Safety Certificate"
                                    className="input"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-primary mb-2">Issuing Authority</label>
                                <input
                                    type="text"
                                    value={newPermit.authority}
                                    onChange={(e) => setNewPermit({ ...newPermit, authority: e.target.value })}
                                    placeholder="e.g., Civil Defense"
                                    className="input"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-primary mb-2">Deadline</label>
                                <input
                                    type="date"
                                    value={newPermit.deadline}
                                    onChange={(e) => setNewPermit({ ...newPermit, deadline: e.target.value })}
                                    className="input"
                                />
                            </div>
                        </div>
                        <div className="p-5 border-t border-border-light flex gap-3">
                            <button onClick={() => setShowAddModal(false)} className="btn btn-secondary flex-1">Cancel</button>
                            <button onClick={handleAddPermit} className="btn btn-primary flex-1">
                                <Plus className="w-4 h-4" />
                                Add Permit
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* View Permit Modal */}
            {showViewModal && viewingPermit && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/50" onClick={() => setShowViewModal(null)}></div>
                    <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md animate-scale-in">
                        <div className="flex items-center justify-between p-5 border-b border-border-light">
                            <h2 className="text-lg font-semibold text-primary">Permit Details</h2>
                            <button onClick={() => setShowViewModal(null)} className="p-2 hover:bg-secondary rounded-lg">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-5 space-y-4">
                            <div>
                                <p className="text-sm text-muted-foreground">Permit Name</p>
                                <p className="font-medium text-primary">{viewingPermit.name}</p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Description</p>
                                <p className="font-medium text-primary">{viewingPermit.description}</p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Issuing Authority</p>
                                <p className="font-medium text-primary">{viewingPermit.authority}</p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Deadline</p>
                                <p className="font-medium text-primary">{new Date(viewingPermit.deadline).toLocaleDateString()}</p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Status</p>
                                <StatusBadge status={viewingPermit.status as 'pending' | 'approved' | 'action_required'} />
                            </div>
                        </div>
                        <div className="p-5 border-t border-border-light flex gap-3">
                            <button className="btn btn-secondary flex-1">
                                <Upload className="w-4 h-4" />
                                Upload Document
                            </button>
                            <button onClick={() => setShowViewModal(null)} className="btn btn-primary flex-1">Close</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-primary">Regulatory Concierge</h1>
                    <p className="text-muted-foreground mt-1">Manage permits and compliance for your event</p>
                </div>
                <button
                    onClick={() => setShowAddModal(true)}
                    className="btn btn-primary"
                >
                    <Plus className="w-4 h-4" />
                    Add New Permit
                </button>
            </div>

            {/* Progress Overview */}
            <div className="card p-6">
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
            <div className="card overflow-hidden">
                <div className="p-6 border-b border-border-light">
                    <h2 className="text-lg font-semibold text-primary">Required Permits & Licenses</h2>
                </div>
                <div className="divide-y divide-border-light">
                    {permitList.map((permit) => (
                        <div
                            key={permit.id}
                            className="p-6 hover:bg-secondary-light transition-colors cursor-pointer"
                            onClick={() => togglePermitStatus(permit.id)}
                        >
                            <div className="flex items-start gap-4">
                                <div className="mt-1">{getStatusIcon(permit.status)}</div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 flex-wrap">
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
                                        className="p-2 hover:bg-secondary rounded-lg transition-colors"
                                        onClick={(e) => { e.stopPropagation(); setShowViewModal(permit.id); }}
                                        title="View Details"
                                    >
                                        <FileText className="w-4 h-4 text-muted-foreground" />
                                    </button>
                                    <button
                                        className="p-2 hover:bg-secondary rounded-lg transition-colors"
                                        onClick={(e) => e.stopPropagation()}
                                        title="Open External"
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
                    href="https://gea.gov.sa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card p-4 hover:border-primary/30 hover:shadow-md transition-all group"
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
                    href="https://balady.gov.sa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card p-4 hover:border-primary/30 hover:shadow-md transition-all group"
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
                    href="https://998.gov.sa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card p-4 hover:border-primary/30 hover:shadow-md transition-all group"
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
