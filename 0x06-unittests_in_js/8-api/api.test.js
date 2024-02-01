const { expect } = require("chai");
const request = require('request');


describe('Integration testing for the API', () => {
  describe('GET /', () => {
    it('Return "Welcome to the payment system" with status code 200', (done) => {
      const options = {
        url: 'http://localhost:7865',
        method: 'GET',
      };

      request(options, function (err, res, body) {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });
});
