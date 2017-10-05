/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  if(s1.length>s2.length) return false;
  const count=new Map();
  for(let i=0;i<s1.length;i++){
      let char = s1[i];
      if(count.get(char)){
          count.set(char,count.get(char)+1);
      }
      else count.set(char,1);
  }
  let cnt=s1.length;
  let left=0, right=0;
  
  console.log(count);

};

console.log(checkInclusion('asssssd','sdsdfasdfasdf'))
