{
    "id": "5d80725 5-9933-4091-a efc- ad15806e7212",
    "title": "Earthy Tones",
    "colors": {
      "hex ": ["#A87959", "#6D5446", "#4B3832", "#8A 6E 5E", "#D2B49D",
      "hsl": [
        [32.17, 0.34, 0.46],
        [32.17,  0.21, 0.32],
        [ 32.17, 0.14, 0.22], 
        [32.17, 0.27 , 0.54],
        [32.17, 0.47, 0.71] 
       ]
    }
  },
  // 👇 New code added here
const express = require('express');
const app = express();
const  port  = 3000; // You can choose your desired port
  
// Endpoint to generate color palettes
app.get('/api/palette', (req, res) => {
  // Logic to generate color palettes will go  here
  // You can use the color data above in your logic
}); 

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
const express = require('express');
const app = express(); 
const  port = 3000;

// ... (Other middleware, error handling, etc.) 

// Import and use routes 
const paletteRoutes  = require('./routes/palettes');
app.use('/api/palettes', paletteRoutes); 

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});