export const mapObjectToArray = object =>
  Object.keys(object).map(key => ({
    id: key,
    ...object[key]
  }));
