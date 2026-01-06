interface StatusBadgeProps {
    status: 'pending' | 'approved' | 'action_required' | 'clocked_in' | 'absent' | 'on_break' |
    'customs' | 'in_transit' | 'delivered' | 'available' | 'reserved' | 'booked' |
    'paid' | 'overdue';
    size?: 'sm' | 'md';
}

const statusConfig: Record<string, { label: string; classes: string; dot?: boolean }> = {
    pending: { label: 'Pending', classes: 'bg-amber-100 text-amber-700 border-amber-200' },
    approved: { label: 'Approved', classes: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
    action_required: { label: 'Action Required', classes: 'bg-red-100 text-red-700 border-red-200' },
    clocked_in: { label: 'Clocked In', classes: 'bg-emerald-100 text-emerald-700 border-emerald-200', dot: true },
    absent: { label: 'Absent', classes: 'bg-red-100 text-red-700 border-red-200', dot: true },
    on_break: { label: 'On Break', classes: 'bg-violet-100 text-violet-700 border-violet-200', dot: true },
    customs: { label: 'Customs', classes: 'bg-orange-100 text-orange-700 border-orange-200' },
    in_transit: { label: 'In Transit', classes: 'bg-violet-100 text-violet-700 border-violet-200' },
    delivered: { label: 'Delivered', classes: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
    available: { label: 'Available', classes: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
    reserved: { label: 'Reserved', classes: 'bg-amber-100 text-amber-700 border-amber-200' },
    booked: { label: 'Booked', classes: 'bg-violet-100 text-violet-700 border-violet-200' },
    paid: { label: 'Paid', classes: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
    overdue: { label: 'Overdue', classes: 'bg-red-100 text-red-700 border-red-200' },
};

export default function StatusBadge({ status, size = 'md' }: StatusBadgeProps) {
    const config = statusConfig[status] || { label: status, classes: 'bg-gray-100 text-gray-700 border-gray-200' };

    return (
        <span
            className={`inline-flex items-center gap-1.5 border rounded-full font-medium ${config.classes} ${size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm'
                }`}
        >
            {config.dot && (
                <span
                    className={`w-2 h-2 rounded-full ${status === 'clocked_in' ? 'bg-emerald-500 pulse-status' :
                            status === 'absent' ? 'bg-red-500' : 'bg-violet-500'
                        }`}
                ></span>
            )}
            {config.label}
        </span>
    );
}
