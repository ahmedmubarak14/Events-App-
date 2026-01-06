'use client';

import { useState } from 'react';
import { MapPin, Navigation, Utensils, Coffee, Wifi, Car, Info, ZoomIn, ZoomOut, Layers } from 'lucide-react';

const venueAreas = [
    { id: 'main', name: 'Main Hall', type: 'venue', x: 50, y: 30, description: 'Keynotes & Ceremonies', capacity: '5,000' },
    { id: 'tech', name: 'Tech Stage', type: 'venue', x: 75, y: 35, description: 'Tech Talks & Panels', capacity: '800' },
    { id: 'innovation', name: 'Innovation Zone', type: 'venue', x: 30, y: 45, description: 'Startup Showcase', capacity: '400' },
    { id: 'exhibition', name: 'Exhibition Hall', type: 'exhibition', x: 55, y: 55, description: 'Halls A, B, C', capacity: '10,000' },
    { id: 'vip', name: 'VIP Lounge', type: 'lounge', x: 80, y: 50, description: 'Exclusive Access', capacity: '100' },
    { id: 'food1', name: 'Food Court', type: 'food', x: 25, y: 65, description: 'Restaurants & Cafes', capacity: '500' },
    { id: 'meeting', name: 'Meeting Rooms', type: 'meeting', x: 70, y: 70, description: 'Rooms 1-20', capacity: '20 rooms' },
    { id: 'parking', name: 'Parking P1', type: 'parking', x: 15, y: 80, description: 'VIP Parking', capacity: '200 cars' },
    { id: 'entrance', name: 'Main Entrance', type: 'entrance', x: 50, y: 90, description: 'Gate A', capacity: '' },
];

const typeIcons: { [key: string]: React.ElementType } = {
    venue: MapPin,
    exhibition: Layers,
    lounge: Coffee,
    food: Utensils,
    meeting: Info,
    parking: Car,
    entrance: Navigation,
};

const typeColors: { [key: string]: string } = {
    venue: 'bg-primary text-white',
    exhibition: 'bg-accent text-white',
    lounge: 'bg-warning text-white',
    food: 'bg-success text-white',
    meeting: 'bg-info text-white',
    parking: 'bg-muted text-white',
    entrance: 'bg-danger text-white',
};

export default function GuestMapPage() {
    const [selectedArea, setSelectedArea] = useState<string | null>('main');
    const [zoom, setZoom] = useState(1);
    const [filter, setFilter] = useState('all');

    const selectedInfo = venueAreas.find(a => a.id === selectedArea);

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-primary">Venue Map</h1>
                    <p className="text-muted-foreground mt-1">Riyadh Front Exhibition Center</p>
                </div>
                <div className="flex gap-2">
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="input py-2 px-3 text-sm w-auto"
                    >
                        <option value="all">All Areas</option>
                        <option value="venue">Stages</option>
                        <option value="food">Food & Drinks</option>
                        <option value="meeting">Meeting Rooms</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Map */}
                <div className="lg:col-span-2 card p-4 relative overflow-hidden">
                    {/* Zoom Controls */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
                        <button
                            onClick={() => setZoom(z => Math.min(z + 0.2, 1.5))}
                            className="p-2 bg-white rounded-lg shadow-md hover:bg-secondary transition-colors"
                        >
                            <ZoomIn className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => setZoom(z => Math.max(z - 0.2, 0.8))}
                            className="p-2 bg-white rounded-lg shadow-md hover:bg-secondary transition-colors"
                        >
                            <ZoomOut className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Map Area */}
                    <div
                        className="relative bg-gradient-to-br from-secondary to-secondary-dark rounded-xl h-[400px] lg:h-[500px]"
                        style={{ transform: `scale(${zoom})`, transformOrigin: 'center' }}
                    >
                        {/* Grid lines for visual effect */}
                        <div className="absolute inset-0 opacity-10" style={{
                            backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
                            backgroundSize: '40px 40px'
                        }}></div>

                        {/* Venue Markers */}
                        {venueAreas
                            .filter(area => filter === 'all' || area.type === filter)
                            .map((area) => {
                                const IconComponent = typeIcons[area.type];
                                return (
                                    <button
                                        key={area.id}
                                        onClick={() => setSelectedArea(area.id)}
                                        className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all ${selectedArea === area.id ? 'scale-125 z-20' : 'hover:scale-110 z-10'
                                            }`}
                                        style={{ left: `${area.x}%`, top: `${area.y}%` }}
                                    >
                                        <div className={`flex flex-col items-center`}>
                                            <div className={`w-10 h-10 rounded-xl ${typeColors[area.type]} flex items-center justify-center shadow-lg ${selectedArea === area.id ? 'ring-4 ring-white ring-offset-2' : ''
                                                }`}>
                                                <IconComponent className="w-5 h-5" />
                                            </div>
                                            <span className="mt-1 text-xs font-medium text-primary bg-white px-2 py-0.5 rounded shadow-sm">
                                                {area.name}
                                            </span>
                                        </div>
                                    </button>
                                );
                            })}
                    </div>
                </div>

                {/* Info Panel */}
                <div className="space-y-4">
                    {/* Selected Area Info */}
                    {selectedInfo && (
                        <div className="card p-6 animate-fade-in">
                            <div className="flex items-center gap-3 mb-4">
                                <div className={`w-12 h-12 rounded-xl ${typeColors[selectedInfo.type]} flex items-center justify-center`}>
                                    {(() => {
                                        const Icon = typeIcons[selectedInfo.type];
                                        return <Icon className="w-6 h-6" />;
                                    })()}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-primary">{selectedInfo.name}</h3>
                                    <p className="text-sm text-muted-foreground">{selectedInfo.description}</p>
                                </div>
                            </div>
                            {selectedInfo.capacity && (
                                <div className="p-3 bg-secondary rounded-xl">
                                    <p className="text-sm text-muted-foreground">Capacity</p>
                                    <p className="font-semibold text-primary">{selectedInfo.capacity}</p>
                                </div>
                            )}
                            <button className="w-full mt-4 btn btn-primary">
                                <Navigation className="w-4 h-4" />
                                Get Directions
                            </button>
                        </div>
                    )}

                    {/* Legend */}
                    <div className="card p-6">
                        <h3 className="font-semibold text-primary mb-4">Legend</h3>
                        <div className="space-y-2">
                            {Object.entries(typeColors).map(([type, color]) => {
                                const Icon = typeIcons[type];
                                return (
                                    <div key={type} className="flex items-center gap-3">
                                        <div className={`w-8 h-8 rounded-lg ${color} flex items-center justify-center`}>
                                            <Icon className="w-4 h-4" />
                                        </div>
                                        <span className="text-sm capitalize text-muted-foreground">{type}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="card p-6">
                        <h3 className="font-semibold text-primary mb-4">Nearby</h3>
                        <div className="space-y-2">
                            <button className="w-full flex items-center gap-3 p-3 bg-secondary rounded-xl hover:bg-secondary-dark transition-colors text-left">
                                <Wifi className="w-5 h-5 text-muted-foreground" />
                                <div>
                                    <p className="font-medium text-primary">Free WiFi</p>
                                    <p className="text-xs text-muted-foreground">RiyadhTechExpo_Guest</p>
                                </div>
                            </button>
                            <button className="w-full flex items-center gap-3 p-3 bg-secondary rounded-xl hover:bg-secondary-dark transition-colors text-left">
                                <Info className="w-5 h-5 text-muted-foreground" />
                                <div>
                                    <p className="font-medium text-primary">Info Desk</p>
                                    <p className="text-xs text-muted-foreground">Near Main Entrance</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
