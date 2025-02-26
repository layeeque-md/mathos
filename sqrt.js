const isPerfectSquare = require('./isPerfectSquare.js');
const log = require('./log.js');
// Implement the sqrt function that returns the square root of a number using the Taylor series expansion.
function sqrt(a){
    for(let i = 1; i*i <= a; i++){
        a=a-(2*i-1); 
        if(a === 0){
            return i;
        }
    }

 let b = log(a)/2;
    let temp = 1;
    let result = 0;
    for(let i = 1; i < 20; i++){
        temp= temp*b/i;
        //console.log(temp);
        result = result + temp;
    }
    return result +1;
}

module.exports = sqrt;