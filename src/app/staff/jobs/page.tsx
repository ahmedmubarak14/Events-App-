'use client';

import { useState } from 'react';
import { Search, Filter, MapPin, Clock, DollarSign, Star, Users, Calendar, CheckCircle, Heart, Building2 } from 'lucide-react';

// Mock job listings
const jobs = [
    {
        id: 'job-001',
        title: 'Security Guard',
        event: 'Jeddah Food Festival',
        company: 'Saudi Events Co.',
        location: 'Jeddah',
        dates: 'Feb 15-20, 2026',
        rate: 80,
        shifts: 6,
        hoursPerShift: 8,
        skills: ['Crowd Control', 'First Aid'],
        urgent: true,
        posted: '2 hours ago',
        applicants: 12,
        description: 'Looking for experienced security personnel for our upcoming food festival.',
    },
    {
        id: 'job-002',
        title: 'VIP Usher',
        event: 'Saudi Cup 2026',
        company: 'Jockey Club KSA',
        location: 'Riyadh',
        dates: 'Feb 25-27, 2026',
        rate: 95,
        shifts: 3,
        hoursPerShift: 10,
        skills: ['VIP Protocol', 'Bilingual'],
        urgent: false,
        posted: '1 day ago',
        applicants: 34,
        description: 'Premium hospitality staff needed for exclusive VIP areas.',
    },
    {
        id: 'job-003',
        title: 'Stage Crew',
        event: 'MDL Beast 2026',
        company: 'MDL Beast',
        location: 'Riyadh',
        dates: 'Mar 10-12, 2026',
        rate: 100,
        shifts: 4,
        hoursPerShift: 12,
        skills: ['Stage Setup', 'Heavy Lifting', 'AV Equipment'],
        urgent: true,
        posted: '5 hours ago',
        applicants: 8,
        description: 'Experienced technical crew for major music festival setup.',
    },
    {
        id: 'job-004',
        title: 'Registration Staff',
        event: 'LEAP Tech 2026',
        company: 'Tahaluf',
        location: 'Riyadh',
        dates: 'Feb 10-13, 2026',
        rate: 65,
        shifts: 4,
        hoursPerShift: 8,
        skills: ['Customer Service', 'Data Entry'],
        urgent: false,
        posted: '3 days ago',
        applicants: 56,
        description: 'Friendly staff for attendee registration and badge printing.',
    },
    {
        id: 'job-005',
        title: 'Crowd Controller',
        event: 'Riyadh Season',
        company: 'GEA',
        location: 'Riyadh',
        dates: 'Jan 15 - Mar 30, 2026',
        rate: 75,
        shifts: 20,
        hoursPerShift: 8,
        skills: ['Crowd Management', 'Communication'],
        urgent: false,
        posted: '1 week ago',
        applicants: 89,
        description: 'Long-term position for seasonal entertainment district.',
    },
];

const categories = ['All', 'Security', 'Technical', 'Hospitality', 'Registration', 'Logistics'];
const locations = ['All Locations', 'Riyadh', 'Jeddah', 'Dammam', 'NEOM'];

