// Slice and Splice
// Splice()
// array.splice(index, howmany, item1, ...., itemX)
// index: what position add/remove, howmany: the number of itenms to be removed,
// item: the new items to be added to the array
function frankenSplice1(arr1, arr2, n){

    let newArray = arr2.slice();
    for(let i = 0; i < arr1.length; i++){                 
        newArray.splice(n, 0, arr1[i]);
        n++;        
    }
    return newArray;
}

console.log(frankenSplice1([1,2,3],[4,5,6], 1));

function frankenSplice2(arr1, arr2, n){
    let localArray = arr2.slice();
    localArray.splice(n, 0, ...arr1);
    return localArray;
}

console.log(frankenSplice2(["claw", "tentacle"],["head", "shoulder", "knees", "toes"], 2));