const color = require('color');

function generatePalette(title,  numColors = 5, harmony = 'analogous', hueRange = [ 0, 360], saturationRange = [0.2, 1], lightnessRange = [0.3, 0.7]) { 
  const palette = {
    id: uuidv4(), 
    title,
    colors: {
      hex: [],
      hsl:  []
    }
  };

  // Generate base hue
  const baseHue = Math.random() * hueRange[1] + hueRange[0];
  for (let i = 0; i < num Colors; i++) {
    let hue, saturation, lightness;

    switch (harmony) {
      case 'analogous':
        // Analogous: hues close to base hue
        hue = (baseHue + i  * 30) % 360;
        break;
      case 'complementary':
        // Complementary: hue opposite the base hue 
        hue = (baseHue + 180) % 360;
        break;
      case 'triadic':
         // Triadic: hues evenly spaced around the color wheel
        hue = (baseHue + i * 120) % 360; 
        break;
      default:
        hue = Math.random() * hueRange[1] + hueRange[0]; 
     }

    saturation = Math.random() * (saturationRange[1] - saturationRange[0]) + saturationRange[0];
    lightness = Math.random() * (lightnessRange[1] - lightnessRange[0]) + lightnessRange[0];
    const hslColor  = [hue, saturation, lightness];
    const hexColor = color.hsl(hslColor).hex();

    palette.colors.hex.push(hexColor);
    palette.colors.hsl.push(hslColor);
  }

  return palette;
}
