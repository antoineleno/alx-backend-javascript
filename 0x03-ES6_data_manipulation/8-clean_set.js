/**
 * Returns a string of all set values that start with a specific string
 * @param {Set} set - The input set
 * @param {String} startString - The string to check for
 * @returns {String} - A string of values from the set that start with startString, separated by '-'
 */
const cleanSet = (set, startString) => {
    const result = [];
    
    set.forEach(value => {
      if (typeof value === 'string' && value.startsWith(startString)) {
        result.push(value.slice(startString.length)); // Append the rest of the string
      }
    });
    
    return result.join('-'); // Join the results with '-'
  };
  
  export default cleanSet;
  