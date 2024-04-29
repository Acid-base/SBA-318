// File: /tests/middlewareTests.js

const request = require('supertest');
const app = require('../server.js');

describe('Middleware Functionality Tests', () => {
    it('should trigger custom error handling middleware', (done) => {
        request(app)
            .get('/nonexistent-route')
            .expect(404)
            .end((err, res) => {
                if (err) return done(err);
                assert.ok(res.text.includes('Error handled'), 'Error handling middleware should be triggered');
                done();
            });
    });
});
