// Given a string, find the length of the longest substring without repeating characters.
//
//     Examples:
//
// Given "abcabcbb", the answer is "abc", which the length is 3.
//
// Given "bbbbb", the answer is "b", with the length of 1.
//
// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
   if(s.length<2){
       return s.length;
   }
   let max=0;
   for(let start=0;start<s.length;start++){
       for(let l=2;l+start<=s.length;l++) {
           const temp = s.substr(start,l);
           let beforeLast = temp.substr(0,temp.length-1);
           let last = temp.substr(-1);
           if(beforeLast.indexOf(last)>-1) {
               if (max < l - 1) {
                   max = l - 1;
               }
               break;
           }else {
               if (max < temp.length) {
                   max = temp.length;
               }
           }
           //

       }
   }
   return max;

};
console.log(lengthOfLongestSubstring("aab"));
console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log('abc'.substr(0,3));