/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    const  left = moves.split('L').length;
    const  right = moves.split('R').length;
    if(left===right){
        const up = moves.split('U').length;
        const down = moves.split('D').length;
        if(up===down){
            return true;
        }
    }
    return false;

};

console.log(judgeCircle('UD'))