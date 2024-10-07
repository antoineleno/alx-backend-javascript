// Create an instance of WeakMap
export const weakMap = new WeakMap();

/**
 * Tracks API calls to a given endpoint.
 * @param {Object} endpoint - The endpoint object containing protocol and name.
 * @throws {Error} - Throws an error if the number of queries for the endpoint is >= 5.
 */
export const queryAPI = (endpoint) => {
  let count = weakMap.get(endpoint) || 0;
  count += 1;

  weakMap.set(endpoint, count);

  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
};
