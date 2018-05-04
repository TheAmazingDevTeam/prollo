export const mapObjectToArray = object =>
  object !== null
    ? Object.keys(object).map(key => ({
        id: key,
        ...object[key]
      }))
    : [];
