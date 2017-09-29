/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left=0;
    let right = s.length-1;
    while(left<right){
        //console.log(s.charAt(left),s.charAt(right));
        if(s.charAt(left)!==s.charAt(right)){
            const subLeft = s.substring(left+1,right+1);
            const subRight = s.substring(left,right);
            return isPalindrome(subLeft) || isPalindrome(subRight);
        }
        left++;
        right--;
    }
    return true;
};
const isPalindrome = (s)=>{
    for(let left=0,right = s.length-1;left<right;left++,right--){
        if(s.charAt(left)!==s.charAt(right)){
            return false;
        }
    }
    return true;
};

const s ="cupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupucu";
console.log(validPalindrome(s));