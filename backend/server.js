// Import the Express library
const express = require('express');

// Create our Express application
const app = express();

// Set the port number
const port = process.env.PORT || 3000;

// Middleware to parse JSON data from requests
app.use(express.json());

// Enable CORS for frontend-backend communication
const cors = require('cors');
app.use(cors());

// Create our test API endpoint
app.get('/api/test', (req, res) => {
  res.json({ message: 'Hello from the Beans & Brews backend server!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is brewing on port ${port}`);
});