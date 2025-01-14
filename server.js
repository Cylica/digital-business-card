const express = require('express');
const app = express();
const port = process.env.PORT || 8080;  // Use Railway's dynamic port

// Middleware to parse JSON
app.use(express.json());

// Root route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to the Digital Business Card API!');
});

// API endpoint
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
