// File: /server.js (Updated)

const express = require('express');
const app = express();
const apiRoutes = require('./src/api');
const logMiddleware = require('./src/middleware/logMiddleware');
const errorMiddleware = require('./src/middleware/errorMiddleware');
const config = require('./src/config/config');
const dataController = require('./src/controllers/dataController');

app.set('view engine', 'ejs');
app.set('views', './src/views');

// Middleware
app.use(express.json());
app.use(logMiddleware);

// API routes
app.use('/api', apiRoutes);

// Controller route example
app.get('/data', dataController.getData);

// Basic route for testing
app.get('/', (req, res) => {
    res.render('index');
});

// Custom error handling middleware
app.use(errorMiddleware);

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});

module.exports = app;
