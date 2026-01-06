'use client';

import { useState, useEffect } from 'react';
import { UserCheck, Plane, Clock, CheckCircle, AlertCircle, RefreshCw, Users, Globe, Smartphone, QrCode, X, Send, Download } from 'lucide-react';

// Mock visitor data
const visaStatuses = [
    { id: 'v-001', name: 'John Smith', nationality: 'USA', visaType: 'Business', status: 'approved', arrivalDate: '2026-03-14', email: 'john@example.com' },
    { id: 'v-002', name: 'Emma Wilson', nationality: 'UK', visaType: 'Tourist', status: 'approved', arrivalDate: '2026-03-14', email: 'emma@example.com' },
    { id: 'v-003', name: 'Hans Mueller', nationality: 'Germany', visaType: 'Business', status: 'pending', arrivalDate: '2026-03-15', email: 'hans@example.com' },
    { id: 'v-004', name: 'Yuki Tanaka', nationality: 'Japan', visaType: 'Business', status: 'approved', arrivalDate: '2026-03-14', email: 'yuki@example.com' },
    { id: 'v-005', name: 'Pierre Dubois', nationality: 'France', visaType: 'Tourist', status: 'processing', arrivalDate: '2026-03-15', email: 'pierre@example.com' },
    { id: 'v-006', name: 'Maria Garcia', nationality: 'Spain', visaType: 'Business', status: 'approved', arrivalDate: '2026-03-14', email: 'maria@example.com' },
];

