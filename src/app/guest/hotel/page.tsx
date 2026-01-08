'use client';

import { Hotel, Key, Phone, MapPin, Wifi, Coffee, Car, Utensils, CheckCircle, Clock, Calendar, Star } from 'lucide-react';

const roomDetails = {
    hotel: 'Four Seasons Riyadh',
    address: 'Kingdom Tower, Al Olaya District',
    room: 'Deluxe King Suite',
    roomNumber: '2401',
    floor: '24th Floor',
    checkIn: { date: 'Mar 13, 2026', time: '15:00' },
    checkOut: { date: 'Mar 17, 2026', time: '12:00' },
    nights: 4,
    accessCard: 'Digital Key Ready',
};

const amenities = [
    { name: 'High-Speed WiFi', icon: Wifi, included: true },
    { name: 'Room Service 24/7', icon: Utensils, included: true },
    { name: 'Complimentary Breakfast', icon: Coffee, included: true },
    { name: 'Valet Parking', icon: Car, included: true },
    { name: 'Concierge Service', icon: Phone, included: true },
    { name: 'Gym & Spa Access', icon: Star, included: true },
];

export default function GuestHotelPage() {
    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-primary">Hotel & Stay</h1>
                    <p className="text-muted-foreground mt-1">Your accommodation details for Riyadh</p>
                </div>
                <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-light transition-colors flex items-center gap-2">
                    <Key className="w-4 h-4" />
                    Open Digital Key
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {/* Hotel Card */}
                <div className="xl:col-span-2 bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
                    {/* Hotel Image Placeholder */}
                    <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <span className="text-8xl">🏨</span>
                    </div>

                    <div className="p-6">
                        <div className="flex items-start justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-primary">{roomDetails.hotel}</h2>
                                <p className="text-muted-foreground flex items-center gap-1 mt-1">
                                    <MapPin className="w-4 h-4" />
                                    {roomDetails.address}
                                </p>
                            </div>
                            <div className="flex items-center gap-1 px-3 py-1 bg-warning/10 rounded-full">
                                <Star className="w-4 h-4 text-warning fill-warning" />
                                <span className="font-medium text-warning">5.0</span>
                            </div>
                        </div>

                        {/* Check-in/out */}
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <div className="p-4 bg-success/10 border border-success/20 rounded-xl">
                                <p className="text-xs text-success uppercase font-medium mb-1">Check-in</p>
                                <p className="font-semibold text-primary">{roomDetails.checkIn.date}</p>
                                <p className="text-sm text-muted-foreground flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    After {roomDetails.checkIn.time}
                                </p>
                            </div>
                            <div className="p-4 bg-primary/10 border border-primary/20 rounded-xl">
                                <p className="text-xs text-primary uppercase font-medium mb-1">Check-out</p>
                                <p className="font-semibold text-primary">{roomDetails.checkOut.date}</p>
                                <p className="text-sm text-muted-foreground flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    Before {roomDetails.checkOut.time}
                                </p>
                            </div>
                        </div>

                        {/* Room Details */}
                        <div className="mt-6 p-4 bg-secondary rounded-xl">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                                    <Hotel className="w-8 h-8 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-primary">{roomDetails.room}</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Room {roomDetails.roomNumber} • {roomDetails.floor}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl font-bold text-primary">{roomDetails.nights}</p>
                                    <p className="text-sm text-muted-foreground">Nights</p>
                                </div>
                            </div>
                        </div>

                        {/* Amenities */}
                        <div className="mt-6">
                            <h3 className="font-semibold text-primary mb-4">Included Amenities</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {amenities.map((amenity, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-3 bg-secondary rounded-xl">
                                        <amenity.icon className="w-5 h-5 text-primary" />
                                        <span className="text-sm text-primary">{amenity.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="space-y-4">
                    {/* Digital Room Key */}
                    <div className="bg-gradient-to-br from-primary via-primary-dark to-primary rounded-2xl p-6 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <Key className="w-6 h-6" />
                                <span className="font-semibold">Digital Room Key</span>
                            </div>
                            <div className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
                                <p className="text-5xl font-bold">{roomDetails.roomNumber}</p>
                                <p className="text-white/70 text-sm mt-2">{roomDetails.floor}</p>
                            </div>
                            <div className="mt-4 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-success" />
                                <span className="text-sm">Ready to use</span>
                            </div>
                            <p className="text-xs text-white/50 mt-2">
                                Hold your phone near the door lock to unlock
                            </p>
                        </div>
                    </div>

                    {/* Contact Hotel */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
                        <h3 className="font-semibold text-primary mb-4">Contact Hotel</h3>
                        <div className="space-y-3">
                            <button className="w-full flex items-center gap-3 p-3 bg-secondary rounded-xl hover:bg-secondary-dark transition-colors">
                                <Phone className="w-5 h-5 text-primary" />
                                <span className="text-sm text-primary">Call Concierge</span>
                            </button>
                            <button className="w-full flex items-center gap-3 p-3 bg-secondary rounded-xl hover:bg-secondary-dark transition-colors">
                                <Utensils className="w-5 h-5 text-primary" />
                                <span className="text-sm text-primary">Room Service</span>
                            </button>
                            <button className="w-full flex items-center gap-3 p-3 bg-secondary rounded-xl hover:bg-secondary-dark transition-colors">
                                <Car className="w-5 h-5 text-primary" />
                                <span className="text-sm text-primary">Request Car</span>
                            </button>
                        </div>
                    </div>

                    {/* House Keeping */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
                        <h3 className="font-semibold text-primary mb-4">Housekeeping</h3>
                        <div className="space-y-3">
                            <button className="w-full py-3 border border-primary text-primary rounded-xl text-sm font-medium hover:bg-primary hover:text-white transition-colors">
                                Request Cleaning
                            </button>
                            <button className="w-full py-3 border border-border text-muted-foreground rounded-xl text-sm font-medium hover:bg-secondary transition-colors">
                                Do Not Disturb
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
