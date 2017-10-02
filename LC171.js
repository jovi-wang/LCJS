

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    const array=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let sum=0;
    for(let i=1; i<=s.length;i++){
        let char = array.indexOf(s.charAt(s.length-i).toUpperCase())+1;
        sum+= 26**(i-1) * char;
    }
    return sum;
};
console.log(titleToNumber('Z'))
console.log(titleToNumber('GR'));
console.log(titleToNumber('ZZZ'))
console.log(26*26)