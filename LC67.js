/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if (a.length !== b.length) {
        const diff = a.length - b.length;
        if (diff > 0) {
            b = '0'.repeat(diff) + b;
        } else {
            a = '0'.repeat(-diff) + a;
        }
    }
    let result = '';
    let curry = 0;
    let char = '';
    for (let i = a.length - 1; i >= 0; i--) {
        let sum = parseInt(a.charAt(i)) + parseInt(b.charAt(i)) + curry;
        if (sum >= 2) {
            curry = 1;
            char = sum % 2;
        } else {
            curry = 0;
            char = sum;
        }
        result = char + result;
    }
    if(curry===1){
        result = curry + result;
    }
    return result;
};
console.log(addBinary('11','11'))