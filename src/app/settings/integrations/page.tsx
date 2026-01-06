'use client';

import { Link2, CheckCircle, RefreshCw, AlertCircle, Zap, Shield, Building2, Globe } from 'lucide-react';

// Integration categories
const integrations = {
    government: [
        { name: 'GEA (Tarfeeh)', description: 'Entertainment Authority Permits', status: 'connected', logo: '🏛️' },
        { name: 'MOMRAH (Balady)', description: 'Municipal Services', status: 'connected', logo: '🏢' },
        { name: 'Civil Defense', description: 'Safety Certifications', status: 'syncing', logo: '🚒' },
        { name: 'SFDA', description: 'Food & Drug Authority', status: 'pending', logo: '🍽️' },
        { name: 'MFA / Tourism', description: 'Visa Processing', status: 'connected', logo: '✈️' },
    ],
    enterprise: [
        { name: 'SAP', description: 'ERP Integration', status: 'syncing', logo: '📊' },
        { name: 'Oracle', description: 'Financial Systems', status: 'pending', logo: '💼' },
        { name: 'Salesforce', description: 'CRM Integration', status: 'connected', logo: '☁️' },
        { name: 'Microsoft 365', description: 'Productivity Suite', status: 'connected', logo: '📧' },
    ],
    operations: [
        { name: 'Ticketmaster', description: 'Ticketing Platform', status: 'connected', logo: '🎫' },
        { name: 'Eventbrite', description: 'Event Registration', status: 'pending', logo: '📅' },
        { name: 'Stripe', description: 'Payment Processing', status: 'connected', logo: '💳' },
        { name: 'Twilio', description: 'SMS Notifications', status: 'connected', logo: '📱' },
    ],
};

const getStatusColor = (status: string) => {
    switch (status) {
        case 'connected': return 'text-success bg-success/10 border-success/30';
        case 'syncing': return 'text-warning bg-warning/10 border-warning/30';
        default: return 'text-muted-foreground bg-secondary border-border';
    }
};

const getStatusIcon = (status: string) => {
    switch (status) {
        case 'connected': return <CheckCircle className="w-4 h-4" />;
        case 'syncing': return <RefreshCw className="w-4 h-4 animate-spin" />;
        default: return <AlertCircle className="w-4 h-4" />;
    }
};

export default function IntegrationsPage() {
    const connectedCount = Object.values(integrations).flat().filter(i => i.status === 'connected').length;
    const totalCount = Object.values(integrations).flat().length;

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-primary">Supplify Connect</h1>
                    <p className="text-muted-foreground mt-1">The central nervous system for your event ecosystem</p>
                </div>
                <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-light transition-colors flex items-center gap-2">
                    <Link2 className="w-4 h-4" />
                    Add Integration
                </button>
            </div>

            {/* Overview Banner */}
            <div className="bg-gradient-to-r from-primary via-primary-dark to-primary rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

                <div className="relative z-10 flex items-center gap-6">
                    <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
                        <Zap className="w-10 h-10" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold">Integration Status</h3>
                        <p className="text-white/70 text-sm mt-1">
                            Your event platform is connected to Saudi&apos;s digital infrastructure
                        </p>
                        <div className="mt-3 flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-success"></div>
                                <span className="text-sm">{connectedCount} Connected</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-warning"></div>
                                <span className="text-sm">{Object.values(integrations).flat().filter(i => i.status === 'syncing').length} Syncing</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-secondary"></div>
                                <span className="text-sm">{Object.values(integrations).flat().filter(i => i.status === 'pending').length} Pending</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-4xl font-bold">{connectedCount}/{totalCount}</p>
                        <p className="text-sm text-white/70">Active Connections</p>
                    </div>
                </div>
            </div>

            {/* Government Integrations */}
            <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
                <div className="p-6 border-b border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-success/10 rounded-xl flex items-center justify-center">
                            <Shield className="w-5 h-5 text-success" />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-primary">Government APIs</h2>
                            <p className="text-sm text-muted-foreground">Connected to Kingdom&apos;s digital services</p>
                        </div>
                    </div>
                </div>
                <div className="divide-y divide-border">
                    {integrations.government.map((item, idx) => (
                        <div key={idx} className="p-4 flex items-center gap-4 hover:bg-secondary transition-colors">
                            <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-2xl">
                                {item.logo}
                            </div>
                            <div className="flex-1">
                                <h3 className="font-medium text-primary">{item.name}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium border ${getStatusColor(item.status)}`}>
                                {getStatusIcon(item.status)}
                                {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                            </div>
                            <button className="px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-secondary transition-colors">
                                Configure
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Enterprise Integrations */}
            <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
                <div className="p-6 border-b border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                            <Building2 className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-primary">Enterprise Systems</h2>
                            <p className="text-sm text-muted-foreground">Connect ERP, CRM, and financial platforms</p>
                        </div>
                    </div>
                </div>
                <div className="divide-y divide-border">
                    {integrations.enterprise.map((item, idx) => (
                        <div key={idx} className="p-4 flex items-center gap-4 hover:bg-secondary transition-colors">
                            <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-2xl">
                                {item.logo}
                            </div>
                            <div className="flex-1">
                                <h3 className="font-medium text-primary">{item.name}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium border ${getStatusColor(item.status)}`}>
                                {getStatusIcon(item.status)}
                                {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                            </div>
                            <button className="px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-secondary transition-colors">
                                Configure
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Operations Integrations */}
            <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
                <div className="p-6 border-b border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                            <Globe className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-primary">Operations & Ticketing</h2>
                            <p className="text-sm text-muted-foreground">Third-party event platforms and services</p>
                        </div>
                    </div>
                </div>
                <div className="divide-y divide-border">
                    {integrations.operations.map((item, idx) => (
                        <div key={idx} className="p-4 flex items-center gap-4 hover:bg-secondary transition-colors">
                            <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-2xl">
                                {item.logo}
                            </div>
                            <div className="flex-1">
                                <h3 className="font-medium text-primary">{item.name}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium border ${getStatusColor(item.status)}`}>
                                {getStatusIcon(item.status)}
                                {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                            </div>
                            <button className="px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-secondary transition-colors">
                                Configure
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* API Documentation */}
            <div className="bg-gradient-to-r from-secondary to-white rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                        <span className="text-3xl">📚</span>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold text-primary">Developer API</h3>
                        <p className="text-muted-foreground text-sm mt-1">
                            Build custom integrations with Supplify&apos;s REST API
                        </p>
                    </div>
                    <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-light transition-colors">
                        View Documentation
                    </button>
                </div>
            </div>
        </div>
    );
}
