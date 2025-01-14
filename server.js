const express = require('express');
const path = require('path');
const QRCode = require('qrcode');

const app = express();
const port = process.env.PORT || 8080;  // Use Railway's dynamic port

// Middleware to parse JSON
app.use(express.json());

// Serve the frontend HTML page at the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// API endpoint to generate a QR code
app.get('/api/qr', (req, res) => {
  const data = {
    name: "Your Name",
    jobTitle: "Your Job Title",
    email: "youremail@example.com",
    phone: "+123456789",
    website: "https://yourwebsite.com"
  };

  const businessCardInfo = JSON.stringify(data); // This could be a URL, or JSON of the card info

  QRCode.toDataURL(businessCardInfo, (err, qrCodeUrl) => {
    if (err) {
      return res.status(500).send("Error generating QR code");
    }
    res.json({ qrCodeUrl });
  });
});

// API endpoint for business card info (GET request)
app.get('/api/card', (req, res) => {
    res.json({
        name: "Your Name",
        jobTitle: "Your Job Title",
        email: "youremail@example.com",
        phone: "+123456789",
        website: "https://yourwebsite.com"
    });
});

// Start the server and listen on all available network interfaces
app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${port}`);
});
