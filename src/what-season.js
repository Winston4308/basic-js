const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  arr = date.toString().split(' ');
  switch (arr[1]) {
    case 'Dec' || 'Jan' || 'Feb':
      return 'winter';
    case 'Mar' || 'Apr' || 'May':
        return 'spring';
    case 'June' || 'July' || 'Aug':
      return 'summer';
    case 'Sept' || 'Oct' || 'Nov':
      return 'autumn';
    default:
      break;
  }
}

module.exports = {
  getSeason
};
