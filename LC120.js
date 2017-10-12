/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  let min=0;
  for(let i=0;i<triangle.length;i++){
      min+= Math.min(...triangle[i]);
      console.log(Math.min(...triangle[i]));
  }
  console.log(min)
  return min;
};

a =[
    [-1],
    [3,2],
    [1,-1,-3]
];
minimumTotal(a)