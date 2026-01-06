import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
    title: string;
    value: string | number;
    subtitle?: string;
    icon: LucideIcon;
    trend?: {
        value: number;
        isPositive: boolean;
    };
    color: 'primary' | 'success' | 'accent' | 'info' | 'warning';
}

const colorClasses = {
    primary: 'bg-primary/10',
    success: 'bg-success/10',
    accent: 'bg-accent/10',
    info: 'bg-info/10',
    warning: 'bg-warning/10',
};

const textClasses = {
    primary: 'text-primary',
    success: 'text-success',
    accent: 'text-accent',
    info: 'text-info',
    warning: 'text-warning',
};

export default function StatsCard({ title, value, subtitle, icon: Icon, trend, color }: StatsCardProps) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-border card-hover">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm text-muted-foreground font-medium">{title}</p>
                    <p className="text-3xl font-bold text-primary mt-2">{value}</p>
                    {subtitle && (
                        <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
                    )}
                    {trend && (
                        <div className="flex items-center gap-1 mt-2">
                            <span
                                className={`text-sm font-medium ${trend.isPositive ? 'text-success' : 'text-danger'
                                    }`}
                            >
                                {trend.isPositive ? '+' : ''}{trend.value}%
                            </span>
                            <span className="text-xs text-muted-foreground">vs last month</span>
                        </div>
                    )}
                </div>
                <div className={`p-3 rounded-xl ${colorClasses[color]}`}>
                    <Icon className={`w-6 h-6 ${textClasses[color]}`} />
                </div>
            </div>
        </div>
    );
}
