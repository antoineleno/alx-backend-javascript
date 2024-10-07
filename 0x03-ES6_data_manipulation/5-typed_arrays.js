/**
 * Creates a new Int8Array and sets a value at a specific position
 * @param {Number} length - The length of the ArrayBuffer
 * @param {Number} position - The position to set the value
 * @param {Number} value - The Int8 value to set
 * @returns {DataView} - A DataView of the created ArrayBuffer
 * @throws {Error} - Throws an error if the position is out of range
 */
const createInt8TypedArray = (length, position, value) => {
    if (position < 0 || position >= length) {
      throw new Error('Position outside range');
    }
  
    const buffer = new ArrayBuffer(length);
    const int8Array = new Int8Array(buffer);
    int8Array[position] = value;
    return new DataView(buffer);
  };
  
  export default createInt8TypedArray;
  