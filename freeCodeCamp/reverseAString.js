// Reverse a String
function reverseString1(str){
    return str.split("").reverse().join("");
}

console.log(reverseString1("hello"));

function reverseString2(str){
    let newString = "";

    for( let i = str.length - 1; i > -1; i--){
        newString += str[i];
    }
    return newString;
}
console.log(reverseString2("I love you"));


const reverseString3 = (str) => { return str.split("").reverse().join("")};
console.log(reverseString3("good morning"));
