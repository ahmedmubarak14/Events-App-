'use client';

import { useState } from 'react';
import { FileCheck, Music, Users, Heart, Building2, Star, Check, ArrowRight, Sparkles } from 'lucide-react';

// Event templates with pre-filled requirements
const templates = [
    {
        id: 'concert',
        name: 'Concert',
        icon: '🎵',
        description: 'Large-scale music events and festivals',
        popular: true,
        requirements: [
            { name: 'GEA Entertainment License', authority: 'General Entertainment Authority', days: 45 },
            { name: 'Crowd Management Plan', authority: 'Civil Defense', days: 30 },
            { name: 'Noise Permit', authority: 'Environment Agency', days: 21 },
            { name: 'Stage Safety Certification', authority: 'Civil Defense', days: 14 },
            { name: 'Food & Beverage License', authority: 'SFDA', days: 21 },
            { name: 'Security Personnel Approval', authority: 'MOI', days: 30 },
            { name: 'Medical Services Plan', authority: 'MOH', days: 14 },
            { name: 'Traffic Management Plan', authority: 'Traffic Department', days: 21 },
        ],
    },
    {
        id: 'conference',
        name: 'Conference',
        icon: '🎤',
        description: 'Business summits and corporate events',
        popular: true,
        requirements: [
            { name: 'Event License', authority: 'GEA / MOMRAH', days: 30 },
            { name: 'Venue Safety Certificate', authority: 'Civil Defense', days: 14 },
            { name: 'Catering License', authority: 'SFDA', days: 21 },
            { name: 'AV Equipment Approval', authority: 'CITC', days: 14 },
            { name: 'Fire Safety Inspection', authority: 'Civil Defense', days: 7 },
            { name: 'VIP Protocol Clearance', authority: 'Protocol', days: 7 },
        ],
    },
    {
        id: 'wedding',
        name: 'Wedding',
        icon: '💒',
        description: 'Wedding ceremonies and receptions',
        popular: false,
        requirements: [
            { name: 'Marriage License Verification', authority: 'MOJ', days: 14 },
            { name: 'Venue Booking Confirmation', authority: 'Hotel/Venue', days: 30 },
            { name: 'Catering Health Certificate', authority: 'SFDA', days: 14 },
            { name: 'Photography Permit', authority: 'Venue', days: 7 },
            { name: 'Music/DJ License', authority: 'GEA', days: 14 },
        ],
    },
    {
        id: 'exhibition',
        name: 'Exhibition',
        icon: '🏛️',
        description: 'Trade shows and product exhibitions',
        popular: true,
        requirements: [
            { name: 'Exhibition License', authority: 'MOMRAH', days: 45 },
            { name: 'Customs Clearance (International)', authority: 'Customs', days: 30 },
            { name: 'Commercial Activity Permit', authority: 'MOCI', days: 21 },
            { name: 'Booth Safety Standards', authority: 'Civil Defense', days: 14 },
            { name: 'Product Display Approval', authority: 'Relevant Authority', days: 21 },
            { name: 'Visitor Registration System', authority: 'Data Protection', days: 14 },
        ],
    },
    {
        id: 'sports',
        name: 'Sports Event',
        icon: '⚽',
        description: 'Athletic competitions and tournaments',
        popular: false,
        requirements: [
            { name: 'Sports Federation Approval', authority: 'Saudi Sports Authority', days: 60 },
            { name: 'Venue Safety Certification', authority: 'Civil Defense', days: 30 },
            { name: 'Medical Emergency Plan', authority: 'MOH', days: 21 },
            { name: 'Broadcasting Rights', authority: 'GCAM', days: 45 },
            { name: 'Anti-Doping Protocols', authority: 'SADA', days: 30 },
            { name: 'Crowd Control Plan', authority: 'MOI', days: 21 },
        ],
    },
    {
        id: 'cultural',
        name: 'Cultural Festival',
        icon: '🎭',
        description: 'Heritage and cultural celebrations',
        popular: false,
        requirements: [
            { name: 'Cultural Event License', authority: 'Ministry of Culture', days: 45 },
            { name: 'Heritage Compliance', authority: 'Heritage Authority', days: 30 },
            { name: 'GEA Entertainment Permit', authority: 'GEA', days: 30 },
            { name: 'Food Safety Certificate', authority: 'SFDA', days: 21 },
            { name: 'Open-Air Event Permit', authority: 'MOMRAH', days: 21 },
        ],
    },
];

