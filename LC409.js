/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const hash={};
    for(let i=0;i<s.length;i++){
        hash[s.charAt(i)] =  hash[s.charAt(i)]>0? hash[s.charAt(i)]+1 : 1;
    }
     console.log(hash);
    let count=0;
    let padding=false;
    for (let prop in hash) {
        // console.log(`obj.${prop} = ${hash[prop]}`);
        if(hash[prop]%2===0){
            count += hash[prop];
        }else if(hash[prop]>2){
            count += hash[prop]-1;
            padding=true;
        }else if(hash[prop]===1){
            padding=true
        }
    }
    return padding? count+1: count;
};

console.log(longestPalindrome('aabba'));