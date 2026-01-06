'use client';

import { useState } from 'react';
import { Search, Filter, Star, UserPlus, MapPin, Clock, Phone, CheckCircle, Briefcase, Award, Users } from 'lucide-react';

// Staff candidates for sourcing
const staffCandidates = [
    {
        id: 'cnd-001',
        name: 'Faisal Al-Harthi',
        role: 'Security Guard',
        experience: '5 years',
        location: 'Riyadh',
        rating: 4.9,
        completedEvents: 47,
        availability: 'Available',
        hourlyRate: 75,
        skills: ['Crowd Control', 'VIP Security', 'Emergency Response'],
        verified: true,
    },
    {
        id: 'cnd-002',
        name: 'Layla Al-Shammari',
        role: 'Event Usher',
        experience: '3 years',
        location: 'Riyadh',
        rating: 4.8,
        completedEvents: 62,
        availability: 'Available',
        hourlyRate: 55,
        skills: ['Guest Relations', 'Bilingual (AR/EN)', 'Registration'],
        verified: true,
    },
    {
        id: 'cnd-003',
        name: 'Omar Al-Dosari',
        role: 'Technical Crew',
        experience: '7 years',
        location: 'Jeddah',
        rating: 4.7,
        completedEvents: 89,
        availability: 'Available from Jan 10',
        hourlyRate: 95,
        skills: ['Stage Setup', 'Audio/Visual', 'Lighting'],
        verified: true,
    },
    {
        id: 'cnd-004',
        name: 'Reem Al-Qahtani',
        role: 'VIP Hostess',
        experience: '4 years',
        location: 'Riyadh',
        rating: 5.0,
        completedEvents: 35,
        availability: 'Available',
        hourlyRate: 85,
        skills: ['VIP Coordination', 'Protocol', 'Multilingual'],
        verified: true,
    },
    {
        id: 'cnd-005',
        name: 'Youssef Al-Malik',
        role: 'Logistics Coordinator',
        experience: '6 years',
        location: 'Dammam',
        rating: 4.6,
        completedEvents: 54,
        availability: 'Available',
        hourlyRate: 90,
        skills: ['Inventory', 'Transportation', 'Team Lead'],
        verified: true,
    },
    {
        id: 'cnd-006',
        name: 'Nouf Al-Tamimi',
        role: 'Registration Staff',
        experience: '2 years',
        location: 'Riyadh',
        rating: 4.8,
        completedEvents: 28,
        availability: 'Available',
        hourlyRate: 50,
        skills: ['Check-in Systems', 'Customer Service', 'Data Entry'],
        verified: true,
    },
];

const roles = ['All Roles', 'Security Guard', 'Event Usher', 'Technical Crew', 'VIP Hostess', 'Logistics Coordinator', 'Registration Staff'];
const locations = ['All Locations', 'Riyadh', 'Jeddah', 'Dammam', 'NEOM'];

