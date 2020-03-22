// Return Largest Numbers in Arrays
function largestOfFour1(arr){
    let results = [];

    for(let n = 0; arr.length > n; n++){
        let largestNum = arr[n][0];
        for( let sub = 1; arr[n].length > sub; sub++){
            if( arr[n][sub] > largestNum ){
                largestNum = arr[n][sub];
            }
        }
        results[n] = largestNum; 
    }
    return results;
}

console.log(largestOfFour1(
    [[4,5,1,3],[13,27,39,1],[36,28,50,48],[100,307,890,2]]));

function largestOfFour2(arr){
    return arr.map(Function.apply.bind(Math.max, null));
}

console.log(largestOfFour2(
    [[4,5,1,8],[13,90,39,1],[36,28,50,48],[100,307,1000,2]]));

function largestOfFour3(arr){
    let result = [];
    let largest = 0;

    arr.forEach( t => {
        largest = t[0];
        for(let i = 1; t.length > i; i++){
            if(t[i] > largest){
                largest = t[i];
            }
        }
        result.push(largest);
    });
    return result;
}

console.log(largestOfFour3(
    [[4,5,1,8],[13,90,39,1],[36,28,50,48],[100,307,1000,2]]));