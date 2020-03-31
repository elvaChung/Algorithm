// Title Case A Sentence
function titleCase1(str){
    let convertToArray = str.toLowerCase().split(" ");
    let result = convertToArray.map(val => 
        { return val.replace(val.charAt(0), val.charAt(0).toUpperCase())});
    return result.join(" ");
}

console.log(titleCase1("I'm a little tea pot")); 

// \S: find all non-whitespace characters
// ^: At the beginning of string
// \s: or after any whitespace character
// The g modifier searches for other such word pattern in the 
// whole string and replaces them.
function titleCase2(str){
   return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}
console.log(titleCase2("hi, my name is ppp"));