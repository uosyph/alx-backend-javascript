const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('Test calculateNumber with type SUM', () => {
  it('Should return 4 when adding 1 and 3', () => {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
  });
  it('Should return 5 when adding 1 and 3.8', () => {
    expect(calculateNumber('SUM', 1, 3.8)).to.equal(5);
  });
  it('Should return 5 when adding 1.4 and 3.8', () => {
    expect(calculateNumber('SUM', 1.4, 3.8)).to.equal(5);
  });
  it('Should return 6 when adding 1.5 and 3.8', () => {
    expect(calculateNumber('SUM', 1.5, 3.8)).to.equal(6);
  });
  it('Should return 0 when adding 0.1 and 0.3', () => {
    expect(calculateNumber('SUM', 0.1, 0.3)).to.equal(0);
  });
  it('Should return 0 when adding -0.7 and 0.7', () => {
    expect(calculateNumber('SUM', -0.7, 0.7)).to.equal(0);
  });
  it('Should return -2 when adding -0.8 and -0.7', () => {
    expect(calculateNumber('SUM', -0.8, -0.7)).to.equal(-2);
  });
});

describe('Test calculateNumber with type SUBTRACT', () => {
  it('Should return -2 when subtracting 1 and 3', () => {
    expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
  });
  it('Should return -4 when subtracting 1.3 and 4.5', () => {
    expect(calculateNumber('SUBTRACT', 1.3, 4.5)).to.equal(-4);
  });
  it('Should return -3 when subtracting 1.1 and 3.8', () => {
    expect(calculateNumber('SUBTRACT', 1.1, 3.8)).to.equal(-3);
  });
  it('Should return -2 when subtracting 1.5 and 3.8', () => {
    expect(calculateNumber('SUBTRACT', 1.5, 3.8)).to.equal(-2);
  });
  it('Should return 0 when subtracting 0.2 and 0.3', () => {
    expect(calculateNumber('SUBTRACT', 0.2, 0.3)).to.equal(0);
  });
  it('Should return -2 when subtracting -0.7 and 0.7', () => {
    expect(calculateNumber('SUBTRACT', -0.7, 0.7)).to.equal(-2);
  });
  it('Should return 0 when subtracting -0.8 and -0.7', () => {
    expect(calculateNumber('SUBTRACT', -0.8, -0.7)).to.equal(0);
  });
  it('Should return 1 when subtracting 0.8 and -0.3', () => {
    expect(calculateNumber('SUBTRACT', 0.8, -0.3)).to.equal(1);
  });
});

describe('Test calculateNumber with type DIVIDE', () => {
  it('Should return 0.25 when dividing 1 and 4', () => {
    expect(calculateNumber('DIVIDE', 1, 4)).to.equal(0.25);
  });
  it('Should return 0.25 when dividing 1 and 3.8', () => {
    expect(calculateNumber('DIVIDE', 1, 3.8)).to.equal(0.25);
  });
  it('Should return 0.2 when dividing 1.3 and 4.5', () => {
    expect(calculateNumber('DIVIDE', 1.3, 4.5)).to.equal(0.2);
  });
  it('Should return 1 when dividing 1.7 and 2.4', () => {
    expect(calculateNumber('DIVIDE', 1.7, 2.4)).to.equal(1);
  });
  it('Should return 2 when dividing 4.3 and 1.5', () => {
    expect(calculateNumber('DIVIDE', 4.3, 1.5)).to.equal(2);
  });
  it("Should return 'Error' when dividing 1.2 and 0.2", () => {
    expect(calculateNumber('DIVIDE', 1.2, 0.2)).to.equal('Error');
  });
  it('Should return -1 when dividing -0.7 and 0.7', () => {
    expect(calculateNumber('DIVIDE', -0.7, 0.7)).to.equal(-1);
  });
  it('Should return 1 when dividing -0.8 and -0.7', () => {
    expect(calculateNumber('DIVIDE', -0.8, -0.7)).to.equal(1);
  });
  it('Should return -22 when dividing -44.5 and 2.3', () => {
    expect(calculateNumber('DIVIDE', -44.5, 2.3)).to.equal(-22);
  });
  it('Should return 22 when dividing -88.5 and -3.7', () => {
    expect(calculateNumber('DIVIDE', -88.5, -3.7)).to.equal(22);
  });
});