export default function GuestExperiencePage() {
    const [liveCount, setLiveCount] = useState(1247);
    const [checkedInToday, setCheckedInToday] = useState(892);
    const [showQRModal, setShowQRModal] = useState(false);
    const [showDetailsModal, setShowDetailsModal] = useState<string | null>(null);
    const [qrGenerated, setQrGenerated] = useState(false);

    // Simulate live check-ins
    useEffect(() => {
        const interval = setInterval(() => {
            if (Math.random() > 0.5) {
                setLiveCount(prev => prev + 1);
                setCheckedInToday(prev => prev + 1);
            }
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleGenerateQR = () => {
        setQrGenerated(true);
        setTimeout(() => setQrGenerated(false), 2000);
    };

    const approvedCount = visaStatuses.filter(v => v.status === 'approved').length;
    const pendingCount = visaStatuses.filter(v => v.status === 'pending' || v.status === 'processing').length;
    const selectedGuest = visaStatuses.find(v => v.id === showDetailsModal);

    return (
        <div className="space-y-6">
            {/* QR Code Modal */}
            {showQRModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/50" onClick={() => setShowQRModal(false)}></div>
                    <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md animate-scale-in">
                        <div className="flex items-center justify-between p-5 border-b border-border-light">
                            <h2 className="text-lg font-semibold text-primary">Generate QR Codes</h2>
                            <button onClick={() => setShowQRModal(false)} className="p-2 hover:bg-secondary rounded-lg">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-5">
                            <div className="text-center py-6">
                                <div className="w-32 h-32 bg-secondary rounded-2xl mx-auto mb-4 flex items-center justify-center">
                                    <QrCode className="w-16 h-16 text-primary" />
                                </div>
                                <p className="text-muted-foreground mb-4">Generate QR codes for all approved guests</p>
                                <div className="p-4 bg-secondary rounded-xl mb-4">
                                    <p className="text-sm text-muted-foreground">Guests to include</p>
                                    <p className="text-2xl font-bold text-primary">{approvedCount}</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <button onClick={() => setShowQRModal(false)} className="btn btn-secondary flex-1">Cancel</button>
                                <button onClick={handleGenerateQR} className="btn btn-primary flex-1">
                                    {qrGenerated ? <><CheckCircle className="w-4 h-4" /> Generated!</> : <>Generate & Send</>}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Guest Details Modal */}
            {showDetailsModal && selectedGuest && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/50" onClick={() => setShowDetailsModal(null)}></div>
                    <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md animate-scale-in">
                        <div className="flex items-center justify-between p-5 border-b border-border-light">
                            <h2 className="text-lg font-semibold text-primary">Guest Details</h2>
                            <button onClick={() => setShowDetailsModal(null)} className="p-2 hover:bg-secondary rounded-lg">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-5 space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                                    <span className="text-xl font-bold text-primary">
                                        {selectedGuest.name.split(' ').map(n => n[0]).join('')}
                                    </span>
                                </div>
                                <div>
                                    <p className="text-lg font-semibold text-primary">{selectedGuest.name}</p>
                                    <p className="text-sm text-muted-foreground">{selectedGuest.email}</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-3 bg-secondary rounded-xl">
                                    <p className="text-xs text-muted-foreground">Nationality</p>
                                    <p className="font-medium text-primary">{selectedGuest.nationality}</p>
                                </div>
                                <div className="p-3 bg-secondary rounded-xl">
                                    <p className="text-xs text-muted-foreground">Visa Type</p>
                                    <p className="font-medium text-primary">{selectedGuest.visaType}</p>
                                </div>
                                <div className="p-3 bg-secondary rounded-xl">
                                    <p className="text-xs text-muted-foreground">Arrival Date</p>
                                    <p className="font-medium text-primary">{new Date(selectedGuest.arrivalDate).toLocaleDateString()}</p>
                                </div>
                                <div className="p-3 bg-secondary rounded-xl">
                                    <p className="text-xs text-muted-foreground">Status</p>
                                    <p className={`font-medium capitalize ${selectedGuest.status === 'approved' ? 'text-success' : 'text-warning'}`}>
                                        {selectedGuest.status}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 border-t border-border-light flex gap-3">
                            <button className="btn btn-secondary flex-1">
                                <Send className="w-4 h-4" />
                                Send Invite
                            </button>
                            <button className="btn btn-primary flex-1">
                                <Download className="w-4 h-4" />
                                Download QR
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-primary">Visitor Hub</h1>
                    <p className="text-muted-foreground mt-1">Monitor guest arrivals and visa status in real-time</p>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setShowQRModal(true)}
                        className="btn btn-primary"
                    >
                        <QrCode className="w-4 h-4" />
                        Generate QR Codes
                    </button>
                </div>
            </div>

            {/* Live Check-in Counter */}
            <div className="bg-gradient-to-br from-primary via-primary-dark to-primary rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/20 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                        <span className="text-white/70 text-sm font-medium">LIVE</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <p className="text-white/60 text-sm mb-1">Digital Check-ins (Live)</p>
                            <div className="flex items-baseline gap-2">
                                <p className="text-5xl font-bold">{liveCount.toLocaleString()}</p>
                                <span className="text-success text-sm flex items-center gap-1">
                                    <RefreshCw className="w-3 h-3 animate-spin" />
                                    updating
                                </span>
                            </div>
                        </div>
                        <div>
                            <p className="text-white/60 text-sm mb-1">Checked In Today</p>
                            <p className="text-5xl font-bold">{checkedInToday.toLocaleString()}</p>
                        </div>
                        <div>
                            <p className="text-white/60 text-sm mb-1">Expected Total</p>
                            <p className="text-5xl font-bold">5,000</p>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-6">
                        <div className="flex justify-between text-sm mb-2">
                            <span className="text-white/70">Check-in Progress</span>
                            <span className="font-medium">{Math.round((checkedInToday / 5000) * 100)}%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                            <div
                                className="bg-success h-2 rounded-full transition-all duration-500"
                                style={{ width: `${(checkedInToday / 5000) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="card p-5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-success/10 rounded-xl flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-success" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Visas Approved</p>
                            <p className="text-xl font-bold text-primary">{approvedCount}</p>
                        </div>
                    </div>
                </div>
                <div className="card p-5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-warning/10 rounded-xl flex items-center justify-center">
                            <Clock className="w-5 h-5 text-warning" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Pending Review</p>
                            <p className="text-xl font-bold text-primary">{pendingCount}</p>
                        </div>
                    </div>
                </div>
                <div className="card p-5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                            <Globe className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Countries</p>
                            <p className="text-xl font-bold text-primary">24</p>
                        </div>
                    </div>
                </div>
                <div className="card p-5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                            <Smartphone className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Mobile Check-ins</p>
                            <p className="text-xl font-bold text-primary">78%</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Visa Status Table */}
            <div className="card overflow-hidden">
                <div className="p-6 border-b border-border-light">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Plane className="w-5 h-5 text-primary" />
                            <h2 className="text-lg font-semibold text-primary">International Guest Visa Status</h2>
                        </div>
                        <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                            Integrated with MFA / Tourism Authority
                        </span>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-secondary">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Guest</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Nationality</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell">Visa Type</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell">Arrival Date</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border-light">
                            {visaStatuses.map((guest) => (
                                <tr key={guest.id} className="hover:bg-secondary-light transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                                                <span className="text-xs font-medium text-primary">
                                                    {guest.name.split(' ').map(n => n[0]).join('')}
                                                </span>
                                            </div>
                                            <span className="text-sm font-medium text-primary">{guest.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="text-sm text-muted-foreground">{guest.nationality}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                                        <span className="px-2 py-1 bg-secondary rounded-full text-xs text-primary">{guest.visaType}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                                        <span className="text-sm text-muted-foreground">
                                            {new Date(guest.arrivalDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${guest.status === 'approved' ? 'bg-emerald-100 text-emerald-700' :
                                            guest.status === 'pending' ? 'bg-amber-100 text-amber-700' :
                                                'bg-violet-100 text-violet-700'
                                            }`}>
                                            {guest.status === 'approved' && <CheckCircle className="w-3 h-3" />}
                                            {guest.status === 'pending' && <Clock className="w-3 h-3" />}
                                            {guest.status === 'processing' && <RefreshCw className="w-3 h-3 animate-spin" />}
                                            {guest.status.charAt(0).toUpperCase() + guest.status.slice(1)}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button
                                            onClick={() => setShowDetailsModal(guest.id)}
                                            className="text-sm text-primary font-medium hover:underline"
                                        >
                                            View Details
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Check-in Methods */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="card p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <QrCode className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2">QR Code Check-in</h3>
                    <p className="text-sm text-muted-foreground">Guests scan at entry points for instant check-in</p>
                </div>
                <div className="card p-6 text-center">
                    <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Smartphone className="w-8 h-8 text-success" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2">Mobile App</h3>
                    <p className="text-sm text-muted-foreground">Self-service check-in via Supplify mobile app</p>
                </div>
                <div className="card p-6 text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2">Kiosk Check-in</h3>
                    <p className="text-sm text-muted-foreground">Touch-screen kiosks for on-site registration</p>
                </div>
            </div>
        </div>
    );
}
