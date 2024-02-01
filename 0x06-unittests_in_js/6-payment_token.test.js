const { expect } = require('chai');

const getPaymentTokenFromApi = require('./6-payment_token');

describe('Test getPaymentTokenFromApi function', () => {
  it('Check the output of getPaymentTokenFromApi with success as true', (done) => {
    getPaymentTokenFromApi(true)
      .then((res) => {
        expect(res).to.include({ data: 'Successful response from the API' });
        done();
      })
      .catch((err) => done(err));
  });
});
