'use client';

import { useState } from 'react';
import { Search, Filter, Star, Shield, CheckCircle, Send, Package } from 'lucide-react';
import { vendors } from '@/data/data';

export default function SourceMovePage() {
    const [showRFQForm, setShowRFQForm] = useState(false);
    const [rfqData, setRfqData] = useState({
        category: '',
        description: '',
        quantity: '',
        deadline: '',
        budget: '',
    });

    const handleSubmitRFQ = (e: React.FormEvent) => {
        e.preventDefault();
        setShowRFQForm(false);
        setRfqData({ category: '', description: '', quantity: '', deadline: '', budget: '' });
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-primary">Smart Procurement</h1>
                    <p className="text-muted-foreground mt-1">Find verified vendors and submit RFQs</p>
                </div>
                <button
                    onClick={() => setShowRFQForm(true)}
                    className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-light transition-colors flex items-center gap-2"
                >
                    <Package className="w-4 h-4" />
                    Create RFQ
                </button>
            </div>

            {/* RFQ Modal */}
            {showRFQForm && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl w-full max-w-lg p-6 m-4">
                        <h2 className="text-xl font-semibold text-primary mb-4">Request for Quotation</h2>
                        <form onSubmit={handleSubmitRFQ} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-primary mb-1">Category</label>
                                <select
                                    value={rfqData.category}
                                    onChange={(e) => setRfqData({ ...rfqData, category: e.target.value })}
                                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                                    required
                                >
                                    <option value="">Select category</option>
                                    <option value="audio">Audio Equipment</option>
                                    <option value="lighting">Stage Lighting</option>
                                    <option value="catering">Food & Beverage</option>
                                    <option value="logistics">Transportation & Logistics</option>
                                    <option value="staging">Stage & Set Design</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-primary mb-1">Description</label>
                                <textarea
                                    value={rfqData.description}
                                    onChange={(e) => setRfqData({ ...rfqData, description: e.target.value })}
                                    placeholder="e.g., Sound System for 5,000 people outdoor venue"
                                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 h-24 resize-none"
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-primary mb-1">Quantity/Scale</label>
                                    <input
                                        type="text"
                                        value={rfqData.quantity}
                                        onChange={(e) => setRfqData({ ...rfqData, quantity: e.target.value })}
                                        placeholder="e.g., 5,000 attendees"
                                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-primary mb-1">Deadline</label>
                                    <input
                                        type="date"
                                        value={rfqData.deadline}
                                        onChange={(e) => setRfqData({ ...rfqData, deadline: e.target.value })}
                                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-primary mb-1">Budget Range (SAR)</label>
                                <select
                                    value={rfqData.budget}
                                    onChange={(e) => setRfqData({ ...rfqData, budget: e.target.value })}
                                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                                    required
                                >
                                    <option value="">Select budget range</option>
                                    <option value="50k">Under 50,000</option>
                                    <option value="100k">50,000 - 100,000</option>
                                    <option value="250k">100,000 - 250,000</option>
                                    <option value="500k">250,000 - 500,000</option>
                                    <option value="1m">500,000+</option>
                                </select>
                            </div>
                            <div className="flex gap-3 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setShowRFQForm(false)}
                                    className="flex-1 px-4 py-2 border border-border rounded-lg text-primary font-medium hover:bg-secondary transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-light transition-colors flex items-center justify-center gap-2"
                                >
                                    <Send className="w-4 h-4" />
                                    Submit RFQ
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Search and Filters */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search vendors by name or category..."
                            className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                    </div>
                    <div className="flex gap-3">
                        <select className="px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20">
                            <option>All Categories</option>
                            <option>Audio Equipment</option>
                            <option>Stage Lighting</option>
                            <option>Food & Beverage</option>
                            <option>Transportation</option>
                        </select>
                        <button className="px-4 py-2.5 border border-border rounded-lg flex items-center gap-2 hover:bg-secondary transition-colors">
                            <Filter className="w-4 h-4 text-muted-foreground" />
                            Filters
                        </button>
                    </div>
                </div>
            </div>

            {/* Verified Vendors List */}
            <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
                <div className="p-6 border-b border-border">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-primary">Verified Vendors</h2>
                        <span className="text-sm text-muted-foreground">{vendors.length} vendors found</span>
                    </div>
                </div>
                <div className="divide-y divide-border">
                    {vendors.map((vendor) => (
                        <div key={vendor.id} className="p-6 hover:bg-secondary transition-colors">
                            <div className="flex items-center gap-4">
                                {/* Vendor Icon */}
                                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center text-2xl">
                                    {vendor.category.includes('Audio') ? '🔊' :
                                        vendor.category.includes('Lighting') ? '💡' :
                                            vendor.category.includes('Logistics') ? '🚚' :
                                                vendor.category.includes('Food') ? '🍽️' : '🎪'}
                                </div>

                                {/* Vendor Info */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-semibold text-primary">{vendor.name}</h3>
                                        {vendor.verified && (
                                            <CheckCircle className="w-4 h-4 text-info" />
                                        )}
                                        {vendor.saudizationCompliant && (
                                            <span className="flex items-center gap-1 px-2 py-0.5 bg-success/10 text-success text-xs font-medium rounded-full">
                                                <Shield className="w-3 h-3" />
                                                Saudization
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-0.5">{vendor.category}</p>
                                    <div className="flex items-center gap-4 mt-2 text-sm">
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 text-accent fill-accent" />
                                            <span className="font-medium text-primary">{vendor.rating}</span>
                                        </div>
                                        <span className="text-border">|</span>
                                        <span className="text-muted-foreground">{vendor.completedProjects} projects</span>
                                        <span className="text-border">|</span>
                                        <span className="text-muted-foreground">{vendor.priceRange}</span>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center gap-3">
                                    <button className="px-4 py-2 border border-border rounded-lg text-sm font-medium text-primary hover:bg-secondary transition-colors">
                                        View Profile
                                    </button>
                                    <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-light transition-colors">
                                        Request Quote
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
