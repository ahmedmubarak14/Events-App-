import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function RiskCommandLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-secondary-light">
            <Sidebar />
            <Header />
            <main className="ml-64 pt-16 p-6">
                {children}
            </main>
        </div>
    );
}
