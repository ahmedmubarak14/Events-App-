'use client';

import { useState } from 'react';
import { Shield, CheckCircle, AlertCircle, Clock, Upload, FileText, Calendar, Download, ChevronRight } from 'lucide-react';

const complianceItems = [
    {
        id: 1,
        name: 'Commercial Registration (CR)',
        status: 'valid',
        expiryDate: '2027-06-15',
        documentUrl: '#',
    },
    {
        id: 2,
        name: 'VAT Registration',
        status: 'valid',
        expiryDate: '2026-12-31',
        documentUrl: '#',
    },
    {
        id: 3,
        name: 'GOSI Certificate',
        status: 'valid',
        expiryDate: '2026-03-20',
        documentUrl: '#',
    },
    {
        id: 4,
        name: 'Zakat Certificate',
        status: 'expiring_soon',
        expiryDate: '2026-02-15',
        documentUrl: '#',
    },
    {
        id: 5,
        name: 'Professional Liability Insurance',
        status: 'valid',
        expiryDate: '2026-09-01',
        documentUrl: '#',
    },
    {
        id: 6,
        name: 'Bank Guarantee Letter',
        status: 'missing',
        expiryDate: null,
        documentUrl: null,
    },
];

const statusConfig: { [key: string]: { label: string; color: string; icon: React.ElementType } } = {
    valid: { label: 'Valid', color: 'success', icon: CheckCircle },
    expiring_soon: { label: 'Expiring Soon', color: 'warning', icon: Clock },
    expired: { label: 'Expired', color: 'danger', icon: AlertCircle },
    missing: { label: 'Missing', color: 'danger', icon: AlertCircle },
};

export default function VendorCompliancePage() {
    const [items, setItems] = useState(complianceItems);

    const validCount = items.filter(i => i.status === 'valid').length;
    const expiringCount = items.filter(i => i.status === 'expiring_soon').length;
    const missingCount = items.filter(i => i.status === 'missing' || i.status === 'expired').length;
    const completionRate = Math.round((validCount / items.length) * 100);

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-primary">Compliance</h1>
                    <p className="text-muted-foreground mt-1">Manage your business documents and certifications</p>
                </div>
                <button className="btn btn-primary">
                    <Upload className="w-4 h-4" />
                    Upload Document
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="card p-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-success/10 rounded-xl flex items-center justify-center">
                            <Shield className="w-5 h-5 text-success" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-primary">{completionRate}%</p>
                            <p className="text-sm text-muted-foreground">Compliance</p>
                        </div>
                    </div>
                </div>
                <div className="card p-4">
                    <p className="text-2xl font-bold text-success">{validCount}</p>
                    <p className="text-sm text-muted-foreground">Valid Documents</p>
                </div>
                <div className="card p-4">
                    <p className="text-2xl font-bold text-warning">{expiringCount}</p>
                    <p className="text-sm text-muted-foreground">Expiring Soon</p>
                </div>
                <div className="card p-4">
                    <p className="text-2xl font-bold text-danger">{missingCount}</p>
                    <p className="text-sm text-muted-foreground">Action Required</p>
                </div>
            </div>

            {/* Compliance Progress */}
            <div className="card p-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-primary">Overall Compliance</h3>
                    <span className="text-sm font-medium text-primary">{completionRate}%</span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-success to-success-light rounded-full transition-all"
                        style={{ width: `${completionRate}%` }}
                    ></div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Complete all required documents to become a Verified Vendor</p>
            </div>

            {/* Documents List */}
            <div className="card">
                <div className="p-5 border-b border-border-light">
                    <h3 className="font-semibold text-primary">Required Documents</h3>
                </div>
                <div className="divide-y divide-border-light">
                    {items.map((item) => {
                        const config = statusConfig[item.status];
                        const StatusIcon = config.icon;

                        return (
                            <div key={item.id} className="p-5 hover:bg-secondary-light transition-colors">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                                    <div className="flex items-center gap-4 flex-1">
                                        <div className={`w-10 h-10 rounded-xl bg-${config.color}/10 flex items-center justify-center`}>
                                            <FileText className={`w-5 h-5 text-${config.color}`} />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-primary">{item.name}</h4>
                                            {item.expiryDate ? (
                                                <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                                                    <Calendar className="w-3 h-3" />
                                                    Expires: {new Date(item.expiryDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                                </p>
                                            ) : (
                                                <p className="text-sm text-danger mt-1">Document required</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium bg-${config.color}/10 text-${config.color} flex items-center gap-1`}>
                                            <StatusIcon className="w-3 h-3" />
                                            {config.label}
                                        </span>
                                        {item.documentUrl ? (
                                            <button className="btn btn-secondary btn-sm">
                                                <Download className="w-4 h-4" />
                                                View
                                            </button>
                                        ) : (
                                            <button className="btn btn-primary btn-sm">
                                                <Upload className="w-4 h-4" />
                                                Upload
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
