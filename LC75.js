/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    /*
  const color1=[], color2=[],color3=[];
  for(let i=0;i<nums.length;i++){
      switch (nums[i]) {
          case 0:
              color1.push(nums[i]);
              break;
          case 1:
              color2.push(nums[i]);
              break;
          case 2:
              color3.push(nums[i]);
              break;
      }
  }
  let i=0;
    for(let j=0;j<color1.length;j++,i++){
       nums[i]=color1[j];
    }
    for(let j=0;j<color2.length;j++,i++){
       nums[i]=color2[j];
    }
    for(let j=0;j<color3.length;j++,i++){
       nums[i]=color3[j];
    }

    */



};

const swap = (str, i, j) => {
    let temp = str[i];
    str[i] = str[j];
    str[j] = temp;
}



let m=[1,2,0];
sortColors(m)
console.log(m)