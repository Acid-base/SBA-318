const { v4: uuidv4 }  = require('uuid');  // For generating unique IDs 
const color = require('color'); 
 // This file is responsible for generating and returning color palettes.

// Function to generate a palette (implementation from previous response)
function generatePalette(title)  {
  // ... 
} 
exports.getAllPalettes = (req, res) => { 
  const palettes = [
      generatePalette('Earthy Tones'),
    generatePalette('Ocean Blues '), 
    // ... generate more palettes
  ];

  res.json(palettes); 
};
