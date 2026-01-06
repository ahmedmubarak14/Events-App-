'use client';

import { useState } from 'react';
import { MapPin, Users, Star, Wifi, Car, Utensils, Volume2, Eye } from 'lucide-react';
import StatusBadge from '@/components/StatusBadge';
import { venues, Venue } from '@/data/data';

export default function VenuesPage() {
    const [venueList, setVenueList] = useState<Venue[]>(venues);

    const handleBook = (id: string) => {
        setVenueList((prev) =>
            prev.map((venue) =>
                venue.id === id ? { ...venue, status: venue.status === 'available' ? 'reserved' : 'available' } : venue
            )
        );
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-SA', {
            style: 'currency',
            currency: 'SAR',
            minimumFractionDigits: 0,
        }).format(amount);
    };

    const getAmenityIcon = (amenity: string) => {
        if (amenity.toLowerCase().includes('parking')) return <Car className="w-3 h-3" />;
        if (amenity.toLowerCase().includes('catering') || amenity.toLowerCase().includes('f&b')) return <Utensils className="w-3 h-3" />;
        if (amenity.toLowerCase().includes('av') || amenity.toLowerCase().includes('led')) return <Volume2 className="w-3 h-3" />;
        return <Wifi className="w-3 h-3" />;
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-primary">Venue Marketplace</h1>
                    <p className="text-muted-foreground mt-1">Discover and book premium event venues across Saudi Arabia</p>
                </div>
                <div className="flex items-center gap-3">
                    <select className="px-4 py-2 bg-white border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20">
                        <option>All Locations</option>
                        <option>Riyadh</option>
                        <option>Jeddah</option>
                        <option>NEOM</option>
                    </select>
                    <select className="px-4 py-2 bg-white border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20">
                        <option>All Types</option>
                        <option>Arena</option>
                        <option>Exhibition Hall</option>
                        <option>Amphitheater</option>
                    </select>
                </div>
            </div>

            {/* Venue Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {venueList.map((venue) => (
                    <div
                        key={venue.id}
                        className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden card-hover group"
                    >
                        {/* Image Section */}
                        <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-6xl">🏟️</span>
                            </div>
                            <div className="absolute top-4 right-4">
                                <StatusBadge status={venue.status as 'available' | 'reserved' | 'booked'} />
                            </div>
                            <button className="absolute bottom-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg text-sm font-medium text-primary flex items-center gap-2 hover:bg-white transition-colors">
                                <Eye className="w-4 h-4" />
                                3D Tour
                            </button>
                        </div>

                        {/* Content Section */}
                        <div className="p-6">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold text-primary group-hover:text-primary-light transition-colors">
                                        {venue.name}
                                    </h3>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                                        <MapPin className="w-4 h-4" />
                                        <span>{venue.location}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 bg-accent/10 px-2 py-1 rounded-lg">
                                    <Star className="w-4 h-4 text-accent fill-accent" />
                                    <span className="text-sm font-medium text-accent">4.8</span>
                                </div>
                            </div>

                            {/* Details */}
                            <div className="flex items-center gap-4 mt-4 text-sm">
                                <div className="flex items-center gap-1 text-muted-foreground">
                                    <Users className="w-4 h-4" />
                                    <span>{venue.capacity.toLocaleString()} capacity</span>
                                </div>
                                <span className="text-border">|</span>
                                <span className="text-muted-foreground">{venue.type}</span>
                            </div>

                            {/* Amenities */}
                            <div className="flex flex-wrap gap-2 mt-4">
                                {venue.amenities.slice(0, 4).map((amenity, index) => (
                                    <span
                                        key={index}
                                        className="flex items-center gap-1 px-2 py-1 bg-secondary rounded-full text-xs text-primary"
                                    >
                                        {getAmenityIcon(amenity)}
                                        {amenity}
                                    </span>
                                ))}
                            </div>

                            {/* Footer */}
                            <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
                                <div>
                                    <p className="text-xs text-muted-foreground">Starting from</p>
                                    <p className="text-lg font-bold text-primary">{formatCurrency(venue.pricePerDay)}<span className="text-sm font-normal text-muted-foreground">/day</span></p>
                                </div>
                                <button
                                    onClick={() => handleBook(venue.id)}
                                    disabled={venue.status === 'booked'}
                                    className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${venue.status === 'reserved'
                                            ? 'bg-warning/20 text-warning hover:bg-warning/30'
                                            : venue.status === 'booked'
                                                ? 'bg-secondary text-muted-foreground cursor-not-allowed'
                                                : 'bg-primary text-white hover:bg-primary-light'
                                        }`}
                                >
                                    {venue.status === 'reserved' ? 'Cancel Reservation' : venue.status === 'booked' ? 'Booked' : 'Book Now'}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
