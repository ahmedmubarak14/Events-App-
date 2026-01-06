'use client';

import { BarChart3, TrendingUp, TrendingDown, DollarSign, Users, Percent, Target } from 'lucide-react';

// Mock ROI data
const costComparison = [
    { category: 'Audio/Visual', yourCost: 280000, marketAvg: 320000, savings: 12 },
    { category: 'Catering', yourCost: 150000, marketAvg: 145000, savings: -3 },
    { category: 'Venue Rental', yourCost: 400000, marketAvg: 450000, savings: 11 },
    { category: 'Staffing', yourCost: 180000, marketAvg: 175000, savings: -3 },
    { category: 'Logistics', yourCost: 95000, marketAvg: 110000, savings: 14 },
    { category: 'Marketing', yourCost: 120000, marketAvg: 130000, savings: 8 },
];

const kpis = [
    { label: 'Total Event Cost', value: 'SAR 2.5M', trend: -8, icon: DollarSign, color: 'primary' },
    { label: 'Cost per Attendee', value: 'SAR 500', trend: -12, icon: Users, color: 'success' },
    { label: 'Vendor Savings', value: '12%', trend: 4, icon: Percent, color: 'accent' },
    { label: 'Budget Utilization', value: '85%', trend: 0, icon: Target, color: 'info' },
];

export default function AnalyticsPage() {
    const totalSavings = costComparison.reduce((acc, item) => {
        const diff = item.marketAvg - item.yourCost;
        return diff > 0 ? acc + diff : acc;
    }, 0);

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-primary">Analytics & ROI</h1>
                    <p className="text-muted-foreground mt-1">Track performance and benchmark against market averages</p>
                </div>
                <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-light transition-colors">
                    Export Report
                </button>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {kpis.map((kpi, idx) => (
                    <div key={idx} className="bg-white rounded-2xl p-5 shadow-sm border border-border">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground">{kpi.label}</p>
                                <p className="text-2xl font-bold text-primary mt-1">{kpi.value}</p>
                                {kpi.trend !== 0 && (
                                    <div className="flex items-center gap-1 mt-2">
                                        {kpi.trend < 0 ? (
                                            <TrendingDown className="w-4 h-4 text-success" />
                                        ) : (
                                            <TrendingUp className="w-4 h-4 text-warning" />
                                        )}
                                        <span className={`text-sm font-medium ${kpi.trend < 0 ? 'text-success' : 'text-warning'}`}>
                                            {Math.abs(kpi.trend)}% vs market
                                        </span>
                                    </div>
                                )}
                            </div>
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-${kpi.color}/10`}>
                                <kpi.icon className={`w-6 h-6 text-${kpi.color}`} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Savings Summary */}
            <div className="bg-gradient-to-r from-success/10 to-primary/10 rounded-2xl p-6 border border-success/20">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-success/20 rounded-2xl flex items-center justify-center">
                        <TrendingDown className="w-8 h-8 text-success" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold text-primary">Total Estimated Savings</h3>
                        <p className="text-muted-foreground text-sm mt-1">
                            Based on Supplify market benchmarks for similar events
                        </p>
                    </div>
                    <div className="text-right">
                        <p className="text-3xl font-bold text-success">SAR {(totalSavings / 1000).toFixed(0)}K</p>
                        <p className="text-sm text-muted-foreground">below market average</p>
                    </div>
                </div>
            </div>

            {/* ROI Benchmark Chart */}
            <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
                <div className="p-6 border-b border-border">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <BarChart3 className="w-5 h-5 text-primary" />
                            <h2 className="text-lg font-semibold text-primary">ROI Benchmark: Your Event vs Market Average</h2>
                        </div>
                        <select className="px-3 py-1.5 border border-border rounded-lg text-sm">
                            <option>All Categories</option>
                            <option>Audio/Visual</option>
                            <option>Catering</option>
                            <option>Venue</option>
                        </select>
                    </div>
                </div>
                <div className="p-6">
                    <div className="space-y-6">
                        {costComparison.map((item, idx) => (
                            <div key={idx}>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-medium text-primary">{item.category}</span>
                                    <div className="flex items-center gap-4">
                                        <span className={`text-sm font-medium ${item.savings > 0 ? 'text-success' : 'text-warning'}`}>
                                            {item.savings > 0 ? `You saved ${item.savings}%` : `${Math.abs(item.savings)}% above market`}
                                        </span>
                                    </div>
                                </div>
                                <div className="relative h-8">
                                    {/* Market Average Bar */}
                                    <div
                                        className="absolute top-0 h-3 bg-secondary rounded-full"
                                        style={{ width: `${(item.marketAvg / 500000) * 100}%` }}
                                    >
                                        <div className="absolute right-0 -top-5 text-xs text-muted-foreground">
                                            Market: SAR {(item.marketAvg / 1000).toFixed(0)}K
                                        </div>
                                    </div>
                                    {/* Your Cost Bar */}
                                    <div
                                        className={`absolute top-4 h-3 rounded-full ${item.savings > 0 ? 'bg-success' : 'bg-warning'}`}
                                        style={{ width: `${(item.yourCost / 500000) * 100}%` }}
                                    >
                                        <div className="absolute right-0 top-4 text-xs text-muted-foreground">
                                            Yours: SAR {(item.yourCost / 1000).toFixed(0)}K
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Legend */}
                    <div className="flex items-center gap-6 mt-8 pt-4 border-t border-border">
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-3 bg-secondary rounded"></div>
                            <span className="text-sm text-muted-foreground">Market Average</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-3 bg-success rounded"></div>
                            <span className="text-sm text-muted-foreground">Your Cost (Below Market)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-3 bg-warning rounded"></div>
                            <span className="text-sm text-muted-foreground">Your Cost (Above Market)</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Budget Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
                    <h3 className="text-lg font-semibold text-primary mb-4">Budget Allocation</h3>
                    <div className="space-y-4">
                        {costComparison.map((item, idx) => {
                            const percentage = Math.round((item.yourCost / 1225000) * 100);
                            return (
                                <div key={idx}>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-muted-foreground">{item.category}</span>
                                        <span className="font-medium text-primary">{percentage}%</span>
                                    </div>
                                    <div className="w-full bg-secondary rounded-full h-2">
                                        <div
                                            className="h-2 rounded-full bg-primary"
                                            style={{ width: `${percentage}%` }}
                                        ></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
                    <h3 className="text-lg font-semibold text-primary mb-4">Optimization Suggestions</h3>
                    <div className="space-y-3">
                        <div className="p-3 bg-success/10 rounded-xl border border-success/20">
                            <p className="font-medium text-success text-sm">✓ Great A/V vendor choice</p>
                            <p className="text-xs text-muted-foreground mt-1">You&apos;re 12% below market rate for similar quality</p>
                        </div>
                        <div className="p-3 bg-warning/10 rounded-xl border border-warning/20">
                            <p className="font-medium text-warning text-sm">⚠ Consider catering alternatives</p>
                            <p className="text-xs text-muted-foreground mt-1">3 verified vendors offer similar menus at 8% less</p>
                        </div>
                        <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
                            <p className="font-medium text-primary text-sm">💡 Bulk staffing discount available</p>
                            <p className="text-xs text-muted-foreground mt-1">Book 30+ staff via Supplify for 5% discount</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
