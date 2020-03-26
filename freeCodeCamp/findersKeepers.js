// Finders keepers
function findElement1(arr, func){
    let num = 0;
    for(let i = 0; i < arr.length; i++){
        num = arr[i];
        if(func(num)) return num;
    }
    return undefined;  
}

console.log(findElement1([1,3,6,7], num => num % 2 === 0));

function findElement2(arr, func) {
    return arr.find(func);
  }

console.log(findElement2([1,3,5,7], function(num) {return num % 2 === 0}));