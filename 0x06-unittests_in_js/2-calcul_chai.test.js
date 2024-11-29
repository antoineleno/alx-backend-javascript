const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when inputs are 1.4 and 4.5', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return 0 when inputs are -1.4 and 1.4', () => {
      expect(calculateNumber('SUM', -1.4, 1.4)).to.equal(0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when inputs are 1.4 and 4.5', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return 2 when inputs are 5.5 and 3.1', () => {
      expect(calculateNumber('SUBTRACT', 5.5, 3.1)).to.equal(2);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when inputs are 1.4 and 4.5', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when dividing by 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return "Error" when b rounds to 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0.2)).to.equal('Error');
    });
  });

  describe('Invalid type', () => {
    it('should throw an error for unsupported types', () => {
      expect(() => calculateNumber('MULTIPLY', 1.4, 4.5)).to.throw('Invalid type');
    });
  });
});
