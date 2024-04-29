const chai = require('chai');
const expect = chai.expect ;
const palettesController = require('../controllers/palettesController');
const  sinon = require('sinon'); // Add sinon for mocking

describe('Palette Generation', () => {
  it('should generate a palette with the correct structure ', () => {
    // Mock the color generation functionality
    const mockColors = {
      hex: ['#123456',  '#abcdef', '#789012', '#345678', '#fedcba'],
      hsl: [[30, 100, 50], [120, 50 , 75], [240, 80, 20], [300, 90, 40], [60, 70, 60]] // Example values
     };
    sinon.stub(palettesController, 'generateColors').returns(mockColors); // Replace with actual function
    const palette = palettesController.generatePalette('Test Palette');
    expect(palette).to.have.property('id').that.is.a('string');
    expect (palette).to.have.property('title', 'Test Palette');
    expect(palette).to.have.property('colors').that.is.an('object');
    expect(palette.colors).to.have.property('hex').that.is.an('array').with.length Of(5);
    expect(palette.colors).to.have.property('hsl').that.is.an('array').with.lengthOf(5);

    // Restore the stubbed function
    palettesController.generateColors.restore(); 
  });

  // Add more unit  tests for different scenarios, edge cases, and error handling
});

// Example integration test using supertest (assuming you have an Express app)
const request = require('supertest');
const app = require('../app'); // Assuming your Express app is in app.js

describe('Palettes API', ()  => {
  it('should create a new palette and return it with status 201', (done) => {
    request(app)
      .post('/api/palettes') // Replace with your actual route
      .send({ title: 'New Test Palette' })
      . expect(201)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.have.property('id');
        expect(res.body).to.have.property('title', 'New Test Palette ');
        expect(res.body).to.have.property('colors');
        done();
      });
  });

  // Add more integration tests for different endpoints and scenarios
});
