// Repeat a string 
function repeatStringNumTimes1(str, num){
    let accumulatedStr = "";
    
        for(let i = 0; num > i; i++){
            accumulatedStr += str; 
        }
        return accumulatedStr;
    
}

console.log(repeatStringNumTimes1("*$$", 4));

function repeatStringNumTimes2(str, num){
    return num > 0 ? str.repeat(num) : "";    
}

console.log(repeatStringNumTimes2("abc", 2));