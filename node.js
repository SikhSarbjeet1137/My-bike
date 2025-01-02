const express = require('^4.21.2');
const mongoose = require('^8.8.4');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/paymentDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB')).catch(err => console.error(err));

// MongoDB Schema
const PaymentSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    paymentType: String,
    cardDetails: {
        cardNumber: String,
        cardName: String,
        cvv: String
    }
});

const Payment = mongoose.model('Payment', PaymentSchema);

// API Route
app.post('/payment', async (req, res) => {
    try {
        const paymentData = new Payment(req.body);
        const savedData = await paymentData.save();
        res.status(200).json({ success: true, data: savedData });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Enable CORS for all routes
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// Example route
app.get('/example', (req, res) => {
    res.json({ message: 'CORS is working!' });
});

// Start server
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
