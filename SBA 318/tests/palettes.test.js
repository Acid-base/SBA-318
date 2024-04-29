const chai = require('chai'); 
const expect = chai.expect;
const palettesController = require('../controllers/palettesController');

describe('Palette Generation', () => { 
  it('should generate a palette with the correct structure', () => {
    const palette = palettesController. generatePalette('Test Palette');
    expect(palette).to.have.property('id').that.is.a('string');
    expect(palette).to.have.property('title', 'Test Palette'); 
    expect(palette).to.have.property('colors').that.is .an('object');
    expect(palette.colors).to.have.property('hex').that.is.an('array').with.lengthOf(5);
    expect(palette.colors).to.have.property('hsl').that.is.an('array').with.lengthOf (5); 
  }); 
});

// Example integration test using a library like supertest (not shown here) 
// to make HTTP requests to the API endpoints and verify the response format.
