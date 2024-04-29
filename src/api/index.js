// File: /src/api/index.js

const express = require('express');
const router = express.Router();

// Example API endpoint
router.get('/data', (req, res) => {
    res.json({ message: 'API is working' });
});

module.exports = router;
