import { Youtube, Search, BarChart3 } from 'lucide-react';

export default function YouTubeEnginePage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-600 bg-clip-text text-transparent">
                    YouTube Growth Engine
                </h1>
                <span className="px-3 py-1 bg-red-500/10 text-red-400 rounded-full text-xs font-mono border border-red-500/20">
                    Status: Active
                </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Video Idea Lab */}
                <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-red-500/10 text-red-500 rounded-lg">
                            <Search size={20} />
                        </div>
                        <h2 className="text-xl font-semibold">Video Idea Lab</h2>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="text-sm text-zinc-400 mb-1 block">Concepto o Tema</label>
                            <input
                                type="text"
                                placeholder="Ej: Como usar IA para hacer musica..."
                                className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition-colors"
                            />
                        </div>
                        <button className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-zinc-200 transition-colors">
                            Generar Títulos Virales & SEO
                        </button>
                    </div>
                </div>

                {/* Quick Stats Placeholder */}
                <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 flex flex-col items-center justify-center text-zinc-500">
                    <BarChart3 size={48} className="mb-4 opacity-20" />
                    <p>Connect YouTube API to see live stats</p>
                </div>
            </div>
        </div>
    );
}
