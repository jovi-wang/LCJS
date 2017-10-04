/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const numSet1=new Set(nums1);
  const out=[];
  numSet1.forEach((item)=>{
      if(nums2.includes(item)) out.push(item)
  });
  return out;

};
let a=[1,2,3,4,3,2,1];
let b=[3,4]
let set = new Set(a);
set.forEach((item)=>{
    console.log(b.includes(item),item)
})
console.log(set)