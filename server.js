// index.js
const express = require('express');
const connectDB = require('./config/db');
const postRoutes = require('./routes/postRoutes');
const dotenv = require('dotenv');

//Initialize dotenv to load environment variables from .env file
dotenv.config();

// Initialize Express application
const app = express();

// Connect to MongoDB
connectDB();

// Global Middleware
app.use(express.json());

// API Routes
app.use('/', postRoutes);

// Start Express Server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});