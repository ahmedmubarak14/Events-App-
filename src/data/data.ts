// Mock data for Supplify - Saudi Arabia Events Operating System

export interface Event {
  id: string;
  name: string;
  date: string;
  venue: string;
  budget: number;
  status: 'planning' | 'active' | 'completed';
  daysUntil: number;
}

export interface Permit {
  id: string;
  name: string;
  authority: string;
  status: 'pending' | 'approved' | 'action_required';
  deadline: string;
  description: string;
}

export interface Venue {
  id: string;
  name: string;
  location: string;
  capacity: number;
  type: string;
  image: string;
  pricePerDay: number;
  status: 'available' | 'reserved' | 'booked';
  amenities: string[];
}

export interface Vendor {
  id: string;
  name: string;
  category: string;
  rating: number;
  saudizationCompliant: boolean;
  verified: boolean;
  priceRange: string;
  completedProjects: number;
}

export interface Shipment {
  id: string;
  vendor: string;
  items: string;
  status: 'customs' | 'in_transit' | 'delivered';
  origin: string;
  destination: string;
  co2Saved: number;
  estimatedArrival: string;
}

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  status: 'clocked_in' | 'absent' | 'on_break';
  shift: string;
  location: { lat: number; lng: number; inZone: boolean };
  phone: string;
}

export interface Invoice {
  id: string;
  vendor: string;
  amount: number;
  dueDate: string;
  status: 'pending' | 'paid' | 'overdue';
  factoringFee: number;
}

export interface Alert {
  id: string;
  type: 'warning' | 'info' | 'urgent';
  message: string;
  time: string;
}

// Events
export const events: Event[] = [
  {
    id: 'evt-001',
    name: 'Riyadh Tech Expo 2026',
    date: '2026-03-15',
    venue: 'Riyadh Front Exhibition Center',
    budget: 2500000,
    status: 'active',
    daysUntil: 70
  },
  {
    id: 'evt-002',
    name: 'Jeddah Music Festival',
    date: '2026-04-20',
    venue: 'Kingdom Arena',
    budget: 5000000,
    status: 'planning',
    daysUntil: 106
  },
  {
    id: 'evt-003',
    name: 'AlUla Arts Summit',
    date: '2026-02-10',
    venue: 'AlUla Heritage Site',
    budget: 1800000,
    status: 'planning',
    daysUntil: 37
  }
];

// Permits
export const permits: Permit[] = [
  {
    id: 'pmt-001',
    name: 'Entertainment License',
    authority: 'GEA (General Entertainment Authority)',
    status: 'approved',
    deadline: '2026-01-15',
    description: 'Main event entertainment permit for public gatherings'
  },
  {
    id: 'pmt-002',
    name: 'Venue Safety Certification',
    authority: 'Civil Defense',
    status: 'pending',
    deadline: '2026-01-10',
    description: 'Fire safety and emergency evacuation approval'
  },
  {
    id: 'pmt-003',
    name: 'Commercial Activity License',
    authority: 'MOMRAH/Balady',
    status: 'action_required',
    deadline: '2026-01-08',
    description: 'Municipal permit for commercial event activities'
  },
  {
    id: 'pmt-004',
    name: 'Food & Beverage License',
    authority: 'SFDA (Saudi Food & Drug Authority)',
    status: 'pending',
    deadline: '2026-01-20',
    description: 'Permit for food vendors and catering services'
  },
  {
    id: 'pmt-005',
    name: 'Temporary Structure Permit',
    authority: 'MOMRAH/Balady',
    status: 'approved',
    deadline: '2026-01-12',
    description: 'Approval for stages, tents, and temporary installations'
  }
];

