/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const out=[];
    if(s.length>12 || s.length<4) return out;
    let len=s.length;
    for(let i = 1; i<4 && i<len-2; i++){
        for(let j = i+1; j<i+4 && j<len-1; j++){
            for(let k = j+1; k<j+4 && k<len; k++){
                let s1 = s.substring(0,i), s2 = s.substring(i,j), s3 = s.substring(j,k), s4 = s.substring(k,len);
                if(isValid(s1) && isValid(s2) && isValid(s3) && isValid(s4)){
                    out.push(s1+"."+s2+"."+s3+"."+s4);
                }
            }
        }
    }
    return out;
};
const isValid=(s)=>{
    return !(s.length > 3 || s.length === 0 || (s.charAt(0) === '0' && s.length > 1) || parseInt(s) > 255);

};

console.log(restoreIpAddresses('25525511135'))