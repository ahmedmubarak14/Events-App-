'use client';

import { useState } from 'react';
import { Calendar, Users, Package, DollarSign, TrendingUp, AlertTriangle, CheckCircle2, Clock, ChevronRight, ArrowUpRight, BarChart3, X, Download, FileText } from 'lucide-react';
import Link from 'next/link';

const stats = [
    {
        label: 'Days to Event',
        value: '70',
        change: null,
        icon: Calendar,
        color: 'primary',
        bgGradient: 'from-primary/10 to-primary/5'
    },
    {
        label: 'Vendors Confirmed',
        value: '23/28',
        change: '+3 this week',
        changeType: 'positive',
        icon: Package,
        color: 'success',
        bgGradient: 'from-success/10 to-success/5'
    },
    {
        label: 'Staff Registered',
        value: '156',
        change: '82% of target',
        changeType: 'neutral',
        icon: Users,
        color: 'accent',
        bgGradient: 'from-accent/10 to-accent/5'
    },
    {
        label: 'Budget Utilized',
        value: '68%',
        change: 'SAR 2.4M spent',
        changeType: 'neutral',
        icon: DollarSign,
        color: 'warning',
        bgGradient: 'from-warning/10 to-warning/5'
    },
];

const tasks = [
    { id: 1, title: 'Finalize catering contract', due: 'Today', priority: 'high', completed: false },
    { id: 2, title: 'Review security staffing plan', due: 'Tomorrow', priority: 'medium', completed: false },
    { id: 3, title: 'Submit venue modification request', due: 'Jan 8', priority: 'medium', completed: true },
    { id: 4, title: 'Confirm AV equipment delivery', due: 'Jan 10', priority: 'low', completed: false },
];

const recentActivity = [
    { id: 1, action: 'Vendor confirmed', detail: 'Saudi Sound Systems accepted RFQ', time: '15 min ago', type: 'success' },
    { id: 2, action: 'Staff registered', detail: '12 new security personnel onboarded', time: '1 hour ago', type: 'info' },
    { id: 3, action: 'Payment processed', detail: 'SAR 45,000 to Al-Futtaim Logistics', time: '2 hours ago', type: 'success' },
    { id: 4, action: 'Alert resolved', detail: 'Permit approval received from MOMRAH', time: '3 hours ago', type: 'warning' },
];

const scheduleItems = [
    { date: 'Mar 14, 2026', title: 'Event Day 1 - Opening', time: '08:00 - 21:00' },
    { date: 'Mar 15, 2026', title: 'Event Day 2 - Main Conference', time: '09:00 - 20:00' },
    { date: 'Mar 16, 2026', title: 'Event Day 3 - Closing', time: '10:00 - 18:00' },
    { date: 'Mar 10, 2026', title: 'Venue Setup Begin', time: '06:00 - 22:00' },
    { date: 'Mar 12, 2026', title: 'Tech Rehearsal', time: '14:00 - 20:00' },
];