// Venues
export const venues: Venue[] = [
  {
    id: 'ven-001',
    name: 'Riyadh Front Exhibition Center',
    location: 'Riyadh',
    capacity: 15000,
    type: 'Exhibition Hall',
    image: '/venues/riyadh-front.jpg',
    pricePerDay: 150000,
    status: 'available',
    amenities: ['Parking', 'VIP Lounge', 'Catering', 'AV Equipment']
  },
  {
    id: 'ven-002',
    name: 'Kingdom Arena',
    location: 'Jeddah',
    capacity: 25000,
    type: 'Arena',
    image: '/venues/kingdom-arena.jpg',
    pricePerDay: 250000,
    status: 'available',
    amenities: ['Premium Seating', 'Backstage', 'Green Rooms', '360° LED']
  },
  {
    id: 'ven-003',
    name: 'Boulevard World',
    location: 'Riyadh',
    capacity: 50000,
    type: 'Entertainment District',
    image: '/venues/boulevard.jpg',
    pricePerDay: 500000,
    status: 'reserved',
    amenities: ['Multi-Zone', 'Outdoor Stages', 'F&B Courts', 'VIP Areas']
  },
  {
    id: 'ven-004',
    name: 'Red Sea Arena',
    location: 'NEOM',
    capacity: 8000,
    type: 'Amphitheater',
    image: '/venues/red-sea.jpg',
    pricePerDay: 200000,
    status: 'available',
    amenities: ['Ocean View', 'Luxury Suites', 'Helipad', 'Smart Venue']
  }
];

// Vendors
export const vendors: Vendor[] = [
  {
    id: 'vnd-001',
    name: 'Saudi Sound Systems',
    category: 'Audio Equipment',
    rating: 4.8,
    saudizationCompliant: true,
    verified: true,
    priceRange: '$$$$',
    completedProjects: 156
  },
  {
    id: 'vnd-002',
    name: 'Desert Logistics Co.',
    category: 'Transportation & Logistics',
    rating: 4.6,
    saudizationCompliant: true,
    verified: true,
    priceRange: '$$$',
    completedProjects: 89
  },
  {
    id: 'vnd-003',
    name: 'Al-Noor Lighting',
    category: 'Stage Lighting',
    rating: 4.9,
    saudizationCompliant: true,
    verified: true,
    priceRange: '$$$',
    completedProjects: 203
  },
  {
    id: 'vnd-004',
    name: 'Riyadh Catering Services',
    category: 'Food & Beverage',
    rating: 4.7,
    saudizationCompliant: true,
    verified: true,
    priceRange: '$$',
    completedProjects: 312
  },
  {
    id: 'vnd-005',
    name: 'Vision Stage Designs',
    category: 'Stage & Set Design',
    rating: 4.5,
    saudizationCompliant: false,
    verified: true,
    priceRange: '$$$$',
    completedProjects: 67
  }
];

// Shipments
export const shipments: Shipment[] = [
  {
    id: 'shp-001',
    vendor: 'Saudi Sound Systems',
    items: 'Main PA System (L-Acoustics K2)',
    status: 'in_transit',
    origin: 'Dubai, UAE',
    destination: 'Riyadh',
    co2Saved: 245,
    estimatedArrival: '2026-01-08'
  },
  {
    id: 'shp-002',
    vendor: 'Al-Noor Lighting',
    items: 'LED Moving Heads (x50)',
    status: 'customs',
    origin: 'Frankfurt, Germany',
    destination: 'Jeddah',
    co2Saved: 180,
    estimatedArrival: '2026-01-12'
  },
  {
    id: 'shp-003',
    vendor: 'Vision Stage Designs',
    items: 'Custom Stage Modules',
    status: 'delivered',
    origin: 'Local Warehouse',
    destination: 'Riyadh Front',
    co2Saved: 420,
    estimatedArrival: '2026-01-02'
  }
];

