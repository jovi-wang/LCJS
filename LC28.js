// Implement strStr().
//
//     Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(haystack.length>needle.length) {
        for (let i = 0; i < haystack.length; i++) {
            if (haystack.substr(i).startsWith(needle)) {
                return i;
            }
        }
    }else if(haystack.length===needle.length){
        return  haystack===needle? 0:-1;
    }
    return -1;
};
console.log(strStr('1','1'));