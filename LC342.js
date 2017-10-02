/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    const result = Math.log(num)/Math.log(4);
    return result % 1 === 0;
};
console.log(Math.log(10))