
//  ... (generatePalette function and other previous code)

// Function to get all  palettes
exports.getAllPalettes = async (req, res) => {
  try {
    const palettes = await Palette.find();
    res.json(palettes);
  } catch (err) {
     console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Function to get a specific palette by ID
exports.getPaletteById = async (req, res) => {
  try {
    const paletteId = req.params.id;
    const palette = await Palette .findById(paletteId);

    if (!palette) {
      return res.status(404).json({ message: 'Palette not found' });
    }

    res.json(palette);
  }  catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Function to create a new palette
exports.createPalette = [
  // Input validation
  body('title'). notEmpty().withMessage('Title is required'),
  body('colors').isArray({ min: 1 }).withMessage('Colors must be an array with at least one color'),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())  {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { title, colors } = req.body;
      const newPalette = new Palette({ title, colors });
      await newPalette.save();

       res.status(201).json(newPalette);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
];

// Function to update a palette
exports.updatePalette = async (req, res) => {
  try {
    const paletteId = req.params.id;
    const { title, colors } = req.body;

    const palette = await Palette.findByIdAndUpdate(paletteId, { title, colors }, { new : true });

    if (!palette) {
      return res.status(404).json({ message: 'Palette not found' });
    }

    res.json(palette);
  } catch (err) {
    console.error(err);
    res.status( 500).json({ message: 'Internal server error' });
  }
};

// Function to delete a palette
exports.deletePalette = async (req, res) => {
  try {
    const paletteId = req.params.id;
   
    const result = await Palette .findByIdAndDelete(paletteId);

    if (!result) {
      return res.status(404).json({ message: 'Palette not found' });
    }

    res.json({ message: 'Palette deleted' });
  } catch (err) {
    console .error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
