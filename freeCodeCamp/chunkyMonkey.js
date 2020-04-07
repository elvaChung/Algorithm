// Chunky Monkey
function chunkArrayInGroups1(arr, size){
    let arr2 = [];

    for(let i = 0; i < arr.length; i += size){
        arr2.push(arr.slice(i, i+size));
    } return arr2;
}
console.log(chunkArrayInGroups1(["a", "b", "c", "d"], 2));

// recursion
function chunkArrayInGroups2(arr, size){
    if (arr.length <= size) {
        return [arr];
      } else {
        return [arr.slice(0, size)].concat(
          chunkArrayInGroups2(arr.slice(size), size)
        );
      }
    }
console.log(chunkArrayInGroups2(["a", "b", "c", "d", "1", "2", "3"], 2));
