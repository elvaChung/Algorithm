// Return true or false 
function mutation1(arr){
    let test = arr[1].toLowerCase();
    let target = arr[0].toLowerCase();

    for( let i = 0; i < test.length; i++){
        if(target.indexOf(test[i]) < 0) return false;        
    } 
    return true;
}
console.log(mutation1(["Hello", "hi"]));

function mutation2(arr) {
    return arr[1]
        .toLowerCase()
        .split("")
        .every(letter => { return arr[0].toLowerCase().indexOf(letter) != -1});
}

console.log(mutation2(["Hello", "heo"]));
