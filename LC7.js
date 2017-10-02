// Reverse digits of an integer.
//
//     Example1: x = 123, return 321
// Example2: x = -123, return -321
//
// click to show spoilers.
//
//     Have you thought about this?
//     Here are some good questions to ask before coding. Bonus points for you if you have already thought through this!
//
//     If the integer's last digit is 0, what should the output be? ie, cases such as 10, 100.
//
// Did you notice that the reversed integer might overflow? Assume the input is a 32-bit integer, then the reverse of 1000000003 overflows. How should you handle such cases?
//
//     For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
//
//     Note:
// The input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows.

var reverse = function(x) {
    const MAX = Math.pow(2,31)-1;
    const temp = Math.abs(x).toString();
    const reverse = temp.split('').reverse().join('');
    if (parseInt(reverse)>MAX){
        return 0;
    }else {
        const result = x>=0 ? parseInt(reverse) : parseInt(reverse)*(-1);
        return result;
    }
};
console.log(reverse(-100000000));

