/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length!==t.length) return false;
    const hash={};
    for(let i=0;i<s.length;i++){
        let key = s.charAt(i);
        let value = t.charAt(i);
        if(key in hash){
            if(hash[key]!==value) return false;
        }else if(Object.values(hash).indexOf(value)>=0){
            if(!hash.hasOwnProperty(key)) return false;
        }else {
            hash[key] = value;
        }
    }
    return true;
};