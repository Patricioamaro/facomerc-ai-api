import {
  CreditCard,
  Users,
  Activity,
  ArrowUpRight,
  ExternalLink
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const stats = [
  {
    name: "Total Revenue",
    value: "$0.00",
    change: "+0% from last month",
    icon: CreditCard,
    href: "/stripe",
  },
  {
    name: "Active Projects",
    value: "12",
    change: "+2 new this week",
    icon: Activity,
    href: "/",
  },
  {
    name: "Active Clients",
    value: "24",
    change: "+4 signed up",
    icon: Users,
    href: "/",
  },
];

const quickLinks = [
  {
    name: "n8n Automation",
    description: "Manage logic and workflows",
    href: "https://n8n.io",
    color: "bg-orange-500/10 text-orange-500",
  },
  {
    name: "Hostinger Hosting",
    description: "Manage domains and VPS",
    href: "https://hostinger.com",
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    name: "Vercel Deployments",
    description: "Frontend deployments",
    href: "https://vercel.com",
    color: "bg-black/10 text-white dark:bg-white/10",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Bienvenido de nuevo, Patricio. Aquí está el resumen de tu agencia.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="rounded-xl border bg-card p-6 text-card-foreground shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="tracking-tight text-sm font-medium text-muted-foreground">
                {stat.name}
              </h3>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="pt-2">
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.change}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Accesos Rápidos</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {quickLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50"
            >
              <div className="flex items-center gap-4">
                <div className={cn("p-2 rounded-full", link.color)}>
                  <ExternalLink className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold group-hover:text-primary transition-colors">
                    {link.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {link.description}
                  </p>
                </div>
                <ArrowUpRight className="ml-auto h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
