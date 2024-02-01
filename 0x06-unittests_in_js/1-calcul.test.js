const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('Test calculateNumber with type SUM', () => {
  it('should return 4 when adding 1 and 3', () => {
    assert.equal(calculateNumber('SUM', 1, 3), 4);
  });
  it('should return 5 when adding 1 and 3.8', () => {
    assert.equal(calculateNumber('SUM', 1, 3.8), 5);
  });
  it('should return 5 when adding 1.4 and 3.8', () => {
    assert.equal(calculateNumber('SUM', 1.4, 3.8), 5);
  });
  it('should return 6 when adding 1.5 and 3.8', () => {
    assert.equal(calculateNumber('SUM', 1.5, 3.8), 6);
  });
  it('should return 0 when adding 0.2 and 0.4', () => {
    assert.equal(calculateNumber('SUM', 0.2, 0.4), 0);
  });
  it('should return 0 when adding -0.7 and 0.7', () => {
    assert.equal(calculateNumber('SUM', -0.7, 0.7), 0);
  });
  it('should return -2 when adding -0.8 and -0.7', () => {
    assert.equal(calculateNumber('SUM', -0.8, -0.7), -2);
  });
});

describe('Test calculateNumber with type SUBTRACT', () => {
  it('should return -2 when subtracting 1 and 3', () => {
    assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
  });
  it('should return -4 when subtracting 1.3 and 4.5', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.3, 4.5), -4);
  });
  it('should return -3 when subtracting 1.3 and 3.8', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.3, 3.8), -3);
  });
  it('should return -2 when subtracting 1.5 and 3.8', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.5, 3.8), -2);
  });
  it('should return 0 when subtracting 0.2 and 0.4', () => {
    assert.equal(calculateNumber('SUBTRACT', 0.2, 0.4), 0);
  });
  it('should return -2 when subtracting -0.7 and 0.7', () => {
    assert.equal(calculateNumber('SUBTRACT', -0.7, 0.7), -2);
  });
  it('should return 0 when subtracting -0.8 and -0.7', () => {
    assert.equal(calculateNumber('SUBTRACT', -0.8, -0.7), 0);
  });
  it('should return 1 when subtracting 0.8 and -0.3', () => {
    assert.equal(calculateNumber('SUBTRACT', 0.8, -0.3), 1);
  });
});

describe('Test calculateNumber with type DIVIDE', () => {
  it('should return 0.25 when dividing 1 and 4', () => {
    assert.equal(calculateNumber('DIVIDE', 1, 4), 0.25);
  });
  it('should return 0.25 when dividing 1 and 3.8', () => {
    assert.equal(calculateNumber('DIVIDE', 1, 3.8), 0.25);
  });
  it('should return 0.2 when dividing 1.2 and 4.5', () => {
    assert.equal(calculateNumber('DIVIDE', 1.2, 4.5), 0.2);
  });
  it('should return 1 when dividing 1.7 and 2.3', () => {
    assert.equal(calculateNumber('DIVIDE', 1.7, 2.3), 1);
  });
  it('should return 2 when dividing 4.3 and 1.5', () => {
    assert.equal(calculateNumber('DIVIDE', 4.3, 1.5), 2);
  });
  it("should return 'Error' when dividing 1.2 and 0.2", () => {
    assert.equal(calculateNumber('DIVIDE', 1.2, 0.2), 'Error');
  });
  it('should return -1 when dividing -0.7 and 0.7', () => {
    assert.equal(calculateNumber('DIVIDE', -0.7, 0.7), -1);
  });
  it('should return 1 when dividing -0.8 and -0.7', () => {
    assert.equal(calculateNumber('DIVIDE', -0.8, -0.7), 1);
  });
  it('should return -22 when dividing -44.5 and 2.3', () => {
    assert.equal(calculateNumber('DIVIDE', -44.5, 2.3), -22);
  });
  it('should return 22 when dividing -88.5 and -3.7', () => {
    assert.equal(calculateNumber('DIVIDE', -88.5, -3.7), 22);
  });
});
