'use client';

import { useState } from 'react';
import { Search, Filter, Star, Shield, CheckCircle, Send, Package, X, Eye, MessageCircle } from 'lucide-react';
import { vendors } from '@/data/data';

export default function SourceMovePage() {
    const [showRFQForm, setShowRFQForm] = useState(false);
    const [showFilters, setShowFilters] = useState(false);
    const [showVendorProfile, setShowVendorProfile] = useState<string | null>(null);
    const [showQuoteRequest, setShowQuoteRequest] = useState<string | null>(null);
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

    const selectedVendor = vendors.find(v => v.id === showVendorProfile || v.id === showQuoteRequest);

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-primary">Smart Procurement</h1>
                    <p className="text-muted-foreground mt-1">Find verified vendors and submit RFQs</p>
                </div>
                <button
                    onClick={() => setShowRFQForm(true)}
                    className="btn btn-primary"
                >
                    <Package className="w-4 h-4" />
                    Create RFQ
                </button>
            </div>

            {/* Vendor Profile Modal */}
            {showVendorProfile && selectedVendor && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl w-full max-w-md p-6 animate-scale-in">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-primary">Vendor Profile</h2>
                            <button onClick={() => setShowVendorProfile(null)} className="p-2 hover:bg-secondary rounded-lg">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="text-center py-4">
                            <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4">
                                {selectedVendor.category.includes('Audio') ? '🔊' :
                                    selectedVendor.category.includes('Lighting') ? '💡' :
                                        selectedVendor.category.includes('Logistics') ? '🚚' :
                                            selectedVendor.category.includes('Food') ? '🍽️' : '🎪'}
                            </div>
                            <h3 className="text-xl font-bold text-primary">{selectedVendor.name}</h3>
                            <p className="text-muted-foreground">{selectedVendor.category}</p>
                            <div className="flex items-center justify-center gap-2 mt-2">
                                <Star className="w-5 h-5 text-accent fill-accent" />
                                <span className="font-bold text-primary">{selectedVendor.rating}</span>
                                <span className="text-muted-foreground">({selectedVendor.completedProjects} projects)</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="p-3 bg-secondary rounded-xl text-center">
                                <p className="text-xs text-muted-foreground">Price Range</p>
                                <p className="font-medium text-primary">{selectedVendor.priceRange}</p>
                            </div>
                            <div className="p-3 bg-secondary rounded-xl text-center">
                                <p className="text-xs text-muted-foreground">Status</p>
                                <p className="font-medium text-success">{selectedVendor.verified ? 'Verified' : 'Pending'}</p>
                            </div>
                        </div>
                        {selectedVendor.saudizationCompliant && (
                            <div className="mt-4 p-3 bg-success/10 border border-success/20 rounded-xl flex items-center gap-2">
                                <Shield className="w-5 h-5 text-success" />
                                <span className="text-sm font-medium text-success">Saudization Compliant</span>
                            </div>
                        )}
                        <div className="flex gap-3 mt-6">
                            <button onClick={() => setShowVendorProfile(null)} className="flex-1 btn btn-secondary">Close</button>
                            <button
                                onClick={() => { setShowVendorProfile(null); setShowQuoteRequest(selectedVendor.id); }}
                                className="flex-1 btn btn-primary"
                            >
                                Request Quote
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Quote Request Modal */}
            {showQuoteRequest && selectedVendor && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl w-full max-w-md p-6 animate-scale-in">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-primary">Request Quote</h2>
                            <button onClick={() => setShowQuoteRequest(null)} className="p-2 hover:bg-secondary rounded-lg">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-secondary rounded-xl mb-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-xl">
                                {selectedVendor.category.includes('Audio') ? '🔊' : '🎪'}
                            </div>
                            <div>
                                <p className="font-medium text-primary">{selectedVendor.name}</p>
                                <p className="text-sm text-muted-foreground">{selectedVendor.category}</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-primary mb-2">What do you need?</label>
                                <textarea className="input" rows={3} placeholder="Describe your requirements..."></textarea>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-primary mb-2">Budget (SAR)</label>
                                <input type="number" className="input" placeholder="e.g., 50000" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-primary mb-2">Deadline</label>
                                <input type="date" className="input" />
                            </div>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button onClick={() => setShowQuoteRequest(null)} className="flex-1 btn btn-secondary">Cancel</button>
                            <button onClick={() => setShowQuoteRequest(null)} className="flex-1 btn btn-primary">
                                <Send className="w-4 h-4" />
                                Send Request
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Filters Modal */}
            {showFilters && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl w-full max-w-sm p-6 animate-scale-in">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-primary">Filters</h2>
                            <button onClick={() => setShowFilters(false)} className="p-2 hover:bg-secondary rounded-lg">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-primary mb-2">Rating</label>
                                <select className="input">
                                    <option>Any Rating</option>
                                    <option>4.5+ Stars</option>
                                    <option>4.0+ Stars</option>
                                    <option>3.5+ Stars</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-primary mb-2">Price Range</label>
                                <select className="input">
                                    <option>Any Price</option>
                                    <option>$</option>
                                    <option>$$</option>
                                    <option>$$$</option>
                                </select>
                            </div>
                            <div>
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" className="w-4 h-4 rounded border-border" defaultChecked />
                                    <span className="text-sm text-primary">Verified Only</span>
                                </label>
                            </div>
                            <div>
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" className="w-4 h-4 rounded border-border" />
                                    <span className="text-sm text-primary">Saudization Compliant</span>
                                </label>
                            </div>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button onClick={() => setShowFilters(false)} className="flex-1 btn btn-secondary">Reset</button>
                            <button onClick={() => setShowFilters(false)} className="flex-1 btn btn-primary">Apply</button>
                        </div>
                    </div>
                </div>
            )}

            {/* RFQ Modal */}
            {showRFQForm && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl w-full max-w-lg p-6 animate-scale-in">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-semibold text-primary">Request for Quotation</h2>
                            <button onClick={() => setShowRFQForm(false)} className="p-2 hover:bg-secondary rounded-lg">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <form onSubmit={handleSubmitRFQ} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-primary mb-1">Category</label>
                                <select
                                    value={rfqData.category}
                                    onChange={(e) => setRfqData({ ...rfqData, category: e.target.value })}
                                    className="input"
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
                                    className="input h-24 resize-none"
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
                                        className="input"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-primary mb-1">Deadline</label>
                                    <input
                                        type="date"
                                        value={rfqData.deadline}
                                        onChange={(e) => setRfqData({ ...rfqData, deadline: e.target.value })}
                                        className="input"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-primary mb-1">Budget Range (SAR)</label>
                                <select
                                    value={rfqData.budget}
                                    onChange={(e) => setRfqData({ ...rfqData, budget: e.target.value })}
                                    className="input"
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
                                    className="flex-1 btn btn-secondary"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 btn btn-primary"
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
            <div className="card p-6">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search vendors by name or category..."
                            className="input pl-10"
                        />
                    </div>
                    <div className="flex gap-3">
                        <select className="input w-auto">
                            <option>All Categories</option>
                            <option>Audio Equipment</option>
                            <option>Stage Lighting</option>
                            <option>Food & Beverage</option>
                            <option>Transportation</option>
                        </select>
                        <button
                            onClick={() => setShowFilters(true)}
                            className="btn btn-secondary"
                        >
                            <Filter className="w-4 h-4" />
                            Filters
                        </button>
                    </div>
                </div>
            </div>

            {/* Verified Vendors List */}
            <div className="card overflow-hidden">
                <div className="p-6 border-b border-border-light">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-primary">Verified Vendors</h2>
                        <span className="text-sm text-muted-foreground">{vendors.length} vendors found</span>
                    </div>
                </div>
                <div className="divide-y divide-border-light">
                    {vendors.map((vendor) => (
                        <div key={vendor.id} className="p-6 hover:bg-secondary-light transition-colors">
                            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                                {/* Vendor Icon */}
                                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                                    {vendor.category.includes('Audio') ? '🔊' :
                                        vendor.category.includes('Lighting') ? '💡' :
                                            vendor.category.includes('Logistics') ? '🚚' :
                                                vendor.category.includes('Food') ? '🍽️' : '🎪'}
                                </div>

                                {/* Vendor Info */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 flex-wrap">
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
                                    <div className="flex items-center gap-4 mt-2 text-sm flex-wrap">
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
                                    <button
                                        onClick={() => setShowVendorProfile(vendor.id)}
                                        className="btn btn-secondary"
                                    >
                                        <Eye className="w-4 h-4" />
                                        View Profile
                                    </button>
                                    <button
                                        onClick={() => setShowQuoteRequest(vendor.id)}
                                        className="btn btn-primary"
                                    >
                                        <MessageCircle className="w-4 h-4" />
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
