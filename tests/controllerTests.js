// File: /tests/controllerTests.js

const assert = require('chai').assert;
const sinon = require('sinon');
const dataController = require('../src/controllers/dataController');

describe('Controller Tests', () => {
    it('getData should return correct data structure', () => {
        let req = {};
        let res = {
            json: sinon.spy()
        };

        dataController.getData(req, res);
        let responseArg = res.json.getCall(0).args[0];
        assert.property(responseArg, 'message');
        assert.property(responseArg, 'data');
        assert.equal(responseArg.message, 'Data fetched successfully');
        assert.deepEqual(responseArg.data, { value: 42 });
    });
});
