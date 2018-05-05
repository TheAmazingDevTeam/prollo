/**
 * Convert an object to an array with an id
 * @param {object} object - The object which should be converted
 * @returns {Array} - New array
 */
export const mapObjectToArray = object =>
  object !== null
    ? Object.keys(object).map(key => ({
        id: key,
        ...object[key]
      }))
    : [];
