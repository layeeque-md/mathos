function isPerfectSquare(a){

    for(let i = 1; i <= (a+1)/2; i++){
        a=a-(2*i-1); 
        if(a === 0){
            return true;
        }
    }   
    return false;
}
module.exports = isPerfectSquare;

