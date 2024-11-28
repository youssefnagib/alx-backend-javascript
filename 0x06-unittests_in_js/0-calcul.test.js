const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 when inputs are 1 and 3', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 4 when inputs is floating are 1.0 and 3.0', () => {
    assert.strictEqual(calculateNumber(1.0, 3.0), 4);
  });
  it('should return 4 when inputs is floating are 1.4 and 3.4', () => {
    assert.strictEqual(calculateNumber(1.4, 3.4), 4);
  });

  it('should return 5 when inputs are 1 and 3.7', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 when inputs are 1.2 and 3.7', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 when inputs are 1.5 and 3.7', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should handle zero correctly', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should handle floating point correctly', () => {
    assert.strictEqual(calculateNumber(0.49999, 0.5), 1);
  });

  it('should handle floating point correctly if input 1.4999999 +1.499999 return 2', () => {
    assert.strictEqual(calculateNumber(1.499999, 1.49999), 2);
  });
});
