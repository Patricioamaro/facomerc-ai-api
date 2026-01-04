export default function DashboardPage() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Command Center</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Quick Stats or Welcome Message */}
                <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900">
                    <h2 className="text-xl font-semibold mb-2">Welcome Back, Patricio</h2>
                    <p className="text-zinc-400">System is operational. Challenge: 100k Subs.</p>
                </div>
            </div>
        </div>
    );
}
