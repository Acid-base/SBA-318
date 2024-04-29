// File: /tests/serverTests.js

const request = require('supertest');
const app = require('../server.js');

describe('Server Initialization and Routing Tests', () => {
    it('should start the server and access the root route', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                assert.strictEqual(res.text, 'Expected response', 'Response should match expected text');
                done();
            });
    });
});
