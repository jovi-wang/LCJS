/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const out=[];
    for(let i=0;i<nums1.length;i++){
        let index = nums2.indexOf(nums1[i]);
        if(index>-1){
            out.push(nums1[i]);
            nums2.splice(index,1);
            if(nums2.length===0) break;
        }
    }
    return out;
};
intersect([2,1],[1,1])