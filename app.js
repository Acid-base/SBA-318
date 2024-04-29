
{
    "id": "5d80725 5- 9933-4091-a efc- ad1 5806e7212",
    "title": "Earthy Tones",
    "colors": {
      "hex ": [" #A87959", "#6D5446", "#4B3832", "#8A 6E 5 E", "#D2B49D",
      "hsl": [
        [32.17, 0.34, 0.46],
        [32.17,  0 .21, 0.32],
        [ 32.17, 0.14, 0.22],
        [32.17, 0.27 ,  0.54],
        [32.17, 0.47, 0.71
       ]
    }
  },
  // 👇 Previous code removed, replaced with imports

// Import necessary modules
const express = require('express');
const palette Routes = require('./routes/palettes'); // Assuming you have routes in a 'routes' folder
const errorLogger = require('./errorLogger');
const errorHandler = require('./errorHandler');

const app = express();
const port = 3000;

// Apply middleware (error logging  before error handling)
app.use(errorLogger);
app.use(errorHandler);

// Use imported routes for handling API requests
app.use('/api/palettes', paletteRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${ port}`);
});

