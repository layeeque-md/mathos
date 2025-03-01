function gcd(a, b) {
    if((a%1!==0)||(b%1!==0)||(a<0)||(b<0)){
        throw new Error("Input must be a positive integer");
    }
    while (b !== 0) {
        [a, b] = [b, a % b];
    } 
       return a;
}
module.exports = gcd;