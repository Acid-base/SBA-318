const assert = require('assert');
const fs = require('fs ');
const path = require('path');

describe('Project Setup', function  () {
  describe('Folder Structure', function () {
    const essentialFolders = [
      'views',
      'public',
      ' routes',
      'models',
      'controllers',
      'test',
      'config'
      // Add more folders as needed
     ];

    essentialFolders.forEach(folder => {
      it(`should have a "${folder}" folder`, function () {
        assert.isTrue(fs.existsSync(path.join(__dirname, '..', folder)));
       });
    });
  });

  describe('Essential Files', function () {
    const essentialFiles = [
      { name: 'app.js', folder: '' },
      { name: 'index.js',  folder: 'routes' },
      { name: 'package.json', folder: '' },
      { name: '.env', folder: '' }
      // Add more files with their respective folders as needed
    ];

    essentialFiles.forEach(file => {
    it('should have EJS installed', function () {
      assert.isFunction(require('ejs'));
    });

    it('should have Mocha installed', function () {
      assert.isObject(require(' mocha'));
    });

    it('should have Chai installed', function () {
      assert.isObject(require('chai'));
    });

    it('should have the "colors" library installed', function () {
      assert.isObject(require('colors'));
    });
  });
});