export default function TemplatesPage() {
    const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
    const [applied, setApplied] = useState(false);

    const handleApplyTemplate = () => {
        setApplied(true);
        setTimeout(() => setApplied(false), 3000);
    };

    const selectedTemplateData = templates.find(t => t.id === selectedTemplate);

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-primary">Quick-Start Templates</h1>
                    <p className="text-muted-foreground mt-1">Pre-configured compliance checklists for common event types</p>
                </div>
            </div>

            {/* Info Banner */}
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-6 border border-accent/20">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-semibold text-primary">Smart Templates</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                            Select an event type to automatically populate your Plan & Comply checklist with GEA-specific requirements
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {/* Template Selection */}
                <div className="xl:col-span-2">
                    <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
                        <div className="p-6 border-b border-border">
                            <h2 className="text-lg font-semibold text-primary">Select Event Type</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                            {templates.map((template) => (
                                <div
                                    key={template.id}
                                    onClick={() => setSelectedTemplate(template.id)}
                                    className={`p-5 border-2 rounded-xl cursor-pointer transition-all ${selectedTemplate === template.id
                                            ? 'border-primary bg-primary/5'
                                            : 'border-border hover:border-primary/30 hover:bg-secondary'
                                        }`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="text-4xl">{template.icon}</div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">
                                                <h3 className="font-semibold text-primary">{template.name}</h3>
                                                {template.popular && (
                                                    <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs font-medium rounded-full flex items-center gap-1">
                                                        <Star className="w-3 h-3 fill-accent" />
                                                        Popular
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm text-muted-foreground mt-1">{template.description}</p>
                                            <p className="text-xs text-muted-foreground mt-2">
                                                {template.requirements.length} requirements
                                            </p>
                                        </div>
                                        {selectedTemplate === template.id && (
                                            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                                                <Check className="w-4 h-4 text-white" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Template Preview */}
                <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
                    <div className="p-6 border-b border-border">
                        <h2 className="text-lg font-semibold text-primary">
                            {selectedTemplateData ? `${selectedTemplateData.name} Requirements` : 'Select a Template'}
                        </h2>
                    </div>

                    {selectedTemplateData ? (
                        <div className="p-4">
                            <div className="space-y-3 max-h-[400px] overflow-y-auto">
                                {selectedTemplateData.requirements.map((req, idx) => (
                                    <div key={idx} className="p-3 bg-secondary rounded-xl">
                                        <div className="flex items-start gap-3">
                                            <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <FileCheck className="w-3 h-3 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-primary">{req.name}</p>
                                                <p className="text-xs text-muted-foreground">{req.authority}</p>
                                                <p className="text-xs text-warning mt-1">Lead time: {req.days} days</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-4 pt-4 border-t border-border">
                                <button
                                    onClick={handleApplyTemplate}
                                    className={`w-full py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2 ${applied
                                            ? 'bg-success text-white'
                                            : 'bg-primary text-white hover:bg-primary-light'
                                        }`}
                                >
                                    {applied ? (
                                        <>
                                            <Check className="w-4 h-4" />
                                            Template Applied!
                                        </>
                                    ) : (
                                        <>
                                            Apply to Plan & Comply
                                            <ArrowRight className="w-4 h-4" />
                                        </>
                                    )}
                                </button>
                                <p className="text-xs text-center text-muted-foreground mt-2">
                                    This will auto-fill your compliance checklist
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="p-8 text-center">
                            <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <FileCheck className="w-8 h-8 text-muted-foreground" />
                            </div>
                            <p className="text-muted-foreground">
                                Choose an event type to preview the required permits and licenses
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Custom Template CTA */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                        <span className="text-3xl">📋</span>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold text-primary">Need a Custom Template?</h3>
                        <p className="text-muted-foreground text-sm mt-1">
                            Our regulatory experts can create a tailored compliance checklist for your unique event
                        </p>
                    </div>
                    <button className="px-4 py-2 border border-primary text-primary rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors">
                        Request Custom Template
                    </button>
                </div>
            </div>
        </div>
    );
}
