const color = require('color');

function generatePalette(title) { 
  const palette = {
    id: uuidv4(), // Using the 'uuid' library for unique IDs
     title,
    colors: {
      hex: [], 
      hsl: []
    } 
  };

  // Generate 5 random colors with similar hues (example logic) 
  for (let i = 0; i < 5; i++) {
    const hue  = Math.random() * 30 + 20;
    const saturation = Math.random() * 0.2 + 0.2;
    const lightness = Math.random() * 0.3 + 0.3; 

    const hslColor = [hue , saturation, lightness;
    const hexColor = color.hsl(hslColor).hex(); 

    palette.colors.hex.push(hexColor);
    palette.colors.hsl.push(hslColor);
  }

  return palette;
}
