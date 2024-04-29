const express = require('express');
const router = express.Router(); 
const palettesController = require('../controllers/pal ettesController');

router.get('/', palettesController.getAllPalettes);
// ... (add other routes as needed)

module.exports = router;
