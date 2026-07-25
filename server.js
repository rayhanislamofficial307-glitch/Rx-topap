const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '.')));

let orders = [];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/order', (req, res) => {
    const { playerId, package, trxId } = req.body;
    const newOrder = { playerId, package, trxId, status: 'Pending' };
    orders.push(newOrder);
    res.json({ message: 'আপনার অর্ডারটি সফলভাবে জমা হয়েছে! এডমিন রিভিউ করছেন।' });
});

app.get('/api/orders', (req, res) => {
    res.json(orders);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
