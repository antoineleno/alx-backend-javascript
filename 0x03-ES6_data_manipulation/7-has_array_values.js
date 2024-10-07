/**
 * Checks if all elements in the array exist within the set
 * @param {Set} set - The input set
 * @param {Array} array - The input array
 * @returns {boolean} - True if all elements exist in the set, false otherwise
 */
const hasValuesFromArray = (set, array) => {
    return array.every(value => set.has(value));
  };
  
  export default hasValuesFromArray;
  