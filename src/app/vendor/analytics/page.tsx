'use client';

import { BarChart3, TrendingUp, DollarSign, Package, Star, Clock, ArrowUp, ArrowDown } from 'lucide-react';

const metrics = [
    { label: 'Total Revenue', value: 'SAR 1.24M', change: '+18%', trend: 'up', period: 'vs last year' },
    { label: 'Orders Completed', value: '47', change: '+12', trend: 'up', period: 'this year' },
    { label: 'Avg. Order Value', value: 'SAR 26.4K', change: '+5%', trend: 'up', period: 'vs last year' },
    { label: 'Client Rating', value: '4.8', change: '+0.2', trend: 'up', period: 'vs last year' },
];

const monthlyRevenue = [
    { month: 'Jan', revenue: 85000 },
    { month: 'Feb', revenue: 92000 },
    { month: 'Mar', revenue: 78000 },
    { month: 'Apr', revenue: 115000 },
    { month: 'May', revenue: 145000 },
    { month: 'Jun', revenue: 132000 },
    { month: 'Jul', revenue: 98000 },
    { month: 'Aug', revenue: 88000 },
    { month: 'Sep', revenue: 125000 },
    { month: 'Oct', revenue: 156000 },
    { month: 'Nov', revenue: 178000 },
    { month: 'Dec', revenue: 148000 },
];

const topClients = [
    { name: 'Saudi Events Co.', orders: 12, revenue: 420000 },
    { name: 'Riyadh Season', orders: 8, revenue: 380000 },
    { name: 'LEAP Tech', orders: 5, revenue: 225000 },
    { name: 'Ministry of Culture', orders: 4, revenue: 215000 },
];

const maxRevenue = Math.max(...monthlyRevenue.map(m => m.revenue));

export default function VendorAnalyticsPage() {
    return (
        <div className="space-y-6 animate-fade-in">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-primary">Analytics</h1>
                    <p className="text-muted-foreground mt-1">Track your business performance</p>
                </div>
                <select className="input py-2 px-4 text-sm w-auto">
                    <option>Last 12 months</option>
                    <option>This year</option>
                    <option>Last year</option>
                </select>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {metrics.map((metric, idx) => (
                    <div key={idx} className="card p-5">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-sm text-muted-foreground">{metric.label}</span>
                            <span className={`flex items-center gap-1 text-xs font-medium ${metric.trend === 'up' ? 'text-success' : 'text-danger'
                                }`}>
                                {metric.trend === 'up' ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                                {metric.change}
                            </span>
                        </div>
                        <p className="text-2xl font-bold text-primary">{metric.value}</p>
                        <p className="text-xs text-muted-foreground mt-1">{metric.period}</p>
                    </div>
                ))}
            </div>

            {/* Revenue Chart */}
            <div className="card p-6">
                <h3 className="font-semibold text-primary mb-6">Monthly Revenue</h3>
                <div className="flex items-end gap-2 h-48">
                    {monthlyRevenue.map((month, idx) => (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                            <div
                                className="w-full bg-primary/20 rounded-t-lg hover:bg-primary/30 transition-colors relative group"
                                style={{ height: `${(month.revenue / maxRevenue) * 100}%` }}
                            >
                                <div
                                    className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-lg transition-all"
                                    style={{ height: '100%' }}
                                ></div>
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                                    SAR {(month.revenue / 1000).toFixed(0)}K
                                </div>
                            </div>
                            <span className="text-xs text-muted-foreground">{month.month}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Top Clients */}
                <div className="card">
                    <div className="p-5 border-b border-border-light">
                        <h3 className="font-semibold text-primary">Top Clients</h3>
                    </div>
                    <div className="divide-y divide-border-light">
                        {topClients.map((client, idx) => (
                            <div key={idx} className="p-4 flex items-center gap-4">
                                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-sm font-bold text-primary">
                                    {idx + 1}
                                </div>
                                <div className="flex-1">
                                    <p className="font-medium text-primary">{client.name}</p>
                                    <p className="text-sm text-muted-foreground">{client.orders} orders</p>
                                </div>
                                <p className="font-semibold text-primary">SAR {(client.revenue / 1000).toFixed(0)}K</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Performance */}
                <div className="card p-6">
                    <h3 className="font-semibold text-primary mb-6">Performance Metrics</h3>
                    <div className="space-y-6">
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-muted-foreground">Response Rate</span>
                                <span className="font-medium text-primary">98%</span>
                            </div>
                            <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                <div className="h-full bg-success rounded-full" style={{ width: '98%' }}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-muted-foreground">On-time Delivery</span>
                                <span className="font-medium text-primary">95%</span>
                            </div>
                            <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                <div className="h-full bg-primary rounded-full" style={{ width: '95%' }}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-muted-foreground">Quote Win Rate</span>
                                <span className="font-medium text-primary">72%</span>
                            </div>
                            <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                <div className="h-full bg-accent rounded-full" style={{ width: '72%' }}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-muted-foreground">Client Satisfaction</span>
                                <span className="font-medium text-primary">4.8/5.0</span>
                            </div>
                            <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                <div className="h-full bg-warning rounded-full" style={{ width: '96%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
