"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    CreditCard,
    Lock,
    Settings,
    ExternalLink,
    MessageSquare,
    Music,
    Youtube
} from "lucide-react";

const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Artist Growth", href: "/dashboard/artist", icon: Music },
    { name: "YouTube Engine", href: "/dashboard/youtube", icon: Youtube },
    { name: "Stripe", href: "/stripe", icon: CreditCard },
    { name: "Vault", href: "/vault", icon: Lock },
    { name: "Configuración", href: "/settings", icon: Settings },
];

const externalLinks = [
    { name: "n8n Workflows", href: "https://n8n.io", icon: ExternalLink },
    { name: "Hostinger", href: "https://hostinger.com", icon: ExternalLink },
    { name: "Vercel", href: "https://vercel.com", icon: ExternalLink },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="flex h-full w-64 flex-col bg-card border-r border-border/50 text-card-foreground">
            <div className="flex h-16 items-center px-6 border-b border-border/50">
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                    FACOMERC
                </h1>
                <span className="ml-2 text-xs font-medium text-muted-foreground">Cmd Ctr</span>
            </div>

            <div className="flex-1 overflow-y-auto py-6 px-3 space-y-6">
                <div>
                    <h2 className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        Menu Principal
                    </h2>
                    <nav className="space-y-1">
                        {navigation.map((item) => {
                            const Icon = item.icon;
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all duration-200",
                                        isActive
                                            ? "bg-primary/10 text-primary shadow-sm"
                                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                    )}
                                >
                                    <Icon
                                        className={cn(
                                            "mr-3 h-5 w-5 flex-shrink-0 transition-colors",
                                            isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                                        )}
                                    />
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                <div>
                    <h2 className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        Enlaces Rápidos
                    </h2>
                    <nav className="space-y-1">
                        {externalLinks.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center px-3 py-2 text-sm font-medium text-muted-foreground rounded-md hover:bg-muted hover:text-foreground transition-all duration-200"
                            >
                                <item.icon className="mr-3 h-4 w-4 text-muted-foreground group-hover:text-foreground" />
                                {item.name}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>

            <div className="p-4 border-t border-border/50">
                <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                        PA
                    </div>
                    <div>
                        <p className="text-sm font-medium">Patricio Amaro</p>
                        <p className="text-xs text-muted-foreground">Admin</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
