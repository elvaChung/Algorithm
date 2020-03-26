// Truncate a String
function truncateString1(str, num) {
    if(str.length > num )
        return str.slice(0, num) + "...";

    return str;
}
console.log(truncateString1("A-tisket a-tasket A green and yellow basket", 8));

function truncateString2(str, num){
    return (str.length > num) ? str.slice(0, num) + "..." : str;
}
console.log(truncateString2("A-tisket a-tasket A green and yellow basket", 3));

truncateString3 = (str, num) => {
    return str.length > num ? str.slice(0, num) + "..." : str;
}
console.log(truncateString3("A-tisket a-tasket A green and yellow basket", 5));

