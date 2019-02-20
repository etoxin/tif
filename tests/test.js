const  assert = require('assert');
const tif = require('../index');

describe('Basic', function() {
  describe('tif', function() {
    it('should return correct string 1', function() {
      assert.equal(`This is a ${tif(true, 'test')}`, 'This is a test');
    });

    it('Should return correct string 2', function() {
        assert.equal(`Hello World${tif(false, 'This should not be rendered')}`,'Hello World')
    });
  });
});
