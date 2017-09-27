/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    const v=x^y;
    const str = v.toString(2);
    return str.split('1').length-1;


};
hammingDistance(1,4);