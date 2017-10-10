/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    const array=num.toString().split('');
    array.sort((a,b)=>{return b-a});
    // console.log(array);

    if(parseInt(array.join(''))===num) return num;
    const nums=num.toString().split('');
    for(let i=0;i<nums.length ;i++){
        if(nums[i]!==array[i]){
            let j = nums.lastIndexOf(array[i]);
            if(j>i){
                //swap i j
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
            break;
        }
    }
    // console.log(nums)
    return parseInt(nums.join(''));
};

console.log(maximumSwap(98368))
// console.log('9'>'2')