import Link from 'next/link';
import { Play, TrendingUp, Music } from 'lucide-react';

export default function ArtistDashboardPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                    Artist Growth Ecosystem
                </h1>
                <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-mono border border-green-500/20">
                    Target: 100k Subs
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Module Card: Shorts Factory */}
                <Link href="/dashboard/artist/shorts-factory" className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-green-500/50 transition-all">
                    <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-lg bg-green-500/10 text-green-400">
                            <Play size={24} fill="currentColor" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Shorts Factory</h3>
                            <p className="text-xs text-zinc-500">Recycle Content</p>
                        </div>
                    </div>
                    <p className="text-sm text-zinc-400">
                        Convert your existing 25+ music videos into hundreds of viral shorts using Gemini AI.
                    </p>
                </Link>

                {/* Module Card: Spotify Stats */}
                <Link href="/dashboard/artist/spotify" className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-green-500/50 transition-all">
                    <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-lg bg-green-500/10 text-green-400">
                            <Music size={24} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Spotify Manager</h3>
                            <p className="text-xs text-zinc-500">Music Metrics</p>
                        </div>
                    </div>
                    <p className="text-sm text-zinc-400">
                        Track monthly listeners, popular tracks, and analyze audience trends.
                    </p>
                </Link>

                {/* Module Card: Trend Hunter */}
                <div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-green-500/50 transition-all opacity-75">
                    <div className="absolute top-3 right-3 text-xs bg-zinc-800 px-2 py-1 rounded text-zinc-400">Soon</div>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-lg bg-zinc-800 text-zinc-400">
                            <TrendingUp size={24} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Trend Hunter</h3>
                            <p className="text-xs text-zinc-500">Viral Research</p>
                        </div>
                    </div>
                    <p className="text-sm text-zinc-400">
                        Catch viral waves before they peak. AI scans TikTok and YouTube for you.
                    </p>
                </div>
            </div>
        </div>
    );
}
