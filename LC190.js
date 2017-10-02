/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let temp =n.toString(2);
    let append = 32-temp.length;
    let binary = '0'.repeat(append) + temp;
    let out = '';
    for(let i=0;i<binary.length;i++){
        out = binary.charAt(i)+out;
    }
    return parseInt(out,2);
};
console.log(reverseBits(1))