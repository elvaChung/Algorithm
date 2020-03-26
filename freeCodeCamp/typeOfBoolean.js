// Check if a value is classified as a boolean
function booWho(bool){
    return typeof bool === "boolean";
}
console.log(booWho(null));
console.log(booWho("a"));
console.log(booWho([1,2,3]));
console.log(booWho(true));
console.log(booWho(false));
