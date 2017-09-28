/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
      const count = {};
      for(let i=0;i<ransomNote.length;i++){
          let char = ransomNote.charAt(i);
          if(magazine.indexOf(char)<0){
              return false;
          }
          count[char] = count[char]>0? count[char]+1:1;
      }
      const mag = {};
      for(let i=0;i<magazine.length;i++){
          let char =magazine.charAt(i);
          mag[char] = mag[char]>0? mag[char]+1:1;
      }

        for (let prop in count) {
            if (mag[prop] < count[prop]) {
                return false;
            }
        }
        return true;
};
