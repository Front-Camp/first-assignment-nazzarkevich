/**
 * @param {Array<Object>} arr - this is an array of objects
 * @return {Array} result of the sum value.
 * @example
 * const arr = [{flags: [1, 2, 3]}, {flags: [4, 5, 6]}];
 * getFlags(arr); // [1, 2, 3, 4, 5, 6]
 */
const getFlags = arr => {
  const flagItems = [];
  arr.map(el => {
    if (el.hasOwnProperty('flags')) {
      el.flags.map(item => flagItems.push(item));
    }
  });
  return flagItems;
};

export default getFlags;
