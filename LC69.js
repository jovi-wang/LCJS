/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left=0, right=x;
    while(left<=right){
        let mid = (left+right)/2;
        let temp = x/mid;
        
        if(temp<mid){
            right=mid;
        }else if(temp>mid){
            left=mid;
        }
        if(Math.abs(left-right)<=Math.pow(10, -10)) return left
    }
   
};

var mySqrtInt = function(x) {
   if(x===0 || x===1) return x;
   let left=1,right=x;
   let ans;
   while(left<=right){
       console.log(left,right)
       let mid = Math.floor((left+right)/2);
       let temp = Math.floor(x/mid);
       if(temp===mid){
           return mid;
       }else if(temp<mid){
           right=mid-1;
       }else {
           left=mid+1;
           ans=mid;
       }
       
   }
   console.log(left-1)
   return ans;
};



console.log(mySqrtInt(60))