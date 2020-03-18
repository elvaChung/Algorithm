// Factorialize a number
function factorialize1(num){
    if(num == 0 || num == 1) return 1;
    return num * factorialize1(num-1);    
}

console.log(factorialize1(3));


function factorialize2(num){
    if( num == 0 || num == 1)
        return 1;

    for( let i = num -1; i >= 1; i-- ){
        num *= i ;
    }
    return num;
}

console.log(factorialize2(5));
