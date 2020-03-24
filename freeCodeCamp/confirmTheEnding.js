// Confirm the ending
function confirmEnding1(str, target){

    return (str.substr(-target.length) === target) ;
}

console.log(confirmEnding1("Bastian", "n"));

function confirmEnding2(str, target){
    return str.endsWith(target);
}

console.log(confirmEnding2("Bastian", "a"));

function confirmEnding3(str, target){
    return str.slice(str.length - target.length) === target;    
}

console.log(confirmEnding3("Bastian", "p"));
