// File: /tests/dataModelTests.js

const assert = require('chai').assert;
const Color = require('../src/models/colorModel');

describe('Data Model Tests', () => {
    it('should validate and manipulate colors correctly', () => {
        const colorInstance = new Color('#FF5733');
        assert.equal(colorInstance.validate(), true, 'Color should be valid');
        assert.equal(colorInstance.manipulate('darken'), '#e04d2e', 'Color should darken correctly');
    });
});
