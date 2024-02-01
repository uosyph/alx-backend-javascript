const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('Round the first argument', () => {
    assert.equal(calculateNumber(1.0, 0), 1);
    assert.equal(calculateNumber(1.4, 0), 1);
    assert.equal(calculateNumber(1.8, 0), 2);
  });

  it('Round the second argument', () => {
    assert.equal(calculateNumber(0, 1.0), 1);
    assert.equal(calculateNumber(0, 1.4), 1);
    assert.equal(calculateNumber(0, 1.8), 2);
  });

  it('Return the expected number', () => {
    assert.equal(calculateNumber(1.2, 0), 1);
    assert.equal(calculateNumber(0, 1.4), 1);
    assert.equal(calculateNumber(1.3, 1.3), 2);
    assert.equal(calculateNumber(1.8, 1.3), 3);
    assert.equal(calculateNumber(1.2, 1.7), 3);
    assert.equal(calculateNumber(1.8, 1.7), 4);
  });
});
