/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  if(s1.length>s2.length) return false;
  const s1map=new Array(26);
  s1map.fill(0);
  for(let i=0;i<s1.length;i++){
      let index=s1.charCodeAt(i)-'a'.charCodeAt(0);
      s1map[index]++;
  }
  for(let i=0;i<=s2.length-s1.length;i++){
      const s2map=new Array(26);
      s2map.fill(0);
      for(let j=0;j<s1.length;j++){
          let index=s2.charCodeAt(i+j)-'a'.charCodeAt(0);
          s2map[index]++;
      }
      console.log(s2map)
      if(match(s1map,s2map)) return true;
  }
  
  return false;

};

const match=(s1map,s2map)=>{
    for(let i=0;i<s1map.length;i++){
        if (s1map[i] !== s2map[i]) return false;
    }
    return true;
};

console.log(checkInclusion('ac','sdica'))
