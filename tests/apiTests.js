// File: /tests/apiTests.js

const request = require('supertest');
const app = require('../server');

describe('API Endpoint Tests', () => {
    it('should return data from the /api/data endpoint', (done) => {
        request(app)
            .get('/api/data')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                assert.strictEqual(res.body.message, 'API is working', 'API message should be correct');
                done();
            });
    });
});
