import Stripe from 'stripe';
const stripe = new Stripe(process.env.NEXT_PUBLIC_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const purchaseId = req?.query?.purchaseId;

            if (!purchaseId?.startsWith('cs_')) {
                throw Error('Incorrect Session Id');
            }

            const checkoutSession = await stripe.checkout.sessions.retrieve(
                purchaseId,
                {
                    expand: ['payment_intent', 'line_items.data.price.product'],
                }
            );

            return res.status(200).json(checkoutSession);
        } catch (err) {
            return res.status(500).json({
                statusCode: 500,
                message: 'invalid session Id',
            });
        }
    }
}
