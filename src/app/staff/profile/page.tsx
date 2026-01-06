'use client';

import { useState } from 'react';
import { User, Mail, Phone, MapPin, Shield, Award, Star, Camera, Save, Check, Briefcase, Calendar } from 'lucide-react';

const profileData = {
    name: 'Faisal Al-Harthi',
    email: 'faisal@supplify.sa',
    phone: '+966 55 123 4567',
    location: 'Riyadh, Saudi Arabia',
    role: 'Security Guard',
    experience: '5 years',
    rating: 4.9,
    completedShifts: 127,
    certifications: [
        { name: 'Event Security Professional', issuer: 'SIRA', expiry: '2027-06-15' },
        { name: 'First Aid & CPR', issuer: 'Saudi Red Crescent', expiry: '2026-12-20' },
    ],
    skills: ['Crowd Control', 'VIP Protection', 'Access Control', 'Emergency Response', 'Arabic', 'English'],
    bio: 'Experienced security professional with 5+ years in event security. Specialized in VIP protection and crowd management for large-scale events.',
};

export default function StaffProfilePage() {
    const [isEditing, setIsEditing] = useState(false);
    const [showSaved, setShowSaved] = useState(false);
    const [formData, setFormData] = useState(profileData);

    const handleSave = () => {
        setIsEditing(false);
        setShowSaved(true);
        setTimeout(() => setShowSaved(false), 2000);
    };

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Success Toast */}
            {showSaved && (
                <div className="fixed top-20 right-4 bg-success text-white px-4 py-3 rounded-xl shadow-lg animate-fade-in flex items-center gap-2 z-50">
                    <Check className="w-5 h-5" />
                    Profile updated successfully!
                </div>
            )}

            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-primary">My Profile</h1>
                    <p className="text-muted-foreground mt-1">Manage your personal information and settings</p>
                </div>
                {isEditing ? (
                    <div className="flex gap-2">
                        <button onClick={() => setIsEditing(false)} className="btn btn-secondary">Cancel</button>
                        <button onClick={handleSave} className="btn btn-primary">
                            <Save className="w-4 h-4" />
                            Save Changes
                        </button>
                    </div>
                ) : (
                    <button onClick={() => setIsEditing(true)} className="btn btn-primary">Edit Profile</button>
                )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Profile Card */}
                <div className="card p-6 text-center">
                    <div className="relative inline-block">
                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white text-3xl font-bold mx-auto">
                            FA
                        </div>
                        {isEditing && (
                            <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-light transition-colors">
                                <Camera className="w-4 h-4" />
                            </button>
                        )}
                    </div>

                    <h2 className="text-xl font-bold text-primary mt-4">{formData.name}</h2>
                    <p className="text-muted-foreground">{formData.role}</p>

                    <div className="flex items-center justify-center gap-1 mt-2">
                        <Star className="w-4 h-4 text-warning fill-warning" />
                        <span className="font-semibold">{formData.rating}</span>
                        <span className="text-muted-foreground">rating</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-border-light">
                        <div>
                            <p className="text-2xl font-bold text-primary">{formData.completedShifts}</p>
                            <p className="text-sm text-muted-foreground">Shifts Completed</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-primary">{formData.experience}</p>
                            <p className="text-sm text-muted-foreground">Experience</p>
                        </div>
                    </div>
                </div>

                {/* Details */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Contact Info */}
                    <div className="card p-6">
                        <h3 className="font-semibold text-primary mb-4">Contact Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
                                {isEditing ? (
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="input"
                                    />
                                ) : (
                                    <div className="flex items-center gap-2 p-3 bg-secondary rounded-xl">
                                        <Mail className="w-4 h-4 text-muted-foreground" />
                                        <span>{formData.email}</span>
                                    </div>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-muted-foreground mb-2">Phone</label>
                                {isEditing ? (
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="input"
                                    />
                                ) : (
                                    <div className="flex items-center gap-2 p-3 bg-secondary rounded-xl">
                                        <Phone className="w-4 h-4 text-muted-foreground" />
                                        <span>{formData.phone}</span>
                                    </div>
                                )}
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-muted-foreground mb-2">Location</label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={formData.location}
                                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                        className="input"
                                    />
                                ) : (
                                    <div className="flex items-center gap-2 p-3 bg-secondary rounded-xl">
                                        <MapPin className="w-4 h-4 text-muted-foreground" />
                                        <span>{formData.location}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Bio */}
                    <div className="card p-6">
                        <h3 className="font-semibold text-primary mb-4">About Me</h3>
                        {isEditing ? (
                            <textarea
                                value={formData.bio}
                                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                                className="input min-h-[100px]"
                                rows={3}
                            />
                        ) : (
                            <p className="text-muted-foreground">{formData.bio}</p>
                        )}
                    </div>

                    {/* Skills */}
                    <div className="card p-6">
                        <h3 className="font-semibold text-primary mb-4">Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {formData.skills.map((skill, idx) => (
                                <span key={idx} className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
                                    {skill}
                                </span>
                            ))}
                            {isEditing && (
                                <button className="px-3 py-1.5 border-2 border-dashed border-border text-muted-foreground rounded-full text-sm hover:border-primary hover:text-primary transition-colors">
                                    + Add Skill
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div className="card p-6">
                        <h3 className="font-semibold text-primary mb-4">Certifications</h3>
                        <div className="space-y-3">
                            {formData.certifications.map((cert, idx) => (
                                <div key={idx} className="flex items-center gap-4 p-4 bg-secondary rounded-xl">
                                    <div className="w-10 h-10 bg-warning/20 rounded-xl flex items-center justify-center">
                                        <Award className="w-5 h-5 text-warning" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-medium text-primary">{cert.name}</p>
                                        <p className="text-sm text-muted-foreground">
                                            {cert.issuer} • Expires {new Date(cert.expiry).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                                        </p>
                                    </div>
                                    <Shield className="w-5 h-5 text-success" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
