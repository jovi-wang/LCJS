
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    backtrackHelper(result, '', 0, 0, n);
    return result;

};

const backtrackHelper = (result, str, open, close, max)=>{
        console.log(str)
        if(str.length === max*2){
            result.push(str);
            return;
        }

        if(open < max)
            backtrackHelper(result, str+"(", open+1, close, max);
        if(close < open)
            backtrackHelper(result, str+")", open, close+1, max);
};
console.log(generateParenthesis(3))