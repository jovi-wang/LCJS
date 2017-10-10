/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let sum=1;
    let i=1;
    while(sum<=n){
        i++;
        sum+=i;
    }
    return i-1;

};

// (x * ( x + 1)) / 2 <= n`
var arrangeCoins2 = function(n) {
   let left=0,right=n;
   let ans;
   while(left<=right){
       let mid=Math.floor((left+right)*0.5);
       let temp=mid*(mid+1)*0.5;
       if(temp<=n){
           left= mid+1;
           ans=mid;
       }else {
           right=mid-1;
       }
   }
   return ans;
};

console.log(arrangeCoins2(16));
console.log(arrangeCoins(16));