// Staff
export const staff: StaffMember[] = [
  {
    id: 'stf-001',
    name: 'Ahmed Al-Rashid',
    role: 'Security Lead',
    status: 'clocked_in',
    shift: '08:00 - 16:00',
    location: { lat: 24.7136, lng: 46.6753, inZone: true },
    phone: '+966 50 123 4567'
  },
  {
    id: 'stf-002',
    name: 'Sarah Al-Otaibi',
    role: 'Guest Relations',
    status: 'clocked_in',
    shift: '10:00 - 18:00',
    location: { lat: 24.7140, lng: 46.6758, inZone: true },
    phone: '+966 55 234 5678'
  },
  {
    id: 'stf-003',
    name: 'Mohammed Al-Faisal',
    role: 'Technical Coordinator',
    status: 'absent',
    shift: '06:00 - 14:00',
    location: { lat: 24.7200, lng: 46.6800, inZone: false },
    phone: '+966 54 345 6789'
  },
  {
    id: 'stf-004',
    name: 'Fatima Al-Zahrani',
    role: 'Usher',
    status: 'on_break',
    shift: '12:00 - 20:00',
    location: { lat: 24.7138, lng: 46.6755, inZone: true },
    phone: '+966 56 456 7890'
  },
  {
    id: 'stf-005',
    name: 'Khalid Al-Mutairi',
    role: 'Security',
    status: 'clocked_in',
    shift: '08:00 - 16:00',
    location: { lat: 24.7135, lng: 46.6752, inZone: true },
    phone: '+966 50 567 8901'
  },
  {
    id: 'stf-006',
    name: 'Noura Al-Qahtani',
    role: 'VIP Coordinator',
    status: 'clocked_in',
    shift: '09:00 - 17:00',
    location: { lat: 24.7139, lng: 46.6756, inZone: true },
    phone: '+966 55 678 9012'
  }
];

// Invoices
export const invoices: Invoice[] = [
  {
    id: 'inv-001',
    vendor: 'Saudi Sound Systems',
    amount: 450000,
    dueDate: '2026-02-15',
    status: 'pending',
    factoringFee: 2.5
  },
  {
    id: 'inv-002',
    vendor: 'Desert Logistics Co.',
    amount: 125000,
    dueDate: '2026-01-30',
    status: 'pending',
    factoringFee: 2.0
  },
  {
    id: 'inv-003',
    vendor: 'Al-Noor Lighting',
    amount: 280000,
    dueDate: '2026-02-01',
    status: 'overdue',
    factoringFee: 3.5
  },
  {
    id: 'inv-004',
    vendor: 'Riyadh Catering Services',
    amount: 95000,
    dueDate: '2026-01-20',
    status: 'paid',
    factoringFee: 0
  }
];

// Alerts
export const alerts: Alert[] = [
  {
    id: 'alt-001',
    type: 'urgent',
    message: 'Civil Defense inspection scheduled for tomorrow at 10:00 AM',
    time: '2 hours ago'
  },
  {
    id: 'alt-002',
    type: 'warning',
    message: '3 visa approvals pending for international crew',
    time: '5 hours ago'
  },
  {
    id: 'alt-003',
    type: 'info',
    message: 'Sound equipment shipment cleared customs',
    time: '1 day ago'
  },
  {
    id: 'alt-004',
    type: 'warning',
    message: 'MOMRAH commercial license requires additional documentation',
    time: '1 day ago'
  }
];

// Timeline Events
export const timelineEvents = [
  { date: '2026-01-05', event: 'Vendor Selection Complete', status: 'completed' },
  { date: '2026-01-10', event: 'Civil Defense Inspection', status: 'upcoming' },
  { date: '2026-01-15', event: 'Equipment Delivery', status: 'upcoming' },
  { date: '2026-01-20', event: 'Staff Training', status: 'upcoming' },
  { date: '2026-02-01', event: 'Technical Rehearsal', status: 'upcoming' },
  { date: '2026-02-10', event: 'Soft Opening', status: 'upcoming' },
  { date: '2026-03-15', event: 'Event Day', status: 'milestone' }
];

// Dashboard Stats
export const dashboardStats = {
  totalBudget: 2500000,
  spentBudget: 875000,
  complianceScore: 78,
  daysUntilEvent: 70,
  activeStaff: 24,
  totalStaff: 45,
  pendingInvoices: 855000,
  walletBalance: 1250000
};
