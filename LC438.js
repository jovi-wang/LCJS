/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
//time limit exceeded
var findAnagrams = function(s, p) {
    const sortedP=p.split('').sort().join('');
    const hash={};
    const out=[];
    for(let i=0;i<s.length-p.length+1;i++){
        let str = s.substr(i,p.length);
        console.log(str);
        if(hash[str]){
             out.push(i);
        }
        else if(isAnagrams(str,sortedP)){
           out.push(i);
           hash[str]=true;
        }
    }
    return out;
};
const isAnagrams = (str,sortedP)=>{
   return str.split('').sort().join('')===sortedP;
};

// console.log(findAnagrams('ababababa','ab'))


var findAnagrams2 = function(s, p) {
    const out=[];
    if(s.length<p.length) return out;
    const hash={};
    for(let i=0;i<p.length;i++){
        let char = p.charAt(i);
        hash[char] = hash[char]>0? hash[char]+1 : 1;
    }
    let left=0, right=0, count=p.length;
    while(right<s.length){
        let char=s.charAt(right);
        if(hash[char]>0){
            hash[char]--;
            count--;
        }
        right++;
        while(count===0) {
            if(right-left===p.length) out.push(left);
            while(count<p.length){
                let char=s.charAt(left);
                if(char in hash){
                    hash[char]++;
                    count++
                }
                left++;
            }
        }
    }
    return out;
};
console.log(findAnagrams2('cbaebabacd','abc'))