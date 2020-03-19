// Find the logest word in a string
function findLongestWordLength1(str){
    let words = str.split(' ');
    let maxLength = 0;

    for(let i = 0; words.length > i; i++){
        if(words[i].length > maxLength)
            maxLength = words[i].length;
    } return maxLength;
}

console.log(findLongestWordLength1("The quick brown fox jumped over the lazy dog"));

function findLongestWordLength2(str){
    return Math.max(...str.split(" ").map(word => word.length));
}

console.log(findLongestWordLength2("Cracking the coding interview"));
