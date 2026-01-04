'use client';

import { Music, TrendingUp, Users, Radio } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', listeners: 12000 },
    { name: 'Feb', listeners: 18000 },
    { name: 'Mar', listeners: 25000 },
    { name: 'Apr', listeners: 45000 },
    { name: 'May', listeners: 80000 },
    { name: 'Jun', listeners: 100000 },
];

export default function SpotifyDashboardPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold flex items-center gap-3">
                    <Music className="text-green-500" />
                    Spotify Command Center
                </h1>
                <div className="flex gap-2">
                    <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-xs text-green-500 font-mono">LIVE DATA CONNECTED</span>
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                    { label: 'Monthly Listeners', value: '100,432', change: '+34%', icon: Users },
                    { label: 'Followers', value: '12,500', change: '+12%', icon: TrendingUp },
                    { label: 'Stream Count', value: '1.2M', change: '+56%', icon: Music },
                    { label: 'Algorithmic Playlists', value: '45', change: '+5', icon: Radio },
                ].map((stat, i) => (
                    <div key={i} className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                        <div className="flex justify-between items-start mb-2">
                            <div className="p-2 bg-zinc-800 rounded-lg text-zinc-400">
                                <stat.icon size={18} />
                            </div>
                            <span className="text-green-500 text-xs font-bold bg-green-500/10 px-2 py-1 rounded">{stat.change}</span>
                        </div>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-xs text-zinc-500 uppercase tracking-wider mt-1">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Main Chart */}
            <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
                <h3 className="text-lg font-semibold mb-6">Audience Growth Trajectory</h3>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id="colorListeners" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                            <XAxis dataKey="name" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis stroke="#666" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value / 1000}k`} />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#000', borderColor: '#333', borderRadius: '8px' }}
                                itemStyle={{ color: '#22c55e' }}
                            />
                            <Area type="monotone" dataKey="listeners" stroke="#22c55e" strokeWidth={2} fillOpacity={1} fill="url(#colorListeners)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
