const express = require('express');
const app = express();
const port = process.env.PORT || 3000;  // Use Railway's dynamic port

// Middleware to parse JSON
app.use(express.json());

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

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
