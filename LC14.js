// Write a function to find the longest common prefix string amongst an array of strings.
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length===0){
        return '';
    }else if(strs.length===1){
        return strs[0];
    }else {
        const array = strs.sort(function(a,b){return a.length-b.length});
        const benchmark = array[0];
        let i=1;
        while(i<=benchmark.length){
            let temp=benchmark.substr(0, i);
            if(array.every(item=>item.substr(0,i)===temp)){
                i++;
            }else {
                break;
            }
        }
        return benchmark.substr(0, i-1);
    }
};

// strs=["ca","c"];
strs=['2','22']
console.log(longestCommonPrefix(strs));