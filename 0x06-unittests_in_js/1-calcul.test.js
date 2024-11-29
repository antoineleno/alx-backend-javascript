const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when inputs are 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 0 when inputs are -1.4 and 1.4', () => {
      assert.strictEqual(calculateNumber('SUM', -1.4, 1.4), 0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when inputs are 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 2 when inputs are 5.5 and 3.1', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 3.1), 2);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when inputs are 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when dividing by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should return "Error" when b rounds to 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.2), 'Error');
    });
  });

  describe('Invalid type', () => {
    it('should throw an error for unsupported types', () => {
      assert.throws(() => calculateNumber('MULTIPLY', 1.4, 4.5), /Invalid type/);
    });
  });
});
