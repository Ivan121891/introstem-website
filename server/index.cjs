const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const Stripe = require('stripe');

// Load .env file manually
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  envContent.split('\n').forEach(line => {
    const [key, ...vals] = line.split('=');
    if (key && vals.length) process.env[key.trim()] = vals.join('=').trim();
  });
}

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || '';
if (!STRIPE_SECRET_KEY) {
  console.warn('⚠️  STRIPE_SECRET_KEY not set. Run: STRIPE_SECRET_KEY=sk_test_... npm run dev:server');
}

const stripe = Stripe(STRIPE_SECRET_KEY);
const app = express();
const PORT = process.env.SERVER_PORT || 3001;

app.use(cors({ origin: true }));
app.use(express.json());

app.post('/api/create-payment-intent', async (req, res) => {
  try {
    const { items } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ error: 'Cart is empty' });
    }

    const amount = items.reduce((sum, item) => sum + Math.round(item.price * 100) * item.qty, 0);

    if (amount < 50) {
      return res.status(400).json({ error: 'Minimum amount is $0.50' });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card', 'affirm', 'klarna', 'afterpay_clearpay'],
      metadata: {
        items: JSON.stringify(items.map(i => ({ id: i.id, name: i.name, qty: i.qty }))),
      },
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error('Stripe error:', err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`⚡ Stripe server running on http://localhost:${PORT}`);
});