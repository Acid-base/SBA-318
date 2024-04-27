const express = require('express');
const router = express.Router ();

// ... (Existing code from previous steps) ...

// Implement palette  generation routes here (as described previously)
router.get('/', (req, res) => {
    const baseColor = req.query.baseColor  || getRandomColor(); // Get base color from query or generate random
    const numColors = req.query.numColors || 5; // Get number  of colors or use default
    const colorScheme = req.query.colorScheme || 'analogous'; // Get scheme or use default

    const palette = generatePalette(baseColor, numColors, colorScheme);

    //  For demonstration, store palette in the array
    palettes.push(palette);

    res.json(palette);
});

// Implement route to save a palette
router.post('/', (req, res) => {
     const newPalette = req.body; // Get palette data from request body

    // Validate data (ensure it's a valid palette)
    // ... 

    // Store the palette (in the array for demonstration)
    palettes.push(newPalette);

    res.json({  message: 'Palette saved successfully!' });
});

//  New routes to get palette and specific color by UUID
app.get('/api/palette/:uuid', async (req, res) => {
    const uuid = req.params.uuid;
    try {
        const palette = await get PaletteByUUID(uuid);
        res.json(palette);
    } catch (error) {
        // Handle errors (e.g., using errorHandlerMiddleware)
    }
});

app.get('/api/palette/:uuid/:colorIndex', async (req, res) => { 
    const uuid = req.params.uuid;
    const colorIndex = parseInt(req.params.colorIndex);
    try {
        const color = await getColorFromPalette(uuid, colorIndex);
module.exports = router;

