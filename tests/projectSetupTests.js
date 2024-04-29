// File: /tests/projectSetupTests.js

const assert = require('assert');
const fs = require('fs');

describe('Project Setup Tests', () => {
    it('should have the required directories and files', () => {
        const directories = [
            './src',
            './src/api',
            './src/config',
            './src/controllers',
            './src/models',
            './src/views',
            './src/middleware',
            './public',
            './tests'
        ];

        directories.forEach((dir) => {
            assert.ok(fs.existsSync(dir), `Directory ${dir} should exist`);
        });

        const files = [
            './.env',
            './.gitignore',
            './package.json',
            './server.js'
        ];

        files.forEach((file) => {
            assert.ok(fs.existsSync(file), `File ${file} should exist`);
        });
    });

    it('should have Node.js modules installed', () => {
        assert.ok(fs.existsSync('./node_modules'), 'node_modules directory should exist');
    });
});

describe('Dependency Installation Tests', () => {
    const { dependencies } = require('../package.json');

    it('should have Express installed', () => {
        assert.ok(dependencies['express'], 'Express should be listed in package.json');
    });

    it('should have EJS installed', () => {
        assert.ok(dependencies['ejs'], 'EJS should be listed in package.json');
    });

    it('should have Mocha and Chai installed for testing', () => {
        assert.ok(dependencies['mocha'], 'Mocha should be listed in package.json');
        assert.ok(dependencies['chai'], 'Chai should be listed in package.json');
    });

    it('should have the color package installed', () => {
        assert.ok(dependencies['color'], 'Color package should be listed in package.json');
    });
});
