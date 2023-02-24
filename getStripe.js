import { loadStripe } from '@stripe/stripe-js';

let stripePromise = null;
const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe(
            'pk_live_51MQ3YASHdhwdgbtq4BXsBXVSaWhbxeAaBXpBMiNb25cHupKNl5YE68sOWvUX7Pu6F8ec1wsnLRbagPrStkiQiYzk00vbpRkpoe'
        );
    }
    return stripePromise;
};

export default getStripe;
