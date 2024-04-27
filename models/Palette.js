const Palette = require('./models/Palette'); // Assuming you have a  Palette model

async function getPaletteByUUID(uuid) {
    try  {
        const palette = await Palette.findOne({ uuid });

        if (!palette) {
            throw new Error('Palette not found');
         }

        return palette;
    } catch (error) { 
        // Handle errors gracefully
        console.error(error);
        throw  error; // Re-throw to be handled by error middleware
    }
}

async function getColorFromPalette(uuid, colorIndex) {
    const palette = await getPaletteByUUID(uuid);

    if (color Index < 0 || colorIndex >= palette.palette.length) {
        throw new Error('Invalid color index');
    }

    return palette.palette[colorIndex];
}
