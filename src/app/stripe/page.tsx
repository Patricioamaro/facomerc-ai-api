import {
    ArrowUpRight,
    CreditCard,
    DollarSign,
    Users,
    Download
} from "lucide-react";
import { cn } from "@/lib/utils";

const transactions = [
    {
        id: "TRX-9871",
        user: "Cliente Ejemplo LLC",
        amount: "+$1,200.00",
        status: "Succeeded",
        date: "Hoy, 2:34 PM",
        img: "https://avatar.vercel.sh/clientexample",
    },
    {
        id: "TRX-9872",
        user: "Startup Innovadora",
        amount: "+$450.00",
        status: "Processing",
        date: "Ayer, 10:15 AM",
        img: "https://avatar.vercel.sh/startup",
    },
    {
        id: "TRX-9873",
        user: "Consultoría Global",
        amount: "+$2,500.00",
        status: "Succeeded",
        date: "Jan 2, 2026",
        img: "https://avatar.vercel.sh/consultoria",
    },
];

export default function StripePage() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Pagos (Stripe)</h2>
                    <p className="text-muted-foreground">
                        Vista general de ingresos y transacciones recientes.
                    </p>
                </div>
                <button className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors">
                    <Download className="mr-2 h-4 w-4" /> Exportar Reporte
                </button>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-xl border bg-card p-6 shadow-sm">
                    <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <h3 className="tracking-tight text-sm font-medium text-muted-foreground">
                            Ingresos Totales (Mes)
                        </h3>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="pt-2">
                        <div className="text-2xl font-bold">$4,150.00</div>
                        <p className="text-xs text-emerald-500 font-medium mt-1">
                            +12.5% vs mes anterior
                        </p>
                    </div>
                </div>

                <div className="rounded-xl border bg-card p-6 shadow-sm">
                    <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <h3 className="tracking-tight text-sm font-medium text-muted-foreground">
                            Suscripciones Activas
                        </h3>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="pt-2">
                        <div className="text-2xl font-bold">8</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            +1 nueva esta semana
                        </p>
                    </div>
                </div>

                <div className="rounded-xl border bg-card p-6 shadow-sm">
                    <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <h3 className="tracking-tight text-sm font-medium text-muted-foreground">
                            Saldo Pendiente
                        </h3>
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="pt-2">
                        <div className="text-2xl font-bold">$450.00</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            Llega el 5 de Enero
                        </p>
                    </div>
                </div>
            </div>

            <div className="rounded-xl border bg-card shadow-sm">
                <div className="p-6">
                    <h3 className="text-lg font-medium">Transacciones Recientes</h3>
                    <p className="text-sm text-muted-foreground">
                        Últimos movimientos registrados en tu cuenta.
                    </p>
                </div>
                <div className="p-0">
                    <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm">
                            <thead className="[&_tr]:border-b">
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <th className="h-12 px-6 text-left align-middle font-medium text-muted-foreground">
                                        Cliente
                                    </th>
                                    <th className="h-12 px-6 text-left align-middle font-medium text-muted-foreground">
                                        Estado
                                    </th>
                                    <th className="h-12 px-6 text-left align-middle font-medium text-muted-foreground">
                                        Fecha
                                    </th>
                                    <th className="h-12 px-6 text-right align-middle font-medium text-muted-foreground">
                                        Monto
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="[&_tr:last-child]:border-0">
                                {transactions.map((trx) => (
                                    <tr
                                        key={trx.id}
                                        className="border-b transition-colors hover:bg-muted/50"
                                    >
                                        <td className="p-6 align-middle">
                                            <div className="flex items-center gap-3">
                                                <div className="h-8 w-8 rounded-full bg-muted/50 overflow-hidden">
                                                    {/* Placeholder for avatar */}
                                                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-20"></div>
                                                </div>
                                                <span className="font-medium">{trx.user}</span>
                                            </div>
                                        </td>
                                        <td className="p-6 align-middle">
                                            <span
                                                className={cn(
                                                    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                                                    trx.status === "Succeeded"
                                                        ? "bg-emerald-500/10 text-emerald-500"
                                                        : "bg-amber-500/10 text-amber-500"
                                                )}
                                            >
                                                {trx.status}
                                            </span>
                                        </td>
                                        <td className="p-6 align-middle text-muted-foreground">
                                            {trx.date}
                                        </td>
                                        <td className="p-6 align-middle text-right font-medium">
                                            {trx.amount}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
