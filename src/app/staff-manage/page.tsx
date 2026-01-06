'use client';

import { useState } from 'react';
import { Users, MapPin, Phone, Clock, UserCheck, UserX, Coffee, Radio } from 'lucide-react';
import StatusBadge from '@/components/StatusBadge';
import { staff, StaffMember } from '@/data/data';

export default function StaffManagePage() {
    const [staffList, setStaffList] = useState<StaffMember[]>(staff);

    const handleClockIn = (id: string) => {
        setStaffList((prev) =>
            prev.map((member) =>
                member.id === id
                    ? {
                        ...member,
                        status: member.status === 'clocked_in' ? 'absent' : 'clocked_in',
                        location: { ...member.location, inZone: member.status !== 'clocked_in' },
                    }
                    : member
            )
        );
    };

    const clockedInCount = staffList.filter((s) => s.status === 'clocked_in').length;
    const inZoneCount = staffList.filter((s) => s.location.inZone).length;

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-primary">Workforce Operations</h1>
                    <p className="text-muted-foreground mt-1">Manage staff attendance, shifts, and location tracking</p>
                </div>
                <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-light transition-colors flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Add Staff
                </button>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-success/10 rounded-xl flex items-center justify-center">
                            <UserCheck className="w-5 h-5 text-success" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Clocked In</p>
                            <p className="text-xl font-bold text-primary">{clockedInCount}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-danger/10 rounded-xl flex items-center justify-center">
                            <UserX className="w-5 h-5 text-danger" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Absent</p>
                            <p className="text-xl font-bold text-primary">{staffList.filter((s) => s.status === 'absent').length}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-info/10 rounded-xl flex items-center justify-center">
                            <Coffee className="w-5 h-5 text-info" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">On Break</p>
                            <p className="text-xl font-bold text-primary">{staffList.filter((s) => s.status === 'on_break').length}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                            <Radio className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">In Geo-Zone</p>
                            <p className="text-xl font-bold text-primary">{inZoneCount}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shift Calendar Preview */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-primary">Today&apos;s Shifts</h2>
                    <button className="text-sm text-primary font-medium hover:underline">View Full Calendar</button>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
                        <div className="flex items-center gap-2 mb-2">
                            <Clock className="w-4 h-4 text-primary" />
                            <span className="font-medium text-primary">Morning Shift</span>
                        </div>
                        <p className="text-sm text-muted-foreground">06:00 - 14:00</p>
                        <p className="text-xs text-muted-foreground mt-1">4 staff assigned</p>
                    </div>
                    <div className="p-4 bg-success/5 rounded-xl border border-success/10">
                        <div className="flex items-center gap-2 mb-2">
                            <Clock className="w-4 h-4 text-success" />
                            <span className="font-medium text-success">Day Shift</span>
                        </div>
                        <p className="text-sm text-muted-foreground">08:00 - 16:00</p>
                        <p className="text-xs text-muted-foreground mt-1">6 staff assigned</p>
                    </div>
                    <div className="p-4 bg-accent/5 rounded-xl border border-accent/10">
                        <div className="flex items-center gap-2 mb-2">
                            <Clock className="w-4 h-4 text-accent" />
                            <span className="font-medium text-accent">Evening Shift</span>
                        </div>
                        <p className="text-sm text-muted-foreground">14:00 - 22:00</p>
                        <p className="text-xs text-muted-foreground mt-1">5 staff assigned</p>
                    </div>
                </div>
            </div>

            {/* Staff List */}
            <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
                <div className="p-6 border-b border-border">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-primary">Staff Directory</h2>
                        <div className="flex gap-2">
                            <select className="px-3 py-1.5 border border-border rounded-lg text-sm">
                                <option>All Roles</option>
                                <option>Security</option>
                                <option>Guest Relations</option>
                                <option>Technical</option>
                            </select>
                            <select className="px-3 py-1.5 border border-border rounded-lg text-sm">
                                <option>All Status</option>
                                <option>Clocked In</option>
                                <option>Absent</option>
                                <option>On Break</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="divide-y divide-border">
                    {staffList.map((member) => (
                        <div key={member.id} className="p-4 hover:bg-secondary transition-colors">
                            <div className="flex items-center gap-4">
                                {/* Avatar */}
                                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                                    <span className="text-lg font-semibold text-primary">
                                        {member.name.split(' ').map((n) => n[0]).join('')}
                                    </span>
                                </div>

                                {/* Info */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-3">
                                        <h3 className="font-medium text-primary">{member.name}</h3>
                                        <StatusBadge status={member.status} size="sm" />
                                    </div>
                                    <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                                        <span>{member.role}</span>
                                        <span className="text-border">|</span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {member.shift}
                                        </span>
                                        <span className="text-border">|</span>
                                        <span className="flex items-center gap-1">
                                            <Phone className="w-3 h-3" />
                                            {member.phone}
                                        </span>
                                    </div>
                                </div>

                                {/* Geo-fence Status */}
                                <div className="flex items-center gap-3">
                                    <div
                                        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm ${member.location.inZone ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'
                                            }`}
                                    >
                                        <MapPin className="w-4 h-4" />
                                        {member.location.inZone ? 'In Zone' : 'Out of Zone'}
                                    </div>

                                    {/* Clock In/Out Button */}
                                    <button
                                        onClick={() => handleClockIn(member.id)}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${member.status === 'clocked_in'
                                                ? 'bg-danger/10 text-danger hover:bg-danger/20'
                                                : 'bg-success text-white hover:bg-success/90'
                                            }`}
                                    >
                                        {member.status === 'clocked_in' ? 'Clock Out' : 'Clock In'}
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