export default function StaffSourcingPage() {
    const [selectedRole, setSelectedRole] = useState('All Roles');
    const [selectedLocation, setSelectedLocation] = useState('All Locations');
    const [hiredStaff, setHiredStaff] = useState<string[]>([]);

    const handleHire = (id: string) => {
        if (hiredStaff.includes(id)) {
            setHiredStaff(prev => prev.filter(s => s !== id));
        } else {
            setHiredStaff(prev => [...prev, id]);
        }
    };

    const filteredCandidates = staffCandidates.filter(candidate => {
        const roleMatch = selectedRole === 'All Roles' || candidate.role === selectedRole;
        const locationMatch = selectedLocation === 'All Locations' || candidate.location === selectedLocation;
        return roleMatch && locationMatch;
    });

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-primary">Staff Sourcing</h1>
                    <p className="text-muted-foreground mt-1">Find and hire qualified temporary staff for your event</p>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">
                        <span className="font-semibold text-primary">{hiredStaff.length}</span> staff hired
                    </span>
                    <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-light transition-colors flex items-center gap-2">
                        <UserPlus className="w-4 h-4" />
                        Post Job Request
                    </button>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                            <Users className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Available Staff</p>
                            <p className="text-xl font-bold text-primary">{staffCandidates.length}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-success/10 rounded-xl flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-success" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Verified Profiles</p>
                            <p className="text-xl font-bold text-primary">100%</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                            <Star className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Avg. Rating</p>
                            <p className="text-xl font-bold text-primary">4.8</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-info/10 rounded-xl flex items-center justify-center">
                            <Briefcase className="w-5 h-5 text-info" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Total Experience</p>
                            <p className="text-xl font-bold text-primary">315 events</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search and Filters */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search by name, skills, or experience..."
                            className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                    </div>
                    <div className="flex gap-3">
                        <select
                            value={selectedRole}
                            onChange={(e) => setSelectedRole(e.target.value)}
                            className="px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                        >
                            {roles.map(role => (
                                <option key={role} value={role}>{role}</option>
                            ))}
                        </select>
                        <select
                            value={selectedLocation}
                            onChange={(e) => setSelectedLocation(e.target.value)}
                            className="px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                        >
                            {locations.map(loc => (
                                <option key={loc} value={loc}>{loc}</option>
                            ))}
                        </select>
                        <button className="px-4 py-2.5 border border-border rounded-lg flex items-center gap-2 hover:bg-secondary transition-colors">
                            <Filter className="w-4 h-4 text-muted-foreground" />
                            More Filters
                        </button>
                    </div>
                </div>
            </div>

            {/* Staff Candidates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCandidates.map((candidate) => (
                    <div
                        key={candidate.id}
                        className={`bg-white rounded-2xl p-6 shadow-sm border transition-all card-hover ${hiredStaff.includes(candidate.id) ? 'border-success ring-2 ring-success/20' : 'border-border'
                            }`}
                    >
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                                    <span className="text-lg font-semibold text-primary">
                                        {candidate.name.split(' ').map(n => n[0]).join('')}
                                    </span>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-semibold text-primary">{candidate.name}</h3>
                                        {candidate.verified && (
                                            <CheckCircle className="w-4 h-4 text-info" />
                                        )}
                                    </div>
                                    <p className="text-sm text-muted-foreground">{candidate.role}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 bg-accent/10 px-2 py-1 rounded-lg">
                                <Star className="w-3 h-3 text-accent fill-accent" />
                                <span className="text-sm font-medium text-accent">{candidate.rating}</span>
                            </div>
                        </div>

                        {/* Details */}
                        <div className="space-y-2 mb-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <MapPin className="w-4 h-4" />
                                <span>{candidate.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Briefcase className="w-4 h-4" />
                                <span>{candidate.experience} experience</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Award className="w-4 h-4" />
                                <span>{candidate.completedEvents} events completed</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <Clock className="w-4 h-4 text-muted-foreground" />
                                <span className={candidate.availability === 'Available' ? 'text-success' : 'text-warning'}>
                                    {candidate.availability}
                                </span>
                            </div>
                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {candidate.skills.map((skill, idx) => (
                                <span key={idx} className="px-2 py-1 bg-secondary rounded-full text-xs text-primary">
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-4 border-t border-border">
                            <div>
                                <p className="text-xs text-muted-foreground">Hourly Rate</p>
                                <p className="text-lg font-bold text-primary">SAR {candidate.hourlyRate}<span className="text-sm font-normal text-muted-foreground">/hr</span></p>
                            </div>
                            <button
                                onClick={() => handleHire(candidate.id)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${hiredStaff.includes(candidate.id)
                                        ? 'bg-success text-white hover:bg-success/90'
                                        : 'bg-primary text-white hover:bg-primary-light'
                                    }`}
                            >
                                {hiredStaff.includes(candidate.id) ? 'Hired ✓' : 'Hire Now'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bulk Actions */}
            {hiredStaff.length > 0 && (
                <div className="fixed bottom-6 left-64 right-6 bg-primary text-white rounded-xl p-4 shadow-lg flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                            <Users className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="font-semibold">{hiredStaff.length} staff selected</p>
                            <p className="text-sm text-white/70">Ready to assign to your event</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={() => setHiredStaff([])}
                            className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors"
                        >
                            Clear Selection
                        </button>
                        <button className="px-4 py-2 bg-white text-primary hover:bg-secondary rounded-lg text-sm font-medium transition-colors">
                            Confirm & Assign
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
