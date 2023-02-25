import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_SECRET_KEY);
export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const session = await stripe.checkout.sessions.create({
                mode: 'payment',
                shipping_address_collection: { allowed_countries: ['IN'] },
                shipping_options: [
                    {
                        shipping_rate_data: {
                            type: 'fixed_amount',
                            fixed_amount: { amount: 0, currency: 'inr' },
                            display_name: 'Free shipping',
                            delivery_estimate: {
                                minimum: { unit: 'business_day', value: 5 },
                                maximum: { unit: 'business_day', value: 7 },
                            },
                        },
                    },
                ],
                payment_method_types: ['card'],
                line_items: req.body?.items,
                success_url: `${req.headers.origin}`,
                cancel_url: `${req.headers.origin}`,
            });
            res.status(200).json(session);
        } catch (err) {
            res.status(500).json({
                statusCode: 500,
                message: err.messages,
            });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method not allowed');
    }
}
