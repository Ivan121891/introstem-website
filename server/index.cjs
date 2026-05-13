const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.SERVER_PORT || 3001;
const ORDERS_FILE = path.join(__dirname, 'orders.json');

app.use(cors({ origin: true }));
app.use(express.json());

// Load existing orders
function loadOrders() {
  try {
    if (fs.existsSync(ORDERS_FILE)) {
      return JSON.parse(fs.readFileSync(ORDERS_FILE, 'utf-8'));
    }
  } catch (e) { /* ignore */ }
  return [];
}

function saveOrders(orders) {
  fs.writeFileSync(ORDERS_FILE, JSON.stringify(orders, null, 2));
}

app.post('/api/place-order', (req, res) => {
  try {
    const { items, customer } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ error: 'Cart is empty' });
    }
    if (!customer || !customer.name || !customer.email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

    const order = {
      id: 'ORD-' + Date.now(),
      items,
      customer,
      total,
      status: 'pending',
      paymentMethod: 'card',
      createdAt: new Date().toISOString(),
    };

    const orders = loadOrders();
    orders.push(order);
    saveOrders(orders);

    console.log(`\n=== NEW ORDER (${order.id}) ===`);
    console.log(`Customer: ${customer.name} (${customer.email})`);
    console.log(`Phone: ${customer.phone || 'N/A'}`);
    console.log(`Notes: ${customer.notes || 'N/A'}`);
    console.log('Items:');
    items.forEach(i => console.log(`  - ${i.name} x${i.qty} = $${(i.price * i.qty).toFixed(2)}`));
    console.log(`Total: $${total.toFixed(2)}`);
    console.log(`===========================\n`);

    res.json({ success: true, orderId: order.id });
  } catch (err) {
    console.error('Order error:', err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/orders', (req, res) => {
  res.json(loadOrders());
});

app.listen(PORT, () => {
  console.log(`Order server running on http://localhost:${PORT}`);
});
