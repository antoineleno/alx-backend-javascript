// 6-payment_token.test.js

const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with correct data when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch((err) => done(err));
  });

  it('should not do anything when success is false', (done) => {
    const result = getPaymentTokenFromAPI(false);
    expect(result).to.be.undefined;
    done();
  });
});