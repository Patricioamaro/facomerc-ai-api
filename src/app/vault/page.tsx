import {
    Key,
    Plus,
    Search,
    ShieldCheck,
    Eye,
    Copy
} from "lucide-react";
import { cn } from "@/lib/utils";

const credentials = [
    {
        id: 1,
        service: "OpenAI API Key",
        username: "sk-proj-...",
        type: "API Key",
        lastUsed: "2 mins ago",
    },
    {
        id: 2,
        service: "Supabase DB Admin",
        username: "postgres",
        type: "Database",
        lastUsed: "1 day ago",
    },
    {
        id: 3,
        service: "Stripe Secret Limited",
        username: "sk_test_...",
        type: "API Key",
        lastUsed: "4 hours ago",
    },
    {
        id: 4,
        service: "Hostinger VPS Root",
        username: "root",
        type: "SSH",
        lastUsed: "1 week ago",
    },
];

export default function VaultPage() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight flex items-center gap-2">
                        <ShieldCheck className="h-8 w-8 text-primary" />
                        Bóveda de Credenciales
                    </h2>
                    <p className="text-muted-foreground">
                        Almacenamiento seguro y encriptado para tus claves y accesos.
                    </p>
                </div>
                <button className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors">
                    <Plus className="mr-2 h-4 w-4" /> Nueva Credencial
                </button>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input
                        type="search"
                        placeholder="Buscar credencial..."
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pl-9 max-w-sm"
                    />
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {credentials.map((cred) => (
                    <div
                        key={cred.id}
                        className="group relative rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                    <Key className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">{cred.service}</h3>
                                    <span className="text-xs text-muted-foreground border border-border px-1.5 py-0.5 rounded-full">
                                        {cred.type}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center justify-between bg-muted/50 p-2 rounded-md group-hover:bg-muted transition-colors">
                                <code className="text-sm font-mono text-muted-foreground truncate max-w-[140px]">
                                    {cred.username}
                                </code>
                                <div className="flex gap-1">
                                    <button className="p-1.5 hover:bg-background rounded-md text-muted-foreground hover:text-foreground transition-colors" title="Copy">
                                        <Copy className="h-3.5 w-3.5" />
                                    </button>
                                    <button className="p-1.5 hover:bg-background rounded-md text-muted-foreground hover:text-foreground transition-colors" title="View">
                                        <Eye className="h-3.5 w-3.5" />
                                    </button>
                                </div>
                            </div>

                            <div className="pt-2 text-xs text-muted-foreground flex justify-between items-center border-t border-border/50">
                                <span>Last access: {cred.lastUsed}</span>
                                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
