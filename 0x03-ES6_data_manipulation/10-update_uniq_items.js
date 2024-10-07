/**
 * Updates the quantities of items in a map
 * If the quantity is 1, it updates it to 100
 * @param {Map} map - The map of grocery items and their quantities
 * @returns {Map} - The updated map
 * @throws {Error} - Throws an error if the argument is not a map
 */
const updateUniqueItems = (map) => {
    if (!(map instanceof Map)) {
      throw new Error('Cannot process');
    }
  
    map.forEach((value, key) => {
      if (value === 1) {
        map.set(key, 100);
      }
    });
  
    return map;
  };
  
  export default updateUniqueItems;
  