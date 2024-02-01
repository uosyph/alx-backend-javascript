const { expect } = require('chai');
const sinon = require('sinon');

const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    // Runs before each test in this block
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Runs after each test in this block
    expect(consoleSpy.calledOnce).to.be.true;
    consoleSpy.restore();
  });

  it('Validate if sendPaymentRequestToApi returns the expected result', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
  });

  it('Validate if sendPaymentRequestToApi returns the expected result', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
  });
});
