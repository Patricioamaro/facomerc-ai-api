'use client';

import { useState } from 'react';
import { Play, Scissors, Sparkles, CheckCircle, Clock } from 'lucide-react';
import { n8n } from '@/lib/n8n';

export default function ShortsFactoryPage() {
    const [url, setUrl] = useState('');
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [clips, setClips] = useState<any[]>([]);

    const handleAnalyze = async () => {
        if (!url) return;
        setIsAnalyzing(true);

        try {
            // Call the n8n webhook
            const response = await n8n.trigger('viral-clipper', { url });

            // Assuming n8n returns an array of clips directly, or nested in 'data'
            const results = Array.isArray(response) ? response : (response.data || []);

            setClips(results.length > 0 ? results : [
                // Fallback mock data if connection fails or returns empty (for demo purposes)
                {
                    id: 1,
                    title: 'Guitar Solo Madness 🎸 (Demo Result)',
                    timestamp: '02:15 - 02:45',
                    score: 98,
                    reason: 'High energy peak, perfect for TikTok loop.',
                    status: 'ready'
                }
            ]);
        } catch (error) {
            console.error("Analysis failed", error);
            alert("Failed to connect to n8n. Check console.");
        } finally {
            setIsAnalyzing(false);
        }
    };

    return (
        <div className="space-y-8 max-w-4xl">
            <div className="flex items-center gap-4">
                <div className="p-3 bg-green-500/10 rounded-xl text-green-500">
                    <Scissors size={32} />
                </div>
                <div>
                    <h1 className="text-3xl font-bold">Shorts Factory</h1>
                    <p className="text-zinc-400">Transform long music videos into viral shorts instantly.</p>
                </div>
            </div>

            {/* Input Section */}
            <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl space-y-4">
                <label className="text-sm font-medium text-zinc-300">YouTube Video URL</label>
                <div className="flex gap-4">
                    <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="paste your video link here..."
                        className="flex-1 bg-black border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 transition-all font-mono text-sm"
                    />
                    <button
                        onClick={handleAnalyze}
                        disabled={isAnalyzing}
                        className={`px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all ${isAnalyzing ? 'bg-zinc-700 text-zinc-400' : 'bg-green-600 hover:bg-green-500 text-white'}`}
                    >
                        {isAnalyzing ? (
                            <>Analyzing...</>
                        ) : (
                            <>
                                <Sparkles size={18} />
                                Generate Clips
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Results Section */}
            {clips.length > 0 && (
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                        <CheckCircle size={20} className="text-green-500" />
                        AI Identified {clips.length} Viral Opportunities
                    </h2>

                    <div className="grid gap-4">
                        {clips.map((clip) => (
                            <div key={clip.id} className="p-5 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-green-500/30 transition-all flex items-center justify-between group">
                                <div className="flex items-start gap-4">
                                    <div className="h-16 w-16 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-500">
                                        <Play size={24} fill="currentColor" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-white group-hover:text-green-400 transition-colors">{clip.title}</h3>
                                        <div className="flex items-center gap-3 text-sm text-zinc-400 mt-1">
                                            <span className="flex items-center gap-1 bg-zinc-800 px-2 py-0.5 rounded text-xs font-mono">
                                                <Clock size={12} /> {clip.timestamp}
                                            </span>
                                            <span className="text-green-500 font-bold">Viral Score: {clip.score}/100</span>
                                        </div>
                                        <p className="text-sm text-zinc-500 mt-2 italic">&quot;{clip.reason}&quot;</p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <button
                                        onClick={() => window.alert(`Optimizing clip: ${clip.title}...`)}
                                        className="px-4 py-2 bg-zinc-800 text-zinc-300 text-sm font-bold rounded-lg hover:bg-zinc-700 transition-colors border border-zinc-700"
                                    >
                                        ✨ Optimize SEO
                                    </button>
                                    <button className="px-4 py-2 bg-white text-black text-sm font-bold rounded-lg hover:bg-zinc-200 transition-colors">
                                        Export Video
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
