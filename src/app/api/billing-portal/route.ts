import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: Request) {
    try {
        const { customer_id } = await req.json();

        if (!customer_id) {
            return NextResponse.json({ error: 'Falta customer_id' }, { status: 400 });
        }

        // Crear sesión del portal de facturación
        const session = await stripe.billingPortal.sessions.create({
            customer: customer_id,
            return_url: `${req.headers.get('origin') || 'https://facomercai.com'}/app.html`, // Regresar al dashboard
        });

        return NextResponse.json({ url: session.url });
    } catch (error: any) {
        console.error('Stripe Error:', error);
        return NextResponse.json(
            { error: error.message || 'Error interno del servidor' },
            { status: 500 }
        );
    }
}
