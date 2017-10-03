/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.items = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.items.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
   this.items.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.items[this.items.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let min=this.items[0];
    for(let i=1;i<this.items.length;i++){
        min = this.items[i]<min? this.items[i]:min;
    }
    return min;
};

/**Your MinStack object will be instantiated and called as such:
 * /
 * /
 *
 /**/

var obj = new MinStack();
obj.push(-1);obj.push(20);obj.push(3);
console.log(obj.pop());
var param_3 = obj.top(); console.log(param_3);
var param_4 = obj.getMin();  console.log(param_4);