export default function StaffJobsPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedLocation, setSelectedLocation] = useState('All Locations');
    const [savedJobs, setSavedJobs] = useState<string[]>([]);
    const [appliedJobs, setAppliedJobs] = useState<string[]>([]);

    const handleSave = (jobId: string) => {
        setSavedJobs(prev =>
            prev.includes(jobId) ? prev.filter(id => id !== jobId) : [...prev, jobId]
        );
    };

    const handleApply = (jobId: string) => {
        setAppliedJobs(prev => [...prev, jobId]);
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div>
                <h1 className="text-2xl font-bold text-primary">Job Marketplace</h1>
                <p className="text-muted-foreground mt-1">Find your next event gig</p>
            </div>

            {/* Match Score Banner */}
            <div className="bg-gradient-to-r from-success/10 to-primary/10 rounded-2xl p-6 border border-success/20">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-success/20 rounded-2xl flex items-center justify-center">
                        <Star className="w-8 h-8 text-success fill-success" />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-semibold text-primary">Your Profile Match Score: 94%</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                            Based on your skills, certifications, and 98% reliability rating, you match with premium opportunities
                        </p>
                    </div>
                    <div className="text-right">
                        <p className="text-2xl font-bold text-success">3</p>
                        <p className="text-sm text-muted-foreground">New matches today</p>
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
                            placeholder="Search by job title, event name, or skill..."
                            className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                    </div>
                    <div className="flex gap-3">
                        <select
                            value={selectedLocation}
                            onChange={(e) => setSelectedLocation(e.target.value)}
                            className="px-4 py-2.5 border border-border rounded-lg focus:outline-none"
                        >
                            {locations.map(loc => (
                                <option key={loc} value={loc}>{loc}</option>
                            ))}
                        </select>
                        <button className="px-4 py-2.5 border border-border rounded-lg flex items-center gap-2 hover:bg-secondary transition-colors">
                            <Filter className="w-4 h-4 text-muted-foreground" />
                            Filters
                        </button>
                    </div>
                </div>

                {/* Category Pills */}
                <div className="flex gap-2 mt-4 overflow-x-auto">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${selectedCategory === cat
                                    ? 'bg-primary text-white'
                                    : 'bg-secondary text-muted-foreground hover:bg-secondary-dark'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Job Listings */}
            <div className="space-y-4">
                {jobs.map((job) => (
                    <div
                        key={job.id}
                        className={`bg-white rounded-2xl p-6 shadow-sm border transition-all hover:shadow-md ${appliedJobs.includes(job.id) ? 'border-success' : 'border-border'
                            }`}
                    >
                        <div className="flex items-start gap-4">
                            {/* Company Logo Placeholder */}
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                                <Building2 className="w-7 h-7 text-primary" />
                            </div>

                            {/* Job Details */}
                            <div className="flex-1">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h3 className="text-lg font-semibold text-primary">{job.title}</h3>
                                            {job.urgent && (
                                                <span className="px-2 py-0.5 bg-danger/10 text-danger text-xs font-medium rounded-full">
                                                    Urgent
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-muted-foreground">{job.event}</p>
                                        <p className="text-sm text-muted-foreground">{job.company}</p>
                                    </div>
                                    <button
                                        onClick={() => handleSave(job.id)}
                                        className={`p-2 rounded-lg transition-colors ${savedJobs.includes(job.id)
                                                ? 'text-danger bg-danger/10'
                                                : 'text-muted-foreground hover:bg-secondary'
                                            }`}
                                    >
                                        <Heart className={`w-5 h-5 ${savedJobs.includes(job.id) ? 'fill-danger' : ''}`} />
                                    </button>
                                </div>

                                {/* Job Meta */}
                                <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-muted-foreground">
                                    <span className="flex items-center gap-1">
                                        <MapPin className="w-4 h-4" />
                                        {job.location}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        {job.dates}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        {job.shifts} shifts × {job.hoursPerShift}hrs
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Users className="w-4 h-4" />
                                        {job.applicants} applicants
                                    </span>
                                </div>

                                {/* Skills */}
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {job.skills.map((skill, idx) => (
                                        <span key={idx} className="px-2 py-1 bg-secondary rounded-full text-xs text-primary">
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                {/* Footer */}
                                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                                    <div>
                                        <p className="text-xl font-bold text-primary">
                                            SAR {job.rate}<span className="text-sm font-normal text-muted-foreground">/hr</span>
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            Est. total: SAR {job.rate * job.shifts * job.hoursPerShift}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs text-muted-foreground">{job.posted}</span>
                                        {appliedJobs.includes(job.id) ? (
                                            <span className="flex items-center gap-2 px-4 py-2 bg-success/10 text-success rounded-lg text-sm font-medium">
                                                <CheckCircle className="w-4 h-4" />
                                                Applied
                                            </span>
                                        ) : (
                                            <button
                                                onClick={() => handleApply(job.id)}
                                                className="px-6 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-light transition-colors"
                                            >
                                                Quick Apply
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
