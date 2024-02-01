const { expect } = require('chai');
const sinon = require('sinon');

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('Test sendPaymentRequestToApi function', () => {
  const consoleSpy = sinon.spy(console, 'log');

  it('Validate the usage of Utils function', () => {
    const calcNumStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(calcNumStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(calcNumStub.alwaysReturned(10)).to.be.true;
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;

    calcNumStub.restore();
    consoleSpy.restore();
  });
});
