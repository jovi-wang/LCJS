/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack =[];
    for(let i=0;i<s.length;i++){
        if(s.charAt(i)==='(') stack.push(')');
        else if(s.charAt(i)==='{') stack.push('}');
        else if(s.charAt(i)==='[') stack.push(']');
        else if(stack.length===0 || s.charAt(i)!==stack.pop())
            return false;
    }
    return stack.length===0;
};