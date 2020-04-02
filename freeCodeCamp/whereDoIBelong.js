// Where do I belong
function getIndexToIns1(arr, num){
    arr.sort(function(a,b){return a-b}); // sort(callbackfunction)
    for(let i = 0; i < arr.length; i++){
        if(arr[i]>=num) return i;
    }
    return arr.length;
}
console.log(getIndexToIns1([20, 3, 5], 19));

getIndextToIns2 = (arr, num) => {
    arr.push(num);
    arr.sort((a,b) => { return a-b });
    return arr.indexOf(num);
}
console.log(getIndextToIns2([10, 20, 30, 50], 50));

getIndexToIns3 = (arr, num) => {
    return arr
        .concat(num)
        .sort((a,b) => a-b)
        .indexOf(num);
}
console.log(getIndexToIns3([10, 20, 30, 40, 50], 35));
