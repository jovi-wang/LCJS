// Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.
//
// Example 1:
// Input: "abab"
//
// Output: True
//
// Explanation: It's the substring "ab" twice.
// Example 2:
// Input: "aba"
//
// Output: False
// Example 3:
// Input: "abcabcabcabc"
//
// Output: True
//
// Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)


/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    const len = s.length;
    for(let i=1;i<=len;i++){
        let sub = s.substr(0,i);
        if (len%i===0){
           let rep = len/i;
           if (sub.repeat(rep) === s && rep!==1){
               return true;
           }
        }
    }
    return false;

};
let a ='aba';
console.log(repeatedSubstringPattern(a));