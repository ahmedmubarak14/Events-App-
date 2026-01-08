'use client';

import { useState } from 'react';
import { Building2, Mail, Phone, MapPin, Globe, Shield, Award, Star, Camera, Save, Check, Upload, FileText } from 'lucide-react';

const companyData = {
    name: 'Saudi Sound Systems',
    email: 'info@saudisound.sa',
    phone: '+966 11 234 5678',
    website: 'www.saudisound.sa',
    address: 'King Fahd Road, Riyadh 12345, Saudi Arabia',
    crNumber: '1010123456',
    vatNumber: 'SA300123456789',
    category: 'Audio Equipment',
    established: '2015',
    employees: '25-50',
    rating: 4.8,
    completedProjects: 47,
    bio: 'Leading audio equipment provider in Saudi Arabia with over 8 years of experience serving major events including Riyadh Season, LEAP, and Saudi Cup.',
    certifications: [
        { name: 'ISO 9001:2015', issuer: 'Bureau Veritas', expiry: '2027-06-15' },
        { name: 'SASO Certified', issuer: 'Saudi Standards', expiry: '2026-12-20' },
    ],
    services: ['Audio Equipment Rental', 'Sound System Installation', 'Technical Support', 'Event Audio Management'],
};

export default function VendorProfilePage() {
    const [isEditing, setIsEditing] = useState(false);
    const [showSaved, setShowSaved] = useState(false);
    const [formData, setFormData] = useState(companyData);

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
                    Company profile updated!
                </div>
            )}

            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-primary">Company Profile</h1>
                    <p className="text-muted-foreground mt-1">Manage your business information</p>
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

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {/* Company Card */}
                <div className="card p-6 text-center">
                    <div className="relative inline-block">
                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white text-3xl font-bold mx-auto">
                            SS
                        </div>
                        {isEditing && (
                            <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-light transition-colors">
                                <Camera className="w-4 h-4" />
                            </button>
                        )}
                    </div>

                    <h2 className="text-xl font-bold text-primary mt-4">{formData.name}</h2>
                    <p className="text-muted-foreground">{formData.category}</p>

                    <div className="flex items-center justify-center gap-1 mt-2">
                        <Star className="w-4 h-4 text-warning fill-warning" />
                        <span className="font-semibold">{formData.rating}</span>
                        <span className="text-muted-foreground">({formData.completedProjects} projects)</span>
                    </div>

                    <div className="flex items-center justify-center gap-2 mt-4">
                        <Shield className="w-5 h-5 text-success" />
                        <span className="text-sm font-medium text-success">Verified Vendor</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-border-light">
                        <div>
                            <p className="text-2xl font-bold text-primary">{formData.completedProjects}</p>
                            <p className="text-sm text-muted-foreground">Projects</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-primary">{formData.established}</p>
                            <p className="text-sm text-muted-foreground">Since</p>
                        </div>
                    </div>
                </div>

                {/* Details */}
                <div className="xl:col-span-2 space-y-6">
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
                            <div>
                                <label className="block text-sm font-medium text-muted-foreground mb-2">Website</label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={formData.website}
                                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                        className="input"
                                    />
                                ) : (
                                    <div className="flex items-center gap-2 p-3 bg-secondary rounded-xl">
                                        <Globe className="w-4 h-4 text-muted-foreground" />
                                        <span>{formData.website}</span>
                                    </div>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-muted-foreground mb-2">Employees</label>
                                {isEditing ? (
                                    <select
                                        value={formData.employees}
                                        onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                                        className="input"
                                    >
                                        <option>1-10</option>
                                        <option>11-25</option>
                                        <option>25-50</option>
                                        <option>50-100</option>
                                        <option>100+</option>
                                    </select>
                                ) : (
                                    <div className="flex items-center gap-2 p-3 bg-secondary rounded-xl">
                                        <Building2 className="w-4 h-4 text-muted-foreground" />
                                        <span>{formData.employees} employees</span>
                                    </div>
                                )}
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-muted-foreground mb-2">Address</label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={formData.address}
                                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                        className="input"
                                    />
                                ) : (
                                    <div className="flex items-center gap-2 p-3 bg-secondary rounded-xl">
                                        <MapPin className="w-4 h-4 text-muted-foreground" />
                                        <span>{formData.address}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* About */}
                    <div className="card p-6">
                        <h3 className="font-semibold text-primary mb-4">About</h3>
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

                    {/* Services */}
                    <div className="card p-6">
                        <h3 className="font-semibold text-primary mb-4">Services</h3>
                        <div className="flex flex-wrap gap-2">
                            {formData.services.map((service, idx) => (
                                <span key={idx} className="px-3 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium">
                                    {service}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Legal */}
                    <div className="card p-6">
                        <h3 className="font-semibold text-primary mb-4">Legal Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-secondary rounded-xl">
                                <p className="text-sm text-muted-foreground">CR Number</p>
                                <p className="font-medium text-primary">{formData.crNumber}</p>
                            </div>
                            <div className="p-4 bg-secondary rounded-xl">
                                <p className="text-sm text-muted-foreground">VAT Number</p>
                                <p className="font-medium text-primary">{formData.vatNumber}</p>
                            </div>
                        </div>
                    </div>

                    {/* Certifications */}
                    <div className="card p-6">
                        <h3 className="font-semibold text-primary mb-4">Certifications</h3>
                        <div className="space-y-3">
                            {formData.certifications.map((cert, idx) => (
                                <div key={idx} className="flex items-center gap-4 p-4 bg-secondary rounded-xl">
                                    <div className="w-10 h-10 bg-success/20 rounded-xl flex items-center justify-center">
                                        <Award className="w-5 h-5 text-success" />
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
                            {isEditing && (
                                <button className="w-full p-4 border-2 border-dashed border-border rounded-xl text-muted-foreground hover:text-primary hover:border-primary transition-colors flex items-center justify-center gap-2">
                                    <Upload className="w-5 h-5" />
                                    Upload Certificate
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