export default function DashboardPage() {
    const [showSchedule, setShowSchedule] = useState(false);
    const [showExport, setShowExport] = useState(false);
    const [taskList, setTaskList] = useState(tasks);
    const [exportStarted, setExportStarted] = useState(false);

    const toggleTask = (id: number) => {
        setTaskList(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    const handleExport = () => {
        setExportStarted(true);
        setTimeout(() => {
            setShowExport(false);
            setExportStarted(false);
        }, 1500);
    };

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Schedule Modal */}
            {showSchedule && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/50" onClick={() => setShowSchedule(false)}></div>
                    <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-lg animate-scale-in">
                        <div className="flex items-center justify-between p-5 border-b border-border-light">
                            <h2 className="text-lg font-semibold text-primary">Event Schedule</h2>
                            <button onClick={() => setShowSchedule(false)} className="p-2 hover:bg-secondary rounded-lg">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-5 max-h-[60vh] overflow-y-auto">
                            <div className="space-y-3">
                                {scheduleItems.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
                                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                            <Calendar className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-primary">{item.title}</p>
                                            <p className="text-sm text-muted-foreground">{item.date}</p>
                                            <p className="text-sm text-muted-foreground">{item.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="p-5 border-t border-border-light">
                            <Link href="/staff-manage/calendar" className="btn btn-primary w-full" onClick={() => setShowSchedule(false)}>
                                View Full Calendar
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            {/* Export Modal */}
            {showExport && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/50" onClick={() => setShowExport(false)}></div>
                    <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md animate-scale-in">
                        <div className="flex items-center justify-between p-5 border-b border-border-light">
                            <h2 className="text-lg font-semibold text-primary">Export Report</h2>
                            <button onClick={() => setShowExport(false)} className="p-2 hover:bg-secondary rounded-lg">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-5">
                            <p className="text-muted-foreground mb-4">Select report format to download</p>
                            <div className="space-y-2">
                                {['PDF Report', 'Excel Spreadsheet', 'CSV Data'].map((format, idx) => (
                                    <button
                                        key={idx}
                                        onClick={handleExport}
                                        disabled={exportStarted}
                                        className="w-full flex items-center gap-3 p-4 border border-border rounded-xl hover:bg-secondary transition-colors text-left"
                                    >
                                        <FileText className="w-5 h-5 text-primary" />
                                        <span className="flex-1 font-medium">{format}</span>
                                        {exportStarted ? (
                                            <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                                        ) : (
                                            <Download className="w-5 h-5 text-muted-foreground" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-primary">Dashboard</h1>
                    <p className="text-muted-foreground mt-1">Welcome back! Here&apos;s your event overview.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button onClick={() => setShowExport(true)} className="btn btn-secondary">
                        <BarChart3 className="w-4 h-4" />
                        Export Report
                    </button>
                    <button onClick={() => setShowSchedule(true)} className="btn btn-primary">
                        <Calendar className="w-4 h-4" />
                        View Schedule
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, idx) => {
                    const IconComponent = stat.icon;
                    return (
                        <div
                            key={idx}
                            className={`stat-card bg-gradient-to-br ${stat.bgGradient} border-0`}
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div className={`stat-icon bg-${stat.color}/15`}>
                                    <IconComponent className={`w-5 h-5 text-${stat.color}`} />
                                </div>
                                {stat.change && (
                                    <span className={`text-xs font-medium flex items-center gap-1 ${stat.changeType === 'positive' ? 'text-success' : 'text-muted-foreground'
                                        }`}>
                                        {stat.changeType === 'positive' && <TrendingUp className="w-3 h-3" />}
                                        {stat.change}
                                    </span>
                                )}
                            </div>
                            <p className="stat-value">{stat.value}</p>
                            <p className="stat-label mt-1">{stat.label}</p>
                        </div>
                    );
                })}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {/* Tasks Section */}
                <div className="xl:col-span-2 card">
                    <div className="flex items-center justify-between p-5 border-b border-border-light">
                        <div>
                            <h2 className="font-semibold text-primary">Priority Tasks</h2>
                            <p className="text-sm text-muted-foreground mt-0.5">Your action items for this week</p>
                        </div>
                        <span className="text-sm text-muted-foreground">{taskList.filter(t => t.completed).length}/{taskList.length} done</span>
                    </div>
                    <div className="divide-y divide-border-light">
                        {taskList.map((task) => (
                            <div key={task.id} className="flex items-center gap-4 p-4 hover:bg-secondary-light transition-colors">
                                <button
                                    onClick={() => toggleTask(task.id)}
                                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${task.completed
                                        ? 'bg-success border-success'
                                        : 'border-border hover:border-primary'
                                        }`}>
                                    {task.completed && <CheckCircle2 className="w-3 h-3 text-white" />}
                                </button>
                                <div className="flex-1 min-w-0">
                                    <p className={`font-medium ${task.completed ? 'text-muted-foreground line-through' : 'text-primary'}`}>
                                        {task.title}
                                    </p>
                                    <p className="text-sm text-muted-foreground flex items-center gap-1.5 mt-0.5">
                                        <Clock className="w-3 h-3" />
                                        Due {task.due}
                                    </p>
                                </div>
                                <span className={`badge ${task.priority === 'high' ? 'badge-danger' :
                                    task.priority === 'medium' ? 'badge-warning' : 'badge-primary'
                                    }`}>
                                    {task.priority}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Activity Feed */}
                <div className="card">
                    <div className="flex items-center justify-between p-5 border-b border-border-light">
                        <div>
                            <h2 className="font-semibold text-primary">Recent Activity</h2>
                            <p className="text-sm text-muted-foreground mt-0.5">Latest updates</p>
                        </div>
                    </div>
                    <div className="divide-y divide-border-light">
                        {recentActivity.map((activity) => (
                            <div key={activity.id} className="p-4 hover:bg-secondary-light transition-colors">
                                <div className="flex items-start gap-3">
                                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${activity.type === 'success' ? 'bg-success' :
                                        activity.type === 'warning' ? 'bg-warning' : 'bg-info'
                                        }`} />
                                    <div className="flex-1 min-w-0">
                                        <p className="font-medium text-primary text-sm">{activity.action}</p>
                                        <p className="text-sm text-muted-foreground mt-0.5">{activity.detail}</p>
                                        <p className="text-xs text-muted-foreground mt-1.5">{activity.time}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                    { title: 'Plan & Comply', description: 'Manage permits and regulatory requirements', href: '/plan-comply', icon: '📋', color: 'primary' },
                    { title: 'Vendor Management', description: 'Track RFQs and vendor contracts', href: '/source-move', icon: '📦', color: 'accent' },
                    { title: 'Workforce', description: 'Staff scheduling and attendance', href: '/staff-manage', icon: '👥', color: 'success' },
                ].map((action, idx) => (
                    <Link key={idx} href={action.href} className="card-elevated p-5 group cursor-pointer">
                        <div className="flex items-start gap-4">
                            <div className="text-3xl">{action.icon}</div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-primary group-hover:text-accent transition-colors flex items-center gap-2">
                                    {action.title}
                                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </h3>
                                <p className="text-sm text-muted-foreground mt-1">{action.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
