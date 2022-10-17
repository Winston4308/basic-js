const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let lst = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        i++;
        break;
      case '--discard-prev':
          lst.pop();
          break;
      case '--double-next':
        lst.push(arr[i+1]);
        break;
      case '--double-prev':
        lst.push(arr[i-1]);
        break;
      case undefined:
        break;
      default:
        lst.push(arr[i]);
        break;
    }
  }
  return lst;
}

module.exports = {
  transform
};
